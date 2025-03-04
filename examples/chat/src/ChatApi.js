export let chatApi = {
    UserDescription: 'u uid,S name',
    ChatServiceApi: {
        addUser: '30:[UserDescription:S',
        sendMessage: '40::u,S'
    },
    ChatClientApi: {
        addUser: '30::UserDescription',
        sendMessage: '40::u,S'
    }
}
export let APP_UID = "16afc6c6-4695-4395-81c7-3f0e3656600b"