// =============================================================================================
// FILE: aether.utils.ts
// PURPOSE: Contains low-level utilities, HexUtils, Destroyer, and RU (Runtime Utilities).
// DEPENDENCIES: aether.types.ts, aether.future.ts, aether.logging.ts
// =============================================================================================

import {
    ConcurrentLinkedQueue_C, Disposable, ARunnable, AConsumer,
    AtomicReference, AtomicLong,
    Destroyable, UUID
} from './aether_types';
import { Log } from './aether_logging';
import { AFuture } from './aether_future';
import { AString } from './aether_astring';

// --- HexUtils ---
export const HexUtils = {
    HEX_ARRAY: "0123456789ABCDEF".split(''),
    HEX_MAP: "0123456789ABCDEF".split('').reduce((acc, char, index) => ({ ...acc, [char]: index }), {}) as { [key: string]: number },
    hexToBytes(s: string): Uint8Array {
        const charSequence = s as string;
        if (!s || s.length % 2 !== 0) throw new Error(`Invalid hex string (null, empty, or odd length): "${s}"`);
        const byteArray = new Uint8Array(charSequence.length / 2);
        for (let i = 0; i < charSequence.length; i = i + 2) {
            const c1 = HexUtils.HEX_MAP[charSequence[i].toUpperCase()];
            const c2 = HexUtils.HEX_MAP[charSequence[i + 1].toUpperCase()];
            if (c1 === undefined || c2 === undefined) throw new Error(`Invalid hex character: ${charSequence.substring(i, i + 2)}`);
            byteArray[i / 2] = ((c1 << 4) | c2);
        }
        return byteArray;
    },
    toHexString(bytes: Uint8Array | number[] | null | undefined, offset?: number, endIndex?: number, result?: AString): string | void {
        if (!bytes) {
            if (result) { result.addNull(); return; } else { return "null"; }
        }
        const dataBytes = bytes instanceof Uint8Array ? bytes : Uint8Array.from(bytes);
        const start = offset === undefined ? 0 : offset;
        const end = endIndex === undefined ? dataBytes.length : endIndex;
        if (result) {
            for (let i = start; i < end; i++) {
                const v = dataBytes[i] & 0xFF;
                result.add(HexUtils.HEX_ARRAY[v >>> 4]);
                result.add(HexUtils.HEX_ARRAY[v & 0x0F]);
            }
            return;
        } else {
            let res: string[] = [];
            for (let i = start; i < end; i++) {
                const v = dataBytes[i] & 0xFF;
                res.push(HexUtils.HEX_ARRAY[v >>> 4]);
                res.push(HexUtils.HEX_ARRAY[v & 0x0F]);
            }
            return res.join('');
        }
    }
};

// =============================================================================================
// DESTROYER
// =============================================================================================

// <-- Destroyable реализует Disposable, поэтому Destroyer реализует оба
export class Destroyer implements Destroyable {
    public readonly name: string;
    // <-- Очередь может хранить оба типа, но Disposable является базовым
    private readonly queue: ConcurrentLinkedQueue_C<Disposable> = new ConcurrentLinkedQueue_C();
    private destroyFuture: AtomicReference<AFuture | null> = new AtomicReference(null);

    constructor(name: string) { this.name = name; }

    public isDestroyed(): boolean { return this.destroyFuture.get() !== null; }

    // <-- Принимает базовый Disposable или более конкретный Destroyable
    public add(resource: Disposable | Destroyable): void {
        // Важно: Сначала проверяем на Destroyable, т.к. он Tакже является Disposable
        if (typeof (resource as Destroyable).destroy === 'function') {
            this.queue.add(resource as Destroyable);
        } else if (typeof (resource as Disposable)[Symbol.dispose] === 'function') {
            this.queue.add(resource as Disposable);
        } else {
            Log.error("Attempted to add non-Disposable/Destroyable to Destroyer", { object: resource });
        }
    }

    public destroy(force: boolean): AFuture {
        const res = AFuture.make();
        if (!this.destroyFuture.compareAndSet(null, res)) {
            return this.destroyFuture.get()!;
        }

        const destroyTasks: AFuture[] = [];
        let e: Disposable | undefined;
        while ((e = this.queue.poll()) !== undefined) {
            try {
                // Важно: Сначала проверяем на асинхронный 'destroy'
                if (typeof (e as Destroyable).destroy === 'function') {
                    destroyTasks.push((e as Destroyable).destroy(force).timeoutError(5, `Timeout destroying unit: ${e.toString()}`));
                }
                // Иначе используем синхронный 'dispose'
                else if (typeof (e as Disposable)[Symbol.dispose] === 'function') {
                    (e as Disposable)[Symbol.dispose]();
                } else {
                    Log.warn("Object in Destroyer queue has no destroy or dispose method", { object: e });
                }
            } catch (err) {
                Log.error("Error during destroy/dispose call", { error: err as Error, object: e });
            }
        }

        const allDestroy = AFuture.all(...destroyTasks);

        allDestroy.to(() => { if (res.tryDone()) { /* done */ } })
            .onError(e => res.error(e));

        res.timeoutError(5, `Timeout destroying all units in Destroyer[${this.name}]`);
        return res;
    }

