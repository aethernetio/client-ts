import { UUID } from './aether_types';
import { Cloud } from './aether_api';

export class ClientCloud {
    private readonly uid: UUID;
    private sids: number[];
    private weights: Map<number, number> = new Map();

    public get data(): number[] {
        return this.sids;
    }


    constructor(uid: UUID, cloud: Cloud) {
        this.uid = uid; this.sids = cloud.getData();
        for (const sid of this.sids) { this.weights.set(sid, 0); }
    }

    public getOrderedSids(): number[] {
        const list = [...this.sids];
        list.sort((a, b) => {
            const weightA = this.weights.get(a) || 0;
            const weightB = this.weights.get(b) || 0;
            return weightB - weightA; 
        });
        return list;
    }

    public promote(sid: number): void {
        const current = this.weights.get(sid) || 0;
        this.weights.set(sid, current + 50);
    }

    public demote(sid: number): void {
        const current = this.weights.get(sid) || 0;
        this.weights.set(sid, current - 100);
    }


    public smartMerge(newCloud: Cloud): void {
        const newData = newCloud.getData();
        // 1. Forgetting (10%)
        for (const [sid, weight] of this.weights.entries()) {
            this.weights.set(sid, Math.floor(weight * 0.9));
        }
        // 2. Avg score
        let sum = 0; this.weights.forEach(w => sum += w);
        const avg = Math.floor(sum / Math.max(1, this.weights.size));
        // 3. Integration
        for (const sid of newData) {
            if (!this.weights.has(sid)) this.weights.set(sid, avg);
        }
        const newDataEntries = new Set(newData);
        for (const sid of this.weights.keys()) {
            if (!newDataEntries.has(sid)) this.weights.delete(sid);
        }
        // 4. Normalization (Sync with Java)
        const weightsArray = Array.from(this.weights.values());
        const min = weightsArray.length > 0 ? Math.min(...weightsArray) : 0;
        if (min !== 0) {
            for (const [sid, weight] of this.weights.entries()) {
                this.weights.set(sid, weight - min);
            }
        }
        this.sids = newData;
    }

    public getWeights(): Map<number, number> {
        return new Map(this.weights);
    }


    public setWeight(sid: number, weight: number): void {
        this.weights.set(sid, weight);
    }

    public toCloud(): Cloud {
        return new Cloud(this.sids);
    }

    public getData(): number[] {
        return this.sids;
    }

    public dataContains(sid: number): boolean {
        return this.sids.includes(sid);
    }

    public hashCode(): number {
        return this.uid.hashCode();
    }

    public equals(other: any): boolean {
        if (!(other instanceof ClientCloud)) return false;
        return this.uid.equals(other.uid);
    }


}

export class CloudPriorityManager {
    private clouds: Map<string, ClientCloud> = new Map();
    public updateCloudFromWork(uid: UUID, cloud: Cloud): ClientCloud {
         const key = uid.toAString().toString();
        let cc = this.clouds.get(key);
        if (!cc) { 
            cc = new ClientCloud(uid, cloud); 
            this.clouds.set(key, cc); 
        } else { 
            cc.smartMerge(cloud); 
        }
        return cc; // Теперь возвращаем объект для удобства
    }

    public getClientCloud(uid: UUID): ClientCloud | undefined {
        return this.clouds.get(uid.toAString().toString());
    }

    public promote(uid: UUID, sid: number): void {
        this.clouds.get(uid.toAString().toString())?.promote(sid);
    }
    public demote(uid: UUID, sid: number): void {
        this.clouds.get(uid.toAString().toString())?.demote(sid);
    }
    public getOrderedSids(uid: UUID, raw: Cloud): number[] {
         const key = uid.toAString().toString();
        let cc = this.clouds.get(key);
        if (!cc) { cc = new ClientCloud(uid, raw); this.clouds.set(key, cc); }
        return cc.getOrderedSids();
    }
}