import {Aether, ROOT_UID} from '../../../build/aether.js'
import {APP_UID, chatApi} from "./ChatApi"

export class ChatService {
    aether = new Aether(ROOT_UID, APP_UID);
    users = {}

    async connect() {
        await this.aether.connect();
        let allUsers = this.users;
        this.aether.setApiOverMessages(chatApi, chatApi.ChatServiceApi, chatApi.ChatClientApi, (remoteApi) => {
            return {
                sendMessage(toUid, msg) {
                    let target = allUsers[toUid.toString()];
                    if (target) {
                        target.remoteApi.sendMessage(remoteApi.protocol.uid, msg);
                    }
                },
                addUser(name) {
                    let newUser = {
                        uid: remoteApi.protocol.uid,
                        name: name,
                        remoteApi: remoteApi
                    };
                    let res = [];
                    for (let u of allUsers) {
                        u.remoteApi.addUser(newUser);
                        u.remoteApi.flush();
                        res.push(u);
                    }
                    allUsers[remoteApi.protocol.uid.toString()] = newUser;
                    return res;
                }
            }
        });
    }
}

new ChatService().connect()