import { lengthOfLIS } from './solution';

describe('300. Longest Increasing Subsequence', () => {
    test('Example 1: [10,9,2,5,3,7,101,18]', () => {
        expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
    });

    test('Example 2: [0,1,0,3,2,3]', () => {
        expect(lengthOfLIS([0, 1, 0, 3, 2, 3])).toBe(4);
    });

    test('Example 3: [7,7,7,7,7]', () => {
        expect(lengthOfLIS([7, 7, 7, 7, 7])).toBe(1);
    });

    test('Single element', () => {
        expect(lengthOfLIS([10])).toBe(1);
    });

    test('Already sorted', () => {
        expect(lengthOfLIS([1, 2, 3, 4, 5])).toBe(5);
    });

    test('Reverse sorted', () => {
        expect(lengthOfLIS([5, 4, 3, 2, 1])).toBe(1);
    });

    test('Two elements increasing', () => {
        expect(lengthOfLIS([1, 2])).toBe(2);
    });

    test('Two elements decreasing', () => {
        expect(lengthOfLIS([2, 1])).toBe(1);
    });

    test('LIS not at the end', () => {
        expect(lengthOfLIS([1, 3, 5, 2, 4])).toBe(3);
    });

    test('Negative numbers', () => {
        expect(lengthOfLIS([-2, -1, 0, 1])).toBe(4);
    });
});
