import { removeStars } from './solution';

describe('2390. Removing Stars From a String', () => {
    test('Example 1: "leet**cod*e"', () => {
        expect(removeStars('leet**cod*e')).toBe('lecoe');
    });

    test('Example 2: "erase*****"', () => {
        expect(removeStars('erase*****')).toBe('');
    });

    test('No stars', () => {
        expect(removeStars('hello')).toBe('hello');
    });

    test('Single character and star', () => {
        expect(removeStars('a*')).toBe('');
    });

    test('Stars at different positions', () => {
        expect(removeStars('a*b*c*')).toBe('');
    });

    test('Stars only remove one each', () => {
        expect(removeStars('abc*de*f')).toBe('adef');
    });

    test('Consecutive stars', () => {
        expect(removeStars('abcd***')).toBe('a');
    });

    test('Alternating', () => {
        expect(removeStars('ab*c*de')).toBe('ade');
    });
});
