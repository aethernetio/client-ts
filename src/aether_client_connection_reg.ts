// =============================================================================================
// FILE: aether_client_connection_reg.ts (ИСПРАВЛЕННАЯ ВЕРСИЯ)
// =============================================================================================

import {
    AetherCloudClient,
} from './aether_client';
import { WorkProofUtil } from './aether_work_proof';
import { CryptoUtils } from './aether_crypto_utils';
import { AString } from './aether_astring';
import { AKey, CryptoEngine, CryptoProviderFactory } from './aether_crypto';
import { FastApiContext } from './aether_fastmeta';
import { URI } from './aether_types';
import { AFuture, ARFuture } from './aether_future';
import { Log } from './aether_logging';
import { ClientApiRegSafe, ClientApiRegSafeStream, ClientApiRegUnsafe, Cloud, FinishResult, GlobalApi, GlobalRegClientApi, GlobalRegClientApiStream, GlobalRegServerApiRemote, Key, PowMethod, RegistrationRootApi, RegistrationRootApiRemote, ServerDescriptor, ServerRegistrationApiRemote, ServerRegistrationApiStream, SignedKey, WorkProofDTO } from './aether_api';
import { Connection } from './aether_client_connection_base';

/**
 * @class ConnectionRegistration
 * @extends {Connection<ClientApiRegUnsafe, RegistrationRootApiRemote>}
 * @implements {ClientApiRegUnsafe}
 * @description Manages the initial connection and registration process with the Aether cloud.
 */
export class ConnectionRegistration extends Connection<ClientApiRegUnsafe, RegistrationRootApiRemote> implements ClientApiRegUnsafe {

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
        // 1. USE CORRECT META:
        //    LT (Local)  = ClientApiRegUnsafe.META
        //    RT (Remote) = RegistrationRootApi.META
        super(client, uri, ClientApiRegUnsafe.META, RegistrationRootApi.META);

        // 2. Initialize crypto fields
        const cryptoLib = client.state.getCryptoLib();
        const provider = CryptoProviderFactory.getProvider(cryptoLib);
        this.tempKey = provider.createSymmetricKey();

        this.tempKeyNative = CryptoUtils.aKeyToDtoKey(this.tempKey);
        this.tempKeyCp = this.tempKey.toCryptoEngine();

        // 3. Initialize stub contexts
        // =================================================================
        // ИСПРАВЛЕНИЕ: (как в Java)
        // Убраны заглушки .flush(). Эти контексты используются только
        // как буферы для fromRemoteConsumer, который не вызывает .flush().
        // =================================================================
        this.ctxSafe = new FastApiContext();
        this.globalCtx = new FastApiContext();


