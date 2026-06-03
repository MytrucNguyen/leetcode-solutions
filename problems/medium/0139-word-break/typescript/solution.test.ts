import { wordBreak } from './solution';

describe('139. Word Break', () => {
    test('Example 1: "leetcode"', () => {
        expect(wordBreak('leetcode', ['leet', 'code'])).toBe(true);
    });

    test('Example 2: "applepenapple"', () => {
        expect(wordBreak('applepenapple', ['apple', 'pen'])).toBe(true);
    });

    test('Example 3: "catsandog"', () => {
        expect(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toBe(false);
    });

    test('Single word match', () => {
        expect(wordBreak('hello', ['hello'])).toBe(true);
    });

    test('Single word no match', () => {
        expect(wordBreak('hello', ['world'])).toBe(false);
    });

    test('Reuse same word', () => {
        expect(wordBreak('aaaa', ['a'])).toBe(true);
    });

    test('Multiple ways to break', () => {
        expect(wordBreak('catsand', ['cats', 'cat', 'sand', 'and'])).toBe(true);
    });

    test('Prefix trap', () => {
        expect(wordBreak('cars', ['car', 'ca', 'rs'])).toBe(true);
    });

    test('Cannot complete last part', () => {
        expect(wordBreak('abcd', ['a', 'abc', 'b', 'cd'])).toBe(true);
    });

    test('Single character', () => {
        expect(wordBreak('a', ['a'])).toBe(true);
    });
});
