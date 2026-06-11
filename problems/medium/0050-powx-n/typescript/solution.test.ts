import { myPow } from './solution';

describe('50. Pow(x, n)', () => {
    test('Example 1: 2^10', () => {
        expect(myPow(2.0, 10)).toBeCloseTo(1024.0);
    });

    test('Example 2: 2.1^3', () => {
        expect(myPow(2.1, 3)).toBeCloseTo(9.261);
    });

    test('Example 3: 2^-2', () => {
        expect(myPow(2.0, -2)).toBeCloseTo(0.25);
    });

    test('Any number to 0', () => {
        expect(myPow(5.0, 0)).toBe(1);
    });

    test('Any number to 1', () => {
        expect(myPow(3.0, 1)).toBeCloseTo(3.0);
    });

    test('1 to any power', () => {
        expect(myPow(1.0, 1000)).toBeCloseTo(1.0);
    });

    test('Negative base even power', () => {
        expect(myPow(-2.0, 2)).toBeCloseTo(4.0);
    });

    test('Negative base odd power', () => {
        expect(myPow(-2.0, 3)).toBeCloseTo(-8.0);
    });

    test('Fraction base', () => {
        expect(myPow(0.5, 3)).toBeCloseTo(0.125);
    });

    test('Large negative exponent', () => {
        expect(myPow(2.0, -3)).toBeCloseTo(0.125);
    });
});
