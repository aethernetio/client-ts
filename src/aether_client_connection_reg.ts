import { ConnectionBase} from './aether_client_connection_base';
// FILE: aether_client_connection_reg.ts (ИСПРАВЛЕННАЯ ВЕРСИЯ)
// =============================================================================================

import {
    AetherCloudClient,
} from './aether_client';
import { WorkProofUtil } from './aether_work_proof';
import { CryptoUtils } from './aether_crypto_utils';
import { AKey, CryptoEngine, CryptoProviderFactory } from './aether_crypto';
import { FastApiContext, FastApiContextLocal, FlushReport } from './aether_fastmeta';
import { URI } from './aether_types';
import { AFuture, ARFuture } from './aether_future';
import { Log } from './aether_logging';
import { ClientApiRegSafe, ClientApiRegSafeLocal, ClientApiRegSafeRemote, ClientApiRegSafeStream, ClientApiRegUnsafe, Cloud, FinishResult, GlobalApiStream, GlobalRegClientApi, GlobalRegClientApiStream, GlobalRegServerApi, GlobalRegServerApiRemote, Key, KeyAsymmetric, PowMethod, RegistrationRootApi, RegistrationRootApiRemote, ServerDescriptor, ServerRegistrationApiRemote, ServerRegistrationApiStream, SignedKey, WorkProofDTO } from './aether_api';

/**
 * @class ConnectionRegistration
 * @extends {ConnectionBase<ClientApiRegUnsafe, RegistrationRootApiRemote>}
 * @implements {ClientApiRegUnsafe}
 * @description Manages the initial connection and registration process with the Aether cloud.
 */
export class ConnectionRegistration extends ConnectionBase<ClientApiRegUnsafe, RegistrationRootApiRemote> implements ClientApiRegUnsafe {

    /**
     * @private
     * @readonly
     * @type {AKey.Symmetric}
     */
    private readonly tempKey: AKey.Symmetric;

    /**
     * @private
     * @readonly
     * @type {Key}
     */
    private readonly tempKeyNative: Key;

    /**
     * @private
     * @readonly
     * @type {CryptoEngine}
     */
    private readonly tempKeyCp: CryptoEngine;

    /**
     * @private
     * @readonly
     * @type {FastApiContext}
     */
    private readonly ctxSafe: FastApiContext;

    /**
     * @private
     * @readonly
     * @type {FastApiContext}
     */
    private readonly globalCtx: FastApiContext;



    /**
     * @private
     * @type {(CryptoEngine | null)}
     */
    private gcp: CryptoEngine | null = null;

    


    /**
     * @constructor
     * @param {AetherCloudClient} client The main client instance.
     * @param {URI} uri The registration server URI.
     */




    constructor(client: AetherCloudClient, uri: URI) {
        super(client, uri, ClientApiRegUnsafe.META, RegistrationRootApi.META);

        const cryptoLib = client.state.getCryptoLib();
        const provider = CryptoProviderFactory.getProvider(cryptoLib);
        this.tempKey = provider.createSymmetricKey();

        this.tempKeyNative = CryptoUtils.aKeyToDtoKey(this.tempKey);
        this.tempKeyCp = this.tempKey.toCryptoEngine();



        // Create local API to handle incoming calls from server during registration
        const sendServerDescriptor = (server: ServerDescriptor) => {
            this.client.putServerDescriptor(server);
            Log.info("RegConn: Server descriptor received via local API.");
        };
        const localApi = {
            sendServerDescriptor,
            sendServerDescriptors: (servers: ServerDescriptor[]) => {
                for (const s of servers) {
                    sendServerDescriptor(s);
                }
            }
        };


        this.ctxSafe = new FastApiContextLocal(localApi);
        this.globalCtx = new FastApiContext();
    }






    private getAsymmetricPublicKey(): ARFuture<CryptoEngine> {
        const result = ARFuture.make<CryptoEngine>();
        this.getRootApiFuture().to((api:RegistrationRootApiRemote) => {
            api.getAsymmetricPublicKey(this.client.getCryptoLib()).to((k:SignedKey) => {
                if (!this.client.verifySign(CryptoUtils.dtoSignedKeyToInternal(k))) {
                    result.tryError(new Error("Key verification exception"));
                    return;
                }
                result.done(CryptoUtils.dtoKeyToAKey(k.key).asAsymmetric().toCryptoEngine());
            });
            api.flush(FlushReport.STUB);
        }).onError(e => {
            result.tryError(e);
        });
        return result;
    }


    public registration(): AFuture {
        return this.getAsymmetricPublicKey().to((ce:CryptoEngine) => {
            this.regProcess(ce);
        }).toFuture();
    }

