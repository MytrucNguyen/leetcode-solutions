import { removeDuplicates } from './solution';

describe('1047. Remove All Adjacent Duplicates In String', () => {
    test('Example 1: "abbaca"', () => {
        expect(removeDuplicates('abbaca')).toBe('ca');
    });

    test('Example 2: "azxxzy"', () => {
        expect(removeDuplicates('azxxzy')).toBe('ay');
    });

    test('No duplicates', () => {
        expect(removeDuplicates('abc')).toBe('abc');
    });

    test('All duplicates', () => {
        expect(removeDuplicates('aabbcc')).toBe('');
    });

    test('Single character', () => {
        expect(removeDuplicates('a')).toBe('a');
    });

    test('Two same characters', () => {
        expect(removeDuplicates('aa')).toBe('');
    });

    test('Two different characters', () => {
        expect(removeDuplicates('ab')).toBe('ab');
    });

    test('Chain reaction', () => {
        expect(removeDuplicates('abba')).toBe('');
    });

    test('Long chain reaction', () => {
        expect(removeDuplicates('abccba')).toBe('');
    });

    test('Partial removal', () => {
        expect(removeDuplicates('aabccba')).toBe('a');
    });
});