    // <-- Реализуем [Symbol.dispose] для самого Destroyer
    public [Symbol.dispose](): void {
        this.destroy(true); // 'true' для force, т.к. 'using' обычно быстрый
    }
}

// =============================================================================================
// RU - Runtime Utilities
// =============================================================================================

export const RU = {
    AtomicLong: AtomicLong,
    AtomicReference: AtomicReference,
    ConcurrentHashMap: Map,
    ConcurrentLinkedQueue: ConcurrentLinkedQueue_C,
    ConcurrentHashSet: Set,

    time: (): number => Date.now(),
    schedule: (ms: number, task: ARunnable): Disposable => {
        const timer = setTimeout(Log.wrap(task), ms);
        return { [Symbol.dispose]: () => clearTimeout(timer) };
    },

    // <-- Возвращаемый тип изменен на Destroyable
    scheduleAtFixedRate: (resTo: Destroyable, period: number, timeUnit: "MILLISECONDS" | "SECONDS", t: ARunnable): Destroyable => {
        const periodMs = period * (timeUnit === "SECONDS" ? 1000 : 1);
        const wrappedTask = Log.wrap(t);
        const timer = setInterval(wrappedTask, periodMs);

        // Этот объект реализует оба интерфейса
        const destroyableTimer: Destroyable = {
            // Асинхронный destroy
            destroy: (_f: boolean) => {
                clearInterval(timer);
                return AFuture.of();
            },
            // Синхронный dispose
            [Symbol.dispose]: () => {
                clearInterval(timer);
            }
        };

        if (resTo && typeof (resTo as Destroyer).add === 'function') {
            (resTo as Destroyer).add(destroyableTimer);
        } else {
            Log.warn("scheduleAtFixedRate: Provided 'resTo' is not a Destroyer. Timer will not be automatically cleaned up.");
        }

        return destroyableTimer;
    },
    cast: <T>(t: any): T => t as T,
    error: <T>(e: Error): T => { Log.error(e); throw e; },

    readAll: <T>(q: ConcurrentLinkedQueue_C<T>, o: AConsumer<T>) => {
        let element: T | undefined;
        while ((element = q.poll()) !== undefined) {
            try { o(element); } catch (err) { Log.error("Error processing item in readAll", { error: err as Error, item: element }); }
        }
    },
};

// =============================================================================================
// Standard UUIDs
// =============================================================================================

export const StandardUUIDs: { ROOT_UID: UUID; TEST_UID: UUID; ANONYMOUS_UID: UUID; } = {
    ROOT_UID: UUID.fromString("ed307ca7-8369-4342-91ee-60c8fc6f9b6b"),
    TEST_UID: UUID.fromString("3ac93165-3d37-4970-87a6-fa4ee27744e4"),
    ANONYMOUS_UID: UUID.fromString("237e2dc0-21a4-4e83-8184-c43052f93b79"),
};
// --- ДОБАВЛЕННЫЕ УТИЛИТЫ ДЛЯ ПОРТИРОВАНИЯ ---

export const Arrays = {
    equals: (a: Uint8Array | null | undefined, b: Uint8Array | null | undefined): boolean => {
        if (a === b) return true;
        if (!a || !b) return false;
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    },
    hashCode: (a: Uint8Array | null | undefined): number => {
        if (!a) return 0;
        let hash = 1;
        for (let i = 0; i < a.length; i++) {
            hash = (31 * hash + a[i]) | 0; // | 0 to force 32-bit int
        }
        return hash;
    }
};

export const Objects = {
    hash: (...values: any[]): number => {
        let result = 1;
        for (const val of values) {
            let hash;
            if (val === null || val === undefined) {
                hash = 0;
            } else if (typeof (val as any).hashCode === 'function') {
                hash = (val as any).hashCode();
            } else if (val instanceof Uint8Array) {
                hash = Arrays.hashCode(val);
            } else if (typeof val === 'string') {
                // Простой хэш для строк
                hash = 0;
                for (let i = 0; i < val.length; i++) {
                    hash = (31 * hash + val.charCodeAt(i)) | 0;
                }
            } else if (typeof val === 'number') {
                hash = val | 0;
            } else if (typeof val === 'boolean') {
                hash = val ? 1231 : 1237;
            } else {
                // Fallback
                hash = 0;
                const s = String(val);
                for (let i = 0; i < s.length; i++) {
                    hash = (31 * hash + s.charCodeAt(i)) | 0;
                }
            }
            result = (31 * result + (hash | 0)) | 0;
        }
        return result;
    }
};

export const DataUtils = {
    writeLongLE: (arr: Uint8Array, offset: number, value: number | bigint): void => {
        const view = new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
        let valueAsBigInt: bigint;
        if (typeof value === 'bigint') {
            valueAsBigInt = value;
        } else {
            valueAsBigInt = BigInt(Math.trunc(value));
        }

        if (typeof view.setBigUint64 === 'function') {
            view.setBigUint64(offset, valueAsBigInt, true); // true = Little-Endian
        } else {
            const high = Number(BigInt.asUintN(32, valueAsBigInt >> 32n));
            const low = Number(BigInt.asUintN(32, valueAsBigInt));
            view.setUint32(offset, low, true);
            view.setUint32(offset + 4, high, true);
        }
    }
};

