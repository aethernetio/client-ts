import {io} from "./aether-api";
import {sodium} from "./aether-crypt";
import ClientApiSafe = io.aether.api.clientApi.ClientApiSafe;
import ClientApiUnsafe = io.aether.api.clientApi.ClientApiUnsafe;
import LoginApi = io.aether.api.serverApi.LoginApi;
import MessageRequest = messageRequest.MessageRequest;
import ClientApiUnsafe_META = io.aether.api.clientApi.ClientApiUnsafe_META;
import LoginApi_META = io.aether.api.serverApi.LoginApi_META;
import SignedKey = io.aether.common.SignedKey;
import AsymCrypt = sodium.AsymCrypt;
import Message = io.aether.common.Message;
import Cloud = io.aether.common.Cloud;
import AuthorizedApi = io.aether.api.serverApi.AuthorizedApi;
import RegistrationResponse = io.aether.api.serverRegistryApi.RegistrationResponse;
import Key = io.aether.common.Key;
import ServerDescriptor = io.aether.common.ServerDescriptor;
import EncryptionApi = io.aether.api.EncryptionApi;
import EncryptionApi = io.aether.api.EncryptionApi;
import KeyType = io.aether.common.KeyType;
import CryptoLib = io.aether.common.CryptoLib;
import Mode = io.aether.api.Mode;
import ZipType = io.aether.common.ZipType;
import ServerDescriptorLite = io.aether.common.ServerDescriptorLite;
import RootApi = io.aether.api.serverRegistryApi.RootApi;

declare global {
    interface Map {
        computeIfAbsent<K,V>(key: K, f: (k: K) => V): V;
    }

    interface Uint8Array {
        equals(val: Uint8Array): boolean;
    }

    interface ArrayBuffer {

        resize(newSize: number): ArrayBuffer;

        equals(val: ArrayBuffer): boolean;
    }

    interface Array<T> {
        shuffle(): Array<T>;
    }

    namespace io {
        namespace aether {
            namespace common {
                class KeyType {
                    getCryptoLib(): CryptoLib;
                }
            }
        }
    }
}
Array.prototype.shuffle = function <T>(): Array<T> {
    let currentIndex = this.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [this[currentIndex], this[randomIndex]] = [
            this[randomIndex], this[currentIndex]];
    }
    return this;
}
Uint8Array.prototype.equals = function (val: Uint8Array) {
    if (this.byteLength != val.byteLength) return false;
    for (let i = 0; i != val.byteLength; i++) {
        if (this[i] != val[i]) return false;
    }
    return true;
}
ArrayBuffer.prototype.resize = function (newSize: number) {
    let destBuffer = new ArrayBuffer(newSize);
    new Uint8Array(destBuffer).set(new Uint8Array(this));
    return destBuffer;
}
ArrayBuffer.prototype.equals = function (val: ArrayBuffer) {
    if (this.byteLength != val.byteLength) return false;
    return new Uint8Array(this).equals(new Uint8Array(val));
}
Map.prototype.computeIfAbsent = function (key, f) {
    if (this.has(key)) {
        return this.get(key);
    }
    let res = f(key);
    this.set(key, res);
    return res;
}

export class Log {
    static info(val: any) {

    }
    static error(val: any) {

    }

    static trace(val: any) {

    }

    static debug(val: any) {
        
    }
}

export class Aether {
    private static readonly DEFAULT_URL_FOR_CONNECT = "";
    readonly onNewChildren: SlotConsumer<UUID[]>;
    readonly requestsResolveServers = new Set<number>();
    readonly requestClientClouds = new Set<UUID>();
    readonly resolvedServers = new Map<number, Future<ServerDescriptorOnClient>>();
    readonly store: AetherStore;
    readonly clouds = new Map<UUID, SlotConsumerWithValue<Cloud>>();
    readonly connections = new Map<number, Connection>();
    clientConfiguration: any;
    private currentConnection: Connection;
    private tryReg: boolean;
    private startConnection: boolean;
    private startFuture: Future<Aether>;

    getPingTime(): Time {
        return 100n;
    }

    isRegistered(): boolean {

    }

    connect(step?: number): Future<Aether> {
        if (this.startConnection) return this.startFuture;
        this.startConnection = true;
        if (!step) step = 10;
        if (step == 0) {
            return;
        }
        if (!this.isRegistered() && !this.tryReg) {
            this.tryReg = true;
            let uris = this.clientConfiguration.cloudFactoryUrl;
            if (uris == null || uris.isEmpty()) {
                uris = Aether.DEFAULT_URL_FOR_CONNECT;
            }
            let timeoutForConnect = this.clientConfiguration.timoutForConnectToRegistrationServer;
            let countServersForRegistration = Math.min(uris.size(), this.clientConfiguration.countServersForRegistration);
            if (uris.isEmpty()) throw new Error("No urls");
            let finalUris: string[] = uris;
            Log.info({
                msg: "try registration",
                uriList: finalUris
            });
            let startFutures = streamOf(uris).shuffle().limit(countServersForRegistration)
                .map(sd => new ConnectionForRegistration(this, sd).connectFuture)
                .toArray();
            Future.any(startFutures)
                .to(this::startScheduledTask)
                .timeout(timeoutForConnect, () => {
                    Log.error({
                        msg:"Failed to connect to registration server",
                        uriList : finalUris
                    }                )
                    setTimeout(() => this.connect(step - 1),1000);
                });
        } else {
            let cloud = this.clientConfiguration.getCloud(this.getUid());
            if (cloud == null || cloud.isEmpty()) throw new Error();
            for (let serverId of cloud) {
                this.getConnection(this.clientConfiguration.getServerDescriptor(serverId));
            }
        }
    }

    sendMessage(msg: Message) {

    }
    onMessage:SlotConsumer<Message>;
    receiveMessage(msg: Message) {
        this.onMessage.fire(msg);
    }
    private successfulAuthorization:boolean;
    private beginCreateUser:boolean;
    private registrationFuture:Future<Aether>;
    confirmRegistration(cd: RegistrationResponse) {
        if (this.successfulAuthorization) return;
        this.successfulAuthorization=true;
        Log.trace("confirmRegistration: " + cd);
        this.clientConfiguration.uid = cd.uid;
        this.clientConfiguration.uid(cd.uid);
        this.beginCreateUser=false;
        this.registrationFuture.done(this);
        assert( this.isRegistered());
        Future.all(streamOf(cd.cloud)
            .map(sd => this.getConnection(ServerDescriptorOnClient.of(sd, this.getMasterKey())).conFuture)
            .toArray()).to(v=>this.startFuture.done(this));
    }

    putServerDescriptor(sd: ServerDescriptorLite) {
        let f = this.resolvedServers.computeIfAbsent(sd.id, k => new Future<>());
        if (!f.tryDone(ServerDescriptorOnClient.of(sd, this.getMasterKey()))) {
            f.to(sdc => {
                sdc.setServerDescriptor(sd, this.getMasterKey());
            })
        }
    }

    updateCloud(uid: UUID, cloud: Cloud) {
        this.clientConfiguration.setCloud(uid, cloud);
        if (uid.equals(this.getUid())) {
            this.currentConnection = null;
        }
        this.getCloud(uid).fire(cloud);
    }

    changeCloud(cloud: Cloud) {

    }

    getUid(): UUID {
        return this.store.getUid();
    }

    getCloud(uid: UUID): SlotConsumerWithValue<Cloud> {
        return this.clouds.computeIfAbsent(uid, k => {
            let res = new SlotConsumerWithValue<Cloud>();
            this.requestClientClouds.add(uid);
            return res;
        });
    }

    getServerForUid(uid: UUID, t: Consumer<ServerDescriptorOnClient>): void {
        this.getCloud(uid).add(p => {
            this.requestClientClouds.delete(uid);
            for (let pp of p) {
                this.resolveServer(pp).to(t);
            }
        });
    }

    resolveServer(sid: number): Future<ServerDescriptorOnClient> {
        let res= this.resolvedServers.computeIfAbsent(sid, k => {
            this.requestsResolveServers.add(k);
            return new Future<ServerDescriptorOnClient>();
        });
        return res;
    }

    getConnection(serverDescriptor?: ServerDescriptorOnClient): Connection {
        this.putDescriptor(serverDescriptor);
        let c = this.connections.get(serverDescriptor.serverDescriptor.id);
        if (c == null) {
            c = this.connections.computeIfAbsent(serverDescriptor.serverDescriptor.id,
                s => new Connection(this, serverDescriptor));
        }
        return c;
    }

    getMasterKey(): Key {
        return this.store.getMasterKey();
    }

    private putDescriptor(sd: ServerDescriptorOnClient): void {
        this.resolvedServers.computeIfAbsent(sd.serverDescriptor.id, k => new Future<>())
            .tryDone(sd);
        this.requestsResolveServers.delete(sd.serverDescriptor.id);
    }
}
class ConnectionForRegistration extends EncryptionApiImpl<ClientApiSafe> implements ClientApiUnsafe, ApiDeserializerConsumer<ClientApiUnsafe> {
    private readonly client:Aether;
    private readonly  keysFuture = new Future<any>();
    connectFuture:Future<any>;
    private globalEncryptionApiConfig:EncryptionApiConfig;
    private  protocol:Protocol<ClientApiUnsafe, RootApi>;
    private clientApiSafe:ClientApiSafe ;
    protected  selectLib( cryptoLib:CryptoLib):void {
        assert (cryptoLib ==this.client.getCryptLib());
    }

constructor(client:Aether ,  uri:string) {
    assert (uri != null);
    this.setSubApiFactory(this::getClientApiSafe);
    this.client = client;
    Log.debug("try reg to: " + uri);
    let con = AetherClientFactory.make(uri,
        ProtocolConfig.of(ClientApiUnsafe.class, RootApi.class, AetherCodec.BINARY),
        (p) => {
            protocol = p;
            return this;
        });
    connectFuture = con.to((p) -> {
        let key = p.getRemoteApi().getAsymmetricPublicKey(client.getCryptLib());
        EncryptionApi.prepareRemote(p.getRemoteApi(), getConfig());
        key.to((signedKey) -> {
            if (!signedKey.check()) {
                throw new RuntimeException();
            }
            getConfig().asymmetric = signedKey.key().getType().cryptoLib().env.asymmetric(signedKey.key());
            EncryptionApi.prepareRemote(p.getRemoteApi(), getConfig());
            let safeApi = p.getRemoteApi().asymmetric();
            safeApi.requestWorkProofData2(client.getParent(), client.getCryptLib())
                .to(wpd -> {
                    let passwords = WorkProofUtil.generateProofOfWorkPool(
                        wpd.salt(),
                        wpd.suffix(),
                        wpd.maxHashVal(),
                        wpd.poolSize(),
                        5000);
                    RootApi remoteApi = p.getRemoteApi();
                    EncryptionApi.prepareRemote(remoteApi, getConfig());
                    getConfig().symmetric =client.getMasterKey().getType().cryptoLib().env.symmetricForClientAndServer(client.getMasterKey(),0);
                    let globalClientApi0 = remoteApi
                        .asymmetric()
                        .registration(client.getParent(), wpd.salt(), wpd.suffix(), passwords, client.getMasterKey());
                    if (!wpd.globalKey().check()) {
                        throw new RuntimeException();
                    }
                    getGlobalDataPreparerConfig().asymmetric =wpd.globalKey().key().getType().cryptoLib().env.asymmetric(wpd.globalKey().key());
                    EncryptionApi.prepareRemote(globalClientApi0, getGlobalDataPreparerConfig());
                    let globalClientApi = globalClientApi0.asymmetric();
                    globalClientApi.setMasterKey(client.getMasterKey());
                    globalClientApi.finish();
                    protocol.flush();
                });
            protocol.flush();
        });
        p.flush();
    }).toFuture();
}
public EncryptionApiConfig getGlobalDataPreparerConfig() {
    if (globalEncryptionApiConfig == null) {
        globalEncryptionApiConfig = new EncryptionApiConfig();
        globalEncryptionApiConfig.asymmetric = CryptoLib.SODIUM.env.asymmetric();
    }
    return globalEncryptionApiConfig;
}
public ClientApiSafe getClientApiSafe() {
    if (clientApiSafe == null) clientApiSafe = new MyClientApiSafe();
    return clientApiSafe;
}
@Override
public void sendServerKeys(SignedKey asymPublicKey, SignedKey signKey) {
    //TODO check
    let k=asymPublicKey.key();
    this.getConfig().asymmetric = k.getType().cryptoLib().env.asymmetric(k);
    keysFuture.done();
}
private class MyClientApiSafe implements ClientApiSafe {
    public void pushMessage(@NotNull Message message) {
    throw new UnsupportedOperationException();
}
public void updateCloud(@NotNull UUID uid, @NotNull Cloud cloud) {
    throw new UnsupportedOperationException();
}
public void updateServers(@NotNull ServerDescriptor @NotNull [] serverDescriptors) {
    throw new UnsupportedOperationException();
}
public void newChildren(@NotNull List<UUID> newChildren) {
    throw new UnsupportedOperationException();
}
public void confirmRegistration(RegistrationResponseLite registrationResponse) {
    client.confirmRegistration(registrationResponse);
}
}
}

