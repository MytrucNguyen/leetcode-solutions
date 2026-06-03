import { wordPattern } from './solution';

describe('290. Word Pattern', () => {
    test('Example 1: "abba" "dog cat cat dog"', () => {
        expect(wordPattern('abba', 'dog cat cat dog')).toBe(true);
    });

    test('Example 2: "abba" "dog cat cat fish"', () => {
        expect(wordPattern('abba', 'dog cat cat fish')).toBe(false);
    });

    test('Example 3: "aaaa" "dog cat cat dog"', () => {
        expect(wordPattern('aaaa', 'dog cat cat dog')).toBe(false);
    });

    test('Two letters map to same word', () => {
        expect(wordPattern('abba', 'dog dog dog dog')).toBe(false);
    });

    test('Single letter single word', () => {
        expect(wordPattern('a', 'dog')).toBe(true);
    });

    test('Pattern longer than words', () => {
        expect(wordPattern('abc', 'dog cat')).toBe(false);
    });

    test('Words longer than pattern', () => {
        expect(wordPattern('ab', 'dog cat fish')).toBe(false);
    });

    test('All same letter and word', () => {
        expect(wordPattern('aaa', 'dog dog dog')).toBe(true);
    });

    test('Identity mapping', () => {
        expect(wordPattern('abc', 'a b c')).toBe(true);
    });
});
