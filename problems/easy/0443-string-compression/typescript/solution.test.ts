import { compress } from './solution';

describe('443. String Compression', () => {
    test('Example 1: ["a","a","b","b","c","c","c"]', () => {
        const chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
        const len = compress(chars);
        expect(len).toBe(6);
        expect(chars.slice(0, len)).toEqual(['a', '2', 'b', '2', 'c', '3']);
    });

    test('Example 2: ["a"]', () => {
        const chars = ['a'];
        const len = compress(chars);
        expect(len).toBe(1);
        expect(chars.slice(0, len)).toEqual(['a']);
    });

    test('Example 3: multi-digit count', () => {
        const chars = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
        const len = compress(chars);
        expect(len).toBe(4);
        expect(chars.slice(0, len)).toEqual(['a', 'b', '1', '2']);
    });

    test('All different characters', () => {
        const chars = ['a', 'b', 'c'];
        const len = compress(chars);
        expect(len).toBe(3);
        expect(chars.slice(0, len)).toEqual(['a', 'b', 'c']);
    });

    test('All same characters', () => {
        const chars = ['a', 'a', 'a', 'a', 'a'];
        const len = compress(chars);
        expect(len).toBe(2);
        expect(chars.slice(0, len)).toEqual(['a', '5']);
    });

    test('Two characters', () => {
        const chars = ['a', 'a'];
        const len = compress(chars);
        expect(len).toBe(2);
        expect(chars.slice(0, len)).toEqual(['a', '2']);
    });

    test('Mix of singles and groups', () => {
        const chars = ['a', 'b', 'b', 'c', 'c', 'c', 'd'];
        const len = compress(chars);
        expect(len).toBe(6);
        expect(chars.slice(0, len)).toEqual(['a', 'b', '2', 'c', '3', 'd']);
    });

    test('Count of exactly 10', () => {
        const chars = Array(10).fill('a');
        const len = compress(chars);
        expect(len).toBe(3);
        expect(chars.slice(0, len)).toEqual(['a', '1', '0']);
    });
});
