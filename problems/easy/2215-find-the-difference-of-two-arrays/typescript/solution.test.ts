import { findDifference } from './solution';

describe('2215. Find the Difference of Two Arrays', () => {
    test('Example 1: [1,2,3] vs [2,4,6]', () => {
        const result = findDifference([1, 2, 3], [2, 4, 6]);
        expect(result[0].sort()).toEqual([1, 3]);
        expect(result[1].sort()).toEqual([4, 6]);
    });

    test('Example 2: [1,2,3,3] vs [1,1,2,2]', () => {
        const result = findDifference([1, 2, 3, 3], [1, 1, 2, 2]);
        expect(result[0]).toEqual([3]);
        expect(result[1]).toEqual([]);
    });

    test('No overlap', () => {
        const result = findDifference([1, 2], [3, 4]);
        expect(result[0].sort()).toEqual([1, 2]);
        expect(result[1].sort()).toEqual([3, 4]);
    });

    test('Complete overlap', () => {
        const result = findDifference([1, 2, 3], [1, 2, 3]);
        expect(result[0]).toEqual([]);
        expect(result[1]).toEqual([]);
    });

    test('Single elements different', () => {
        const result = findDifference([1], [2]);
        expect(result[0]).toEqual([1]);
        expect(result[1]).toEqual([2]);
    });

    test('Single elements same', () => {
        const result = findDifference([1], [1]);
        expect(result[0]).toEqual([]);
        expect(result[1]).toEqual([]);
    });

    test('Negative numbers', () => {
        const result = findDifference([-1, -2, 3], [-2, 4, 5]);
        expect(result[0].sort((a, b) => a - b)).toEqual([-1, 3]);
        expect(result[1].sort()).toEqual([4, 5]);
    });

    test('Duplicates in both', () => {
        const result = findDifference([1, 1, 1], [2, 2, 2]);
        expect(result[0]).toEqual([1]);
        expect(result[1]).toEqual([2]);
    });
});
