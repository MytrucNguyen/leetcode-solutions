import { largestNumber } from './solution';

describe('179. Largest Number', () => {
    test('Example 1: [10, 2]', () => {
        expect(largestNumber([10, 2])).toBe('210');
    });

    test('Example 2: [3, 30, 34, 5, 9]', () => {
        expect(largestNumber([3, 30, 34, 5, 9])).toBe('9534330');
    });

    test('All zeros', () => {
        expect(largestNumber([0, 0])).toBe('0');
    });

    test('Single number', () => {
        expect(largestNumber([1])).toBe('1');
    });

    test('Same digits different lengths', () => {
        expect(largestNumber([3, 30, 34])).toBe('34330');
    });

    test('All same number', () => {
        expect(largestNumber([1, 1, 1])).toBe('111');
    });

    test('Large and small', () => {
        expect(largestNumber([999, 1])).toBe('9991');
    });

    test('Tricky comparison', () => {
        expect(largestNumber([12, 121])).toBe('12121');
    });

    test('Zero with others', () => {
        expect(largestNumber([0, 9, 8])).toBe('980');
    });
});
