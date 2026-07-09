import { findMaxAverage } from './solution';

describe('643. Maximum Average Subarray I', () => {
    test('Example 1: [1,12,-5,-6,50,3], k=4', () => {
        expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBeCloseTo(12.75);
    });

    test('Example 2: [5], k=1', () => {
        expect(findMaxAverage([5], 1)).toBeCloseTo(5.0);
    });

    test('k equals array length', () => {
        expect(findMaxAverage([1, 2, 3], 3)).toBeCloseTo(2.0);
    });

    test('All same values', () => {
        expect(findMaxAverage([5, 5, 5, 5], 2)).toBeCloseTo(5.0);
    });

    test('Negative numbers', () => {
        expect(findMaxAverage([-1, -2, -3, -4], 2)).toBeCloseTo(-1.5);
    });

    test('Max at the end', () => {
        expect(findMaxAverage([1, 2, 3, 4, 5], 2)).toBeCloseTo(4.5);
    });

    test('Max at the start', () => {
        expect(findMaxAverage([5, 4, 1, 1, 1], 2)).toBeCloseTo(4.5);
    });

    test('Single negative and positives', () => {
        expect(findMaxAverage([0, 4, 0, 3, 2], 1)).toBeCloseTo(4.0);
    });
});
