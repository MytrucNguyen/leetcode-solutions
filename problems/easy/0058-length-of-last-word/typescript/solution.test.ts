import { lengthOfLastWord } from './solution';

describe('58. Length of Last Word', () => {
    test('Example 1: "Hello World"', () => {
        expect(lengthOfLastWord('Hello World')).toBe(5);
    });

    test('Example 2: "   fly me   to   the moon  "', () => {
        expect(lengthOfLastWord('   fly me   to   the moon  ')).toBe(4);
    });

    test('Example 3: "luffy is still joyboy"', () => {
        expect(lengthOfLastWord('luffy is still joyboy')).toBe(6);
    });

    test('Single word', () => {
        expect(lengthOfLastWord('hello')).toBe(5);
    });

    test('Single word with trailing spaces', () => {
        expect(lengthOfLastWord('hello   ')).toBe(5);
    });

    test('Single word with leading spaces', () => {
        expect(lengthOfLastWord('   hello')).toBe(5);
    });

    test('Single character', () => {
        expect(lengthOfLastWord('a')).toBe(1);
    });

    test('Multiple spaces between words', () => {
        expect(lengthOfLastWord('a    b')).toBe(1);
    });
});
