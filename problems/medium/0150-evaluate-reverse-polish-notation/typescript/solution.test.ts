import { evalRPN } from './solution';

describe('150. Evaluate Reverse Polish Notation', () => {
    test('Example 1: ["2","1","+","3","*"]', () => {
        expect(evalRPN(['2', '1', '+', '3', '*'])).toBe(9);
    });

    test('Example 2: ["4","13","5","/","+"]', () => {
        expect(evalRPN(['4', '13', '5', '/', '+'])).toBe(6);
    });

    test('Example 3: long expression', () => {
        expect(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])).toBe(
            22,
        );
    });

    test('Single number', () => {
        expect(evalRPN(['42'])).toBe(42);
    });

    test('Simple addition', () => {
        expect(evalRPN(['3', '4', '+'])).toBe(7);
    });

    test('Simple subtraction', () => {
        expect(evalRPN(['5', '3', '-'])).toBe(2);
    });

    test('Division truncates toward zero (positive)', () => {
        expect(evalRPN(['7', '2', '/'])).toBe(3);
    });

    test('Division truncates toward zero (negative)', () => {
        expect(evalRPN(['7', '-2', '/'])).toBe(-3);
    });

    test('Negative numbers', () => {
        expect(evalRPN(['-3', '4', '*'])).toBe(-12);
    });

    test('Subtraction order matters', () => {
        expect(evalRPN(['3', '5', '-'])).toBe(-2);
    });
});
