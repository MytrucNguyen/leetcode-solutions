import { longestPalindrome } from './solution';

describe('409. Longest Palindrome', () => {
    test('Example 1: "abccccdd"', () => {
        expect(longestPalindrome('abccccdd')).toBe(7);
    });

    test('Example 2: "a"', () => {
        expect(longestPalindrome('a')).toBe(1);
    });

    test('All same characters', () => {
        expect(longestPalindrome('aaaa')).toBe(4);
    });

    test('All different characters', () => {
        expect(longestPalindrome('abcdef')).toBe(1);
    });

    test('All pairs', () => {
        expect(longestPalindrome('aabbcc')).toBe(6);
    });

    test('Case sensitive', () => {
        expect(longestPalindrome('Aa')).toBe(1);
    });

    test('Mix of even and odd', () => {
        expect(longestPalindrome('aaabbbccc')).toBe(7);
    });

    test('Single pair', () => {
        expect(longestPalindrome('bb')).toBe(2);
    });

    test('Three of same', () => {
        expect(longestPalindrome('aaa')).toBe(3);
    });
});
