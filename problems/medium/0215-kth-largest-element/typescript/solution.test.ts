import { findKthLargest } from './solution';

describe('215. Kth Largest Element in an Array', () => {
    test('Example 1: [3,2,1,5,6,4], k=2', () => {
        expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
    });

    test('Example 2: [3,2,3,1,2,4,5,5,6], k=4', () => {
        expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
    });

    test('k = 1 (maximum)', () => {
        expect(findKthLargest([3, 1, 2], 1)).toBe(3);
    });

    test('k = array length (minimum)', () => {
        expect(findKthLargest([3, 1, 2], 3)).toBe(1);
    });

    test('Single element', () => {
        expect(findKthLargest([1], 1)).toBe(1);
    });

    test('All same elements', () => {
        expect(findKthLargest([5, 5, 5, 5], 2)).toBe(5);
    });

    test('Negative numbers', () => {
        expect(findKthLargest([-1, -5, -3, -2], 2)).toBe(-2);
    });

    test('Already sorted', () => {
        expect(findKthLargest([1, 2, 3, 4, 5], 3)).toBe(3);
    });

    test('Duplicates affect position', () => {
        expect(findKthLargest([1, 1, 1, 2, 2], 3)).toBe(1);
    });
});