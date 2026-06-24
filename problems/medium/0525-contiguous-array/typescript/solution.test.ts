import { findMaxLength } from './solution';

describe('525. Contiguous Array', () => {
    test('Example 1: [0, 1]', () => {
        expect(findMaxLength([0, 1])).toBe(2);
    });

    test('Example 2: [0, 1, 0]', () => {
        expect(findMaxLength([0, 1, 0])).toBe(2);
    });

    test('All zeros', () => {
        expect(findMaxLength([0, 0, 0])).toBe(0);
    });

    test('All ones', () => {
        expect(findMaxLength([1, 1, 1])).toBe(0);
    });

    test('Entire array is balanced', () => {
        expect(findMaxLength([0, 1, 1, 0])).toBe(4);
    });

    test('Single element', () => {
        expect(findMaxLength([0])).toBe(0);
    });

    test('Balanced in the middle', () => {
        expect(findMaxLength([1, 1, 0, 1, 0, 0])).toBe(6);
    });

    test('Multiple balanced subarrays', () => {
        expect(findMaxLength([0, 1, 0, 1])).toBe(4);
    });

    test('Longest not at the start', () => {
        expect(findMaxLength([0, 0, 1, 0, 1, 1])).toBe(6);
    });

    test('Alternating', () => {
        expect(findMaxLength([0, 1, 0, 1, 0, 1])).toBe(6);
    });
});