        // 4. NOTE: Connection is *not* started here.
        // The AetherCloudClient must call registration()
    }

    /**
     * @private
     * @description (Port from Java) Fetches, verifies, and returns the server's asymmetric public key engine.
     * @returns {ARFuture<CryptoEngine>} A future that resolves with the CryptoEngine.
     */
    private getAsymmetricPublicKey(): ARFuture<CryptoEngine> {
        const result = ARFuture.of<CryptoEngine>();

        this.getRootApiFuture()
            .to((api: RegistrationRootApiRemote) => {
                Log.debug("RegConn: WS connection successful, requesting asymmetric key.", { uri: this.uri });

                api.getAsymmetricPublicKey(this.client.state.getCryptoLib())
                    .to((signedKey: SignedKey) => {
                        try {
                            if (!this.client.verifySign(CryptoUtils.dtoSignedKeyToInternal(signedKey))) {
                                throw new Error("Key verification exception");
                            }
                            const asymAKey = CryptoUtils.dtoKeyToAKey(signedKey.key);
                            const asymCE = (asymAKey as AKey.AsymmetricPublic).toCryptoEngine();
                            result.tryDone(asymCE);
                        } catch (e) {
                            Log.error("RegConn: Failed to verify asymmetric public key.", e as Error, { uri: this.uri });
                            result.tryError(e as Error);
                        }
                    })
                    .onError((e: Error) => {
                        Log.error("RegConn: Failed to get asymmetric public key.", e, { uri: this.uri });
                        result.tryError(e);
                    });

                api.flush();
            })
            .onError((e: Error) => {
                Log.error("RegConn: Initial connection failed.", e, { uri: this.uri });
                result.tryError(e);
            });

        return result;
    }

    /**
     * @description (Port from Java) Starts the asynchronous registration process.
     * @returns {AFuture} A future that completes when the connection is established (but not necessarily registered).
     */
    public registration(): AFuture {
        Log.debug("RegConn: Starting async registration process.", { uri: this.uri });
        this.getAsymmetricPublicKey()
            .to((asymCE: CryptoEngine) => {
                this.regProcess(asymCE);
            })
            .onError((e: Error) => {
                this.connectFuture.tryError(e);
            });

        return this.connectFuture.toFuture();
    }

    /**
     * @private
     * @description (Port from Java) Main registration logic flow.
     * @param {CryptoEngine} asymCE The verified asymmetric crypto engine from the server.
     */
    private regProcess(asymCE: CryptoEngine): void {
        Log.info("RegConn: Asym public key was received.");

        this.getRootApiFuture()
            .to((api: RegistrationRootApiRemote) => {
                if (!api) {
                    Log.error("RegConn: Root API is null after successful connection.");
                    this.connectFuture.tryError(new Error("Root API is null"));
                    return;
                }

                api.enter(this.client.state.getCryptoLib(),
                    ServerRegistrationApiStream.fromRemoteConsumer(
                        this.ctxSafe,
                        asymCE.encrypt.bind(asymCE),
                        (apiInner: ServerRegistrationApiRemote) => {
                            apiInner.setReturnKey(this.tempKeyNative);
                            apiInner.requestWorkProofData(this.client.getParent(), PowMethod.AE_BCRYPT_CRC32)
                                .to((wpd: WorkProofDTO) => {

                                    this.handlePoWAndRegister(api, asymCE, wpd);
                                })
                                .onError((e: Error) => {
                                    Log.error("RegConn: Failed to request work proof data.", e, { uri: this.uri });
                                    this.connectFuture.error(e);
                                });
                        }
                    )
                );
                api.flush();
            })
            .onError((e: Error) => {
                 this.connectFuture.error(e);
            });
    }

    /**
     * @private
     * @description (Port from Java) Handles PoW calculation and sends the registration request.
     * @param {RegistrationRootApiRemote} api The root API.
     * @param {CryptoEngine} asymCE The asymmetric crypto engine.
     * @param {WorkProofDTO} workProofDTO The PoW challenge data.
     */
    private handlePoWAndRegister(api: RegistrationRootApiRemote, asymCE: CryptoEngine, workProofDTO: WorkProofDTO): void {
        try {
            Log.info("RegConn: WorkProofData has been received. Starting PoW calculation.");
            const passwords = WorkProofUtil.generateProofOfWorkPool(
                workProofDTO.getSalt(),
                workProofDTO.getSuffix(),
                workProofDTO.getMaxHashVal(),
                workProofDTO.getPoolSize(),
                5000 // 5 seconds
            );

            if (!this.client.verifySign(CryptoUtils.dtoSignedKeyToInternal(workProofDTO.getGlobalKey()))) {
                throw new Error("Global key verification failed.");
            }

            const globalAKey = CryptoUtils.dtoKeyToAKey(workProofDTO.getGlobalKey().getKey());
            const masterKeyAKey = this.client.getMasterKeyAKey();
            this.gcp = CryptoEngine.of(globalAKey.asAsymmetric().toCryptoEngine(), masterKeyAKey.asSymmetric().toCryptoEngine());

            api.enter(this.client.state.getCryptoLib(),
                ServerRegistrationApiStream.fromRemoteConsumer(this.ctxSafe,asymCE.encrypt.bind(asymCE),
                    (a2: ServerRegistrationApiRemote) => {
                        a2.setReturnKey(this.tempKeyNative);
                        a2.registration(workProofDTO.getSalt(), workProofDTO.getSuffix(), passwords, this.client.getParent(),
                            GlobalApi.fromRemoteConsumer(
                                this.globalCtx,
                                this.gcp!.encrypt.bind(this.gcp!),
                                (gapi: GlobalRegServerApiRemote) => {

                                    gapi.setMasterKey(CryptoUtils.aKeyToDtoKey(this.client.getMasterKeyAKey()));
                                    gapi.finish()
                                        .to((finishResult: FinishResult) => {
                                            this.handleRegistrationFinish(finishResult, asymCE);
                                        })
                                        .onError((e: Error) => {
                                            Log.error("RegConn: Failed to finish registration.", e, { uri: this.uri });
                                            this.connectFuture.error(e);
                                        });
                                }
                            )
                        );
                    }
                )
            );
            api.flush();

        } catch (e) {
            Log.error("RegConn: Registration step 2 (PoW) failed.", e as Error, { uri: this.uri });
            this.connectFuture.error(e);
        }
    }

    /**
     * @private
     * @description (Port from Java) Finalizes registration and triggers background server resolution.
     * @param {FinishResultGlobalRegServerApi} finishResult The result from the server.
     * @param {CryptoEngine} asymCE The asymmetric crypto engine.
     */
    private handleRegistrationFinish(finishResult: FinishResult, asymCE: CryptoEngine): void {
        try {
            Log.trace("RegConn: registration step finish.");
            this.client.confirmRegistration(finishResult);
                this.destroy(false);
            Log.info("RegConn: Registration confirmed.");

            this.resolveCloud(finishResult.getCloud(), asymCE);

        } catch (e) {
            Log.error("RegConn: Registration step 3 (Finalize) failed.", e as Error, { uri: this.uri });
            this.connectFuture.error(e);
        }
    }

    /**
     * @private
     * @description (Port from Java) Resolves server descriptors in the background.
     * @param {Cloud} cloud The cloud data containing server IDs.
     * @param {CryptoEngine} asymCE The asymmetric crypto engine.
     * @returns {AFuture} A future that completes when resolution is attempted.
     */
    private resolveCloud(cloud: Cloud, asymCE: CryptoEngine): AFuture {
        // TODO: The Java version has a client.isRecoveryInProgress check here.
        // This is omitted as it's part of AetherCloudClient logic not fully ported.
        const result = AFuture.make();

        this.getRootApiFuture().to((api: RegistrationRootApiRemote) => {
            api.enter(this.client.state.getCryptoLib(),
                ServerRegistrationApiStream.fromRemoteConsumer(
                    this.ctxSafe,
                    asymCE.encrypt.bind(asymCE),
                    (a3: ServerRegistrationApiRemote) => {
                        Log.trace("RegConn: registration step resolve servers:", { cloud: cloud });

                        a3.resolveServers(cloud)
                            .to((ss: ServerDescriptor[]) => {
                                for (const s of ss) {
                                    this.client.servers.putResolved(s.id, s);
                                }
                                Log.info("RegConn: Server descriptors resolved.");
                                result.tryDone();
                            })
                            .onError((e: Error) => {
                                Log.error("RegConn: background resolveServers failed.", e);
                                result.tryError(e);
                            });
                    }
                )
            );
            api.flush();
        }).onError((e: Error) => {
            Log.error("RegConn: Failed to get rootApi for resolveCloud.", e);
            result.tryError(e);
        });

        return result;
    }


    /**
     * @description Called by the server to enter the GlobalApiStream.
     * @param {GlobalRegClientApiStream} stream The incoming data stream.
     * @returns {AFuture} A future that completes when the stream is accepted.
     */
    public enterGlobal(stream: GlobalRegClientApiStream): AFuture {
        if (!this.gcp) {
            const err = new Error("enterGlobal called before gcp engine was initialized.");
            Log.error(err.message);
            return AFuture.ofThrow(err);
        }
        try {
            stream.accept(this.globalCtx, this.gcp.decrypt.bind(this.gcp), {} as GlobalRegClientApi);
        } catch (e) {
             Log.error("Failed to accept enterGlobal stream", e as Error);
             return AFuture.ofThrow(e as Error);
        }
        return AFuture.of();
    }

    /**
     * @description Called by the server to enter the ClientApiRegSafeStream.
     * @param {ClientApiRegSafeStream} stream The incoming data stream.
     * @returns {AFuture} A future that completes when the stream is accepted.
     */
    public enter(stream: ClientApiRegSafeStream): AFuture {
         try {
            stream.accept(this.ctxSafe, this.tempKeyCp.decrypt.bind(this.tempKeyCp), {} as ClientApiRegSafe);
         } catch (e) {
             Log.error("Failed to accept enter stream", e as Error, {data:stream.data, tempKey_cp:this.tempKeyCp});
             return AFuture.ofThrow(e as Error);
        }
        return AFuture.of();
    }
}