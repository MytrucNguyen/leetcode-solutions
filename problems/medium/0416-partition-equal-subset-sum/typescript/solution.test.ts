import { canPartition } from './solution';

describe('416. Partition Equal Subset Sum', () => {
    test('Example 1: [1,5,11,5]', () => {
        expect(canPartition([1, 5, 11, 5])).toBe(true);
    });

    test('Example 2: [1,2,3,5]', () => {
        expect(canPartition([1, 2, 3, 5])).toBe(false);
    });

    test('Two equal elements', () => {
        expect(canPartition([1, 1])).toBe(true);
    });

    test('Two different elements', () => {
        expect(canPartition([1, 2])).toBe(false);
    });

    test('Single element', () => {
        expect(canPartition([1])).toBe(false);
    });

    test('Odd total', () => {
        expect(canPartition([1, 2, 3, 4, 5])).toBe(false);
    });

    test('Even total, can partition', () => {
        expect(canPartition([1, 2, 3, 4])).toBe(true);
    });

    test('All same values even count', () => {
        expect(canPartition([3, 3, 3, 3])).toBe(true);
    });

    test('Large values', () => {
        expect(canPartition([100, 100, 100, 100, 100, 100, 100, 100])).toBe(true);
    });

    test('Cannot partition despite even total', () => {
        expect(canPartition([1, 2, 5])).toBe(false);
    });
});
