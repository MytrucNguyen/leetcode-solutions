import { maxOperations } from './solution';

describe('1679. Max Number of K-Sum Pairs', () => {
    test('Example 1: [1,2,3,4], k=5', () => {
        expect(maxOperations([1, 2, 3, 4], 5)).toBe(2);
    });

    test('Example 2: [3,1,3,4,3], k=6', () => {
        expect(maxOperations([3, 1, 3, 4, 3], 6)).toBe(1);
    });

    test('No pairs', () => {
        expect(maxOperations([1, 2, 3], 10)).toBe(0);
    });

    test('All pairs', () => {
        expect(maxOperations([1, 4, 2, 3], 5)).toBe(2);
    });

    test('Duplicates forming pairs', () => {
        expect(maxOperations([2, 2, 2, 2], 4)).toBe(2);
    });

    test('Single element', () => {
        expect(maxOperations([5], 5)).toBe(0);
    });

    test('Two elements match', () => {
        expect(maxOperations([1, 4], 5)).toBe(1);
    });

    test('Two elements no match', () => {
        expect(maxOperations([1, 2], 5)).toBe(0);
    });

    test('Odd one out', () => {
        expect(maxOperations([1, 2, 3, 4, 5], 6)).toBe(2);
    });
});
