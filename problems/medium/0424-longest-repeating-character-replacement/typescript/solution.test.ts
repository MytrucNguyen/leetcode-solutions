import { characterReplacement } from './solution';

describe('424. Longest Repeating Character Replacement', () => {
    test('Example 1: "ABAB", k=2', () => {
        expect(characterReplacement('ABAB', 2)).toBe(4);
    });

    test('Example 2: "AABABBA", k=1', () => {
        expect(characterReplacement('AABABBA', 1)).toBe(4);
    });

    test('All same characters', () => {
        expect(characterReplacement('AAAA', 2)).toBe(4);
    });

    test('k = 0, no replacements', () => {
        expect(characterReplacement('AABBA', 0)).toBe(2);
    });

    test('k covers entire string', () => {
        expect(characterReplacement('ABCD', 3)).toBe(4);
    });

    test('Single character', () => {
        expect(characterReplacement('A', 0)).toBe(1);
    });

    test('Two different characters', () => {
        expect(characterReplacement('AB', 1)).toBe(2);
    });

    test('Long repeating with one different', () => {
        expect(characterReplacement('AAABBA', 1)).toBe(4);
    });

    test('k equals string length', () => {
        expect(characterReplacement('ABCDE', 5)).toBe(5);
    });
});
