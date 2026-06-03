import { myAtoi } from './solution';

describe('8. String to Integer (atoi)', () => {
    test('Example 1: "42"', () => {
        expect(myAtoi('42')).toBe(42);
    });

    test('Example 2: "   -42"', () => {
        expect(myAtoi('   -42')).toBe(-42);
    });

    test('Example 3: "4193 with words"', () => {
        expect(myAtoi('4193 with words')).toBe(4193);
    });

    test('Example 4: "words and 987"', () => {
        expect(myAtoi('words and 987')).toBe(0);
    });

    test('Example 5: overflow negative', () => {
        expect(myAtoi('-91283472332')).toBe(-2147483648);
    });

    test('Overflow positive', () => {
        expect(myAtoi('91283472332')).toBe(2147483647);
    });

    test('Positive sign', () => {
        expect(myAtoi('+42')).toBe(42);
    });

    test('Empty string', () => {
        expect(myAtoi('')).toBe(0);
    });

    test('Only spaces', () => {
        expect(myAtoi('   ')).toBe(0);
    });

    test('Only sign', () => {
        expect(myAtoi('-')).toBe(0);
    });

    test('Zero', () => {
        expect(myAtoi('0')).toBe(0);
    });

    test('Leading zeros', () => {
        expect(myAtoi('0042')).toBe(42);
    });

    test('INT_MAX boundary', () => {
        expect(myAtoi('2147483647')).toBe(2147483647);
    });

    test('INT_MAX + 1', () => {
        expect(myAtoi('2147483648')).toBe(2147483647);
    });
});
