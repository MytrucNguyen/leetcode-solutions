import { kidsWithCandies } from './solution';

describe('1431. Kids With the Greatest Number of Candies', () => {
    test('Example 1: [2,3,5,1,3], extra=3', () => {
        expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).toEqual([true, true, true, false, true]);
    });

    test('Example 2: [4,2,1,1,2], extra=1', () => {
        expect(kidsWithCandies([4, 2, 1, 1, 2], 1)).toEqual([true, false, false, false, false]);
    });

    test('Example 3: [12,1,12], extra=10', () => {
        expect(kidsWithCandies([12, 1, 12], 10)).toEqual([true, false, true]);
    });

    test('All same candies', () => {
        expect(kidsWithCandies([5, 5, 5], 1)).toEqual([true, true, true]);
    });

    test('Extra is 0 equivalent', () => {
        expect(kidsWithCandies([1, 2, 3], 0)).toEqual([false, false, true]);
    });

    test('Large extra makes all true', () => {
        expect(kidsWithCandies([1, 2, 3], 100)).toEqual([true, true, true]);
    });

    test('Two kids', () => {
        expect(kidsWithCandies([1, 10], 5)).toEqual([false, true]);
    });
});
