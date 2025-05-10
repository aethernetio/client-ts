declare global {
    interface Map<K, V> {
        computeIfAbsent<K, V>(key: K, f: (k: K) => V): V;
    }

    interface Uint8Array {
        equals(val: Uint8Array): boolean;

        copyTo(dest: Uint8Array, offsetDest: number, offsetSrc?: number, len?: number):void;

        copy(): Uint8Array;
    }

    interface ArrayBuffer {

        resize(newSize: number): ArrayBuffer;

        equals(val: ArrayBuffer): boolean;
    }

    interface Array<T> {
        shuffle(): Array<T>;

        removeIf(p: (v: T) => boolean): boolean;
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
Array.prototype.removeIf = function <T>(p: (v: T) => boolean): boolean {
    let flag = false;
    let begin = -1;
    for (let i = 0; i < this.length; i++) {
        if (begin == -1) {
            if (p(this[i])) {
                begin = i;
                flag = true;
            }
        } else {
            if (!p(this[i])) {
                this.slice(begin, i);
                i = begin - 1;
                begin = -1;
            }
        }
    }
    if (begin > -1) {
        this.slice(begin);
        return true;
    }
    return flag;
}
Uint8Array.prototype.equals = function (val: Uint8Array) {
    if (this.byteLength != val.byteLength) return false;
    for (let i = 0; i != val.byteLength; i++) {
        if (this[i] != val[i]) return false;
    }
    return true;
}
Uint8Array.prototype.copy = function (): Uint8Array {
    let r = new Uint8Array(this.byteLength);
    r.set(this);
    return r;
}

Uint8Array.prototype.copyTo = function (dest: Uint8Array, offsetDest: number, offsetSrc?: number, len?: number) {
    if (!offsetSrc) offsetSrc = 0;
    if (!len) len = this.byteLength;
    if (offsetSrc == 0 || len == this.byteLength) {
        dest.set(this, offsetDest);
    } else {
        dest.set(new Uint8Array(this.buffer, offsetSrc, len), offsetDest);
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
export namespace aether.utils {
    export type Int8 = number;
    export type Int16 = number;
    export type Int32 = number;
    export type Int64 = bigint;
    export type Time = Int64;

    export function base64ToArrayBuffer(base64: string): Uint8Array {
        let binaryString = atob(base64);
        let bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes;
    }

    export function currentTime(): Time {
        return BigInt(Date.now());
    }

    export function assert(flag: boolean, hint: String = "assert") {
        if (!flag) {
            console.log("assert error: " + hint);
            throw new Error(hint.toString());
        }
    }
    export type Consumer<T>=(v:T)=>void;
    interface OnceTask<T> extends Consumer<T> {
        once?:boolean;
    }
    export class EventConsumer<T> {
        private listeners: Array<Consumer<T>>;

        public add(l: Consumer<T>) {
            this.listeners.push(l);
        }

        public once(l: Consumer<T>) {
            (l as OnceTask<T>).once = true;
            this.add(l);
        }

        public fire(val: T): void {
            this.listeners.removeIf(f => {
                if ((f as OnceTask<T>)['once']==true) {
                    f(val);
                    return true;
                }
                f(val);
                return false;
            });
        }
    }

    export class EventRun {
        private listeners: Array<() => void>;

        public add(l: () => void) {
            this.listeners.push(l);
        }

        public fire(): void {
            this.listeners.forEach(f => f());
        }
    }

    export interface ASet<T> extends Iterable<T> {
        contains(val: T): boolean;

        add(val: T): boolean;

        remove(val: T): boolean;
    }

    export abstract class RSet<T> implements ASet<T> {
        readonly onAdd = new EventConsumer<T>();
        readonly onRemove = new EventConsumer<T>();

        abstract [Symbol.iterator](): Iterator<T> ;

        abstract contains(val: T): boolean;

        add(val: T): boolean {
            if (this.add0(val)) {
                this.onAdd.fire(val);
                return true;
            }
            return false;
        }

        remove(val: T): boolean {
            if (this.remove0(val)) {
                this.onRemove.fire(val);
                return true;
            }
            return false;
        }

        protected abstract add0(val: T): boolean;

        protected abstract remove0(val: T): boolean;
    }


    export class RSetSrc<T> extends RSet<T> {
        private readonly data = new Set<T>();

        [Symbol.iterator](): Iterator<T> {
            return this.data[Symbol.iterator]();
        }

        contains(val: T): boolean {
            return this.data.has(val);
        }

        protected add0(val: T): boolean {
            let res = this.data.has(val);
            this.data.add(val);
            return res;
        }

        protected remove0(val: T): boolean {
            let res = this.data.has(val);
            this.data.delete(val);
            return res;
        }

    }

    export class RSetMerge<T> extends RSet<T> {
        readonly children = new RSetSrc<RSet<T>>();
        private readonly allElements = new Set<T>();

        constructor() {
            super();
            this.children.onAdd.add(v => {
                for (let e of v) {
                    this.allElements.add(e);
                }
            });
            this.children.onRemove.add(v => {
                for (let e of v) {
                    let count = 0;
                    for (let ee of this.children) {
                        if (ee.contains(e)) {
                            count++;
                            if (count > 1) break;
                        }
                    }
                    if (count == 1) {
                        this.allElements.delete(e);
                    }
                }
            });
        }

        [Symbol.iterator](): Iterator<T> {
            return this.allElements[Symbol.iterator]();
        }

        addChild(child: RSet<T>) {
            this.children.add(child);
        }

        removeChild(child: RSet<T>) {
            this.children.add(child);
        }

        contains(val: T): boolean {
            return this.allElements.has(val);
        }

        protected add0(val: T): boolean {
            throw new Error("unsupported");
        }

        protected remove0(val: T): boolean {
            if (this.allElements.has(val)) {
                this.allElements.delete(val);
                for (let c of this.children) {
                    c.remove(val);
                }
                return true;
            }
            return false;
        }

    }

    const FutureCancel = new Error("cancel");

    export class RFuture<T> {
        private readonly listeners = new EventConsumer<RFuture<T>>();
        private prom: Promise<T>;

        constructor(value: T = null) {
            if (typeof value !== 'undefined') {
                this._value = value;
            }
        }

        private _value: T | Error;

        get value(): T {
            if (this._value instanceof Error) {
                throw this._value as Error
            }
            return this._value;
        }

        static of<T>(p: Promise<T>): RFuture<T> {
            let res = new RFuture<T>();
            p.then(v => res.done(v), e => res.error(e));
            return res;
        }

        static completed<T>(value: T): RFuture<T> {
            return new RFuture<T>(value);
        }

        static any<T>(futures: IterableIterator<RFuture<T>>): RFuture<T> {
            for (let f of futures) {
                if (f.isDone()) return f;
            }
            let result = new RFuture<T>();
            for (let f of futures) {
                f.to(v => result.tryDone(v));
            }
            return result;
        }

        static all<T>(futures: Array<RFuture<T>>): RFuture<Array<T>> {
            let resArray: Array<T> = [];
            let result = new RFuture<Array<T>>();
            let counter = futures.length;
            for (let i = 0; i < futures.length; i++) {
                let f = futures[i];
                f.to(v => {
                    resArray[i] = v;
                    counter--;
                    if (counter == 0) {
                        result.done(resArray);
                    }
                });
            }
            return result;
        }

        to(listener: (v: T) => void): RFuture<T> {
            this.add(v => {
                if (v.isDone()) {
                    listener(v._value as T);
                }
            });
            return this;
        }

        async promise() {
            if (!this.prom) {
                this.prom = new Promise<T>((resolve, reject) => {
                    if (this.isDone()) {
                        resolve(this._value as T);
                    } else if (this.isError()) {
                        reject(this._value as Error);
                    } else {
                        this.add((v) => resolve(v._value as T));
                        this.catch((e) => reject(e as Error));
                    }
                });
                this.prom.catch(e => {
                    console.log("some error: " + e);
                });
            }
            return this.prom;
        }

        error(e: Error): RFuture<T> {
            this._value = e;
            this.listeners.fire(this);
            return this;
        }

        done(value: T): RFuture<T> {
            if (this._value) throw new Error("already done");
            this._value = value;
            this.listeners.fire(this);
            return this;
        }

        timeoutSeconds(time: number, task: (f: RFuture<T>) => void) {
            let self = this;
            setTimeout(() => {
                if (self.isNotDone()) {
                    task(self);
                }
            }, time, this);
        }

        isDone(): boolean {
            return typeof this._value && !(this._value instanceof Error);
        }

        isNotDone(): boolean {
            return !this.isDone();
        }

        isError(): boolean {
            return this._value instanceof Error && this._value != FutureCancel;
        }

        isCanceled(): boolean {
            return this._value == FutureCancel;
        }

        cancel(): RFuture<T> {
            this._value = FutureCancel;
            this.listeners.fire(this);
            return this;
        }

        map<E>(f: (v: T) => E): RFuture<E> {
            let result = new RFuture<E>();
            this.add(v => {
                if (v._value instanceof Error) {
                    result._value = v._value;
                } else {
                    result._value = f(v._value);
                }
                result.listeners.fire(result);
            });
            return result;
        }

        catch(e: (er: Error) => void): RFuture<T> {
            if (this.isError()) {
                e(this.getError());
                return this;
            }
            this.add((v) => {
                if (v.isError()) {
                    e(v.getError());
                }
            });
            return this;
        }

        onCancel(e: () => void): RFuture<T> {
            if (this.isCanceled()) {
                e();
                return;
            }
            this.add((v) => {
                if (v.isCanceled()) {
                    e();
                }
            });
            return this;
        }

        throw(e: Error): RFuture<T> {
            if (this._value) throw new Error();
            this._value = null;
            this.listeners.fire(this);
            return this;
        }

        add(listener: (f: RFuture<T>) => void) {
            if (this._value) {
                listener(this);
                return;
            }
            assert(typeof listener === 'function');
            this.listeners.add(listener);
            if (this.isFinalStatus()) {
                listener(this);
            }
        }

        tryDone(value: T): boolean {
            if (this._value != null) return false;
            this.done(value);
            return true;
        }

        isFinalStatus(): boolean {
            return !!this._value;
        }

        timeoutError(seconds: number, s: string): RFuture<T> {
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

        link(f: RFuture<T>): RFuture<T> {
            if (this.isFinalStatus()) {
                if (f._value == this._value) return;
                f._value = this._value;
                f.listeners.fire(f);
                return
            }
            f.onCancel(() => {
                if (this.isFinalStatus()) return;
                this.cancel();
            });
            this.add(ff => {
                if (f._value == ff._value) return;
                f._value = ff._value;
                f.listeners.fire(f);
            });
            return this;
        }

        mapComposite<E>(f: (v: T) => RFuture<E>): RFuture<E> {
            if (this.isFinalStatus()) {
                return f(this.value);
            }
            let res = new RFuture<E>();
            this.add(ff => {
                if (ff.isDone()) {
                    f(ff.value).link(res);
                }
            });
            return res;
        }

        update(val: T | Error) {
            this._value = val;
            this.listeners.fire(this);
        }

        toFuture() {
            if (this.isFinalStatus()) {
                return new Future().update(this._value);
            }
            let res = new Future();
            res.onCancel(() => {
                if (this.isFinalStatus()) return;
                this.cancel();
            });
            this.add(f => {
                res.update(f._value);
            });
            return res;
        }
    }

    export class MFuture<T> {
        private readonly listeners = new EventConsumer<MFuture<T>>();
        private prom: Promise<T>;

        constructor(value: T = null) {
            if (typeof value !== 'undefined') {
                this._value = value;
            }
        }

        private _request: boolean;

        get request() {
            if (!this._request) {
                this._request = true;
                return true;
            }
            return false;
        }

        private _value: T | Error;

        get value(): T {
            if (this._value instanceof Error) {
                throw this._value as Error
            }
            return this._value;
        }

        static of<T>(p: Promise<T>): MFuture<T> {
            let res = new MFuture<T>();
            p.then(v => res.set(v), e => res.error(e));
            return res;
        }

        static completed<T>(value: T): MFuture<T> {
            return new MFuture<T>(value);
        }

        static any<T>(futures: IterableIterator<MFuture<T>>): RFuture<T> {
            for (let f of futures) {
                if (f.isDone()) return f.toRFuture();
            }
            let result = new RFuture<T>();
            for (let f of futures) {
                f.to(v => result.tryDone(v));
            }
            return result;
        }

        to(listener: (v: T) => void): MFuture<T> {
            this.add(v => {
                if (v.isDone()) {
                    listener(v._value as T);
                }
            });
            return this;
        }

        toOnce(listener: (v: T) => void) {
            this.addOnce(v => {
                if (v.isDone()) {
                    listener(v._value as T);
                }
            });
        }

        error(e: Error): MFuture<T> {
            this.update(e);
            return this;
        }

        update(v: T | Error) {
            this._value = v;
            this.listeners.fire(this);
        }

        set(value: T): MFuture<T> {
            this.update(value);
            return this;
        }

        timeoutSeconds(time: number, task: (f: MFuture<T>) => void) {
            let self = this;
            setTimeout(() => {
                if (self.isNotDone()) {
                    task(self);
                }
            }, time, this);
        }

        isDone(): boolean {
            return typeof this._value && !(this._value instanceof Error);
        }

        isNotDone(): boolean {
            return !this.isDone();
        }

        isError(): boolean {
            return this._value instanceof Error && this._value != FutureCancel;
        }

        isCanceled(): boolean {
            return this._value == FutureCancel;
        }

        cancel(): MFuture<T> {
            this.update(FutureCancel);
            return this;
        }

        map<E>(f: (v: T) => E): MFuture<E> {
            let result = new MFuture<E>();
            this.add(v => {
                if (v._value instanceof Error) {
                    result._value = v._value;
                } else {
                    result._value = f(v._value);
                }
                result.listeners.fire(result);
            });
            return result;
        }

        catch(e: (er: Error) => void): MFuture<T> {
            if (this.isError()) {
                e(this.getError());
                return this;
            }
            this.add((v) => {
                if (v.isError()) {
                    e(v.getError());
                }
            });
            return this;
        }

        onCancel(e: () => void): MFuture<T> {
            this.add((v) => {
                if (v.isCanceled()) {
                    e();
                }
            });
            return this;
        }

        throw(e: Error): MFuture<T> {
            this.update(e);
            return this;
        }

        add(listener: (f: MFuture<T>) => void) {
            assert(typeof listener === 'function');
            this.listeners.add(listener);
            if (this.isFinalStatus()) {
                listener(this);
            }
        }

        addOnce(listener: (f: MFuture<T>) => void) {
            if (this.isFinalStatus()) {
                listener(this);
                return;
            }
            assert(typeof listener === 'function');
            this.listeners.once(listener);
        }

        isFinalStatus(): boolean {
            return !!this._value;
        }

        timeoutError(seconds: number, s: string): MFuture<T> {
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

        link(f: MFuture<T>): MFuture<T> {
            if (this.isFinalStatus()) {
                if (f._value == this._value) return;
                f._value = this._value;
                f.listeners.fire(f);
                return
            }

            f.onCancel(() => {
                if (this.isFinalStatus()) return;
                this.cancel();
            });
            this.add(ff => {
                if (f._value == ff._value) return;
                f._value = ff._value;
                f.listeners.fire(f);
            });
            return this;
        }

        toRFuture(): RFuture<T> {
            if (this.isDone()) {
                return RFuture.completed(this.value);
            } else {
                let res = new RFuture<T>();
                this.add(f => {
                    res.update(f._value);
                });
                return res;
            }
        }

        mapComposite<E>(f: (v: T) => MFuture<E>): MFuture<E> {
            if (this.isFinalStatus()) {
                return f(this.value);
            }
            let res = new MFuture<E>();
            this.add(ff => {
                if (ff.isDone()) {
                    f(ff.value).link(res);
                }
            });
            return res;
        }

        mapRComposite<E>(f: (v: T) => RFuture<E>): RFuture<E> {
            if (this.isFinalStatus()) {
                return f(this.value);
            }
            let res = new RFuture<E>();
            this.add(ff => {
                if (ff.isDone()) {
                    f(ff.value).link(res);
                }
            });
            return res;
        }
    }

    export class Future {
        static completed = new Future().done();
        private readonly listeners = new EventConsumer<Future>();
        private prom: Promise<any>;
        private _value: boolean | Error;

        constructor() {
        }

        static of(p: Promise<any>): Future {
            let res = new Future();
            p.then(v => res.done(), e => res.error(e));
            return res;
        }

        static any(...futures: Array<Future>): Future {
            for (let f of futures) {
                if (f.isDone()) return f;
            }
            let result = new Future();
            for (let f of futures) {
                f.to(() => result.tryDone());
            }
            return result;
        }

        static all(...futures: Array<Future>): Future {
            let result = new Future();
            let counter = futures.length;
            for (let i = 0; i < futures.length; i++) {
                let f = futures[i];
                f.to(() => {
                    counter--;
                    if (counter == 0) {
                        result.done();
                    }
                });
            }
            return result;
        }

        to(listener: () => void) {
            if (this.isDone()) {
                listener();
                return;
            }
            this.add(v => {
                if (v.isDone()) {
                    listener();
                }
            });
            return this;
        }

        async promise() {
            if (!this.prom) {
                this.prom = new Promise<boolean>((resolve, reject) => {
                    if (this.isDone()) {
                        resolve(this._value as boolean);
                    } else if (this.isError()) {
                        reject(this._value as Error);
                    } else {
                        this.add((v) => resolve(v._value as boolean));
                        this.catch((e) => reject(e as Error));
                    }
                });
                this.prom.catch(e => {
                    console.log("some error: " + e);
                });
            }
            return this.prom;
        }

        error(e: Error): void {
            this._value = e;
            this.listeners.fire(this);
        }

        done(): Future {
            this._value = true;
            this.listeners.fire(this);
            return this;
        }

        timeoutSeconds(time: number, task: (f: Future) => void) {
            setTimeout(() => {
                if (this.isNotDone()) {
                    task(this);
                }
            }, time, this);
        }

        isDone(): boolean {
            return this._value != null && !(this._value instanceof Error);
        }

        isNotDone(): boolean {
            return !this.isDone();
        }

        isError(): boolean {
            return this._value instanceof Error && this._value != FutureCancel;
        }

        isCanceled(): boolean {
            return this._value == FutureCancel;
        }

        cancel(): Future {
            this._value = FutureCancel;
            this.listeners.fire(this);
            return this;
        }

        catch(e: (er: Error) => void): Future {
            this.add((v) => {
                if (v.isError()) {
                    e(v.getError());
                }
            });
            return this;
        }

        onCancel(e: () => void): Future {
            if (this.isCanceled()) {
                e();
                return;
            }
            this.add((v) => {
                if (v.isCanceled()) {
                    e();
                }
            });
            return this;
        }

        throw(e: Error): Future {
            this._value = e;
            this.listeners.fire(this);
            return this;
        }

        add(listener: (f: Future) => void): Future {
            assert(typeof listener === 'function');
            if (this.isFinalStatus()) {
                listener(this);
                return;
            }
            this.listeners.add(listener);
            return this;
        }

        tryDone(): boolean {
            if (this._value != null) return false;
            this.done();
            return true;
        }

        isFinalStatus() {
            return this.isDone() || this.isError();
        }

        timeoutError(seconds: number, s: string): Future {
            setTimeout(() => {
                if (!this.isFinalStatus()) {
                    console.log("Timeout: " + s);
                }
            }, seconds * 1000);
            return this;
        }

        getError(): Error {
            return this._value as Error;
        }

        timeout(seconds: number, f: () => void) {
            setTimeout(() => {
                if (!this.isFinalStatus()) {
                    f();
                }
            }, seconds * 1000);
            return this;
        }

        map(f: () => void): Future {
            let res = new Future();
            this.to(() => {
                try {
                    f();
                    res.done();
                } catch (e) {
                    res.error(e);
                }
            });
            return res;
        }

        mapComposite(f: () => Future): Future {
            let res = new Future();
            this.to(() => {
                f().link(res);
            });
            return res;
        }

        link(f: Future): Future {
            if (this.isFinalStatus()) {
                if (f.isFinalStatus()) {
                    throw new Error("already done");
                }
                f._value = this._value;
                f.listeners.fire(f);
                return this;
            }
            f.onCancel(() => {
                this.cancel();
            })
            this.add((ff) => {
                if (f.isFinalStatus()) {
                    throw new Error("already done");
                }
                f._value = ff._value;
                f.listeners.fire(f);
            });
            return this;
        }

        update(val: any): Future {
            this._value = val;
            this.listeners.fire(this);
            return this;
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

        map<R>(f: (v: T) => R): Stream<R> {
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

        toMap<K, V>(kf: (v: T) => K, vf: (v: T) => V): Map<K, V> {
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

    export namespace PackIntConstants {
        export const u8 = 251n;
        export const pow8_mask = 0xFFn;
        export const pow8_shift: bigint = 8n;
        export const pow8 = 256n;
        export const k8ReservedFor16: bigint = 16n;
        export const k16ReservedFor32: bigint = 256n;
        export const pow32: bigint = 4n * 1024n * 1024n * 1024n;
        export const u16: bigint = 5n * 256n + u8 - k8ReservedFor16;  // 1515
        export const u32: bigint = 1024n * 1024n + u16 - k16ReservedFor32;  // 1 049 835
        export const u64: bigint = u32 + pow32 * k16ReservedFor32;
        // maximum supported value is (1 Tb + 1 Mb + 1515 - 1)
        export const pow16_mask = 0xFFFFn;
        export const pow16_shift: bigint = 16n;
        export const pow16 = 65536n;
        export const pow32_shift: bigint = 32n;
        export const pow32_mask = 0xFFFFFFFFn;
    }

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
            if (this.posRead === 0 && this.posWrite === this.dataView.byteLength) {
                this.posRead = this.posWrite;
                return new Uint8Array(this.dataView.buffer);
            }
            let res = new Uint8Array(this.dataView.buffer, this.posRead, this.posWrite - this.posRead);
            this.posRead = this.posWrite;
            return res;
        }

        checkSize(addSize: number) {
            if (this.posWrite + addSize > this.dataView.byteLength) {
                this.dataView = new DataView(this.dataView.buffer.resize((this.posWrite + addSize) * 1.5));
            }
        }

        writeData(data: DataIO, len: number = data.getSizeForRead()) {
            assert(data instanceof DataIO);
            if (data.isEmpty()) return;
            this.writeArray(data.dataView, data.posRead, len);
            data.posRead += len;
        }

        writeByteBI(val: bigint): void {
            this.writeByte(Number(val));
        }

        writeBoolean(val: boolean): void {
            this.writeByte(val ? 1 : 0);
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

        getSizeForWrite(): number {
            return this.dataView.byteLength - this.posWrite;
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

        read(size: number): Uint8Array {
            let result = new Uint8Array(this.dataView.buffer, this.posRead, this.posRead + size);
            this.posRead += size;
            this.checkPositions();
            return result;
        }

        readPackInt(): number {
            return Number(this.readPackLong());
        }

        readPackLong(): bigint {
            let val: bigint;
            val = BigInt(this.readUByte());
            if (val < PackIntConstants.u8) {
                return val;
            }
            let v = BigInt(this.readUByte());
            val = ((val - PackIntConstants.u8) << PackIntConstants.pow8_shift) + PackIntConstants.u8 + v;
            if (val < PackIntConstants.u16) {
                return val;
            }
            let f = BigInt(this.readUShort()) & 0xffffn;
            val = ((val - PackIntConstants.u16) << PackIntConstants.pow16_shift) + PackIntConstants.u16 + f;
            if (val < PackIntConstants.u32) {
                return val;
            }
            let f1 = BigInt(this.readInt()) & 0xffffffffn;
            val = ((val - PackIntConstants.u32) << PackIntConstants.pow32_shift) + PackIntConstants.u32 + f1;
            if (val < PackIntConstants.u64) {
                return val;
            }
            throw new Error();
        }

        writePackInt(v: number) {
            this.writePackLong(BigInt(v));
        }

        writePackLong(vv: bigint) {
            if (vv < PackIntConstants.u8) {
                this.writeByteBI(vv);
            } else if (vv < PackIntConstants.u16) {
                this.writeByteBI((((vv - PackIntConstants.u8) >> PackIntConstants.pow8_shift) & 0xffn) + PackIntConstants.u8);
                this.writeByteBI((vv - PackIntConstants.u8) & PackIntConstants.pow8_mask);
            } else if (vv < PackIntConstants.u32) {
                this.writeByte(255);
                this.writeByteBI((((vv - PackIntConstants.u16) >> PackIntConstants.pow16_shift) - PackIntConstants.u8 + PackIntConstants.u16));
                this.writeShortBI(((vv - PackIntConstants.u16) & PackIntConstants.pow16_mask));
            } else if (vv < PackIntConstants.u64) {
                this.writeByte(255);
                this.writeByte(255);
                this.writeShortBI((((vv - PackIntConstants.u32) >> PackIntConstants.pow32_shift) - PackIntConstants.u16 + PackIntConstants.u32));
                this.writeIntBI(((vv - PackIntConstants.u32) & PackIntConstants.pow32_mask));
            }
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
                        if (this.val < PackIntConstants.u8) {
                            return true;
                        }
                        this.state = 1;
                        break;
                    case 1 :
                        let v = BigInt(inData.readUByte());
                        this.val = ((this.val - PackIntConstants.u8) << PackIntConstants.pow8_shift) + PackIntConstants.u8 + v;
                        if (this.val < PackIntConstants.u16) {
                            return true;
                        }
                        this.state = 2;
                        break;
                    case 2:
                        if (this.deserializerShort.put(inData)) {
                            let f = BigInt(this.deserializerShort.value) & 0xffffn;
                            this.val = ((this.val - PackIntConstants.u16) << PackIntConstants.pow16_shift) + PackIntConstants.u16 + f;
                            if (this.val < PackIntConstants.u32) {
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
                            this.val = ((this.val - PackIntConstants.u32) << PackIntConstants.pow32_shift) + PackIntConstants.u32 + f1;
                            if (this.val < PackIntConstants.u64) {
                                return true;
                            }
                            throw new Error();
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
}