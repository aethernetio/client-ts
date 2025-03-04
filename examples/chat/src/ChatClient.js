import {Aether} from '../../../build/aether.js'
import {APP_UID, chatApi} from "./ChatApi"

export class ChatClient {
    aether = new Aether(APP_UID);
    users = {}
    onMessage;

    constructor(onMessage) {
        this.onMessage = onMessage;
    }

    addUser(userDescriptor) {
        if (this.users.hasOwnProperty(userDescriptor.uid.toString())) return;
        console.log("add user: " + userDescriptor.name + ":" + userDescriptor.uid);
        this.users[userDescriptor.uid.toString()] = userDescriptor;
        userDescriptor.send = (msg) => {
            console.log("send chat msg " + this.uid + " >>> " + userDescriptor.uid);
            this.protocol.remoteApi.sendMessage(userDescriptor.uid, msg);
            this.protocol.flush();
        }
        let msgId = (Math.floor(Math.random() * 100));
        let date = new Date().toDateString();
        userDescriptor.send("1#" + msgId + ":" + date);
    }

    sendMessage(fromUid, msg) {
        console.log("detect chat message " + this.aether.getUID() + " <<< " + fromUid + "\n" + msg);
        this.onMessage(fromUid, msg);
    }

    async connect(userName) {
        await this.aether.connect();
        this.service = this.aether.channel(APP_UID, chatApi, chatApi.ChatClientApi, chatApi.ChatServiceApi, this);
        this.aether.setApiOverMessages(chatApi, chatApi.ChatClientApi, chatApi.ChatServiceApi, () => this);
        this.service.addUser(userName).to(allUsers => {
            for (let u of allUsers) {
                this.addUser(u);
            }
        });
    }
}
