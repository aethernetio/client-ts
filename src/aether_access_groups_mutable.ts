import { AccessGroup } from './aether_api';
import { RCol, RSet } from './aether_rcollection';
import { AConsumer, UUID } from './aether_types';
import { AFuture } from './aether_future';
import { EventConsumer } from './aether_future'; // Предполагая, что EventConsumer здесь

// Порт из AccessGroupMutable.java
export class AccessGroupMutable {
    readonly id: bigint;
    public owner: UUID;
    readonly group: RSet<UUID> = RCol.set<UUID>();

    constructor(a: AccessGroup);
    constructor(id: bigint, owner: UUID);
    constructor(idOrA: bigint | AccessGroup, owner?: UUID) {
        if (idOrA instanceof AccessGroup) {
            this.id = idOrA.getId();
            this.owner = idOrA.getOwner();
            this.group.addAll(idOrA.getData());
        } else {
            this.id = idOrA;
            this.owner = owner!;
        }
    }

    public toDTO(): AccessGroup {
        return new AccessGroup(this.owner, this.id, Array.from(this.group.values()));
    }

    public setOwner(owner: UUID): void {
        this.owner = owner;
    }

    public getId(): bigint {
        return this.id;
    }

    public getOwner(): UUID {
        return this.owner;
    }

    public getGroup(): RSet<UUID> {
        return this.group;
    }

    public add(uid: UUID): boolean {
        return this.group.add(uid);
    }

    public remove(uid: UUID): boolean {
        return this.group.delete(uid);
    }

    public contains(uid: UUID): boolean {
        return this.group.has(uid);
    }

    public addAll(uuids: UUID[]): void {
        for (const u of uuids) {
            this.add(u);
        }
    }

    public removeAll(uuids: UUID[]): void {
        for (const u of uuids) {
            this.remove(u);
        }
    }
}

// Порт из AccessGroupListMutable.java
export class AccessGroupListMutable {
    public readonly groups: RSet<AccessGroupMutable> = RCol.set<AccessGroupMutable>();
    private readonly onChange = new EventConsumer<AccessGroupListMutable>();
    private readonly onChangeListener: AConsumer<UUID> = (c: UUID) => this.onChange.fire(this);

    constructor() {
        this.groups.forRemove().add(a => {
            a.getGroup().forAdd().remove(this.onChangeListener);
            a.getGroup().forRemove().remove(this.onChangeListener);
            this.onChange.fire(this);
        });
        this.groups.forAdd().add(a => {
            a.getGroup().forAdd().add(this.onChangeListener);
            a.getGroup().forRemove().add(this.onChangeListener);
            this.onChange.fire(this);
        });
    }

    public add(ag: AccessGroupMutable): void {
        this.groups.add(ag);
    }

    public contains(uid: UUID): boolean {
        for (const g of this.groups) {
            if (g.contains(uid)) return true;
        }
        return false;
    }

    public containsFuture(uid: UUID): AFuture {
        if (this.contains(uid)) return AFuture.completed();
        const res = AFuture.make();
        const l: AConsumer<AccessGroupListMutable> = (a: AccessGroupListMutable) => {
            if (this.contains(uid)) {
                res.tryDone();
            }
        };
        res.addListener(() => this.onChange.remove(l));
        this.onChange.add(l);
        return res;
    }

    public allAsArray(): UUID[] {
        return Array.from(this.all());
    }

    public allGroupIdsAsArray(): bigint[] {
        const l: bigint[] = [];
        for (const g of this.groups) {
            l.push(g.getId());
        }
        return l;
    }

    public all(): Set<UUID> {
        const res = new Set<UUID>();
        for (const g of this.groups) {
            g.getGroup().forEach(uid => res.add(uid));
        }
        return res;
    }

    public remove(gg: AccessGroupMutable): boolean {
        return this.groups.delete(gg); // В RSet<T> удаление по объекту
    }

    public removeById(id: bigint): boolean {
        let found: AccessGroupMutable | null = null;
        for (const g of this.groups) {
            if (g.id === id) {
                found = g;
                break;
            }
        }
        if (found) {
            return this.groups.delete(found);
        }
        return false;
    }
}