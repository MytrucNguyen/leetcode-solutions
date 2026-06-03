import { RandomizedSet } from './solution';

describe('380. Insert Delete GetRandom O(1)', () => {
    test('LeetCode example', () => {
        const set = new RandomizedSet();
        expect(set.insert(1)).toBe(true);
        expect(set.remove(2)).toBe(false);
        expect(set.insert(2)).toBe(true);
        const rand = set.getRandom();
        expect([1, 2]).toContain(rand);
        expect(set.remove(1)).toBe(true);
        expect(set.insert(2)).toBe(false);
        expect(set.getRandom()).toBe(2);
    });

    test('Insert duplicate', () => {
        const set = new RandomizedSet();
        expect(set.insert(1)).toBe(true);
        expect(set.insert(1)).toBe(false);
    });

    test('Remove nonexistent', () => {
        const set = new RandomizedSet();
        expect(set.remove(1)).toBe(false);
    });

    test('Insert and remove same element', () => {
        const set = new RandomizedSet();
        expect(set.insert(1)).toBe(true);
        expect(set.remove(1)).toBe(true);
        expect(set.insert(1)).toBe(true);
    });

    test('Multiple elements', () => {
        const set = new RandomizedSet();
        set.insert(1);
        set.insert(2);
        set.insert(3);
        set.remove(2);
        const rand = set.getRandom();
        expect([1, 3]).toContain(rand);
    });

    test('Remove last element', () => {
        const set = new RandomizedSet();
        set.insert(1);
        set.insert(2);
        expect(set.remove(2)).toBe(true);
        expect(set.getRandom()).toBe(1);
    });

    test('Remove first element', () => {
        const set = new RandomizedSet();
        set.insert(1);
        set.insert(2);
        expect(set.remove(1)).toBe(true);
        expect(set.getRandom()).toBe(2);
    });

    test('getRandom distribution', () => {
        const set = new RandomizedSet();
        set.insert(1);
        set.insert(2);
        set.insert(3);
        const counts = new Map<number, number>();
        for (let i = 0; i < 300; i++) {
            const val = set.getRandom();
            counts.set(val, (counts.get(val) || 0) + 1);
        }
        expect(counts.has(1)).toBe(true);
        expect(counts.has(2)).toBe(true);
        expect(counts.has(3)).toBe(true);
    });
});
