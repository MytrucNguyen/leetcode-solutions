import { successfulPairs } from './solution';

describe('2300. Successful Pairs of Spells and Potions', () => {
    test('Example 1: [5,1,3], [1,2,3,4,5], success=7', () => {
        expect(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7)).toEqual([4, 0, 3]);
    });

    test('Example 2: [3,1,2], [8,5,8], success=16', () => {
        expect(successfulPairs([3, 1, 2], [8, 5, 8], 16)).toEqual([2, 0, 2]);
    });

    test('All pairs succeed', () => {
        expect(successfulPairs([10], [1, 2, 3], 5)).toEqual([3]);
    });

    test('No pairs succeed', () => {
        expect(successfulPairs([1], [1, 2, 3], 100)).toEqual([0]);
    });

    test('Single spell single potion success', () => {
        expect(successfulPairs([5], [5], 25)).toEqual([1]);
    });

    test('Single spell single potion fail', () => {
        expect(successfulPairs([5], [5], 26)).toEqual([0]);
    });

    test('Exact threshold', () => {
        expect(successfulPairs([3], [2, 3, 4], 9)).toEqual([2]);
    });

    test('Large success value', () => {
        expect(successfulPairs([100000], [100000], 10000000000)).toEqual([1]);
    });

    test('Multiple same potions', () => {
        expect(successfulPairs([2], [3, 3, 3, 5, 5], 6)).toEqual([5]);
    });
});
