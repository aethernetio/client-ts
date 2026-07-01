
import { UUID } from './aether_types';
import { AuthorizedApiRemote, Message } from './aether_api';

export class MessageBatcher {
    private groups = new Map<string, { data: Uint8Array; uids: UUID[] }>();

    add(uid: UUID, data: Uint8Array): void {
        const key = this.bytesToKey(data);
        const entry = this.groups.get(key);
        if (entry) {
            entry.uids.push(uid);
        } else {
            this.groups.set(key, { data, uids: [uid] });
        }
    }

    flush(api: AuthorizedApiRemote): void {
        for (const entry of this.groups.values()) {
            if (entry.uids.length > 1) {
                api.sendMulticast(entry.uids, entry.data);
            } else {
                api.sendMessage(new Message(entry.uids[0], entry.data));
            }
        }
        this.groups.clear();
    }

    isEmpty(): boolean {
        return this.groups.size === 0;
    }

    private bytesToKey(data: Uint8Array): string {
        return Array.from(data).map(b => b.toString(16).padStart(2, '0')).join('');
    }
}