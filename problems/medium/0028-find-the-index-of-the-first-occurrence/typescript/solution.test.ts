import { strStr } from './solution';

describe('28. Find the Index of the First Occurrence in a String', () => {
    test('Example 1: "sadbutsad", "sad"', () => {
        expect(strStr('sadbutsad', 'sad')).toBe(0);
    });

    test('Example 2: "leetcode", "leeto"', () => {
        expect(strStr('leetcode', 'leeto')).toBe(-1);
    });

    test('Needle at the end', () => {
        expect(strStr('hello world', 'world')).toBe(6);
    });

    test('Needle in the middle', () => {
        expect(strStr('abcdef', 'cde')).toBe(2);
    });

    test('Exact match', () => {
        expect(strStr('abc', 'abc')).toBe(0);
    });

    test('Needle longer than haystack', () => {
        expect(strStr('ab', 'abc')).toBe(-1);
    });

    test('Single character match', () => {
        expect(strStr('a', 'a')).toBe(0);
    });

    test('Single character no match', () => {
        expect(strStr('a', 'b')).toBe(-1);
    });

    test('Partial match then fail', () => {
        expect(strStr('aabaaab', 'aaab')).toBe(3);
    });

    test('Multiple occurrences — return first', () => {
        expect(strStr('abcabc', 'abc')).toBe(0);
    });
});
