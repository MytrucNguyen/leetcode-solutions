import { uniquePaths } from './solution';

describe('62. Unique Paths', () => {
    test('Example 1: 3x7', () => {
        expect(uniquePaths(3, 7)).toBe(28);
    });

    test('Example 2: 3x2', () => {
        expect(uniquePaths(3, 2)).toBe(3);
    });

    test('1x1 grid', () => {
        expect(uniquePaths(1, 1)).toBe(1);
    });

    test('1 row', () => {
        expect(uniquePaths(1, 5)).toBe(1);
    });

    test('1 column', () => {
        expect(uniquePaths(5, 1)).toBe(1);
    });

    test('2x2', () => {
        expect(uniquePaths(2, 2)).toBe(2);
    });

    test('3x3', () => {
        expect(uniquePaths(3, 3)).toBe(6);
    });

    test('Symmetric: 7x3 equals 3x7', () => {
        expect(uniquePaths(7, 3)).toBe(28);
    });

    test('Larger grid: 10x10', () => {
        expect(uniquePaths(10, 10)).toBe(48620);
    });
});
