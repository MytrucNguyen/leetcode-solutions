import { countBits } from './solution';

describe('338. Counting Bits', () => {
    test('Example 1: n = 2', () => {
        expect(countBits(2)).toEqual([0, 1, 1]);
    });

    test('Example 2: n = 5', () => {
        expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
    });

    test('n = 0', () => {
        expect(countBits(0)).toEqual([0]);
    });

    test('n = 1', () => {
        expect(countBits(1)).toEqual([0, 1]);
    });

    test('n = 8 (power of 2)', () => {
        expect(countBits(8)).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1]);
    });

    test('n = 7 (all bits set)', () => {
        expect(countBits(7)).toEqual([0, 1, 1, 2, 1, 2, 2, 3]);
    });

    test('n = 15', () => {
        const result = countBits(15);
        expect(result.length).toBe(16);
        expect(result[15]).toBe(4);
    });

    test('Every value matches popcount', () => {
        const result = countBits(10);
        for (let i = 0; i <= 10; i++) {
            let count = 0;
            let num = i;
            while (num > 0) {
                num = num & (num - 1);
                count++;
            }
            expect(result[i]).toBe(count);
        }
    });
});