export interface AetherStore {
    getUid(): UUID;

    setUid(uid: UUID);

    getCloud(uid: UUID): Cloud

    getMasterKey(): Key;
}

export class EncryptionApiImpl<SubApi> implements EncryptionApi<SubApi>, ApiDeserializerConsumer<any> {
    protected config: EncryptionApiConfig;
    protected apiProcessor: ApiLevelDeserializer<EncryptionApi<SubApi>>;
    private subApiFactory: Supplier<SubApi>;
    private subApi: SubApi;
    private mode: io.aether.api.Mode;

    constructor(subApi?: (SubApi | Supplier<SubApi>), config?: EncryptionApiConfig) {
        if (!config) {
            config = new EncryptionApiConfig();
        }
        this.config = config;
        if (typeof subApi == "function") {
            this.subApiFactory = subApi;
        } else {
            this.subApi = subApi as SubApi;
        }
    }

    static prepareRemote(remoteApi: EncryptionApi<any>, config: EncryptionApiConfig): void {
        let rApi = RemoteApi.of(remoteApi);
        let ctx = rApi.getContext();
        let ctx2 = {
            mode: new Mode(CryptoLib.SODIUM, ZipType.NONE)
        }
        ctx.onMethodInvoke.add((a) => {
            if (a.api != remoteApi) return;
            if (a.api != remoteApi) return;
            switch (a.method.name) {
                case "setMode" :
                    ctx2.mode = a.args[0];
                    break;
                case "setCryptoLib":
                    ctx2.mode = new Mode(a.args[0], ZipType.NONE);
                    break;
                case "symmetric":
                    if (a.subApiData.length != 0) {
                        a.subApiData = config.symmetric.encode(a.subApiData);
                    }
                    break;
                case "asymmetric" :
                    if (a.subApiData.length != 0) {
                        a.subApiData = config.asymmetric.encode(a.subApiData);
                    }
                    break;
                case "zip" :
                    // let compressor = config.getDeflater();
                    // compressor.setInput(a.subApiData);
                    // compressor.finish();
                    // let bos = config.getBos();
                    // let buf = config.getBuf();
                    // while (!compressor.finished()) {
                    //     readonly int count = compressor.deflate(buf);
                    //     bos.write(buf, 0, count);
                    // }
                    // a.subApiData = bos.toByteArray();
                    break;
            }
        });
    }

    sendException(unit: ExceptionUnit): void {
    }

    sendResult(unit: ResultUnit): void {
    }

    symmetric(): SubApi {
        return this.getSubApi();
    }

    asymmetric(): SubApi {
        return this.getSubApi();
    }

    setSubApiFactory(subApiFactory: Supplier<SubApi>): void {
        this.subApiFactory = subApiFactory;
    }

    setSubApi(subApi: SubApi): void {
        this.subApi = subApi;
    }

    getConfig(): EncryptionApiConfig {
        if (this.config == null) {
            this.config = new EncryptionApiConfig();
        }
        return this.config;
    }

    getApiProcessor(): ApiLevelDeserializer<EncryptionApi<SubApi>> {
        console.assert(this.apiProcessor != null);
        return this.apiProcessor;
    }

    setApiDeserializer(apiProcessor: ApiLevelDeserializer<any>): void {
        this.apiProcessor = apiProcessor;
        apiProcessor.onExecuteCmdFromRemote = cmd => {
            let name = cmd.method.name;
            switch (name) {
                case "symmetric" :
                    cmd.subApiData = this.config.symmetric.decode(cmd.subApiData);
                    break;
                case "asymmetric" :
                    cmd.subApiData = this.config.asymmetric.decode(cmd.subApiData);
                    break;
            }
        };
    }

    setCryptoLib(cryptoLib: io.aether.common.CryptoLib): void {
        this.setMode(new Mode(cryptoLib, ZipType.NONE));
    }

    selectLib(cryptoLib: CryptoLib): void {

    }

    setMode(mode: io.aether.api.Mode): void {
        this.mode = mode;
        this.selectLib(mode.crypt);
    }

    private zip(d: Uint8Array): Uint8Array {
        throw new Error();
    }


    private getSubApi(): SubApi {
        if (this.subApi == null) {
            if (this.subApiFactory == null) {
                throw new Error();
            }
            this.subApi = this.subApiFactory();
        }
        console.assert(this.subApi != null);
        return this.subApi;
    }
}

export type MessageId = number;

interface CryptoProvider {
    encode(data: Uint8Array): Uint8Array;

    decode(data: Uint8Array): Uint8Array;
}

KeyType.prototype.getCryptoLib = function () {
    switch (this.cryptoLib) {
        case "SODIUM":
            return CryptoLib.SODIUM;
        case "HYDROGEN":
            return CryptoLib.HYDROGEN;
        default:
            throw new Error("Unknown cryptoLib: " + this.cryptoLib);
    }
}

class EncryptionApiConfig {
    asymmetric: CryptoProvider;
    symmetric: CryptoProvider;
}

export class ServerDescriptorOnClient {
    serverDescriptor: ServerDescriptorLite;
    dataPreparerConfig: EncryptionApiConfig;

    constructor(serverDescriptor: ServerDescriptorLite, masterKey: Key) {
        this.serverDescriptor = serverDescriptor;
        this.dataPreparerConfig = new EncryptionApiConfig();
        this.dataPreparerConfig.symmetric = ChaCha20Poly1305Pair.forClient(masterKey, serverDescriptor.id, Nonce.of());
    }

    static of(sd: ServerDescriptorLite, masterKey: Key) {
        return new ServerDescriptorOnClient(sd, masterKey);
    }

    setServerDescriptor(serverDescriptor: ServerDescriptorLite, masterKey: Key): void {
        this.dataPreparerConfig.symmetric = ChaCha20Poly1305Pair.forClient(masterKey, serverDescriptor.id, Nonce.of());
    }
}

export enum AetherCodec {
    BINARY,
    WEBSOCKET
}

class ProtocolConfig<LT, RT> {
    metaApiLocal: MetaApi<LT>;
    metaRemoteApi: MetaApi<RT>;
    codec: AetherCodec;

    constructor(localMetaApi: MetaApi<LT>, remoteMetaApi: MetaApi<RT>, codec: AetherCodec) {
        this.metaApiLocal = localMetaApi;
        this.metaRemoteApi = remoteMetaApi;
        this.codec = codec;
    }
}

interface RequestCounter {
    add(): void;

    dec(): void;

    reset(): void;
}

export interface RemoteApiContext {
    onMethodInvoke: SlotConsumer<MethodInvoke>;
    onSubApi: SlotConsumer<MethodInvoke>;

    regResult(result: AResult<any>): RequestId;

    flush(): void;
}

type Task = Consumer<DataIO>;

export interface CurrentLevelApi {
    addTask(task: Task): void;

    getApi(): any;
}

interface RemoteApiGetter<T> {
    _remoteApi(): RemoteApi<T>;
}

export class RemoteApi<T> implements CurrentLevelApi {
    private dataOutQueue: Task[] = [];
    private readonly context: RemoteApiContext;
    private api: any;
    private metaApi: MetaApi<T>;

    constructor(metaApi: MetaApi<T>, context: RemoteApiContext) {
        this.context = context;
        this.metaApi = metaApi;
    }

    static of<T>(o: any & T): RemoteApi<T> {
        return (o as RemoteApiGetter<T>)._remoteApi();
    }

    getApi(): any {
        return this.api;
    }

    addTask(task: Task) {
        this.dataOutQueue.push(task);
    }

    flush(): void {
        this.context.flush();
    }

    getContext(): RemoteApiContext {
        return this.context;
    }

    isEmpty(): boolean {
        return this.dataOutQueue.length === 0;
    }

    put(commands: ArrayBuffer): void {
        this.dataOutQueue.push(out => {
            out.writeArray(commands);
        })
    }

    resetCache(): void {

    }

    extractData(dataOut: DataIO): void {
        let q = this.dataOutQueue;
        this.dataOutQueue = [];
        for (let e of q) {
            e(dataOut);
        }
    };
}


export abstract class Protocol<LT, RT> implements RemoteApiContext {
    reqIdCounter = 1;
    results = new Map<RequestId, AResult<any>>();
    oldResultReqIds = new Set<RequestId>();
    onReadException = new SlotConsumer<Error>();
    config: ProtocolConfig<LT, RT>;
    localApiFactory: AFunction<Protocol<LT, RT>, LT>;
    remoteApi: RT;
    onMethodInvoke = new SlotConsumer<MethodInvoke>();
    onSubApi = new SlotConsumer<MethodInvoke>();
    onMayBeFlush: () => void;
    requestCounter: RequestCounter;
    onDisconnect: Future<Protocol<LT, RT>> = new Future<>();
    localApi: LT;
    apiResultConsumer: () => ApiResultConsumer;
    private flagFirst: boolean = false;
    private apiProcessor: ApiLevelDeserializer<LT>;

    protected constructor(protocolConfig: ProtocolConfig<LT, RT>, localApiFactory: AFunction<Protocol<LT, RT>, LT>) {
        let self = this;
        this.requestCounter = new class implements RequestCounter {
            counter: number = 0;

            add(): void {
                this.counter++;
            }

            dec(): void {
                let v = --this.counter;
                if (v == 0) {//TODO
                    if (self.onMayBeFlush == null) {
                        self.flush();
                    } else {
                        self.onMayBeFlush();
                    }
                }
            }

            reset(): void {
                this.counter = 0;
            }
        }
        this.config = protocolConfig;
        this.remoteApi = protocolConfig.metaRemoteApi.remote(this);
        this.localApiFactory = localApiFactory;
    }

    public sendResultToRemote(unit: ResultUnit, cmd: MethodInvoke): void {
        if (this.apiResultConsumer == null) {
            let remote = this.remoteApi;
            if ('sendResult' in remote) {
                (remote as ApiResultConsumer).sendResult(unit);
            } else {
                throw new Error("Result consumer is not found: " + cmd.method + " -> remote: " + remote);
            }
        } else {
            let rc = this.apiResultConsumer();
            if (rc != null) rc.sendResult(unit);
        }
    }

    sendExceptionToRemote(e: Error): void {
        this.sendExceptionToRemote(0, e);
    }

    sendExceptionToRemote(reqId: RequestId, e: Error): void {
        let unit: ExceptionUnit;
        console.log("aether exception", e);
        if (e instanceof AetherException) {
            unit = new ExceptionUnit(reqId, e as AetherException);
        } else {
            unit = new ExceptionUnit(reqId, new AetherException(ErrorId.UNKNOWN, ""));//TODO
        }
        if (this.apiResultConsumer == null) {
            (this.remoteApi as ApiResultConsumer).sendException(unit);
        } else {
            this.apiResultConsumer().sendException(unit);
        }
    }

