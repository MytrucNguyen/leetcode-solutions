import { letterCombinations } from './solution';

describe('17. Letter Combinations of a Phone Number', () => {
    test('Example 1: "23"', () => {
        const result = letterCombinations('23');
        expect(result.sort()).toEqual(
            ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'].sort(),
        );
    });

    test('Example 2: ""', () => {
        expect(letterCombinations('')).toEqual([]);
    });

    test('Example 3: "2"', () => {
        const result = letterCombinations('2');
        expect(result.sort()).toEqual(['a', 'b', 'c'].sort());
    });

    test('Digit with 4 letters: "7"', () => {
        const result = letterCombinations('7');
        expect(result.sort()).toEqual(['p', 'q', 'r', 's'].sort());
    });

    test('Three digits: "234"', () => {
        const result = letterCombinations('234');
        expect(result.length).toBe(27);
    });

    test('Digit 9 with 4 letters: "9"', () => {
        const result = letterCombinations('9');
        expect(result.sort()).toEqual(['w', 'x', 'y', 'z'].sort());
    });

    test('Same digit twice: "22"', () => {
        const result = letterCombinations('22');
        expect(result.length).toBe(9);
        expect(result).toContain('aa');
        expect(result).toContain('cc');
    });

    test('All results correct length', () => {
        const result = letterCombinations('234');
        for (const combo of result) {
            expect(combo.length).toBe(3);
        }
    });
});
