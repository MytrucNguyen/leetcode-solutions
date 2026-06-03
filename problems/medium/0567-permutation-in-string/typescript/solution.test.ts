import { checkInclusion } from './solution';

describe('567. Permutation in String', () => {
    test('Example 1: "ab" in "eidbaooo"', () => {
        expect(checkInclusion('ab', 'eidbaooo')).toBe(true);
    });

    test('Example 2: "ab" in "eidboaoo"', () => {
        expect(checkInclusion('ab', 'eidboaoo')).toBe(false);
    });

    test('Exact match', () => {
        expect(checkInclusion('abc', 'abc')).toBe(true);
    });

    test('s1 longer than s2', () => {
        expect(checkInclusion('abcd', 'ab')).toBe(false);
    });

    test('Single character match', () => {
        expect(checkInclusion('a', 'a')).toBe(true);
    });

    test('Single character no match', () => {
        expect(checkInclusion('a', 'b')).toBe(false);
    });

    test('Permutation at the end', () => {
        expect(checkInclusion('abc', 'xyzacb')).toBe(true);
    });

    test('Repeated characters', () => {
        expect(checkInclusion('aab', 'aaab')).toBe(true);
    });

    test('All same characters', () => {
        expect(checkInclusion('aaa', 'aaaa')).toBe(true);
    });
});
