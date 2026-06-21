import { combinationSum2 } from './solution';

describe('40. Combination Sum II', () => {
    test('Example 1: [10,1,2,7,6,1,5], target 8', () => {
        const result = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
        const sorted = result.map((c) => JSON.stringify(c)).sort();
        expect(sorted).toEqual(
            [
                JSON.stringify([1, 1, 6]),
                JSON.stringify([1, 2, 5]),
                JSON.stringify([1, 7]),
                JSON.stringify([2, 6]),
            ].sort(),
        );
    });

    test('Example 2: [2,5,2,1,2], target 5', () => {
        const result = combinationSum2([2, 5, 2, 1, 2], 5);
        const sorted = result.map((c) => JSON.stringify(c)).sort();
        expect(sorted).toEqual([JSON.stringify([1, 2, 2]), JSON.stringify([5])].sort());
    });

    test('No valid combination', () => {
        expect(combinationSum2([2, 4, 6], 1)).toEqual([]);
    });

    test('Single element matches', () => {
        expect(combinationSum2([5], 5)).toEqual([[5]]);
    });

    test('Single element too big', () => {
        expect(combinationSum2([5], 3)).toEqual([]);
    });

    test('All same values', () => {
        const result = combinationSum2([1, 1, 1, 1], 2);
        expect(result).toEqual([[1, 1]]);
    });

    test('Use all elements', () => {
        const result = combinationSum2([1, 2, 3], 6);
        expect(result).toEqual([[1, 2, 3]]);
    });

    test('Multiple duplicates', () => {
        const result = combinationSum2([3, 1, 3, 5, 1, 1], 8);
        const sorted = result.map((c) => JSON.stringify(c)).sort();
        expect(sorted).toEqual(
            [
                JSON.stringify([1, 1, 1, 5]),
                JSON.stringify([1, 1, 3, 3]),
                JSON.stringify([3, 5]),
            ].sort(),
        );
    });
});
