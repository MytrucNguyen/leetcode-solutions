import { LRUCache } from "./solution";

describe("LRU Cache", () => {
  test("Example 1: Basic operations", () => {
    const cache = new LRUCache(2);

    console.log("put(1, 1)");
    cache.put(1, 1);

    console.log("put(2, 2)");
    cache.put(2, 2);

    console.log("get(1) - Expected: 1");
    expect(cache.get(1)).toBe(1);

    console.log("put(3, 3) - Evicts key 2");
    cache.put(3, 3);

    console.log("get(2) - Expected: -1 (evicted)");
    expect(cache.get(2)).toBe(-1);

    console.log("put(4, 4) - Evicts key 1");
    cache.put(4, 4);

    console.log("get(1) - Expected: -1 (evicted)");
    expect(cache.get(1)).toBe(-1);

    console.log("get(3) - Expected: 3");
    expect(cache.get(3)).toBe(3);

    console.log("get(4) - Expected: 4");
    expect(cache.get(4)).toBe(4);
  });

  test("Single capacity", () => {
    const cache = new LRUCache(1);

    cache.put(1, 1);
    expect(cache.get(1)).toBe(1);

    cache.put(2, 2);
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(2)).toBe(2);
  });

  test("Update existing key", () => {
    const cache = new LRUCache(2);

    cache.put(1, 1);
    cache.put(2, 2);
    cache.put(1, 10);

    expect(cache.get(1)).toBe(10);
    expect(cache.get(2)).toBe(2);
  });

  test("Get makes key most recent", () => {
    const cache = new LRUCache(2);

    cache.put(1, 1);
    cache.put(2, 2);
    cache.get(1);
    cache.put(3, 3);

    expect(cache.get(1)).toBe(1);
    expect(cache.get(2)).toBe(-1);
    expect(cache.get(3)).toBe(3);
  });

  test("Larger capacity", () => {
    const cache = new LRUCache(3);

    cache.put(1, 1);
    cache.put(2, 2);
    cache.put(3, 3);
    cache.put(4, 4);

    expect(cache.get(1)).toBe(-1);
    expect(cache.get(2)).toBe(2);
    expect(cache.get(3)).toBe(3);
    expect(cache.get(4)).toBe(4);
  });

  test("Get non-existent key", () => {
    const cache = new LRUCache(2);

    expect(cache.get(1)).toBe(-1);

    cache.put(1, 1);
    expect(cache.get(1)).toBe(1);
    expect(cache.get(2)).toBe(-1);
  });
});