    regResult(result: AResult<any>): RequestId {
        let res = this.reqIdCounter++;
        this.results.set(res, result);
        return res;
    }

    close(): void {
        this.onDisconnect.done(this);
    }

    isWritable(): boolean {
        return true;
    }

    flush(): void {
        let data: DataIO;
        let remote = RemoteApi.of(this.remoteApi);
        if (remote.isEmpty()) return;
        data = new DataIO(64);
        remote.extractData(data);
        this.cmdToRemote(data);
    }

    abstract isActive(): boolean;

    getLocalApi(): LT {
        return this.localApi;
    }

    toString(): String {
        return this.config.metaApiLocal + ":" + this.config.metaRemoteApi;
    }

    getRemoteApi(): RT {
        return this.remoteApi;
    }

    onActive(): void {
        if (this.flagFirst) {
            throw new Error();
        }
        this.flagFirst = true;
        if (this.localApi == null) {
            this.localApi = this.localApiFactory(this);
        }
        this.apiProcessor = new ApiLevelDeserializer(this.config.metaApiLocal, this.localApi, this);
    }

    putFromRemote(buf: DataIO
    ):
        void {
        try {
            this.apiProcessor.put(buf);
        } catch (e) {
            this.onReadException.fire(e);
        }
    }

    getCodec(): AetherCodec {
        return this.config.codec;
    }

    protected abstract cmdToRemote(data: DataIO): void;
}

export class MethodInvoke {
    api: any;
    method: MetaMethod;
    args: IArguments;
    subApiData: Uint8Array;
    result: Future<any> | AResult<any>;
    requestId: RequestId;

    constructor(api: any, method: MetaMethod, args: IArguments, subApiData: any, requestId: RequestId, result: Future<any> | AResult<any>) {
        this.api = api;
        this.method = method;
        this.args = args;
        this.subApiData = subApiData;
        this.result = result;
        this.requestId = requestId;
    }

    invoke(api: any): any {
        return (api[this.method.name] as Function).apply(api, this.args);
    }
}

export class ApiLevelDeserializer<T> {
    private static readonly cmdProtocolExceptionDecoder = meta.AetherException.getDeserializer();
    readonly metaApi: MetaApi<T>;
    readonly localApi: any;

    readonly longLive: ApiLevelDeserializer<any>[] = [];

    readonly protocol: Protocol<any, any>;
    onExecuteCmdFromRemote: Consumer<MethodInvoke>;

    constructor(metaApi: MetaApi<T>, localApi: any, protocol: Protocol<any, any>) {
        this.protocol = protocol;
        this.metaApi = metaApi;
        this.localApi = localApi;
        assert(localApi != null);
        if ("setApiProcessor" in localApi) {
            (localApi as ApiDeserializerConsumer<T>).setApiDeserializer(this);
        }

        if (metaApi.existsLongLivedMethods) {
            this.longLive = new ApiLevelDeserializer[metaApi.maxId + 1];
        } else {
            this.longLive = null;
        }
    }

    getRemoteApi<T>(): T {
        return this.protocol.getRemoteApi() as T;
    }

    getProtocol<T extends Protocol<any, any>>(): T {
        return this.protocol as T;
    }


    put(inData: DataIO): void {
        while (inData.isReadable()) {
            let cmdId = inData.readUByte();
            if (cmdId < 0 || cmdId > this.metaApi.maxId) {
                throw new AetherException(ErrorId.BAD_CMD, "bad command id: " + cmdId);
            }
            switch (cmdId) {
                case StandardCodecs.CMD_RESULT : //log.debug("RECEIVE RESULT CMD [{}]", COUNTER_RESULTS_CMD.add());
                    let resId = StandardCodecs.requestIdDecoder(inData);
                    if (!this.protocol.oldResultReqIds.add(resId)) {
                        console.log("already result reqId");
                    }
                    let aResult = this.protocol.results.get(resId);
                    this.protocol.results.delete(resId);
                    if (aResult == null) {
                        console.log("result rec is null for: {}", resId);
                        throw new Error();
                    } else {
                        aResult.deserializerFuture
                            .timeoutError(1, "!!!")
                            .to(currentDeserializer => {
                                let obj = currentDeserializer(inData);
                                try {
                                    aResult.futureCast().done(obj);
                                } catch (e) {
                                    console.log(e);
                                }
                            });
                    }
                    break;
                case StandardCodecs.CMD_EXCEPTION :
                    resId = StandardCodecs.requestIdDecoder(inData);
                    aResult = this.protocol.results.get(resId);
                    this.protocol.results.delete(resId);
                    let e = ApiLevelDeserializer.cmdProtocolExceptionDecoder(inData);
                    if (aResult != null) {
                        aResult.future.throw(e);
                    }
                    break;
                default :
                    this.metaApi.getMethodById(cmdId).executeCmdFromRemote(this.protocol, this, inData);
            }
        }
        let onMayBeFlush = this.protocol.onMayBeFlush;
        if (onMayBeFlush == null) {
            this.protocol.flush();
        } else {
            onMayBeFlush();
        }
    }
}


export interface ApiDeserializerConsumer<T> {
    setApiDeserializer(apiProcessor: ApiLevelDeserializer<T>): void;
}

export namespace messageRequest {
    import Message = io.aether.common.Message;

    export class MessageRequest {
        private readonly body: Message;
        private readonly onEvent = new SlotConsumer<Event>();
        private readonly targetServers: Queue<ServerDescriptorOnClient> = [];
        private readonly usedServers = new Set<ServerDescriptorOnClient>();
        private totalStatus: Status = Status.NEW;
        private readonly client: Aether;

        constructor(client: Aether, body: Message) {
            this.client = client;
            this.body = body;
        }

        get id(): MessageId {
            return this.body.id as MessageId;
        }

        get uid(): UUID {
            return this.body.uid;
        }

        static readonly STRATEGY_DEFAULT = e => {
            if (e.status == Status.GOT_SERVER) {
                if (!e.request.isDone()) {
                    e.request.sendToNextServer();
                }
            }
        };

        static readonly STRATEGY_FAST = e => {
            if (e.status == Status.GOT_SERVER) {
                if (!e.request.isDone()) {
                    e.request.sendToNextServer(true);
                }
            }
        };

        getBody(): Message {
            return this.body;
        }

        getTargetServers(): Queue<ServerDescriptorOnClient> {
            return this.targetServers;
        }

        getUsedServers(): Set<ServerDescriptorOnClient> {
            return this.usedServers;
        }

        getCloud(): void {
            this.client.getCloud(this.body.uid).add(c => {
                this.totalStatus = Status.GET_CLOUD;
                for (let sid of c) {
                    this.client.resolveServer(sid).to(sd => {
                        this.targetServers.push(sd);
                        this.fire(sd, Status.GOT_SERVER);
                    });
                }
            });
        }

        requestByDefaultStrategy(): void {
            this.requestByStrategy(MessageRequest.STRATEGY_DEFAULT);
        }

        requestByStrategy(strategy: Consumer<Event>): void {
            this.onEvent.add(strategy);
            this.getCloud();
        }

        onDone(e: Consumer<MessageRequest>): void {
            this.onEvent.add((event) => {
                if (event.status == Status.DONE) {
                    e(this);
                }
            });
        }

        isDone(): boolean {
            return this.totalStatus == Status.DONE;
        }

        sendToNextServer(): boolean {
            return this.sendToNextServer(false);
        }

        sendToNextServer(immediate: boolean): boolean {
            let s = this.targetServers.pop();
            if (s == null) {
                return false;
            }
            let connection = this.client.getConnection(s);
            connection.sendMessage(this, immediate);
            this.usedServers.add(s);
            return true;
        }

        fire(serverDescriptor: ServerDescriptorOnClient, type: Status): void {
            let current = this.totalStatus;
            if (current.valueOf() <= type.valueOf()) {
                this.totalStatus = type;
            }
            this.onEvent.fire(new Event(this, serverDescriptor, type));
        }
    }

    export enum Status {
        NEW = 0,
        TRY_SEND = 1,
        GET_CLOUD = 2,
        GOT_SERVER = 3,
        SEND = 4,
        SENT = 5,
        BAD_SERVER = 6,
        DONE = 6,
        DELIVERY = 7
    }

    export class Event {
        request: MessageRequest;
        server: ServerDescriptorOnClient;
        status: Status;

        constructor(request: messageRequest.MessageRequest, server: ServerDescriptorOnClient, status: Status) {
            this.request = request;
            this.server = server;
            this.status = status;
        }
    }
}

export class Connection extends EncryptionApiImpl<ClientApiSafe> implements ClientApiUnsafe, ApiDeserializerConsumer<ClientApiUnsafe> {
    //region counters
    lastBackPing: Time = 0xffffffffffffffffn;
    client: Aether;
    conFuture = new Future<Protocol<ClientApiUnsafe, LoginApi>>();
    clientApiSafe: ClientApiSafe = new MyClientApiSafe();
    basicStatus: boolean;
    lastWorkTime: Time;
    private readonly requestClientCloudOld = new Set<UUID>();
    private readonly requestServerOld = new Set<number>();
    private readonly serverDescriptor: ServerDescriptorOnClient;
    private readonly newMessages: Queue<MessageRequest> = [];
    private readonly messages = new Map<MessageId, MessageRequest>();
    private inProcess: boolean;

    constructor(aetherCloudClient: Aether, s: ServerDescriptorOnClient) {
        super();
        this.client = aetherCloudClient;
        super.setSubApi(this.clientApiSafe);
        this.basicStatus = false;
        this.serverDescriptor = s;
        let codec = AetherCodec.WEBSOCKET;
        this.config = s.dataPreparerConfig;
        let self = this;
        let protocolConfig = new ProtocolConfig<ClientApiUnsafe, LoginApi>(ClientApiUnsafe_META, LoginApi_META, codec);
        let con = new class extends Protocol<ClientApiUnsafe, LoginApi> {
            constructor() {
                super(protocolConfig, (p) => self);
            }

            isActive(): boolean {
                return false;
            }

            protected cmdToRemote(data: DataIO): void {
            }

        }
    }


    setApiDeserializer(apiProcessor: ApiLevelDeserializer<ClientApiUnsafe>): void {
        super.setApiDeserializer(apiProcessor);
        apiProcessor.getProtocol().onSubApi.add(cmd => {
            if (cmd.api != apiProcessor.getRemoteApi()) return;
            switch (cmd.method.name) {
                case "loginByUID":
                case "loginByAlias":
                    EncryptionApiImpl.prepareRemote(
                        cmd.result as EncryptionApi<any>,
                        this.getConfig()
                    );
            }
        });
    }


    sendServerKeys(asymPublicKey: SignedKey, signKey: SignedKey): void {
        this.getConfig().asymmetric = new AsymCrypt(new sodium.PairKeys(asymPublicKey.key));
    }

    getServerDescriptor(): ServerDescriptorOnClient {
        return this.serverDescriptor;
    }


    toString(): String {
        return "C(" + this.lifeTime() + ")";
    }

    sendMessage(msgRequest: MessageRequest, immediate: boolean): void {
        console.assert(msgRequest != null);
        this.newMessages.push(msgRequest);
        if (immediate) {
            this.scheduledWorkForce();
        }
    }

    close(time: number): Future<any> {
        let res = new Future();
        this.conFuture.to(c => {
            c.close();
            res.done(true);
        }).timeout(time, () => res.done());
        return res;
    }

    clearRequests(): void {
        this.requestClientCloudOld.clear();
    }

    newChildren(newChildren: UUID[]): void {
        this.client.onNewChildren.fire(newChildren);
    }

    setBasic(basic: boolean): void {
        this.basicStatus = basic;
    }

    receiveMessage(msg: Message): void {
        this.client.receiveMessage(msg);
    }

    lifeTime(): Time {
        return (currentTime() - this.lastBackPing) as Time;
    }

    onWritable(): void {
    }

    scheduledWork(): void {
        let t = currentTime();
        if (t - this.lastWorkTime < this.client.getPingTime() || this.inProcess) return;
        this.inProcess = true;
        try {
            this.lastWorkTime = t;
            this.scheduledWork0();
        } finally {
            this.inProcess = false;
        }
    }

