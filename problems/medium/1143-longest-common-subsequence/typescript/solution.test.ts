import { longestCommonSubsequence } from './solution';

describe('1143. Longest Common Subsequence', () => {
    test('Example 1: "abcde" and "ace"', () => {
        expect(longestCommonSubsequence('abcde', 'ace')).toBe(3);
    });

    test('Example 2: "abc" and "abc"', () => {
        expect(longestCommonSubsequence('abc', 'abc')).toBe(3);
    });

    test('Example 3: "abc" and "def"', () => {
        expect(longestCommonSubsequence('abc', 'def')).toBe(0);
    });

    test('Single character match', () => {
        expect(longestCommonSubsequence('a', 'a')).toBe(1);
    });

    test('Single character no match', () => {
        expect(longestCommonSubsequence('a', 'b')).toBe(0);
    });

    test('One is subsequence of other', () => {
        expect(longestCommonSubsequence('ace', 'abcde')).toBe(3);
    });

    test('Interleaved match', () => {
        expect(longestCommonSubsequence('axbycz', 'abc')).toBe(3);
    });

    test('Longer strings', () => {
        expect(longestCommonSubsequence('hofubmnylkra', 'pqhgxgdofcvmr')).toBe(5);
    });

    test('Repeated characters', () => {
        expect(longestCommonSubsequence('aaa', 'aa')).toBe(2);
    });
});