/**
 * Интерфейс, определяющий методы очереди, как в java.util.Queue.
 */
interface IQueue<T> {
  /**
   * Добавляет элемент в конец очереди.
   * Возвращает true, если элемент был успешно добавлен.
   * Выбрасывает ошибку, если очередь ограничена по размеру и заполнена.
   */
  add(element: T): boolean;

  /**
   * Добавляет элемент в конец очереди.
   * Возвращает true, если элемент был успешно добавлен.
   * В случае с очередью с ограничением размера, вернет false, если очередь заполнена.
   */
  offer(element: T): boolean;

  /**
   * Извлекает и удаляет элемент из начала очереди.
   * Выбрасывает ошибку, если очередь пуста.
   */
  remove(): T;

  /**
   * Извлекает и удаляет элемент из начала очереди.
   * Возвращает null, если очередь пуста.
   */
  poll(): T | null;

  /**
   * Извлекает, но не удаляет, элемент из начала очереди.
   * Выбрасывает ошибку, если очередь пуста.
   */
  element(): T;

  /**
   * Извлекает, но не удаляет, элемент из начала очереди.
   * Возвращает null, если очередь пуста.
   */
  peek(): T | null;

  /**
   * Возвращает количество элементов в очереди.
   */
  size(): number;

  /**
   * Проверяет, пуста ли очередь.
   */
  isEmpty(): boolean;

  /**
   * Очищает очередь.
   */
  clear(): void;
}

/**
 * Реализация очереди (FIFO) на TypeScript, имитирующая API java.util.Queue.
 * Эта реализация является безразмерной (unbounded).
 */
export class Queue<T> implements IQueue<T> {
  // Мы используем приватный массив для хранения элементов.
  // Добавление (enqueue) будет в конец массива (push).
  // Удаление (dequeue) будет из начала массива (shift).
  private storage: T[] = [];

  /**
   * Создает новую очередь.
   * @param initialData Опциональный массив для инициализации очереди.
   */
  constructor(initialData: T[] = []) {
    this.storage = [...initialData];
  }

  // --- МЕТОДЫ ДОБАВЛЕНИЯ ---

  /**
   * Вставляет элемент в конец очереди.
   * Поскольку это безразмерная очередь, она всегда вернет true.
   * Соответствует контракту Java: выбрасывает исключение, если не удалось добавить.
   * @param element Элемент для добавления.
   * @returns true
   */
  add(element: T): boolean {
    const success = this.offer(element);
    if (!success) {
      // Этого не произойдет в данной реализации, но соответствует контракту Java
      throw new Error("Queue full");
    }
    return true;
  }

  /**
   * Вставляет элемент в конец очереди.
   * Поскольку это безразмерная очередь, она всегда вернет true.
   * @param element Элемент для добавления.
   * @returns true
   */
  offer(element: T): boolean {
    this.storage.push(element);
    return true;
  }

  // --- МЕТОДЫ УДАЛЕНИЯ ---

  /**
   * Извлекает и удаляет элемент из начала очереди.
   * Выбрасывает ошибку "NoSuchElementException", если очередь пуста.
   * @returns Элемент из начала очереди.
   */
  remove(): T {
    const item = this.storage.shift();
    if (item === undefined) {
      throw new Error("NoSuchElementException: Queue is empty");
    }
    return item;
  }

  /**
   * Извлекает и удаляет элемент из начала очереди.
   * Возвращает null, если очередь пуста.
   * @returns Элемент из начала очереди или null.
   */
  poll(): T | null {
    const item = this.storage.shift();
    // Используем '??' для обработки случая, когда item 'undefined'
    return item ?? null;
  }

  // --- МЕТОДЫ ПРОВЕРКИ ---

  /**
   * Извлекает, но не удаляет, элемент из начала очереди.
   * Выбрасывает ошибку "NoSuchElementException", если очередь пуста.
   * @returns Элемент из начала очереди.
   */
  element(): T {
    const item = this.storage[0];
    if (item === undefined) {
      throw new Error("NoSuchElementException: Queue is empty");
    }
    return item;
  }

  /**
   * Извлекает, но не удаляет, элемент из начала очереди.
   * Возвращает null, если очередь пуста.
   * @returns Элемент из начала очереди или null.
   */
  peek(): T | null {
    const item = this.storage[0];
    return item ?? null;
  }

  // --- ВСПОМОГАТЕЛЬНЫЕ МЕТОДЫ ---

  /**
   * Возвращает текущий размер очереди.
   * @returns number
   */
  size(): number {
    return this.storage.length;
  }

  /**
   * Проверяет, пуста ли очередь.
   * @returns true, если очередь пуста, иначе false.
   */
  isEmpty(): boolean {
    return this.storage.length === 0;
  }

  /**
   * Удаляет все элементы из очереди.
   */
  clear(): void {
    this.storage = [];
  }
}