    scheduledWorkForce(): void {
        let t = currentTime();
        if (this.inProcess) return;
        try {
            this.lastWorkTime = t;
            this.scheduledWork0();
        } finally {
            this.inProcess = false;
        }
    }

    deliveryReport(msgId: MessageId): void {
        let m = this.messages.get(msgId);
        if (m != null) {
            this.messages.delete(msgId);
            m.fire(this.serverDescriptor, messageRequest.Status.DELIVERY);
        }
    }

    changeCloud(cloud: Cloud): void {
        this.client.changeCloud(cloud);
    }

    private scheduledWork0(): void {
        try {
            let uid = this.client.getUid();
            if (this.apiProcessor == null) return;
            let p: Protocol<any, LoginApi> = this.getApiProcessor().getProtocol();
            if (uid == null || p == null || !p.isActive()) return;
            if (this.getConfig().symmetric == null) {
                return;
            }
            let api = p.getRemoteApi().loginByUID(uid);
            this.sendRequests(uid, api.symmetric());
            p.flush();
        } catch (e) {
            console.log(e);
        }
    }

    private sendRequests(uid: UUID, api: AuthorizedApi): boolean {
        let res = false;
        let requestClientClouds = this.client.requestClientClouds;
        if (requestClientClouds.size > 0) {
            let data: UUID[] = [...requestClientClouds]
                .filter(v => v == uid)
                .filter(v => !this.requestClientCloudOld.has(v))
                .map(v => {
                    this.requestClientCloudOld.add(v);
                    return v;
                });
            if (data.length > 0) {
                for (let r of data) {
                    api.client(r).getPosition().to(p => {
                        this.client.requestClientClouds.delete(r);
                        this.client.getCloud(r).fire(p);
                    });
                }
                res = true;
            }
        }
        if (this.client.requestsResolveServers.size) {
            let data = streamOf(this.client.requestsResolveServers)
                .filterCheckAndAdd(this.requestServerOld)
                .toArray();
            if (data.length > 0) {
                api.getServerDescriptor(data).to(sdd => {
                    for (let sd of sdd) {
                        console.assert(sd.id > 0);
                        this.client.requestsResolveServers.delete(sd.id);
                        this.client.resolvedServers.computeIfAbsent(sd.id, k => new Future<>())
                            .done(ServerDescriptorOnClient.of(sd, this.client.getMasterKey()));
                    }
                });
                res = true;
            }
        }
        let msgRequests: MessageRequest[] = null;
        while (true) {
            let m = this.newMessages.pop();
            if (m == null) break;
            if (this.messages.get(m.id) != null) {
                console.log("already msg: " + m);
                continue;
            }
            if (msgRequests == null) {
                msgRequests = [];
            }
            msgRequests.push(m);
        }
        if (msgRequests != null) {
            if (msgRequests.length > 0) {
                for (let m of msgRequests) {
                    m.fire(this.serverDescriptor, messageRequest.Status.SEND);
                    this.messages.set(m.id, m);
                    api.client(m.uid).sendMessage(m.id, m.getBody().time, m.getBody().data).to(r => {
                        let mm = this.messages.get(m.id);
                        this.messages.delete(m.id)
                        if (mm != null) {
                            if (r) {
                                mm.fire(this.serverDescriptor, messageRequest.Status.DONE);
                            } else {
                                mm.fire(this.serverDescriptor, messageRequest.Status.BAD_SERVER);
                            }
                        }
                    });
                    m.fire(this.serverDescriptor, messageRequest.Status.SENT);
                }
                res = true;
            }
        }
        api.messages().select().to(m => m.forEach(mm=>this.client.receiveMessage(mm)));
        return res;
    }

}

class MyClientApiSafe implements ClientApiSafe {
    client: Aether;

    confirmRegistration(registrationResponse: RegistrationResponse): void {
        this.client.confirmRegistration(registrationResponse);
    }

    sendException(unit: ExceptionUnit): void {
    }

    sendResult(unit: ResultUnit): void {
    }

    pushMessage(message: Message): void {
        this.client.receiveMessage(message);
    }

    updateCloud(uid: UUID, cloud: Cloud): void {
        this.client.updateCloud(uid, cloud);
    }

    updateServers(serverDescriptors: ServerDescriptor[]): void {
        for (let sd of serverDescriptors) {
            this.client.putServerDescriptor(sd);
        }
    }

    newChildren(newChildren: UUID[]): void {
        this.client.onNewChildren.fire(newChildren);
    }
}

export class Nonce {
    static readonly crypto_aead_chacha20poly1305_NPUBBYTES = 8;
    private static readonly BYTE_MAX_VALUE = 127;
    private static readonly BYTE_MIN_VALUE = -127;
    readonly data: Uint8Array;

    constructor(data: (ArrayBuffer | Uint8Array)) {
        if (data instanceof ArrayBuffer) {
            data = new Uint8Array(data);
        }
        this.data = data as Uint8Array;
    }

    static of(size?: number | string): Nonce {
        if (typeof size == 'undefined') {
            let buf = new Uint8Array(Nonce.crypto_aead_chacha20poly1305_NPUBBYTES);
            RND.nextBytes(buf);
            return new Nonce(buf);
        }
        if (typeof size == 'string') {
            return new Nonce(base64ToArrayBuffer(size));
        } else if (typeof size == 'number') {
            return new Nonce(new Uint8Array(size));
        } else {
            throw new Error();
        }
    }

    size(): number {
        return this.data.byteLength;
    }

    writeTo(target: Uint8Array, offset: number): void {
        Arrays.copyTo(this.data, 0, target, offset, this.data.byteLength);
    }

    readFrom(src: Uint8Array, offset: number): void {
        Arrays.copyTo(src, offset, this.data, 0, this.data.byteLength);
    }

    inc(): void {
        for (let i = 0; i < this.size(); i++) {
            let v = this.data[i];
            if (v == Nonce.BYTE_MAX_VALUE) {
                this.data[i] = Nonce.BYTE_MIN_VALUE;
            } else {
                this.data[i] = (v + 1) & 0xff;
                return;
            }
        }
    }
}

export class KeySize {
    static CHACHA20POLY1305: 32;
    static ENCODED_CHACHA20POLY1305: 80;
    static CRYPTO_BOX_PUBLIC: 32;
    static CRYPTO_BOX_PRIVATE: 32;
    static CRYPTO_SIGN_PUBLIC: 32;
    static CRYPTO_SIGN_PRIVATE: 64;
}

export class ChaCha20Poly1305Pair {
    static readonly NONCE_LEN = 8;
    static readonly crypto_aead_chacha20poly1305_ABYTES = 16;
    private readonly nonceLocal: Nonce;
    private readonly nonceRemote: Nonce;
    private readonly keyLocal: Key;
    private readonly keyRemote: Key;

    constructor(keyLocal: Key, keyRemote: Key, nonceLocal: Nonce) {
        console.assert(keyLocal != null && keyLocal.getData().byteLength == KeySize.CHACHA20POLY1305, "Local key is bad: " + keyLocal);
        console.assert(keyRemote != null && keyRemote.getData().byteLength == KeySize.CHACHA20POLY1305, "Remote key is bad: " + keyRemote);
        this.keyLocal = keyLocal;
        this.keyRemote = keyRemote;
        console.assert(nonceLocal.size() == ChaCha20Poly1305Pair.NONCE_LEN);
        this.nonceLocal = nonceLocal;
        this.nonceRemote = Nonce.of();
    }

    static forClientAndServer(key: Key, nonce: Nonce): ChaCha20Poly1305Pair {
        console.assert(key != null);
        return new ChaCha20Poly1305Pair(key, key, nonce);
    }


    static forClient(masterKey: Key, serverId: number, nonce: Nonce): ChaCha20Poly1305Pair {
        let keyLocal = ChaCha20Poly1305Pair.generateSyncClientKeyByMasterKey(masterKey, serverId);
        let keyRemote = ChaCha20Poly1305Pair.generateSyncServerKeyByMasterKey(masterKey, serverId);
        return new ChaCha20Poly1305Pair(keyLocal, keyRemote, nonce);
    }

    static generateSyncClientKeyByMasterKey(masterKey: Key, serverId: number): Key {
        return masterKey;//TODO
    }

    static generateSyncServerKeyByMasterKey(masterKey: Key, serverId: number): Key {
        return masterKey;//TODO
    }

    getNonceLocal(): Nonce {
        return this.nonceLocal;
    }

    getNonceRemote(): Nonce {
        return this.nonceRemote;
    }

    getKeyLocal(): Key {
        return this.keyLocal;
    }

    getKeyRemote(): Key {
        return this.keyRemote;
    }

    decode(data: Uint8Array): Uint8Array {
        if (data.byteLength == 0) return data;
        this.nonceRemote.readFrom(data, data.byteLength - ChaCha20Poly1305Pair.NONCE_LEN);
        return sodium.syncDecrypt(new Uint8Array(data, 0, data.byteLength - ChaCha20Poly1305Pair.NONCE_LEN), this.keyRemote.getData(), this.nonceRemote.data);
    }

    encode(data: Uint8Array, dataLength: number = -1): Uint8Array {
        if (dataLength == -1) dataLength = data.byteLength;
        console.assert(dataLength <= data.byteLength && dataLength > 0, dataLength);
        let outSize = dataLength + ChaCha20Poly1305Pair.crypto_aead_chacha20poly1305_ABYTES;
        let output = sodium.syncCrypt(data, this.keyLocal.getData(), this.nonceLocal.data);
        let output2 = Arrays.copyOf(output, output.byteLength + ChaCha20Poly1305Pair.NONCE_LEN);
        this.nonceLocal.writeTo(output2, outSize);
        this.nonceLocal.inc();
        return output2;
    }
}

export interface ASerializer {
    staticSize(): boolean;

    calcSize(v?: any): number;

    put(out: DataIO, value: any): void;
}

export type ADeserializer<T> = (data: DataIO) => T;

export class UUID {
    value: Uint8Array;

    constructor(value: Uint8Array) {
        this.value = value;
    }

    equals(o: UUID): boolean {
        return this.value
    }
}

export class MetaType<T> {
    tsType: object;
    serializer: ASerializer;
    deserializer: ADeserializer<T>;

}

export class MetaTypeEnum<T> extends MetaType<T> {
    enumType: T;

    constructor(enumType: T) {
        super();
        this.enumType = enumType;
    }
}

export class MetaTypeArray<E> extends MetaType<E[]> {
    component: MetaType<E>;

    constructor(component: MetaType<E>) {
        super();
        this.component = component;
        this.serializer = new SerializerArray(component.serializer);
        this.deserializer = (inData) => inData.readArray(inData.readSizeNumber(), component.deserializer);
    }
}

export class MetaTypeArrayWithoutLength<E> extends MetaTypeArray<E> {
}

export class MetaTypeArrayStatic<E> extends MetaTypeArray<E> {
    length: number;

    constructor(component: MetaType<E>, length: number) {
        super(component);
        this.length = length;
    }
}

export class MetaTypeObject<T> extends MetaType<T> {
    fields: MetaField<any>[];

    constructor(tsType: object, fields: Array<[MetaType<any>, keyof T]>) {
        super();
        this.tsType = tsType;
        this.fields = fields.map(f => new MetaField(f[0], f[1]));
        let ff = this.fields;
        let allStaticSize = 0;
        for (let f of ff) {
            if (f.type.serializer.staticSize()) {
                allStaticSize += f.type.serializer.calcSize();
            } else {
                allStaticSize = 0;
                break;
            }
        }
        if (allStaticSize == 0) {
            this.serializer = new class implements ASerializer {
                calcSize(v: any): number {
                    let sum = 0;
                    for (let f of ff) {
                        sum += f.type.serializer.calcSize(v[f.name]);
                    }
                    return sum;
                }

                put(out: DataIO, value: any): void {
                    for (let f of ff) {
                        f.type.serializer.put(out, value[f.name]);
                    }
                }

                staticSize(): boolean {
                    return false;
                }
            }
        } else {
            this.serializer = new class implements ASerializer {
                calcSize(v: any): number {
                    return allStaticSize;
                }

                put(out: DataIO, value: any): void {
                    for (let f of ff) {
                        f.type.serializer.put(out, value[f.name]);
                    }
                }

                staticSize(): boolean {
                    return true;
                }
            }
        }
        this.deserializer = (inData) => {
            let result = Object.create(tsType);
            for (let i = 0; i < ff.length; i++) {
                let field = ff[i];
                let fieldData = field.type.deserializer(inData);
                result[field.name] = fieldData;
            }
            return result;
        };
    }