    /**
     * Public cloud resolution method for recovery process.
     * Ported from ConnectionRegistration.java
     */
    public resolveCloudPublic(cloud: Cloud): AFuture {
        const res = AFuture.make();
        this.getAsymmetricPublicKey().to((ce:CryptoEngine) => {
            this.resolveCloud(cloud, ce).to(res);
        }).onError(e => res.error(e));
        return res;
    }

    private regProcess(asymCE: CryptoEngine): void {
        Log.info("RegConn: Asym public key received, starting reg process.");
        this.getRootApiFuture().to((api: RegistrationRootApiRemote) => {
            if (!api) return;

            // Step 1: Enter ServerRegistrationApi
            const regStream = ServerRegistrationApiStream.remoteApi(this.ctxSafe, (data) => asymCE.encrypt(data), (apiInner) => {
                apiInner.setReturnKey(this.tempKeyNative);
                apiInner.requestWorkProofData(this.client.getParent(), PowMethod.AE_BCRYPT_CRC32).to((wpd: WorkProofDTO) => {
                    Log.info("RegConn: WorkProofData received, calculating PoW.");
                    
                    const passwords = WorkProofUtil.generateProofOfWorkPool(
                        wpd.getSalt(),
                        wpd.getSuffix(),
                        wpd.getMaxHashVal(),
                        wpd.getPoolSize(),
                        5300
                    );

                    if (!this.client.verifySign(CryptoUtils.dtoSignedKeyToInternal(wpd.getGlobalKey()))) {
                        Log.error("RegConn: Global key verification failed.");
                        return;
                    }

                    // Setup Global Crypto Engine (GCP)
                    const globalAsymKey = CryptoUtils.dtoKeyToAKey<AKey.AsymmetricPublic>(wpd.getGlobalKey().key);
                    this.gcp = CryptoEngine.of(globalAsymKey.toCryptoEngine(), this.client.getMasterKey().toCryptoEngine());

                    // Step 2: Registration with PoW
                    const finalRegStream = ServerRegistrationApiStream.remoteApi(this.ctxSafe, (data) => asymCE.encrypt(data), (a2) => {
                        a2.setReturnKey(this.tempKeyNative);
                        const globalStream = GlobalApiStream.remoteApi(this.globalCtx, (data) => this.gcp!.encrypt(data), (gapi: GlobalRegServerApi) => {
                            gapi.setMasterKey(CryptoUtils.aKeyToDtoKey(this.client.getMasterKey()));
                            gapi.finish().to((d: FinishResult) => {
                                Log.trace("RegConn: Registration step finish.");
                                this.client.confirmRegistration(d);
                                this.resolveCloud(d.getCloud(), asymCE).to(() => {
                                    Log.info("RegConn: Cloud resolved successfully.");
                                });
                            });
                        });
                        a2.registration(wpd.getSalt(), wpd.getSuffix(), passwords, this.client.getParent(), globalStream);
                    });
                    api.enter(this.client.getCryptoLib(), finalRegStream);
                    api.flush(FlushReport.STUB);
                });
            });

            api.enter(this.client.getCryptoLib(), regStream);
            api.flush(FlushReport.STUB);
        });
    }




    private resolveCloud(cloud: Cloud, asymCE: CryptoEngine): AFuture {
        if (!this.client.isRecoveryInProgress.value) {
            this.client.isRecoveryInProgress.value = true;
        }
        const result = AFuture.make();
        Log.debug("Resolving cloud servers: " + cloud.data);

        this.getRootApiFuture().to((api: RegistrationRootApiRemote) => {
            const stream = ServerRegistrationApiStream.remoteApi(this.ctxSafe, (data) => asymCE.encrypt(data), (remote) => {
                remote.resolveServers(cloud).to((servers: ServerDescriptor[]) => {
                    Log.debug("Received server descriptors: " + servers.map(s => s.id).join(','));
                    for (const s of servers) {
                        this.client.putServerDescriptor(s);
                    }
                    result.tryDone();
                }).onError((e: Error) => {
                    Log.error("Failed to resolve servers", e);
                    result.tryError(e);
                });
            });
            api.enter(this.client.getCryptoLib(), stream);
            api.flush(FlushReport.STUB);
        }).onError((e: Error) => result.tryError(e));

        // Timeout protection
        result.timeout(5000, () => {
            Log.warn("RegConn: Timeout waiting for server descriptors.");
        });

        return result;
    }




    public enterGlobal(stream: GlobalRegClientApiStream): void {
        stream.accept(this.globalCtx, (data) => this.gcp!.decrypt(data), GlobalRegClientApi.EMPTY);
    }

    public enter(stream: ClientApiRegSafeStream): void {
        stream.accept(this.ctxSafe, (data) => this.tempKeyCp.decrypt(data), ClientApiRegSafe.EMPTY);
    }
}