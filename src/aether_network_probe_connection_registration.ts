import {
    ClientApiRegSafe,
    ClientApiRegSafeStream,
    ClientApiRegUnsafe,
    Cloud,
    CryptoLib,
    FinishResult,
    GlobalRegClientApi,
    GlobalRegClientApiStream,
    GlobalRegServerApiRemote,
    Key,
    PowMethod,
    RegistrationRootApi,
    RegistrationRootApiRemote,
    ServerDescriptor,
    ServerRegistrationApiRemote,
    WorkProofDTO,
} from './aether_api';
import { AKey, CryptoEngine, CryptoProviderFactory, SignedKey } from './aether_crypto';
import { CryptoUtils } from './aether_crypto_utils';
import { AFuture, ARFuture } from './aether_future';
import { URI, UUID } from './aether_types';
import { WorkProofUtil } from './aether_work_proof';
import {
    NetworkProbeConnectionBase,
    NetworkProbeConnectionOwner,
} from './aether_network_probe_connection_base';

export interface NetworkProbeRegistrationOwner extends NetworkProbeConnectionOwner {
    getCryptoLib(): CryptoLib;
    getParent(): UUID;
    getMasterKey(): AKey.Symmetric;
    verifySign(key: SignedKey): boolean;
    putServerDescriptor(descriptor: ServerDescriptor): void;
    confirmRegistration(result: FinishResult): void;
}

/**
 * Registration is intentionally isolated in its own module so the probe's
 * warm path never downloads bcrypt/work-proof code.
 */
export class NetworkProbeConnectionRegistration
extends NetworkProbeConnectionBase<ClientApiRegUnsafe, RegistrationRootApiRemote>
implements ClientApiRegUnsafe {
    private readonly owner: NetworkProbeRegistrationOwner;
    private readonly tempKey: AKey.Symmetric;
    private readonly tempKeyNative: Key;
    private readonly tempKeyCrypto: CryptoEngine;
    private readonly registrationFuture: AFuture = AFuture.make();
    private globalCrypto: CryptoEngine | null = null;
    private safeApi: ServerRegistrationApiRemote | null = null;
    private globalApi: GlobalRegServerApiRemote | null = null;
    private registrationStarted = false;

    constructor(owner: NetworkProbeRegistrationOwner, uri: URI) {
        super(owner, uri, ClientApiRegUnsafe.META, RegistrationRootApi.META);
        this.owner = owner;
        const provider = CryptoProviderFactory.getProvider(owner.getCryptoLib().toString());
        this.tempKey = provider.createSymmetricKey();
        this.tempKeyNative = CryptoUtils.aKeyToDtoKey(this.tempKey);
        this.tempKeyCrypto = this.tempKey.toCryptoEngine();
    }

    public registration(): AFuture {
        if (this.registrationStarted) return this.registrationFuture;
        this.registrationStarted = true;

        this.getAsymmetricPublicKey()
            .to((asymmetricCrypto: CryptoEngine) => this.beginRegistration(asymmetricCrypto))
            .onError((error: Error) => this.registrationFuture.tryError(error));
        return this.registrationFuture;
    }

    private getAsymmetricPublicKey(): ARFuture<CryptoEngine> {
        const root = this.getRootApi();
        if (!root) return ARFuture.ofThrow(new Error('Registration root API unavailable'));
        return root.getAsymmetricPublicKey(this.owner.getCryptoLib()).map(signedDto => {
            const signedKey = CryptoUtils.dtoSignedKeyToInternal(signedDto);
            if (!this.owner.verifySign(signedKey)) {
                throw new Error('Registration server key verification failed');
            }
            return signedKey.key.asAsymmetric().toCryptoEngine();
        });
    }

    private beginRegistration(asymmetricCrypto: CryptoEngine): void {
        const root = this.getRootApi();
        if (!root) {
            this.registrationFuture.tryError(new Error('Registration root API unavailable'));
            return;
        }

        this.safeApi = root.openEnter(
            this.owner.getCryptoLib(),
            () => ClientApiRegSafe.EMPTY,
            (data: Uint8Array) => asymmetricCrypto.encrypt(data),
            'networkProbeRegistrationSafe',
        );
        this.safeApi.setReturnKey(this.tempKeyNative);

        this.safeApi
            .requestWorkProofData(this.owner.getParent(), PowMethod.AE_BCRYPT_CRC32)
            .to((proof: WorkProofDTO) => {
                try {
                    const passwords = WorkProofUtil.generateProofOfWorkPool(
                        proof.getSalt(),
                        proof.getSuffix(),
                        proof.getMaxHashVal(),
                        proof.getPoolSize(),
                        5300,
                    );

                    const globalSignedKey = CryptoUtils.dtoSignedKeyToInternal(proof.getGlobalKey());
                    if (!this.owner.verifySign(globalSignedKey)) {
                        throw new Error('Global registration key verification failed');
                    }

                    this.globalCrypto = CryptoEngine.of(
                        CryptoUtils.dtoKeyToAKey(proof.getGlobalKey().key)
                            .asAsymmetric()
                            .toCryptoEngine(),
                        this.owner.getMasterKey().toCryptoEngine(),
                    );

                    this.globalApi = this.safeApi!.openRegistration(
                        proof.getSalt(),
                        proof.getSuffix(),
                        passwords,
                        this.owner.getParent(),
                        () => GlobalRegClientApi.EMPTY,
                        (data: Uint8Array) => this.globalCrypto!.encrypt(data),
                        'networkProbeRegistrationGlobal',
                    );

                    const lock = this.globalApi.getFastMetaContext().lock();
                    try {
                        this.globalApi.setMasterKey(
                            CryptoUtils.aKeyToDtoKey(this.owner.getMasterKey()),
                        );
                        this.globalApi.finish()
                            .to((finish: FinishResult) => {
                                this.resolveCloud(finish.getCloud())
                                    .to(() => {
                                        this.owner.confirmRegistration(finish);
                                        this.registrationFuture.tryDone();
                                    })
                                    .onError((error: Error) => this.registrationFuture.tryError(error));
                            })
                            .onError((error: Error) => this.registrationFuture.tryError(error));
                    } finally {
                        lock?.close();
                    }
                } catch (error) {
                    this.registrationFuture.tryError(
                        error instanceof Error ? error : new Error(String(error)),
                    );
                }
            }, 6, () => this.registrationFuture.tryError(new Error('Registration work-proof timeout')))
            .onError((error: Error) => this.registrationFuture.tryError(error));
    }

    private resolveCloud(cloud: Cloud): AFuture {
        const result = AFuture.make();
        if (!this.safeApi) return result.error(new Error('Registration safe API unavailable'));
        this.safeApi.resolveServers(cloud)
            .to((descriptors: ServerDescriptor[]) => {
                for (const descriptor of descriptors) {
                    this.owner.putServerDescriptor(descriptor);
                }
                result.tryDone();
            })
            .onError((error: Error) => result.tryError(error));
        return result;
    }

    public enterGlobal(stream: GlobalRegClientApiStream): void {
        if (!this.globalCrypto || !this.globalApi) {
            throw new Error('Global registration channel is not ready');
        }
        stream.asIn()
            .convert((data: Uint8Array) => this.globalCrypto!.decrypt(data))
            .ctx(this.globalApi.getFastMetaContext())
            .accept();
    }

    public enter(stream: ClientApiRegSafeStream): void {
        if (!this.safeApi) throw new Error('Registration safe channel is not ready');
        stream.asIn()
            .ctx(this.safeApi.getFastMetaContext())
            .convert((data: Uint8Array) => this.tempKeyCrypto.decrypt(data))
            .accept();
    }
}