    getDeserializer(): ADeserializer<T> {
        return this.deserializer;
    }
}

export class MetaTypeObjectSealed<T> extends MetaTypeObject<T> {
    children: Array<[MetaType<T>, number]>;

    constructor(tsType: object, children: Array<[MetaType<T>, number]>, fields?: Array<[MetaType<any>, keyof T]>) {
        super(tsType, fields ? fields : []);
        let self = this;
        this.children = children;
        this.serializer = new class implements ASerializer {
            calcSize(v: any): number {
                return 1 + self.getMetaTypeBy(v)[0].serializer.calcSize(v);
            }

            put(out: DataIO, v: any): void {
                let r = self.getMetaTypeBy(v);
                out.writeByte(r[1]);
                r[0].serializer.put(out, v);
            }

            staticSize(): boolean {
                return false;
            }
        }
        this.deserializer = (inData) => {
            let typeId = inData.readUByte();
            return self.getMetaTypeById(typeId).deserializer(inData);
        };
    }

    getMetaTypeById(id: number): MetaType<T> {
        for (let t of this.children) {
            if (t[1] == id) {
                return t[0];
            }
        }
        throw new Error("Unsupported type id exception: " + id);
    }

    getMetaTypeBy(value: object): [MetaType<T>, number] {
        let p = Object.getPrototypeOf(value);
        for (let t of this.children) {
            if (t[0].tsType == p) {
                return t;
            }
        }
        throw new Error("Unsupported type exception: " + p);
    }
}

export class MetaField<T> {
    public type: MetaType<T>;
    public name: string;

    constructor(type: MetaType<T>, name: string) {
        this.type = type;
        this.name = name;
    }
}

export class MetaMethod {
    name: string;
    cmdId: number;
    parameters: MetaField<any>[];
    deserializer: ADeserializer<MethodInvoke>;

    constructor(cmdId: number, name: string,
                ...parameters: MetaField<any>[]
    ) {
        this.name = name;
        this.cmdId = cmdId;
        this.parameters = parameters;
        this.deserializer = function (inData: DataIO) {
            return new MethodInvoke(null, this, this.readArguments(inData) as IArguments, null, null, null);
        };
    }

    executeCmdFromRemote(protocol: Protocol<any, any>, apiLevelDeserializer: ApiLevelDeserializer<any>, inData: DataIO): void {
        let cmd = this.deserializer(inData);
        cmd.api = apiLevelDeserializer.localApi;
        if (apiLevelDeserializer.onExecuteCmdFromRemote != null) apiLevelDeserializer.onExecuteCmdFromRemote(cmd);
        cmd.invoke(apiLevelDeserializer.localApi);
    }

    call(handler: RemoteApi<any>, ctx: RemoteApiContext, args: IArguments): any {
        let out = new DataIO();
        StandardCodecs.cmdEncoder.put(out, this.cmdId);
        for (let i = 0; i < this.parameters.length; i++) {
            let a = args[i];
            this.parameters[i].type.serializer.put(out, a);
        }
        ctx.onMethodInvoke.fire(new MethodInvoke(
            handler.getApi(),
            this,
            args,
            null,
            null,
            null));
        handler.addTask(o => o.writeData(out));
        return null;
    }

    protected readArguments(inData: DataIO): [] {
        let parameters = this.parameters;
        let args: [] = [];
        for (let i = 0; i < parameters.length; i++) {
            args[i] = parameters[i].type.deserializer(inData);
        }
        return args;
    }
}

export class MetaMethodSubApi<RT> extends MetaMethod {
    readonly transit: boolean;
    readonly longLived: boolean;
    readonly returnType: MetaApi<RT>;

    constructor(cmdId: number, name: string, transit: boolean, longLived: boolean, returnType: MetaApi<RT>, ...parameters: MetaField<any>[]) {
        super(cmdId, name, ...parameters);
        this.transit = transit;
        this.longLived = longLived;
        this.returnType = returnType;
    }

    call(handler: RemoteApi<any>, ctx: RemoteApiContext, args: IArguments): RT {
        let subApi = this.returnType.remote(ctx);
        let event = new MethodInvoke(handler.getApi(),
            this,
            args,
            subApi,
            null, null);
        ctx.onSubApi.fire(event);
        handler.addTask((out) => {
            StandardCodecs.cmdEncoder.put(out, this.cmdId);
            for (let i = 0; i < this.parameters.length; i++) {
                let av = args[i];
                let serializer = this.parameters[i].type.serializer;
                serializer.put(out, av);
            }
            let sOut = new DataIO();
            RemoteApi.of(subApi).extractData(sOut);
            event.subApiData = sOut.toArray();
            ctx.onMethodInvoke.fire(event);
            StandardCodecs.subApiBodyEncoder.put(out, event.subApiData);
        });
        return subApi;
    }

    executeCmdFromRemote(protocol: Protocol<any, any>, apiLevelDeserializer: ApiLevelDeserializer<any>, inData: DataIO): void {
        let cmd = this.deserializer(inData);
        if (this.transit) {
            assert(apiLevelDeserializer.onExecuteCmdFromRemote != null);
            try {
                apiLevelDeserializer.onExecuteCmdFromRemote(cmd);
            } catch (e) {
                console.log("Inner exception for: " + apiLevelDeserializer.localApi, e);
                throw new AetherException(ErrorId.INNER_EXCEPTION);
            }
        } else {
            try {
                if (apiLevelDeserializer.onExecuteCmdFromRemote != null) {
                    try {
                        apiLevelDeserializer.onExecuteCmdFromRemote(cmd);
                    } catch (e) {
                        console.log("Inner exception for: " + apiLevelDeserializer.localApi, e);
                        throw new AetherException(ErrorId.INNER_EXCEPTION);
                    }
                }
                let subApi = cmd.invoke(apiLevelDeserializer.localApi);
                assert(subApi != null);
                let subApiMetaType = this.returnType;
                let subApiDeserializer = this.makeSubApi(apiLevelDeserializer, subApiMetaType, subApi, protocol);
                subApiDeserializer.put(new DataIO(cmd.subApiData));
            } catch (e) {
                console.log(e);//TODO
                protocol.sendExceptionToRemote(e);
            }
        }
    }

    protected makeSubApi(apiLevelDeserializer: ApiLevelDeserializer<any>, subApiMetaType: MetaApi<RT>, subApi: RT, protocol: Protocol<any, any>): ApiLevelDeserializer<RT> {
        let res: ApiLevelDeserializer<RT>;
        if (this.longLived) {
            res = apiLevelDeserializer.longLive[this.cmdId];
            if (res == null) {
                res = new ApiLevelDeserializer(subApiMetaType, subApi, protocol);
            }
            apiLevelDeserializer.longLive[this.cmdId] = res;
        } else {
            res = new ApiLevelDeserializer(subApiMetaType, subApi, protocol);
        }
        return res;
    }
}

export class MetaMethodWithResult<RT> extends MetaMethod {
    readonly returnType: MetaType<RT>;

    constructor(cmdId: number, name: string, returnType: MetaType<RT>, ...parameters: MetaField<any>[]) {
        super(cmdId, name, ...parameters);
        this.returnType = returnType;
    }

    executeCmdFromRemote(protocol: Protocol<any, any>, apiLevelDeserializer: ApiLevelDeserializer<any>, inData: DataIO) {
        let cmd = this.deserializer(inData);
        let resId = cmd.requestId;
        protocol.requestCounter.add();
        try {
            console.log("receive and execute remote cmd with result: {}", cmd);
            if (apiLevelDeserializer.onExecuteCmdFromRemote != null) apiLevelDeserializer.onExecuteCmdFromRemote(cmd);
            let res = cmd.invoke(apiLevelDeserializer.localApi);
            if (res instanceof AResult) {
                res = (res as AResult<RT>).future;
            }
            let f = res as Future<RT>;
            if (f == null) {
                throw new Error("cmd return null: " + cmd.method);
            }
            if (f.isFinalStatus()) {
                if (f.isError()) {
                    protocol.sendExceptionToRemote(f.getError());
                } else {
                    let unit = new ResultUnit(resId, f.value, this.returnType.serializer);
                    protocol.sendResultToRemote(unit, cmd);
                }
                protocol.requestCounter.dec();
            } else {
                f.to(value => {
                    if (value.isDone()) {
                        let unit = new ResultUnit(resId, value.value, this.returnType.serializer);
                        protocol.sendResultToRemote(unit, cmd);
                    } else if (value.isError()) {
                        protocol.sendExceptionToRemote(cmd.requestId, value.getError());
                    }
                    protocol.requestCounter.dec();
                });
            }
        } catch (e) {
            protocol.sendExceptionToRemote(resId, e);
        }
    }

    call(handler: RemoteApi<any>, ctx: RemoteApiContext, args: IArguments): any {
        let out = new DataIO();
        StandardCodecs.cmdEncoder.put(out, this.cmdId);
        let defaultDeserializerForReturn = this.returnType.deserializer;
        let aResult = new AResult<any>(new Future<any>(), defaultDeserializerForReturn, Future.completed(defaultDeserializerForReturn));
        let reqId = ctx.regResult(aResult);
        StandardCodecs.requestIdEncoder.put(out, reqId);
        for (let i = 0; i < this.parameters.length; i++) {
            this.parameters[i].type.serializer.put(out, args[i]);
        }
        ctx.onMethodInvoke.fire(new MethodInvoke(
            handler.getApi(),
            this,
            args,
            null,
            reqId,
            aResult));
        handler.addTask(o => o.writeData(out));
        return aResult.futureCast();
    }
}

export class SubApiWithResult<SubApi, RT> {
    api: SubApi;
    future: Future<RT>;

    constructor(api: SubApi, future: Future<RT>) {
        this.api = api;
        this.future = future;
    }
}

export class MetaMethodSubApiWithResult<SubApi, RT> extends MetaMethod {
    readonly returnType: MetaApi<SubApi>;
    readonly secondReturnType: MetaType<RT>;

    constructor(cmdId: number, name: string, returnType: MetaApi<SubApi>, secondReturnType: MetaType<RT>, parameters: MetaField<any>) {
        super(cmdId, name, parameters);
        this.returnType = returnType;
        this.secondReturnType = secondReturnType;
    }

    executeCmdFromRemote(protocol: Protocol<any, any>, apiLevelDeserializer: ApiLevelDeserializer<any>, inData: DataIO) {
        let cmd = this.deserializer(inData);
        let resId = cmd.requestId;
        protocol.requestCounter.add();
        try {
            console.log("receive and execute remote cmd with result: {}", cmd);
            if (apiLevelDeserializer.onExecuteCmdFromRemote != null) apiLevelDeserializer.onExecuteCmdFromRemote(cmd);
            let res = cmd.invoke(apiLevelDeserializer.localApi);
            if (res instanceof AResult) {
                res = (res as AResult<RT>).future;
            }
            let f = res as Future<RT>;
            if (f == null) {
                throw new Error("cmd return null: " + cmd.method);
            }
            if (f.isFinalStatus()) {
                if (f.isError()) {
                    protocol.sendExceptionToRemote(f.getError());
                } else {
                    let unit = new ResultUnit(resId, f.value, this.secondReturnType.serializer);
                    protocol.sendResultToRemote(unit, cmd);
                }
                protocol.requestCounter.dec();
            } else {
                f.to(value => {
                    if (value.isDone()) {
                        let unit = new ResultUnit(resId, value.value, this.secondReturnType.serializer);
                        protocol.sendResultToRemote(unit, cmd);
                    } else if (value.isError()) {
                        protocol.sendExceptionToRemote(cmd.requestId, value.getError());
                    }
                    protocol.requestCounter.dec();
                });
            }
        } catch (e) {
            protocol.sendExceptionToRemote(resId, e);
        }
    }

