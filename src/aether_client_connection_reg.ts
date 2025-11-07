import {
    AetherCloudClient,
} from './aether_client';
import { WorkProofUtil } from './aether_work_proof';
import { CryptoUtils } from './aether_crypto_utils';
import { AString } from './aether_astring';
import { AKey, CryptoEngine, CryptoProviderFactory } from './aether_crypto';
import { FastApiContext } from './aether_fastmeta';
import { URI } from './aether_types';
import { AFuture } from './aether_future';
import { Log } from './aether_logging';
import { ClientApiRegSafe, ClientApiRegSafeStream, ClientApiRegUnsafe, FinishResultGlobalRegServerApi, GlobalApiRegistrationServerRegistrationApi, GlobalRegClientApi, GlobalRegClientApiStream, GlobalRegServerApiRemote, Key, PowMethod, RegistrationRootApi, RegistrationRootApiRemote, ServerDescriptor, ServerRegistrationApiRemote, ServerRegistrationApiStream, SignedKey, WorkProofDTO } from './aether_api';
import { Connection } from './aether_client_connection_base';

export class ConnectionRegistration extends Connection<ClientApiRegUnsafe, RegistrationRootApiRemote> implements ClientApiRegUnsafe {

    private readonly tempKey: AKey.Symmetric;
    private readonly tempKeyNative: Key;
    private readonly tempKeyCp: CryptoEngine;
    private readonly ctxSafe: FastApiContext;
    private readonly globalCtx: FastApiContext;
    private gcp: CryptoEngine | null = null;

    constructor(client: AetherCloudClient, uri: URI) {
        // 1. ИСПОЛЬЗУЕМ ПРАВИЛЬНЫЕ META:
        //    LT (Local)  = ClientApiRegUnsafe.META
        //    RT (Remote) = RegistrationRootApi.META
        super(client, uri, ClientApiRegUnsafe.META, RegistrationRootApi.META);

        // 2. Инициализируем крипто-поля (как в Java)
        const cryptoLib = client.state.getCryptoLib();
        const provider = CryptoProviderFactory.getProvider(cryptoLib); //
        this.tempKey = provider.createSymmetricKey();

        this.tempKeyNative = CryptoUtils.aKeyToDtoKey(this.tempKey);
        this.tempKeyCp = this.tempKey.toCryptoEngine();

        // 4. Инициализируем stub-контексты
        this.ctxSafe = new FastApiContext();
        this.ctxSafe.flush = (sendFuture: AFuture) => {
            Log.trace("ctxSafe flush stub called", { component: "ConnectionReg" });
            sendFuture.tryDone();
        };
        this.globalCtx = new FastApiContext();
        this.globalCtx.flush = (sendFuture: AFuture) => {
            Log.trace("globalCtx flush stub called", { component: "ConnectionReg" });
            sendFuture.tryDone();
        };

        // 5. Запускаем асинхронный процесс подключения
        this.connect(); //
    }

    /**
     * @private
     * @description (Port from Java) Starts the connection chain.
     */
    private connect(): void {
        Log.debug("RegConn: Starting async registration process.", { uri: this.uri });

        this.getRootApiFuture() //
            .to((api: RegistrationRootApiRemote) => { //
                Log.debug("RegConn: WS connection successful, requesting asymmetric key.", { uri: this.uri });

                // 1. Начинаем запрос ключа
                api.getAsymmetricPublicKey(this.client.state.getCryptoLib()) //
                    .to((signedKey: SignedKey) => { //
                        // 2. При успехе -> переходим к шагу 1 (обработка ключа)
                        this.regProcessStep1_HandleKey(api, signedKey);
                    })
                    .onError((e: Error) => { //
                        // Ошибка при получении ключа
                        Log.error("RegConn: Failed to get asymmetric public key.", e, { uri: this.uri });
                        this.client.startFuture.tryError(e);
                    });

                // 3. !!! ВАЖНО: Отправляем запрос из очереди !!!
                api.flush();
            })
            .onError((e: Error) => { //
                // Ошибка при самом первом подключении (WebSocket)
                Log.error("RegConn: Initial connection failed.", e, { uri: this.uri });
                this.client.startFuture.tryError(e);
            });
    }

    /**
     * @private
     * @description Шаг 1: Обработка ключа и запрос PoW
     */
    private regProcessStep1_HandleKey(remoteApi: RegistrationRootApiRemote, signedKey: SignedKey): void {
        try { // Обертка для синхронного кода
            Log.info("RegConn: Asym public key was received.");

            // Шаг 2: Проверяем ключ (Sync)
            if (!this.client.verifySign(CryptoUtils.dtoSignedKeyToInternal(signedKey))) {
                throw new Error("Key verification exception"); // IllegalStateException
            }
            const asymAKey = CryptoUtils.dtoKeyToAKey(signedKey.key);
            const asymCE = (asymAKey as AKey.AsymmetricPublic).toCryptoEngine();

            // Шаг 3: Вызываем 'enter' для запроса PoW
            remoteApi.enter(this.client.state.getCryptoLib(),
                ServerRegistrationApiStream.fromRemoteConsumer(
                    this.ctxSafe,
                    asymCE.encrypt.bind(asymCE),
                    (apiInner: ServerRegistrationApiRemote) => {

                        apiInner.requestWorkProofData(this.client.getParent(), PowMethod.AE_BCRYPT_CRC32, this.tempKeyNative)
                            .to((wpd: WorkProofDTO) => { //
                                this.regProcessStep2_HandlePoW(remoteApi, asymCE, wpd);
                            })
                            .onError((e: Error) => {
                                Log.error("RegConn: Failed to request work proof data.", e, { uri: this.uri });
                                this.client.startFuture.tryError(e);
                            });
                    }
                )
            );
            // !!! ВАЖНО: Отправляем 'enter' !!!
            remoteApi.flush();

        } catch (e) {
            // Ловим синхронные ошибки (напр. проверка ключа)
            Log.error("RegConn: Registration step 1 (key handling) failed.", e as Error, { uri: this.uri });
            this.client.startFuture.tryError(e as Error);
        }
    }

