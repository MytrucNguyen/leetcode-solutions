import { minDistance } from './solution';

describe('72. Edit Distance', () => {
    test('Example 1: "horse" → "ros"', () => {
        expect(minDistance('horse', 'ros')).toBe(3);
    });

    test('Example 2: "intention" → "execution"', () => {
        expect(minDistance('intention', 'execution')).toBe(5);
    });

    test('Same strings', () => {
        expect(minDistance('abc', 'abc')).toBe(0);
    });

    test('Empty to string (all inserts)', () => {
        expect(minDistance('', 'abc')).toBe(3);
    });

    test('String to empty (all deletes)', () => {
        expect(minDistance('abc', '')).toBe(3);
    });

    test('Both empty', () => {
        expect(minDistance('', '')).toBe(0);
    });

    test('Single character match', () => {
        expect(minDistance('a', 'a')).toBe(0);
    });

    test('Single character replace', () => {
        expect(minDistance('a', 'b')).toBe(1);
    });

    test('One insert needed', () => {
        expect(minDistance('ab', 'abc')).toBe(1);
    });

    test('Completely different', () => {
        expect(minDistance('abc', 'xyz')).toBe(3);
    });

    test('Longer example', () => {
        expect(minDistance('kitten', 'sitting')).toBe(3);
    });
});
