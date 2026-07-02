import { reverseWords } from './solution';

describe('557. Reverse Words in a String III', () => {
    test('Example 1: "Let\'s take LeetCode contest"', () => {
        expect(reverseWords("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc");
    });

    test('Example 2: "Mr Ding"', () => {
        expect(reverseWords('Mr Ding')).toBe('rM gniD');
    });

    test('Single word', () => {
        expect(reverseWords('hello')).toBe('olleh');
    });

    test('Single character', () => {
        expect(reverseWords('a')).toBe('a');
    });

    test('Palindrome words', () => {
        expect(reverseWords('racecar level')).toBe('racecar level');
    });

    test('All single characters', () => {
        expect(reverseWords('a b c d')).toBe('a b c d');
    });

    test('Two character words', () => {
        expect(reverseWords('ab cd ef')).toBe('ba dc fe');
    });

    test('Numbers in words', () => {
        expect(reverseWords('abc123 def456')).toBe('321cba 654fed');
    });
});
