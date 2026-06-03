import { combinationSum } from './solution';

describe('39. Combination Sum', () => {
    test('Example 1: [2,3,6,7], target 7', () => {
        const result = combinationSum([2, 3, 6, 7], 7);
        const sorted = result.map((c) => JSON.stringify(c)).sort();
        expect(sorted).toEqual([JSON.stringify([2, 2, 3]), JSON.stringify([7])].sort());
    });

    test('Example 2: [2,3,5], target 8', () => {
        const result = combinationSum([2, 3, 5], 8);
        const sorted = result.map((c) => JSON.stringify(c)).sort();
        expect(sorted).toEqual(
            [
                JSON.stringify([2, 2, 2, 2]),
                JSON.stringify([2, 3, 3]),
                JSON.stringify([3, 5]),
            ].sort(),
        );
    });

    test('Example 3: [2], target 1', () => {
        expect(combinationSum([2], 1)).toEqual([]);
    });

    test('Single candidate matches', () => {
        expect(combinationSum([3], 3)).toEqual([[3]]);
    });

    test('Single candidate repeated', () => {
        expect(combinationSum([2], 4)).toEqual([[2, 2]]);
    });

    test('Target equals candidate', () => {
        const result = combinationSum([1, 2], 2);
        const sorted = result.map((c) => JSON.stringify(c)).sort();
        expect(sorted).toEqual([JSON.stringify([1, 1]), JSON.stringify([2])].sort());
    });

    test('Larger target', () => {
        const result = combinationSum([2, 3], 6);
        const sorted = result.map((c) => JSON.stringify(c)).sort();
        expect(sorted).toEqual([JSON.stringify([2, 2, 2]), JSON.stringify([3, 3])].sort());
    });

    test('No valid combination', () => {
        expect(combinationSum([5, 10], 3)).toEqual([]);
    });
});
