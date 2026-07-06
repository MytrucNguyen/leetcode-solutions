import { gcdOfStrings } from './solution';

describe('1071. Greatest Common Divisor of Strings', () => {
    test('Example 1: "ABCABC" and "ABC"', () => {
        expect(gcdOfStrings('ABCABC', 'ABC')).toBe('ABC');
    });

    test('Example 2: "ABABAB" and "ABAB"', () => {
        expect(gcdOfStrings('ABABAB', 'ABAB')).toBe('AB');
    });

    test('Example 3: "LEET" and "CODE"', () => {
        expect(gcdOfStrings('LEET', 'CODE')).toBe('');
    });

    test('Same strings', () => {
        expect(gcdOfStrings('ABC', 'ABC')).toBe('ABC');
    });

    test('One is multiple of other', () => {
        expect(gcdOfStrings('AAAAAA', 'AA')).toBe('AA');
    });

    test('Single character GCD', () => {
        expect(gcdOfStrings('AAA', 'AA')).toBe('A');
    });

    test('Single characters', () => {
        expect(gcdOfStrings('A', 'A')).toBe('A');
    });

    test('Different single characters', () => {
        expect(gcdOfStrings('A', 'B')).toBe('');
    });

    test('Long pattern', () => {
        expect(gcdOfStrings('ABABABAB', 'ABAB')).toBe('ABAB');
    });
});
