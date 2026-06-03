import { validPalindrome } from './solution.test';

describe('680. Valid Palindrome II', () => {
    test('Example 1: "aba"', () => {
        expect(validPalindrome('aba')).toBe(true);
    });

    test('Example 2: "abca"', () => {
        expect(validPalindrome('abca')).toBe(true);
    });

    test('Example 3: "abc"', () => {
        expect(validPalindrome('abc')).toBe(false);
    });

    test('Already palindrome', () => {
        expect(validPalindrome('racecar')).toBe(true);
    });

    test('Single character', () => {
        expect(validPalindrome('a')).toBe(true);
    });

    test('Two same characters', () => {
        expect(validPalindrome('aa')).toBe(true);
    });

    test('Two different characters', () => {
        expect(validPalindrome('ab')).toBe(true);
    });

    test('Remove from start', () => {
        expect(validPalindrome('deeee')).toBe(true);
    });

    test('Remove from end', () => {
        expect(validPalindrome('eeeeed')).toBe(true);
    });

    test('Need two removals — false', () => {
        expect(validPalindrome('abcde')).toBe(false);
    });

    test('Remove from middle', () => {
        expect(validPalindrome('abcba')).toBe(true);
    });
});
