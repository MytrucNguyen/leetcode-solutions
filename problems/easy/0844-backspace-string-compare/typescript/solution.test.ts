import { backspaceCompare } from './solution';

describe('844. Backspace String Compare', () => {
    test('Example 1: "ab#c" vs "ad#c"', () => {
        expect(backspaceCompare('ab#c', 'ad#c')).toBe(true);
    });

    test('Example 2: "ab##" vs "c#d#"', () => {
        expect(backspaceCompare('ab##', 'c#d#')).toBe(true);
    });

    test('Example 3: "a#c" vs "b"', () => {
        expect(backspaceCompare('a#c', 'b')).toBe(false);
    });

    test('No backspaces', () => {
        expect(backspaceCompare('abc', 'abc')).toBe(true);
    });

    test('All backspaced to empty', () => {
        expect(backspaceCompare('a#', 'b#')).toBe(true);
    });

    test('Multiple consecutive backspaces', () => {
        expect(backspaceCompare('abc###', '')).toBe(true);
    });

    test('Backspace on empty', () => {
        expect(backspaceCompare('#a', 'a')).toBe(true);
    });

    test('Different lengths same result', () => {
        expect(backspaceCompare('a##b', 'b')).toBe(true);
    });

    test('Single characters', () => {
        expect(backspaceCompare('a', 'a')).toBe(true);
    });

    test('Single characters different', () => {
        expect(backspaceCompare('a', 'b')).toBe(false);
    });
});
