import { mergeAlternately } from './solution';

describe('1768. Merge Strings Alternately', () => {
    test('Example 1: equal lengths', () => {
        expect(mergeAlternately('abc', 'pqr')).toBe('apbqcr');
    });

    test('Example 2: word2 longer', () => {
        expect(mergeAlternately('ab', 'pqrs')).toBe('apbqrs');
    });

    test('Example 3: word1 longer', () => {
        expect(mergeAlternately('abcd', 'pq')).toBe('apbqcd');
    });

    test('Single characters', () => {
        expect(mergeAlternately('a', 'b')).toBe('ab');
    });

    test('One single, one long', () => {
        expect(mergeAlternately('a', 'bcde')).toBe('abcde');
    });

    test('Long and one single', () => {
        expect(mergeAlternately('abcd', 'e')).toBe('aebcd');
    });

    test('Same characters', () => {
        expect(mergeAlternately('aaa', 'bbb')).toBe('ababab');
    });
});
