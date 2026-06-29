import { WordDictionary } from './solution';

describe('211. Design Add and Search Words Data Structure', () => {
    test('LeetCode example', () => {
        const dict = new WordDictionary();
        dict.addWord('bad');
        dict.addWord('dad');
        dict.addWord('mad');
        expect(dict.search('pad')).toBe(false);
        expect(dict.search('bad')).toBe(true);
        expect(dict.search('.ad')).toBe(true);
        expect(dict.search('b..')).toBe(true);
    });

    test('All dots', () => {
        const dict = new WordDictionary();
        dict.addWord('abc');
        expect(dict.search('...')).toBe(true);
        expect(dict.search('..')).toBe(false);
        expect(dict.search('....')).toBe(false);
    });

    test('Dot at different positions', () => {
        const dict = new WordDictionary();
        dict.addWord('hello');
        expect(dict.search('h.llo')).toBe(true);
        expect(dict.search('hell.')).toBe(true);
        expect(dict.search('.ello')).toBe(true);
        expect(dict.search('h..lo')).toBe(true);
        expect(dict.search('h...o')).toBe(true);
    });

    test('No words added', () => {
        const dict = new WordDictionary();
        expect(dict.search('a')).toBe(false);
        expect(dict.search('.')).toBe(false);
    });

    test('Single character words', () => {
        const dict = new WordDictionary();
        dict.addWord('a');
        dict.addWord('b');
        expect(dict.search('a')).toBe(true);
        expect(dict.search('.')).toBe(true);
        expect(dict.search('c')).toBe(false);
    });

    test('Prefix is not a match', () => {
        const dict = new WordDictionary();
        dict.addWord('apple');
        expect(dict.search('app')).toBe(false);
        expect(dict.search('app..')).toBe(true);
    });

    test('Multiple words same prefix', () => {
        const dict = new WordDictionary();
        dict.addWord('car');
        dict.addWord('card');
        dict.addWord('care');
        expect(dict.search('car')).toBe(true);
        expect(dict.search('car.')).toBe(true);
        expect(dict.search('ca..')).toBe(true);
        expect(dict.search('c...')).toBe(true);
        expect(dict.search('c....')).toBe(false);
    });

    test('Dot matches specific missing letter', () => {
        const dict = new WordDictionary();
        dict.addWord('bat');
        dict.addWord('cat');
        expect(dict.search('.at')).toBe(true);
        expect(dict.search('..t')).toBe(true);
        expect(dict.search('b.t')).toBe(true);
        expect(dict.search('d.t')).toBe(false);
    });
});
