import { multiply } from './solution';

describe('43. Multiply Strings', () => {
    test('Example 1: "2" × "3"', () => {
        expect(multiply('2', '3')).toBe('6');
    });

    test('Example 2: "123" × "456"', () => {
        expect(multiply('123', '456')).toBe('56088');
    });

    test('Multiply by zero', () => {
        expect(multiply('0', '123')).toBe('0');
    });

    test('Zero times zero', () => {
        expect(multiply('0', '0')).toBe('0');
    });

    test('Multiply by one', () => {
        expect(multiply('1', '999')).toBe('999');
    });

    test('Single digits', () => {
        expect(multiply('9', '9')).toBe('81');
    });

    test('Different lengths', () => {
        expect(multiply('99', '9')).toBe('891');
    });

    test('Large numbers', () => {
        expect(multiply('999', '999')).toBe('998001');
    });

    test('Carry propagation', () => {
        expect(multiply('99', '99')).toBe('9801');
    });

    test('One and large number', () => {
        expect(multiply('12345', '1')).toBe('12345');
    });
});
