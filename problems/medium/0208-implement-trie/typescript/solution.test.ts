import { Trie } from './solution';

describe('208. Implement Trie (Prefix Tree)', () => {
    test('LeetCode example', () => {
        const trie = new Trie();
        trie.insert('apple');
        expect(trie.search('apple')).toBe(true);
        expect(trie.search('app')).toBe(false);
        expect(trie.startsWith('app')).toBe(true);
        trie.insert('app');
        expect(trie.search('app')).toBe(true);
    });

    test('Search nonexistent word', () => {
        const trie = new Trie();
        trie.insert('hello');
        expect(trie.search('world')).toBe(false);
    });

    test('Prefix of nonexistent word', () => {
        const trie = new Trie();
        trie.insert('hello');
        expect(trie.startsWith('world')).toBe(false);
    });

    test('Multiple words sharing prefix', () => {
        const trie = new Trie();
        trie.insert('car');
        trie.insert('card');
        trie.insert('care');
        expect(trie.search('car')).toBe(true);
        expect(trie.search('card')).toBe(true);
        expect(trie.search('care')).toBe(true);
        expect(trie.search('cars')).toBe(false);
        expect(trie.startsWith('car')).toBe(true);
    });

    test('Single character', () => {
        const trie = new Trie();
        trie.insert('a');
        expect(trie.search('a')).toBe(true);
        expect(trie.startsWith('a')).toBe(true);
        expect(trie.search('ab')).toBe(false);
    });

    test('Empty trie searches', () => {
        const trie = new Trie();
        expect(trie.search('anything')).toBe(false);
        expect(trie.startsWith('any')).toBe(false);
    });

    test('Word is prefix of another', () => {
        const trie = new Trie();
        trie.insert('application');
        expect(trie.search('app')).toBe(false);
        expect(trie.startsWith('app')).toBe(true);
        expect(trie.search('application')).toBe(true);
    });

    test('Completely different words', () => {
        const trie = new Trie();
        trie.insert('abc');
        trie.insert('xyz');
        expect(trie.search('abc')).toBe(true);
        expect(trie.search('xyz')).toBe(true);
        expect(trie.startsWith('ab')).toBe(true);
        expect(trie.startsWith('xy')).toBe(true);
        expect(trie.startsWith('ax')).toBe(false);
    });
});
