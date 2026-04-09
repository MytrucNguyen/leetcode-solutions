import { reverseWords } from './solution';

describe('151. Reverse Words in a String', () => {
    test('Example 1: "the sky is blue"', () => {
        expect(reverseWords('the sky is blue')).toBe('blue is sky the');
    });

    test('Example 2: "  hello world  "', () => {
        expect(reverseWords('  hello world  ')).toBe('world hello');
    });

    test('Example 3: "a good   example"', () => {
        expect(reverseWords('a good   example')).toBe('example good a');
    });

    test('Single word', () => {
        expect(reverseWords('hello')).toBe('hello');
    });

    test('Single word with spaces', () => {
        expect(reverseWords('  hello  ')).toBe('hello');
    });

    test('Two words', () => {
        expect(reverseWords('hello world')).toBe('world hello');
    });

    test('Many spaces between words', () => {
        expect(reverseWords('a    b    c')).toBe('c b a');
    });

    test('Numbers and letters', () => {
        expect(reverseWords('bob likes alice')).toBe('alice likes bob');
    });
});
