import { generateParenthesis } from './solution';

describe('22. Generate Parentheses', () => {
    test('Example 1: n=3', () => {
        const result = generateParenthesis(3);
        expect(result.sort()).toEqual(
            ["((()))", "(()())", "(())()", "()(())", "()()()"].sort()
        );
    });

    test('Example 2: n=1', () => {
        expect(generateParenthesis(1)).toEqual(["()"]);
    });

    test('n=2', () => {
        const result = generateParenthesis(2);
        expect(result.sort()).toEqual(["(())", "()()"].sort());
    });

    test('n=4 count', () => {
        const result = generateParenthesis(4);
        expect(result.length).toBe(14);
    });

    test('All results are valid', () => {
        const result = generateParenthesis(3);
        for (const s of result) {
            let count = 0;
            for (const char of s) {
                count += char === '(' ? 1 : -1;
                expect(count).toBeGreaterThanOrEqual(0);
            }
            expect(count).toBe(0);
        }
    });

    test('All results are unique', () => {
        const result = generateParenthesis(4);
        const unique = new Set(result);
        expect(unique.size).toBe(result.length);
    });

    test('Correct length', () => {
        const result = generateParenthesis(3);
        for (const s of result) {
            expect(s.length).toBe(6);
        }
    });
});