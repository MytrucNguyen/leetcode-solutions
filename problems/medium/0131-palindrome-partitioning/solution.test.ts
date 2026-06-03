import { partition } from './solution';

describe('131. Palindrome Partitioning', () => {
    test('Example 1: "aab"', () => {
        const result = partition("aab");
        const sorted = result.map(p => JSON.stringify(p)).sort();
        expect(sorted).toEqual([
            JSON.stringify(["a", "a", "b"]),
            JSON.stringify(["aa", "b"])
        ].sort());
    });

    test('Example 2: "a"', () => {
        expect(partition("a")).toEqual([["a"]]);
    });

    test('All same characters: "aaa"', () => {
        const result = partition("aaa");
        expect(result.length).toBe(4);
        const sorted = result.map(p => JSON.stringify(p)).sort();
        expect(sorted).toEqual([
            JSON.stringify(["a", "a", "a"]),
            JSON.stringify(["a", "aa"]),
            JSON.stringify(["aa", "a"]),
            JSON.stringify(["aaa"])
        ].sort());
    });

    test('No multi-char palindromes: "abc"', () => {
        expect(partition("abc")).toEqual([["a", "b", "c"]]);
    });

    test('Full string palindrome: "aba"', () => {
        const result = partition("aba");
        const sorted = result.map(p => JSON.stringify(p)).sort();
        expect(sorted).toEqual([
            JSON.stringify(["a", "b", "a"]),
            JSON.stringify(["aba"])
        ].sort());
    });

    test('Two characters same: "aa"', () => {
        const result = partition("aa");
        const sorted = result.map(p => JSON.stringify(p)).sort();
        expect(sorted).toEqual([
            JSON.stringify(["a", "a"]),
            JSON.stringify(["aa"])
        ].sort());
    });

    test('Two characters different: "ab"', () => {
        expect(partition("ab")).toEqual([["a", "b"]]);
    });
});