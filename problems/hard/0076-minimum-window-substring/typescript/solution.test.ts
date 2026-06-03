import { minWindow } from './solution';

describe('76. Minimum Window Substring', () => {
    test('Example 1: "ADOBECODEBANC", "ABC"', () => {
        expect(minWindow('ADOBECODEBANC', 'ABC')).toBe('BANC');
    });

    test('Example 2: "a", "a"', () => {
        expect(minWindow('a', 'a')).toBe('a');
    });

    test('Example 3: "a", "aa"', () => {
        expect(minWindow('a', 'aa')).toBe('');
    });

    test('t longer than s', () => {
        expect(minWindow('ab', 'abc')).toBe('');
    });

    test('Exact match', () => {
        expect(minWindow('abc', 'abc')).toBe('abc');
    });

    test('Duplicate characters in t', () => {
        expect(minWindow('aaab', 'aa')).toBe('aa');
    });

    test('Window at the start', () => {
        expect(minWindow('abcdef', 'abc')).toBe('abc');
    });

    test('Window at the end', () => {
        expect(minWindow('defabc', 'abc')).toBe('abc');
    });

    test('Single character repeated', () => {
        expect(minWindow('bbbb', 'b')).toBe('b');
    });

    test('Case sensitive', () => {
        expect(minWindow('Abc', 'a')).toBe('');
    });
});
