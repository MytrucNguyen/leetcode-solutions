import { findPeakElement } from './solution';

describe('162. Find Peak Element', () => {
    test('Example 1: [1,2,3,1]', () => {
        const idx = findPeakElement([1, 2, 3, 1]);
        expect(idx).toBe(2);
    });

    test('Example 2: [1,2,1,3,5,6,4]', () => {
        const idx = findPeakElement([1, 2, 1, 3, 5, 6, 4]);
        expect([1, 5]).toContain(idx);
    });

    test('Single element', () => {
        expect(findPeakElement([1])).toBe(0);
    });

    test('Two elements ascending', () => {
        expect(findPeakElement([1, 2])).toBe(1);
    });

    test('Two elements descending', () => {
        expect(findPeakElement([2, 1])).toBe(0);
    });

    test('Peak at the start', () => {
        const idx = findPeakElement([3, 2, 1]);
        expect(idx).toBe(0);
    });

    test('Peak at the end', () => {
        const idx = findPeakElement([1, 2, 3]);
        expect(idx).toBe(2);
    });

    test('Multiple peaks — any valid', () => {
        const nums = [1, 3, 1, 3, 1];
        const idx = findPeakElement(nums);
        const isValid =
            (idx === 0 || nums[idx] > nums[idx - 1]) &&
            (idx === nums.length - 1 || nums[idx] > nums[idx + 1]);
        expect(isValid).toBe(true);
    });

    test('Large values', () => {
        const idx = findPeakElement([1, 2, 3, 4, 5]);
        expect(idx).toBe(4);
    });
});
