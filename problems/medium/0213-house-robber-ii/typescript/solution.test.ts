import { rob } from './solution';

describe('213. House Robber II', () => {
    test('Example 1: [2,3,2]', () => {
        expect(rob([2, 3, 2])).toBe(3);
    });

    test('Example 2: [1,2,3,1]', () => {
        expect(rob([1, 2, 3, 1])).toBe(4);
    });

    test('Example 3: [1,2,3]', () => {
        expect(rob([1, 2, 3])).toBe(3);
    });

    test('Single house', () => {
        expect(rob([5])).toBe(5);
    });

    test('Two houses', () => {
        expect(rob([1, 2])).toBe(2);
    });

    test('All same values', () => {
        expect(rob([3, 3, 3, 3])).toBe(6);
    });

    test('Large first and last', () => {
        expect(rob([100, 1, 1, 100])).toBe(101);
    });

    test('Alternating high low', () => {
        expect(rob([10, 1, 10, 1, 10])).toBe(20);
    });

    test('All zeros', () => {
        expect(rob([0, 0, 0])).toBe(0);
    });

    test('One large in middle', () => {
        expect(rob([1, 100, 1])).toBe(100);
    });
});
