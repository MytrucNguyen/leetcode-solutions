import { searchRange } from './solution';

describe('34. Find First and Last Position of Element in Sorted Array', () => {
    test('Example 1: [5,7,7,8,8,10], target 8', () => {
        expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4]);
    });

    test('Example 2: [5,7,7,8,8,10], target 6', () => {
        expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1]);
    });

    test('Example 3: empty array', () => {
        expect(searchRange([], 0)).toEqual([-1, -1]);
    });

    test('Single element found', () => {
        expect(searchRange([1], 1)).toEqual([0, 0]);
    });

    test('Single element not found', () => {
        expect(searchRange([1], 2)).toEqual([-1, -1]);
    });

    test('All same elements', () => {
        expect(searchRange([8, 8, 8, 8, 8], 8)).toEqual([0, 4]);
    });

    test('Target at start', () => {
        expect(searchRange([1, 1, 2, 3, 4], 1)).toEqual([0, 1]);
    });

    test('Target at end', () => {
        expect(searchRange([1, 2, 3, 4, 4], 4)).toEqual([3, 4]);
    });

    test('Single occurrence in middle', () => {
        expect(searchRange([1, 2, 3, 4, 5], 3)).toEqual([2, 2]);
    });

    test('Target smaller than all', () => {
        expect(searchRange([2, 3, 4], 1)).toEqual([-1, -1]);
    });

    test('Target larger than all', () => {
        expect(searchRange([2, 3, 4], 5)).toEqual([-1, -1]);
    });
});
