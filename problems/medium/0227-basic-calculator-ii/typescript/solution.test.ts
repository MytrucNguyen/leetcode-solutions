import { calculate } from './solution';

describe('227. Basic Calculator II', () => {
    test('Example 1: "3+2*2"', () => {
        expect(calculate('3+2*2')).toBe(7);
    });

    test('Example 2: " 3/2 "', () => {
        expect(calculate(' 3/2 ')).toBe(1);
    });

    test('Example 3: " 3+5 / 2 "', () => {
        expect(calculate(' 3+5 / 2 ')).toBe(5);
    });

    test('Single number', () => {
        expect(calculate('42')).toBe(42);
    });

    test('Subtraction', () => {
        expect(calculate('10-3')).toBe(7);
    });

    test('All four operators', () => {
        expect(calculate('2+3*4-6/2')).toBe(11);
    });

    test('Multiple multiplications', () => {
        expect(calculate('2*3*4')).toBe(24);
    });

    test('Division truncates toward zero', () => {
        expect(calculate('7/3')).toBe(2);
    });

    test('Multi-digit numbers', () => {
        expect(calculate('100+200')).toBe(300);
    });

    test('Spaces everywhere', () => {
        expect(calculate(' 1 + 2 * 3 ')).toBe(7);
    });
});
