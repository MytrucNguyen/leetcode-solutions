import { reverseVowels } from './solution';

describe('345. Reverse Vowels of a String', () => {
    test('Example 1: "IcesCream"', () => {
        expect(reverseVowels('IcesCrEAm')).toBe('AcesCrEIm');
    });

    test('Example 2: "leetcode"', () => {
        expect(reverseVowels('leetcode')).toBe('leotcede');
    });

    test('No vowels', () => {
        expect(reverseVowels('bcdfg')).toBe('bcdfg');
    });

    test('All vowels', () => {
        expect(reverseVowels('aeiou')).toBe('uoiea');
    });

    test('Single character vowel', () => {
        expect(reverseVowels('a')).toBe('a');
    });

    test('Single character consonant', () => {
        expect(reverseVowels('b')).toBe('b');
    });

    test('Uppercase vowels', () => {
        expect(reverseVowels('HELLO')).toBe('HOLLE');
    });

    test('Mixed case', () => {
        expect(reverseVowels('aA')).toBe('Aa');
    });

    test('Vowels at ends', () => {
        expect(reverseVowels('abcde')).toBe('ebcda');
    });
});