    call(handler: RemoteApi<any>, ctx: RemoteApiContext, args: IArguments): any {
        let result = this.returnType.remote(ctx);
        let aResult = new AResult<>(new Future<>(), this.secondReturnType.deserializer);
        handler.addTask(out => {
            let subApiBody = new DataIO();
            RemoteApi.of(result).extractData(subApiBody);
            let subApiBodyAr = subApiBody.toArray();
            let reqId = ctx.regResult(aResult);
            let event = new MethodInvoke(
                handler.getApi(),
                this,
                args,
                subApiBodyAr,
                reqId,
                aResult);
            ctx.onMethodInvoke.fire(event);
            StandardCodecs.cmdEncoder.put(out, this.cmdId);
            StandardCodecs.requestIdEncoder.put(out, reqId);
            for (let i = 0; i < this.parameters.length; i++) {
                this.parameters[i].type.serializer.put(out, args[i]);
            }
            StandardCodecs.subApiBodyEncoder.put(out, event.subApiData);
        });
        return new SubApiWithResult<>(result, aResult.future);
    }
}

export class MetaApi<T> {
    methods: MetaMethod[];
    maxId: number;
    existsLongLivedMethods: boolean;

    constructor(...methods: MetaMethod[]) {
        this.methods = methods;
        let max = -1;
        for (let m of methods) {
            if (m instanceof MetaMethodSubApi && (m as MetaMethodSubApi<any>).longLived) {
                this.existsLongLivedMethods = true;
            }
            if (m.cmdId > max) max = m.cmdId;
        }
        this.maxId = max;
    }

    remote(ctx: RemoteApiContext): RemoteApiGetter<T> & T {
        let handler = new RemoteApi(this, ctx);
        let res: Record<string, Function> = {};
        for (let m of this.methods) {
            res[m.name] = function () {
                return m.call(handler, ctx, arguments);
            }
        }
        return res as T & RemoteApiGetter<T>;
    }

    getMethodByName(name: string): MetaMethod {
        for (let m of this.methods) {
            if (m.name === name) return m;
        }
        return null;
    }

    getMethodById(cmdId: number): MetaMethod {
        for (let m of this.methods) {
            if (m.cmdId === cmdId) return m;
        }
        return null;
    }
}

export class AResult<T> {
    future: Future<T>;
    deserializerFuture: Future<ADeserializer<T>>;
    defaultDeserializer: ADeserializer<T>;

    constructor(future: Future<T>, defaultDeserializer: ADeserializer<T>, deserializerFuture?: Future<ADeserializer<T>>) {
        this.future = future;
        this.defaultDeserializer = defaultDeserializer;
        this.deserializerFuture = deserializerFuture;
    }

    futureCast<E extends T>(): Future<E> {
        this.deserializerFuture.tryDone(this.defaultDeserializer);
        return this.future as Future<E>;
    }
}

export interface ApiResultConsumer {
    sendResult(unit: ResultUnit): void;

    sendException(unit: ExceptionUnit): void
}

export namespace meta {

    export const Int8 = new class extends MetaType<number> {
        constructor() {
            super();
            this.serializer = new SerializerInt8();
            this.deserializer = (inData) => inData.readByte();
        }
    };
    export const Int16 = new class extends MetaType<number> {
        constructor() {
            super();
            this.serializer = new SerializerInt16();
            this.deserializer = (inData) => inData.readShort();
        }
    };
    export const Int32 = new class extends MetaType<number> {
        constructor() {
            super();
            this.serializer = new SerializerInt32();
            this.deserializer = (inData) => inData.readInt();
        }
    };
    export const Int64 = new class extends MetaType<bigint> {
        constructor() {
            super();
            this.serializer = new SerializerInt64();
            this.deserializer = (inData) => inData.readLong();
        }
    };
    export const Boolean = new class extends MetaType<boolean> {
        constructor() {
            super();
            this.serializer = new SerializerBoolean();
            this.deserializer = (inData) => inData.readBoolean();
        }

    };
    export const Int8Array = new class extends MetaType<Uint8Array> {
        constructor() {
            super();
            this.serializer = new SerializerInt8Array();
            this.deserializer = (inData) => inData.read(inData.readSizeNumber());
        }
    };
    export const Int16Array = new MetaTypeArray(Int16);
    export const Int32Array = new MetaTypeArray(Int32);
    export const Int64Array = new MetaTypeArray(Int64);
    export const UUIDArray = new MetaTypeArray(UUID);

    export const RequestId = Int16;
    export const String = new class extends MetaType<string> {
        constructor() {
            super();
            this.serializer = new SerializerString();
            this.deserializer = (inData) => DeserializerString(inData);
        }
    };
    export const ErrorId = new MetaTypeEnum(globalThis.ErrorId);
    export const UUID = new class extends MetaType<UUID> {
        constructor() {
            super();
            this.serializer = new class implements ASerializer {
                calcSize(v: any): number {
                    return 16;
                }

                put(out: DataIO, value: any): void {
                    let u = value as UUID;
                    out.writeArray(u.value);
                }

                staticSize(): boolean {
                    return true;
                }
            };
            this.deserializer = DeserializerUUID;
        }
    };
    export const UnknownType = new class extends MetaType<any> {
        constructor() {
            super();
            this.serializer = null;
            this.deserializer = null;
        }
    };
    export const AetherException = new MetaTypeObject<AetherException>(globalThis.AetherException, [[ErrorId, "errorId"], [Int64, "logId"]]);
    export const ExceptionUnit = new MetaTypeObject<ExceptionUnit>(globalThis.ExceptionUnit, [[RequestId, "reqId"], [AetherException, "exception"]]);
    export const ResultUnit = new MetaTypeObject<ResultUnit>(globalThis.ResultUnit, [[RequestId, "reqId"], [UnknownType, "value"]]);
}
export type RequestId = number;

export class ResultUnit {
    reqId: RequestId;
    value: any;
    serializer: ASerializer;

    constructor(reqId: RequestId, value: any, serializer: ASerializer = null) {
        this.reqId = reqId;
        this.value = value;
        this.serializer = serializer;
    }
}

export class ExceptionUnit {
    reqId: number;
    exception: AetherException;

    constructor(reqId: RequestId, exception: AetherException) {
        this.reqId = reqId;
        this.exception = exception;
    }
}

export enum ErrorId {
    UNKNOWN,
    NO_AUTH,
    UNKNOWN_ALIAS,
    NO_ACCESS,
    BAD_CMD,
    BAD_SIZE,
    BAD_ARGUMENTS,
    BAD_TYPE,
    ALREADY_REGISTRATION,
    BAD_CRYPT_TYPE,
    INNER_EXCEPTION
}

export type Int8 = number;

export type Int16 = number;

export type Int32 = number;

export type Int64 = bigint;

export type Time = Int64;

export class StandardCodecs {
    static readonly cmdEncoder = new SerializerInt8();
    static readonly CMD_RESULT = 0;
    static readonly CMD_EXCEPTION: 1;
    static readonly sizeEncoder = new SerializerSize();
    static readonly requestIdEncoder = new SerializerInt16();
    static readonly requestIdDecoder = ((inData: DataIO) => inData.readShort()) as ADeserializer<RequestId>;
    static readonly subApiBodyEncoder = new SerializerInt8Array();

    static readonly cmdDecoder = (inData: DataIO) => inData.readUByte();
}

abstract class DeserializerNumber<length> {
    index = 0;
    value = 0;

    put(dataIn: DataIO): boolean {
        while (dataIn.isReadable() && this.index < length) {
            this.value |= dataIn.readUByte() << 8 * (this.index++);
        }
        return this.index === length;
    }

    reset() {
        this.index = 0;
        this.value = 0;
    }
}

export class DeserializerInt16Stream extends DeserializerNumber<2> {
}

export class DeserializerInt32Stream extends DeserializerNumber<4> {
}

export class DeserializerSizeStream {
    private readonly deserializerShort = new DeserializerInt16Stream();
    private readonly deserializerInt = new DeserializerInt32Stream();
    private val: bigint;
    private state: number = 0;

    get value(): any {
        return this.val;
    }

    put(inData: DataIO): boolean {
        while (inData.isReadable()) {
            switch (this.state) {
                case 0 :
                    this.val = BigInt(inData.readUByte());
                    if (this.val < DeserializerSizeConstants.u8) {
                        return true;
                    }
                    this.state = 1;
                    break;
                case 1 :
                    let v = BigInt(inData.readUByte());
                    this.val = ((this.val - DeserializerSizeConstants.u8) << DeserializerSizeConstants.pow8_shift) + DeserializerSizeConstants.u8 + v;
                    if (this.val < DeserializerSizeConstants.u16) {
                        return true;
                    }
                    this.state = 2;
                    break;
                case 2:
                    if (this.deserializerShort.put(inData)) {
                        let f = BigInt(this.deserializerShort.value) & 0xffffn;
                        this.val = ((this.val - DeserializerSizeConstants.u16) << DeserializerSizeConstants.pow16_shift) + DeserializerSizeConstants.u16 + f;
                        if (this.val < DeserializerSizeConstants.u32) {
                            return true;
                        } else {
                            this.state = 3;
                        }
                    } else {
                        return false;
                    }
                    break;
                case 3 :
                    if (this.deserializerInt.put(inData)) {
                        let f1 = BigInt(this.deserializerInt.value) & 0xffffffffn;
                        this.val = ((this.val - DeserializerSizeConstants.u32) << DeserializerSizeConstants.pow32_shift) + DeserializerSizeConstants.u32 + f1;
                        if (this.val < DeserializerSizeConstants.u64) {
                            return true;
                        }
                        throw new AetherException();
                    } else {
                        return false;
                    }
            }
        }
        return false;
    }

    reset(): void {
        this.state = 0;
        this.val = 0n;
        this.deserializerInt.reset();
        this.deserializerShort.reset();
    }

}

export function DeserializerUUID(inData: DataIO): UUID {
    return new UUID(inData.read(16));
}

const tdec = new TextDecoder();

export function DeserializerString(inData: DataIO): string {
    let ar = inData.read(inData.readSizeNumber());
    return tdec.decode(ar);
}

export class SerializerSize implements ASerializer {
    static u8 = 251n;
    static pow8_mask = 0xff;
    static pow8_shift = 8;
    static pow8 = 256;
    static k8ReservedFor16 = 16n;
    static k16ReservedFor32 = 256n;
    static pow32: bigint = 4n * 1024n * 1024n * 1024n;
    static u16: bigint = 5n * 256n + SerializerSize.u8 - SerializerSize.k8ReservedFor16;  // 1515
    static u32: bigint = 1024n * 1024n + SerializerSize.u16 - SerializerSize.k16ReservedFor32;  // 1 049 835
    static u64: bigint = SerializerSize.u32 + SerializerSize.pow32 * SerializerSize.k16ReservedFor32;
    // maximum supported value is (1 Tb + 1 Mb + 1515 - 1)
    static pow16_mask = 0xFFFF;
    static pow16_shift = 16n;
    static pow16 = 65536;
    static pow32_shift = 32n;
    static pow32_mask = 0xFFFFFFFFn;

    calcSize(v: number): number {
        if (v < SerializerSize.u8) return 1;
        if (v < SerializerSize.u16) return 2;
        if (v < SerializerSize.u32) return 4;
        if (v < SerializerSize.u64) return 8;
        throw new AetherException();
    }

    staticSize(): boolean {
        return false;
    }

