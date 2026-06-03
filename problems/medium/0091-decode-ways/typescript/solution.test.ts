import { numDecodings } from './solution';

describe('91. Decode Ways', () => {
    test('Example 1: "12"', () => {
        expect(numDecodings('12')).toBe(2);
    });

    test('Example 2: "226"', () => {
        expect(numDecodings('226')).toBe(3);
    });

    test('Example 3: "06"', () => {
        expect(numDecodings('06')).toBe(0);
    });

    test('Single digit', () => {
        expect(numDecodings('1')).toBe(1);
    });

    test('Single zero', () => {
        expect(numDecodings('0')).toBe(0);
    });

    test('Ten', () => {
        expect(numDecodings('10')).toBe(1);
    });

    test('Twenty-seven (invalid two digit)', () => {
        expect(numDecodings('27')).toBe(1);
    });

    test('Contains zero in middle: "101"', () => {
        expect(numDecodings('101')).toBe(1);
    });

    test('All ones: "111"', () => {
        expect(numDecodings('111')).toBe(3);
    });

    test('Longer string: "11106"', () => {
        expect(numDecodings('11106')).toBe(2);
    });

    test('All twos: "2222"', () => {
        expect(numDecodings('2222')).toBe(5);
    });

    test('Invalid zero: "100"', () => {
        expect(numDecodings('100')).toBe(0);
    });
});