    /**
     * @private
     * @description Шаг 2: Расчет PoW и отправка регистрации
     */
    private regProcessStep2_HandlePoW(remoteApi: RegistrationRootApiRemote, asymCE: CryptoEngine, workProofDTO: WorkProofDTO): void {
        try {
            Log.info("RegConn: WorkProofData has been received. Starting PoW calculation.");
            const passwords = WorkProofUtil.generateProofOfWorkPool( //
                workProofDTO.getSalt(),
                workProofDTO.getSuffix(),
                workProofDTO.getMaxHashVal(),
                workProofDTO.getPoolSize(),
                5000 // 5 секунд на PoW
            );

            if (!this.client.verifySign(CryptoUtils.dtoSignedKeyToInternal(workProofDTO.getGlobalKey()))) { //
                throw new Error("Global key verification failed."); // RuntimeException
            }
            Log.debug("workProofDTO was received: $workProofDTO",{workProofDTO:workProofDTO})
            const globalAKey = CryptoUtils.dtoKeyToAKey(workProofDTO.getGlobalKey().getKey());
            Log.debug("globalAKey: $key",{key:globalAKey})
            const masterKeyAKey = this.client.getMasterKeyAKey();

            this.gcp = CryptoEngine.of(globalAKey.asAsymmetric().toCryptoEngine(),masterKeyAKey.asSymmetric().toCryptoEngine());

            // Шаг 5: Вызываем 'enter' -> 'registration' -> 'finish'
            remoteApi.enter(this.client.state.getCryptoLib(),
                ServerRegistrationApiStream.fromRemoteConsumer(
                    this.ctxSafe,
                    asymCE.encrypt.bind(asymCE),
                    (a2: ServerRegistrationApiRemote) => {

                        a2.registration(workProofDTO.getSalt(), workProofDTO.getSuffix(), passwords, this.client.getParent(), this.tempKeyNative,

                            GlobalApiRegistrationServerRegistrationApi.fromRemoteConsumer(
                                this.globalCtx,
                                this.gcp.encrypt.bind(this.gcp),
                                (gapi: GlobalRegServerApiRemote) => {

                                    gapi.setMasterKey(CryptoUtils.aKeyToDtoKey(this.client.getMasterKeyAKey()));
                                    gapi.finish()
                                        .to((finishResult: FinishResultGlobalRegServerApi) => {
                                            this.regProcessStep3_Finalize(remoteApi, asymCE, finishResult);
                                        })
                                        .onError((e: Error) => {
                                            Log.error("RegConn: Failed to finish registration.", e, { uri: this.uri });
                                            this.client.startFuture.tryError(e);
                                        });
                                }
                            )
                        );
                    }
                )
            );
            remoteApi.flush();

        } catch (e) {
            Log.error("RegConn: Registration step 2 (PoW) failed.", e as Error, { uri: this.uri });
            this.client.startFuture.tryError(e as Error);
        }
    }

    /**
     * @private
     * @description Шаг 3: Финализация и фоновый запрос серверов
     */
    private regProcessStep3_Finalize(remoteApi: RegistrationRootApiRemote, asymCE: CryptoEngine, finishResult: FinishResultGlobalRegServerApi): void {
        try {
            Log.trace("RegConn: registration step finish.");
            this.client.confirmRegistration(finishResult); // Это разблокирует client.startFuture
            Log.info("RegConn: Registration confirmed.");

            remoteApi.enter(this.client.state.getCryptoLib(),
                ServerRegistrationApiStream.fromRemoteConsumer(
                    this.ctxSafe,
                    asymCE.encrypt.bind(asymCE),
                    (a3: ServerRegistrationApiRemote) => {
                        Log.trace("RegConn: registration step resolve servers:", { cloud: finishResult.getCloud() });

                        a3.resolveServers(finishResult.getCloud()) //
                            .to((ss: ServerDescriptor[]) => {
                                for (const s of ss) {
                                    this.client.servers.putResolved(s.id, s);
                                }
                                Log.info("RegConn: Server descriptors resolved.");
                            })
                            .onError((e: Error) => {
                                // Не проваливаем startFuture, т.к. это фоновая задача
                                Log.error("RegConn: background resolveServers failed.", e);
                            });
                    }
                )
            );
            // !!! ВАЖНО: Отправляем 'enter' (для resolveServers) !!!
            remoteApi.flush();

        } catch (e) {
            // Ловим синхронные ошибки (напр. confirmRegistration)
            Log.error("RegConn: Registration step 3 (Finalize) failed.", e as Error, { uri: this.uri });
            this.client.startFuture.tryError(e as Error);
        }
    }

    /**
     * @description Вызывается сервером для входа в GlobalApiStream
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
     * @description Вызывается сервером для входа в ClientApiRegSafeStream
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