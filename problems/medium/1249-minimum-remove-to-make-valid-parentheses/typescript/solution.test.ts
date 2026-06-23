import { minRemoveToMakeValid } from './solution';

function isValid(s: string): boolean {
    let count = 0;
    for (const char of s) {
        if (char === '(') count++;
        else if (char === ')') count--;
        if (count < 0) return false;
    }
    return count === 0;
}

describe('1249. Minimum Remove to Make Valid Parentheses', () => {
    test('Example 1: "lee(t(c)o)de)"', () => {
        const result = minRemoveToMakeValid('lee(t(c)o)de)');
        expect(result).toBe('lee(t(c)o)de');
    });

    test('Example 2: "a)b(c)d"', () => {
        const result = minRemoveToMakeValid('a)b(c)d');
        expect(result).toBe('ab(c)d');
    });

    test('Example 3: "))(("', () => {
        const result = minRemoveToMakeValid('))((');
        expect(result).toBe('');
    });

    test('Already valid', () => {
        expect(minRemoveToMakeValid('(a)(b)')).toBe('(a)(b)');
    });

    test('No parentheses', () => {
        expect(minRemoveToMakeValid('abc')).toBe('abc');
    });

    test('Empty string', () => {
        expect(minRemoveToMakeValid('')).toBe('');
    });

    test('Only unmatched open', () => {
        const result = minRemoveToMakeValid('((a');
        expect(isValid(result)).toBe(true);
        expect(result).toBe('a');
    });

    test('Only unmatched close', () => {
        const result = minRemoveToMakeValid('a))');
        expect(isValid(result)).toBe(true);
        expect(result).toBe('a');
    });

    test('Nested valid', () => {
        expect(minRemoveToMakeValid('((a)(b))')).toBe('((a)(b))');
    });

    test('Mixed unmatched', () => {
        const result = minRemoveToMakeValid(')(a)(');
        expect(isValid(result)).toBe(true);
        expect(result).toBe('(a)');
    });
});
