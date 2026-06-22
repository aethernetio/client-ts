
import { ConnectionBase} from './aether_client_connection_base';
import { AetherCloudClient } from './aether_client';
import { WorkProofUtil } from './aether_work_proof';
import { CryptoUtils } from './aether_crypto_utils';
import { AKey, CryptoEngine, CryptoProviderFactory } from './aether_crypto';
import { MetaContextBase, MetaContextLocal } from './aether_fastmeta';
import { URI } from './aether_types';
import { AFuture, ARFuture } from './aether_future';
import { Log } from './aether_logging';
import { ClientApiRegSafe, ClientApiRegSafeStream, ClientApiRegUnsafe, Cloud, FinishResult, GlobalApiStream, GlobalRegClientApi, GlobalRegClientApiStream, GlobalRegServerApi, GlobalRegServerApiRemote, Key, KeyAsymmetric, PowMethod, RegistrationRootApi, RegistrationRootApiRemote, ServerDescriptor, ServerRegistrationApiRemote, ServerRegistrationApiStream, SignedKey, WorkProofDTO } from './aether_api';

/**
 * @class ConnectionRegistration
 * @extends {ConnectionBase<ClientApiRegUnsafe, RegistrationRootApiRemote>}
 * @implements {ClientApiRegUnsafe}
 * @description Manages the initial connection and registration process with the Aether cloud.
 */
export class ConnectionRegistration extends ConnectionBase<ClientApiRegUnsafe, RegistrationRootApiRemote> implements ClientApiRegUnsafe {

    private readonly tempKey: AKey.Symmetric;
    private readonly tempKeyNative: Key;
    private readonly tempKeyCp: CryptoEngine;
    private gcp: CryptoEngine | null = null;
    safeApi: ServerRegistrationApiRemote | null = null;
    globalApi: GlobalRegServerApiRemote | null = null;
    readonly connectFuture: AFuture = AFuture.make();

    /**
     * @constructor
     * @param {AetherCloudClient} client The main client instance.
     * @param {URI} uri The registration server URI.
     */
    constructor(client: AetherCloudClient, uri: URI) {
        super(client, uri, ClientApiRegUnsafe.META, RegistrationRootApi.META);

        const cryptoLib = client.getCryptoLib();
        const provider = CryptoProviderFactory.getProvider(cryptoLib.toString());
        this.tempKey = provider.createSymmetricKey();
        this.tempKeyNative = CryptoUtils.aKeyToDtoKey(this.tempKey);
        this.tempKeyCp = this.tempKey.toCryptoEngine();
    }

    private getAsymmetricPublicKey(): ARFuture<CryptoEngine> {
        Log.debug("RegConn: TCP connection successful, requesting asymmetric key.", { uri: this.uri });
        return this.getRootApi()!.getAsymmetricPublicKey(this.client.getCryptoLib()).map(k => {
            const kk = CryptoUtils.dtoSignedKeyToInternal(k);
            if (!this.client.verifySign(kk)) {
                Log.error("RegConn: Key verification failed.", { signedKey: kk });
                throw new Error("Key verification exception");
            }
            return kk.key.asAsymmetric().toCryptoEngine();
        });
    }

    public registration(): AFuture {
        Log.debug("RegConn: Starting async registration process.", { uri: this.uri });
        this.getAsymmetricPublicKey().to((ce: CryptoEngine) => this.regProcess(ce));
        return this.connectFuture;
    }

    private regProcess(asymCE: CryptoEngine): void {
        this.safeApi = this.getRootApi()!.openEnter(this.client.getCryptoLib(), 
            () => ClientApiRegSafe.EMPTY, 
            (data: Uint8Array) => asymCE.encrypt(data), 
            "reg safe");
        Log.info("RegConn: Asym public key was received.");
        this.safeApi.setReturnKey(this.tempKeyNative);
        this.safeApi.requestWorkProofData(this.client.getParent(), PowMethod.AE_BCRYPT_CRC32)
            .to((wpd: WorkProofDTO) => {
                Log.info("RegConn: WorkProofData has been received. Starting PoW calculation.");
                const passwords = WorkProofUtil.generateProofOfWorkPool(
                    wpd.getSalt(),
                    wpd.getSuffix(),
                    wpd.getMaxHashVal(),
                    wpd.getPoolSize(),
                    5300
                );
                if (!this.client.verifySign(CryptoUtils.dtoSignedKeyToInternal(wpd.getGlobalKey()))) {
                    Log.error("RegConn: Global key verification failed.");
                    throw new Error("Global key verification failed");
                }
                this.gcp = CryptoEngine.of(
                    CryptoUtils.dtoKeyToAKey(wpd.getGlobalKey().key).asAsymmetric().toCryptoEngine(), 
                    this.client.getMasterKey().toCryptoEngine()
                );

                this.safeApi!.setReturnKey(this.tempKeyNative);
                this.globalApi = this.safeApi!.openRegistration(wpd.getSalt(), wpd.getSuffix(), passwords, this.client.getParent(),
                    () => GlobalRegClientApi.EMPTY,
                    (data: Uint8Array) => this.gcp!.encrypt(data),
                    "global");

                const lock = this.globalApi.getFastMetaContext().lock();
                try {
                    this.globalApi.setMasterKey(CryptoUtils.aKeyToDtoKey(this.client.getMasterKey()));
                    this.globalApi.finish()
                        .to((d: FinishResult) => {
                            Log.trace("RegConn: registration step finish.");
                            this.client.confirmRegistration(d);
                            Log.info("RegConn: Registration confirmed.");
                            this.resolveCloud(d.getCloud(), asymCE).to(() => {
                                Log.info("RegConn: resolve cloud.");
                            });
                        }).addListener((f: any) => {
                            if (!f.isDone()) {
                                Log.error("flush task canceled 1! " + f);
                            } else {
                                this.connectFuture.done();
                            }
                        });
                } finally {
                    if (lock) lock.close();
                }
            }, 6, () => Log.warn("RegConn: timeout requestWorkProofData"));
    }

    public resolveCloudPublic(cloud: Cloud): AFuture {
        const res = AFuture.make();
        this.getAsymmetricPublicKey().to((ce: CryptoEngine) => {
            this.resolveCloud(cloud, ce).to(res);
        }).onError((e: Error) => res.error(e));
        return res;
    }

    private resolveCloud(cloud: Cloud, asymCE: CryptoEngine): AFuture {
        if (!this.client.isRecoveryInProgress.value) {
            this.client.isRecoveryInProgress.value = true;
        }
        const result = this.client.recoveryFuture;
        Log.debug("Resolving cloud: " + cloud.data);

        this.safeApi!.resolveServers(cloud)
            .to((ss: ServerDescriptor[]) => {
                Log.debug("Received server descriptors: " + ss.map(s => s.id).join(','));
                for (const s of ss) {
                    this.client.putServerDescriptor(s);
                }
                result.tryDone();
                Log.info("RegConn: Server descriptors resolved.");
            })
            .onError((e: Error) => {
                Log.error("Failed to resolve servers", e);
                result.tryError(e);
            });
        return result;
    }

    public enterGlobal(stream: GlobalRegClientApiStream): void {
        stream.asIn()
            .convert((data: Uint8Array) => this.gcp!.decrypt(data))
            .ctx(this.globalApi!.getFastMetaContext())
            .accept();
    }

    public enter(stream: ClientApiRegSafeStream): void {
        stream.asIn()
            .ctx(this.safeApi!.getFastMetaContext())
            .convert((data: Uint8Array) => this.tempKeyCp.decrypt(data))
            .accept();
    }
}