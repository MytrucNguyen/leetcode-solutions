import { countSubstrings } from './solution';

describe('647. Palindromic Substrings', () => {
    test('Example 1: "abc"', () => {
        expect(countSubstrings('abc')).toBe(3);
    });

    test('Example 2: "aaa"', () => {
        expect(countSubstrings('aaa')).toBe(6);
    });

    test('Single character', () => {
        expect(countSubstrings('a')).toBe(1);
    });

    test('Two same characters', () => {
        expect(countSubstrings('aa')).toBe(3);
    });

    test('Two different characters', () => {
        expect(countSubstrings('ab')).toBe(2);
    });

    test('Palindrome string', () => {
        expect(countSubstrings('aba')).toBe(4);
    });

    test('Longer string', () => {
        expect(countSubstrings('abba')).toBe(6);
    });

    test('All same characters', () => {
        expect(countSubstrings('aaaa')).toBe(10);
    });
});
