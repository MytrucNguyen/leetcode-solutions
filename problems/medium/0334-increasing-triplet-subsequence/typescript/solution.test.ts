import { increasingTriplet } from './solution';

describe('334. Increasing Triplet Subsequence', () => {
    test('Example 1: [1,2,3,4,5]', () => {
        expect(increasingTriplet([1, 2, 3, 4, 5])).toBe(true);
    });

    test('Example 2: [5,4,3,2,1]', () => {
        expect(increasingTriplet([5, 4, 3, 2, 1])).toBe(false);
    });

    test('Example 3: [2,1,5,0,4,6]', () => {
        expect(increasingTriplet([2, 1, 5, 0, 4, 6])).toBe(true);
    });

    test('Exactly three elements — increasing', () => {
        expect(increasingTriplet([1, 2, 3])).toBe(true);
    });

    test('Exactly three elements — not increasing', () => {
        expect(increasingTriplet([3, 2, 1])).toBe(false);
    });

    test('Two elements', () => {
        expect(increasingTriplet([1, 2])).toBe(false);
    });

    test('Single element', () => {
        expect(increasingTriplet([1])).toBe(false);
    });

    test('First updates after second is set', () => {
        expect(increasingTriplet([5, 1, 6, 0, 7])).toBe(true);
    });

    test('All same values', () => {
        expect(increasingTriplet([1, 1, 1, 1])).toBe(false);
    });

    test('Triplet at the end', () => {
        expect(increasingTriplet([5, 4, 3, 1, 2, 3])).toBe(true);
    });

    test('Negative numbers', () => {
        expect(increasingTriplet([-3, -2, -1])).toBe(true);
    });
});