    put(out: DataIO, v: number): void {
        if (v < SerializerSize.u8) {
            out.writeByte(v);
        } else if (v < SerializerSize.u16) {
            out.writeByteBI((((v - SerializerSize.u8) >> SerializerSize.pow8_shift) & 0xff) + SerializerSize.u8);
            out.writeByteBI((v - SerializerSize.u8) & SerializerSize.pow8_mask);
        } else if (v < SerializerSize.u32) {
            out.writeByte(255);
            out.writeByteBI((((v - SerializerSize.u16) >> SerializerSize.pow16_shift) - SerializerSize.u8 + SerializerSize.u16));
            out.writeShortBI(((v - SerializerSize.u16) & SerializerSize.pow16_mask));
        } else if (v < SerializerSize.u64) {
            out.writeByte(255);
            out.writeByte(255);
            out.writeShortBI((((v - SerializerSize.u32) >> SerializerSize.pow32_shift) - SerializerSize.u16 + SerializerSize.u32));
            out.writeIntBI(((v - SerializerSize.u32) & SerializerSize.pow32_mask));
        }
    }

}

export class SerializerBoolean implements ASerializer {
    put(out: DataIO, value: any) {
        out.writeByte(value as boolean ? 1 : 0);
    }

    staticSize(): boolean {
        return true
    };

    calcSize(v: any): number {
        return 1;
    }
}

export class SerializerInt8 implements ASerializer {
    put(out: DataIO, value: any) {
        out.writeByte(value as number);
    }

    staticSize(): boolean {
        return true
    };

    calcSize(v: any): number {
        return 1;
    }
}

export class SerializerInt16 implements ASerializer {
    put(out: DataIO, value: any) {
        out.writeShort(value as number);
    }

    staticSize(): boolean {
        return true
    };

    calcSize(v: any): number {
        return 2;
    }
}

export class SerializerInt32 implements ASerializer {
    put(out: DataIO, value: any) {
        out.writeInt(value as number);
    }

    staticSize(): boolean {
        return true
    };

    calcSize(v: any): number {
        return 4;
    }
}

export class SerializerInt64 implements ASerializer {
    put(out: DataIO, value: bigint) {
        out.writeLong(value);
    }

    staticSize(): boolean {
        return true
    };

    calcSize(v: any): number {
        return 8;
    }
}

export class SerializerInt8Array implements ASerializer {
    static sizeSerializer = new SerializerSize();

    put(out: DataIO, value: Uint8Array) {
        SerializerInt8Array.sizeSerializer.put(out, value.byteLength);
        out.writeArray(value, 0, value.byteLength);
    }

    staticSize(): boolean {
        return false;
    };

    calcSize(v: Uint8Array): number {
        return SerializerInt8Array.sizeSerializer.calcSize(v.byteLength) + v.byteLength;
    }
}

export class SerializerInt8ArrayStatic implements ASerializer {
    size: number;

    constructor(size: number) {
        this.size = size;
    }

    put(out: DataIO, value: Uint8Array) {
        console.assert(value.byteLength == this.size);
        out.writeArray(value, 0, value.byteLength);
    }

    staticSize(): boolean {
        return true;
    };

    calcSize(v: Uint8Array): number {
        return this.size;
    }
}

export class SerializerArray<T> implements ASerializer {
    static sizeSerializer = new SerializerSize();
    elementSerializer: ASerializer;

    constructor(elementSerializer: ASerializer) {
        this.elementSerializer = elementSerializer;
    }

    put(out: DataIO, value: T[]) {
        SerializerArray.sizeSerializer.put(out, value.length);
        for (let v of value) {
            this.elementSerializer.put(out, v);
        }
    }

    staticSize(): boolean {
        return false;
    };

    calcSize(v: T[]): number {
        if (this.elementSerializer.staticSize()) {
            return SerializerArray.sizeSerializer.calcSize(v.length) + v.length * this.elementSerializer.calcSize(null);
        } else {
            let res = SerializerArray.sizeSerializer.calcSize(v.length);
            for (let e of v) {
                res += this.elementSerializer.calcSize(e);
            }
            return res;
        }
    }
}

export class SerializerInt8ArrayWithoutLength implements ASerializer {

    put(out: DataIO, value: Uint8Array) {
        out.writeArray(value, 0, value.byteLength);
    }

    staticSize(): boolean {
        return false;
    };

    calcSize(v: Uint8Array): number {
        return v.byteLength;
    }
}

export class SerializerString implements ASerializer {
    static texe = new TextEncoder();
    static arSerializer = new SerializerInt8Array()

    put(out: DataIO, value: string) {
        SerializerString.arSerializer.put(out, SerializerString.texe.encode(value));
    }

    staticSize(): boolean {
        return false;
    };

    calcSize(v: string): number {
        let s = SerializerString.texe.encode(v);
        return SerializerString.arSerializer.calcSize(s);
    }
}


export function base64ToArrayBuffer(base64: string): Uint8Array {
    let binaryString = atob(base64);
    let bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}

export type Consumer<T> = (value: T) => void;
export type Supplier<T> = () => T;

export class SlotConsumerWithValue<T> extends SlotConsumer<T> {
    value: T;

    add(listener: Consumer<T>) {
        this.listeners.push(listener);
        if (this.value) {
            listener(this.value);
        }
    }

    fire(value: T) {
        this.value = value;
        super.fire(value);
    }
}

export class SlotConsumer<T> {
    protected listeners: Consumer<T>[];

    add(listener: Consumer<T>) {
        this.listeners.push(listener);
    }

    fire(value: T) {
        for (let listener of this.listeners) {
            listener(value);
        }
    }
}

export class AetherException extends Error {
    errorId: ErrorId;
    requestId: number;
    logId: number;

    constructor(errorId?: ErrorId, text?: string) {
        super(text);
        this.errorId = errorId;
    }
}

export type Queue<T> = Array<T>;

export class DataIO {
    dataView: DataView;
    posRead = 0;
    posWrite = 0;

    constructor(arg?: (ArrayBuffer | Uint8Array | number)) {
        if (arg instanceof ArrayBuffer) {
            this.dataView = new DataView(arg as ArrayBuffer);
            this.posWrite = this.dataView.byteLength;
            this.posRead = 0;
        } else if (arg instanceof Uint8Array) {
            this.dataView = new DataView((arg as Uint8Array).buffer);
            this.posWrite = this.dataView.byteLength;
            this.posRead = 0;
        } else if (typeof arg == 'number') {
            if (!arg) {
                arg = 50;
            }
            this.dataView = new DataView(new ArrayBuffer(arg as number));
        } else if (arg == null) {
            arg = 50;
            this.dataView = new DataView(new ArrayBuffer(arg));
        }
    }

    clear() {
        this.posRead = 0;
        this.posWrite = 0;
    }

    reset() {
        this.clear();
    }

    subArray(length: number): ArrayBuffer {
        if (length > this.getSizeForRead()) {
            throw new Error(`length subarray: ${length} but available is ${this.getSizeForRead()}`);
        }
        let r = this.posRead;
        this.posRead += length;
        return this.dataView.buffer.slice(r, r + length);
    }

    toArray(): Uint8Array {
        if (this.posRead === 0 && this.posWrite === this.dataView.byteLength) return new Uint8Array(this.dataView.buffer);
        return new Uint8Array(this.dataView.buffer, this.posRead, this.posWrite - this.posRead);
    }

    checkSize(addSize: number) {
        if (this.posWrite + addSize > this.dataView.byteLength) {
            this.dataView = new DataView(this.dataView.buffer.resize((this.posWrite + addSize) * 1.5));
        }
    }

    writeData(data: DataIO) {
        assert(data instanceof DataIO);
        if (data.isEmpty()) return;
        this.writeArray(data.dataView, data.posRead, data.getSizeForRead());
    }

    writeByteBI(val: bigint): void {
        this.writeByte(Number(val));
    }

    writeByte(val: number): void {
        this.checkSize(1);
        this.dataView.setInt8(this.posWrite, val);
        this.posWrite++;
    }

    writeArray(array: (Uint8Array | ArrayBuffer | DataView), offset?: number, length?: number) {
        if (!offset) offset = 0;
        if (!length) length = array.byteLength;
        this.checkSize(length);
        if (array instanceof ArrayBuffer) {
            array = new Uint8Array(array);
        }
        if (array instanceof Uint8Array) {
            for (let i = 0; i < length; i++) {
                this.dataView.setUint8(this.posWrite, array[offset + i]);
                this.posWrite++;
            }
            return;
        } else if (array instanceof DataView) {
            for (let i = 0; i < length; i++) {
                this.dataView.setUint8(this.posWrite, array.getUint8(offset + i));
                this.posWrite++;
            }
            return;
        }
        throw new Error();
    }

    writeShortBI(val: bigint): void {
        this.writeShort(Number(val));
    }

    writeShort(val: number): void {
        this.checkSize(2);
        this.dataView.setInt16(this.posWrite, val, true);
        this.posWrite += 2;
    }

    writeIntBI(val: bigint): void {
        this.writeInt(Number(val));
    }

    writeInt(val: number): void {
        this.checkSize(4);
        this.dataView.setInt32(this.posWrite, val, true);
        this.posWrite += 4;
    }

    writeLong(val: bigint): void {
        this.checkSize(8);
        if (typeof (val) === 'number') val = BigInt(val);
        this.dataView.setBigInt64(this.posWrite, val, true);
        this.posWrite += 8;
    }

    isReadable(): boolean {
        return this.getSizeForRead() > 0;
    }

    getSizeForRead(): number {
        return this.posWrite - this.posRead;
    }

    isEmpty(): boolean {
        return !this.isReadable();
    }

    readByte(): number {
        if (this.posRead + 1 > this.posWrite) {
            throw new Error(`posRead(${this.posRead} > posWrite(${this.posWrite}))`);
        }
        let res = this.dataView.getInt8(this.posRead);
        this.posRead += 1;
        return res;
    }

    readUByte(): number {
        if (this.posRead + 1 > this.posWrite) {
            throw new Error(`posRead(${this.posRead} > posWrite(${this.posWrite}))`);
        }
        let res = this.dataView.getUint8(this.posRead);
        this.posRead += 1;
        return res;
    }

    readShort(): number {
        let endPos = this.posRead + 2;
        if (endPos > this.posWrite) {
            throw new Error(`posRead(${endPos} > posWrite(${this.posWrite}))`);
        }
        let res = this.dataView.getInt16(this.posRead, true);
        this.posRead = endPos;
        return res;
    }

    readUShort(): number {
        let endPos = this.posRead + 2;
        if (endPos > this.posWrite) {
            throw new Error(`posRead(${endPos} > posWrite(${this.posWrite}))`);
        }
        let res = this.dataView.getUint16(this.posRead, true);
        this.posRead = endPos;
        return res;
    }

    readInt(): number {
        let endPos = this.posRead + 4;
        if (endPos >= this.posWrite) {
            throw new Error(`posRead(${endPos} > posWrite(${this.posWrite}))`);
        }
        let res = this.dataView.getInt32(this.posRead, true);
        this.posRead = endPos;
        return res;
    }

    readUInt(): number {
        let endPos = this.posRead + 4;
        if (endPos >= this.posWrite) {
            throw new Error(`posRead(${endPos} > posWrite(${this.posWrite}))`);
        }
        let res = this.dataView.getUint32(this.posRead, true);
        this.posRead = endPos;
        return res;
    }

    readLong(): bigint {
        let endPos = this.posRead + 8;
        if (endPos > this.posWrite) {
            throw new Error(`posRead(${endPos} > posWrite(${this.posWrite}))`);
        }
        let res = this.dataView.getBigInt64(this.posRead, true);
        this.posRead = endPos;
        return res;
    }

    readULong(): bigint {
        let endPos = this.posRead + 8;
        if (endPos > this.posWrite) {
            throw new Error(`posRead(${endPos} > posWrite(${this.posWrite}))`);
        }
        let res = this.dataView.getBigUint64(this.posRead, true);
        this.posRead = endPos;
        return res;
    }

    isReadable(): boolean {
        return !this.isEmpty();
    }

    read(size: number): Uint8Array {
        let result = new Uint8Array(this.dataView.buffer, this.posRead, this.posRead + size);
        this.posRead += size;
        this.checkPositions();
        return result;
    }

