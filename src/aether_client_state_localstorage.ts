
import { ClientState, ClientStateInMemory } from './aether_client_state';
import { ClientCloud } from './aether_client_cloud_priority';
import { URI, UUID } from './aether_types';
import { CryptoLib } from './aether_api';
import { SignChecker } from './aether_crypto';



export class ClientStateInLocalStorage extends ClientStateInMemory {
    private storageKey: string;

    constructor(parentUid: UUID, registrationUris: URI[], rootSigners?: Set<SignChecker>, cryptoLib?: CryptoLib, storageKey: string = 'aether_client_state') {
        const stored = typeof localStorage !== 'undefined' ? localStorage.getItem(storageKey) : null;
        if (stored) {
            const bytes = new Uint8Array(JSON.parse(stored));
            super(bytes);
        } else {
            super(parentUid, registrationUris, rootSigners, cryptoLib);
        }
        this.storageKey = storageKey;
    }

    saveState(): void {
        if (!this.getUid()) return;
        try {
            if (typeof localStorage !== 'undefined') {
                const bytes = this.save();
                localStorage.setItem(this.storageKey, JSON.stringify(Array.from(bytes)));
            }
        } catch (e) {
            // Silently fail
        }
    }

    save(): Uint8Array {
        const result = super.save();
        this.saveState();
        return result;
    }

    override setCloud(uid: UUID, cloud: ClientCloud): void {
        super.setCloud(uid, cloud);
    }

    override getCloud(uid: UUID): ClientCloud | null {
        return super.getCloud(uid);
    }
}