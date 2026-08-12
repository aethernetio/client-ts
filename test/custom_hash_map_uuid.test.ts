
import {
    CustomHashMap,
} from "../src/aether_rcollection";
import { UUID } from "../src/aether_types";

describe("CustomHashMap with UUID keys", () => {
    test("uses UUID value equality like Java HashMap", () => {
        const first = UUID.fromString(
            "11111111-2222-3333-4444-555555555555",
        );
        const equivalent = UUID.fromString(
            "11111111-2222-3333-4444-555555555555",
        );
        const other = UUID.fromString(
            "AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEEEE",
        );

        const map = new CustomHashMap<UUID, string>();
        map.set(first, "first");
        map.set(other, "other");

        expect(map.size).toBe(2);
        expect(map.get(equivalent)).toBe("first");
        expect(map.has(equivalent)).toBe(true);

        expect(map.delete(equivalent)).toBe(true);
        expect(map.has(first)).toBe(false);
        expect(map.size).toBe(1);
    });
});