    readSizeNumber(): number {
        return Number(this.readSize());
    }

    readSize(): bigint {
        let val: bigint;
        val = BigInt(this.readUByte());
        if (val < DeserializerSizeConstants.u8) {
            return val;
        }
        let v = BigInt(this.readUByte());
        val = ((val - DeserializerSizeConstants.u8) << DeserializerSizeConstants.pow8_shift) + DeserializerSizeConstants.u8 + v;
        if (val < DeserializerSizeConstants.u16) {
            return val;
        }
        let f = BigInt(this.readUShort()) & 0xffffn;
        val = ((val - DeserializerSizeConstants.u16) << DeserializerSizeConstants.pow16_shift) + DeserializerSizeConstants.u16 + f;
        if (val < DeserializerSizeConstants.u32) {
            return val;
        }
        let f1 = BigInt(this.readInt()) & 0xffffffffn;
        val = ((val - DeserializerSizeConstants.u32) << DeserializerSizeConstants.pow32_shift) + DeserializerSizeConstants.u32 + f1;
        if (val < DeserializerSizeConstants.u64) {
            return val;
        }
        throw new AetherException();
    }

    readArray<T>(size: number, elDeserializer: (inData: DataIO) => T): T[] {
        let result: T[] = [];
        for (let i = 0; i < size; i++) {
            result.push(elDeserializer(this));
        }
        return result;
    }

    readBoolean(): boolean {
        return this.readByte() != 0;
    }

    private checkPositions() {
        if (this.posRead == this.posWrite) {
            this.posRead = 0;
            this.posWrite = 0;
        }
        assert(this.posRead < this.posWrite);
    }
}

export namespace DeserializerSizeConstants {
    export const u8 = 251n;
    export const pow8_mask = 0xFF;
    export const pow8_shift: bigint = 8n;
    export const pow8 = 256;
    export const k8ReservedFor16: bigint = 16n;
    export const k16ReservedFor32: bigint = 256n;
    export const pow32: bigint = 4n * 1024n * 1024n * 1024n;
    export const u16: bigint = 5n * 256n + u8 - k8ReservedFor16;  // 1515
    export const u32: bigint = 1024n * 1024n + u16 - k16ReservedFor32;  // 1 049 835
    export const u64: bigint = u32 + pow32 * k16ReservedFor32;
    // maximum supported value is (1 Tb + 1 Mb + 1515 - 1)
    export const pow16_mask = 0xFFFF;
    export const pow16_shift: bigint = 16n;
    export const pow16 = 65536;
    export const pow32_shift: bigint = 32n;
    export const pow32_mask = 0xFFFFFFFF;
}

export function notNull<T>(v: T, msg?: string): T {
    if (v === null || v === undefined) {
        if (msg) {
            throw new Error(msg);
        } else {
            if (v === null || v === undefined) {
                throw new Error("value is null");
            }
        }
    }
    return v;
}

export function UnsupportedError(a: string) {
    return new Error(a ? a : UNS_ERROR);
}


export const UNS_ERROR = "Unsupported operation exception";

export function assert(flag: boolean, hint: String = "unknown") {
    if (!flag) {
        console.log("assert error: " + hint);
        throw new Error(hint.toString());
    }
}

export function equals<T extends (ArrayBuffer | DataView | Uint8Array)>(data1: T, data2: T): boolean {
    if (data1 instanceof ArrayBuffer) {
        if (data1.byteLength !== data2.byteLength) return false;
        let a1 = new Uint8Array(data1 as ArrayBuffer);
        let a2 = new Uint8Array(data2 as ArrayBuffer);
        for (let i = 0; i < this.byteLength; i++) {
            if (a1[i] !== a2[i]) return false;
        }
        return true;
    } else if (data1 instanceof DataView) {
        let d1 = data1 as DataView;
        let d2 = data2 as DataView;
        if (data1.byteLength !== data2.byteLength) return false;
        for (let i = 0; i < this.byteLength; i++) {
            if (d1.getUint8(i) !== d2.getUint8(i)) return false;
        }
        return true;
    } else if (data1 instanceof Uint8Array) {
        let d1 = data1 as Uint8Array;
        let d2 = data2 as Uint8Array;
        if (data1.byteLength !== data2.byteLength) return false;
        for (let i = 0; i < this.byteLength; i++) {
            if (d1[i] !== d2[i]) return false;
        }
        return true;
    }
}

export type AFunction<A, R> = (arg: A) => R;

export class Future<T> {
    private listeners: Consumer<T>[] = []
    private listenersErrors: Consumer<Error>[] = []
    private _valueError: Error;
    private prom: Promise<T>;

    constructor(value: T = null) {
        if (typeof value !== 'undefined') {
            if (value instanceof Error) {
                this._valueError = value;
            } else {
                this._value = value;
            }
        }
    }

    private _value: T;

    get value(): T {
        return this._value;
    }

    set value(value: T) {
        if (this._value || this._valueError) return;
        this._valueError = null;
        let old = this._value;
        this._value = value;
        if (this._value !== old) {
            this.listeners.forEach(listener => listener(this._value));
        }
    }

    static completed<T>(value: T): Future<T> {
        return new Future<T>(value);
    }

    to(listener: Consumer<T>) {
        this.add(listener);
        return this;
    }

    then(listener: Consumer<T>) {
        this.add(listener);
        return this;
    }

    async promise() {
        if (!this.prom) {
            this.prom = new Promise((resolve, reject) => {
                if (this.isDone()) {
                    resolve(this._value);
                } else if (this.isError()) {
                    reject(this._valueError);
                } else {
                    this.add((v) => resolve(v));
                    this.catch((e) => reject(e));
                }
            });
            this.prom.catch(e => {
                console.log("some error: " + e);
            });
        }
        return this.prom;
    }

    resolve(value: T) {
        this.value = value;
    }

    done(value: T = true as T) {
        this.resolve(value);
    }

    timeoutSeconds(time: number, task: Consumer<Future<T>>) {
        setTimeout((self) => {
            if (self.isNotDone()) {
                task(self);
            }
        }, time, this);
    }

    isDone(): boolean {
        return typeof this._value !== 'undefined' && this._value != null;
    }

    isNotDone(): boolean {
        return !this.isDone();
    }

    isError(): boolean {
        return typeof this._valueError !== 'undefined' && this._valueError != null;
    }

    map<E>(f: AFunction<T, E>): Future<E> {
        let result = new Future<E>();
        this.add(v => {
            result.value = f(v);
        });
        return result;
    }

    catch(e: Consumer<Error>) {
        this.listenersErrors.push(e);
        if (this.isError()) {
            e(this._valueError);
        }
    }

    throw(e: Error) {
        this._value = null;
        this._valueError = e;
        this.listenersErrors.forEach(v => v(e));
    }

    add(listener: Consumer<Future<T>>) {
        assert(typeof listener === 'function');
        this.listeners.push(listener);
        if (this.isDone()) {
            listener(this);
        }
    }

    tryDone(value: T): boolean {
        if (this._value != null) return false;
        this.done(value);
        return true;
    }

    isFinalStatus() {
        return this.isDone() || this.isError();
    }

    timeoutError(seconds: number, s: string): Future<T> {
        let self = this;
        setTimeout(() => {
            if (!self.isFinalStatus()) {
                console.log("Timeout: " + s);
            }
        }, seconds * 1000);
        return this;
    }

    getError(): Error {
        return this._value as Error;
    }

    timeout(seconds: number, f: () => void) {
        let self = this;
        setTimeout(() => {
            if (!self.isFinalStatus()) {
                f();
            }
        }, seconds * 1000);
        return this;
    }

    static any<T>(futures: Array<Future<T>>):Future<T> {
        for(let f of futures){
            if(f.isDone())return f;
        }
        let result=new Future<T>();
        for(let f of futures){
            f.to(v=>result.tryDone(v));
        }
        return result;
    }

    static all<T>(futures: Array<Future<T>>):Future<Array<T>> {
        let resArray=[];
        let result=new Future<Array<T>>();
        let counter=futures.length;
        for (let i = 0; i < futures.length; i++){
            let f = futures[i];
            f.to(v=>{
                resArray[i]=v;
                counter--;
                if(counter==0){
                    result.done(resArray);
                }
            });
        }
        return result;
    }
}

export function currentTime(): Time {
    return BigInt(Date.now());
}

export namespace RND {
    export function nextBytes(buf: (ArrayBuffer | Uint8Array)) {
        if (buf instanceof ArrayBuffer) {
            buf = new Uint8Array(buf);
        }
        for (let i = 0; i < buf.byteLength; i++) {
            buf[i] = Math.floor(Math.random() * 0xff);
        }
    }
}

export class Arrays {
    static copyOf(srcBuffer: Uint8Array, newSize: number): Uint8Array {
        let destBuffer = new Uint8Array(newSize);
        Arrays.copyTo(srcBuffer, 0, destBuffer, 0, newSize);
        return destBuffer;
    }

    static copyTo(srcBuffer: Uint8Array, srcOffset: number, destBuffer: Uint8Array, destOffset: number, length: number): void {
        new Uint8Array(destBuffer, destOffset, length).set(new Uint8Array(srcBuffer, srcOffset, length));
    }
}

export function streamOf<T>(data: Iterable<T>): Stream<T> {
    let it = data[Symbol.iterator]();
    return new class extends Stream<T> {
        nxt: IteratorResult<T>;

        hasNext(): boolean {
            if (!this.nxt) {
                this.nxt = it.next();
            }
            return !this.nxt.done;
        }

        next(): T {
            if (!this.nxt) {
                this.nxt = it.next();
            }
            let res = this.nxt.value;
            this.nxt = null;
            return res;
        }
    }
}

export abstract class Stream<T> implements Iterable<T> {
    abstract next(): T;

    abstract hasNext(): boolean;

    [Symbol.iterator](): Iterator<T> {
        let self = this;
        return new class implements Iterator<T> {
            next(...args: []): IteratorResult<T, any> {
                return {
                    done: !self.hasNext(),
                    value: self.next()
                } as IteratorResult<T>;
            }
        }
    }

    filterCheckAndAdd(s: Set<T>): Stream<T> {
        return this.filter(v => {
            if (s.has(v)) return false;
            s.add(v);
            return true;
        });
    }

    filter(f: (v: T) => boolean): Stream<T> {
        let self = this;
        return new class extends Stream<T> {
            private temp: T;
            private flag: boolean;

            hasNext(): boolean {
                if (this.flag) return true;
                while (self.hasNext()) {
                    let v = self.next();
                    if (f(v)) {
                        this.temp = v;
                        this.flag = true;
                        return true;
                    }
                }
                return false;
            }

            next(): T {
                if (this.flag) {
                    this.flag = false;
                    return this.temp;
                } else {
                    throw new Error("Check hasNext");
                }
            }
        }
    }

    shuffle(): Stream<T> {
        return streamOf(this.toArray().shuffle());
    }

    map<R>(f: (T) => R): Stream<R> {
        let self = this;
        return new class extends Stream<R> {
            hasNext(): boolean {
                return self.hasNext();
            }

            next(): R {
                return f(self.next());
            }
        }
    }

    toArray(): Array<T> {
        let res = [];
        while (this.hasNext()) {
            res.push(this.next());
        }
        return res;
    }

    toSet(): Set<T> {
        let res = new Set<T>();
        while (this.hasNext()) {
            res.add(this.next());
        }
        return res;
    }

    toMap<K, V>(kf: (T) => K, vf: (T) => V): Map<K, V> {
        let res = new Map<K, V>();
        while (this.hasNext()) {
            let v = this.next();
            res.set(kf(v), vf(v));
        }
        return res;
    }

    first(): T {
        assert(this.hasNext());
        return this.next();
    }

    limit(v: number): Stream<T> {
        let self = this;
        return new class extends Stream<T> {
            hasNext(): boolean {
                return v > 0 && self.hasNext();
            }

            next(): T {
                v--;
                return self.next();
            }
        }
    }
}
