import {aether, aether as AE} from "../src/aether-core";
import AetherStoreInMemory = aether.AetherStoreInMemory;

class Chat {

    constructor() {
        this.start();
    }

    start() {
        let aether=new AE.AetherCloudClient(new AetherStoreInMemory());
        aether.connect()
    }
}