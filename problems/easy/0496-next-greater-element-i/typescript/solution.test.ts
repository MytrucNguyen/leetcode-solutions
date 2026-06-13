import { nextGreaterElement } from './solution';

describe('496. Next Greater Element I', () => {
    test('Example 1: [4,1,2], [1,3,4,2]', () => {
        expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toEqual([-1, 3, -1]);
    });

    test('Example 2: [2,4], [1,2,3,4]', () => {
        expect(nextGreaterElement([2, 4], [1, 2, 3, 4])).toEqual([3, -1]);
    });

    test('Single element, has greater', () => {
        expect(nextGreaterElement([1], [1, 2])).toEqual([2]);
    });

    test('Single element, no greater', () => {
        expect(nextGreaterElement([2], [1, 2])).toEqual([-1]);
    });

    test('All decreasing', () => {
        expect(nextGreaterElement([3, 2, 1], [3, 2, 1])).toEqual([-1, -1, -1]);
    });

    test('All increasing', () => {
        expect(nextGreaterElement([1, 2, 3], [1, 2, 3, 4])).toEqual([2, 3, 4]);
    });

    test('nums1 equals nums2', () => {
        expect(nextGreaterElement([1, 3, 2], [1, 3, 2])).toEqual([3, -1, -1]);
    });

    test('Next greater is not adjacent', () => {
        expect(nextGreaterElement([5], [5, 1, 2, 3, 6])).toEqual([6]);
    });
});
