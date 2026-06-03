import { numSquares } from './solution';

describe('279. Perfect Squares', () => {
    test('Example 1: n = 12', () => {
        expect(numSquares(12)).toBe(3);
    });

    test('Example 2: n = 13', () => {
        expect(numSquares(13)).toBe(2);
    });

    test('Perfect square itself: n = 1', () => {
        expect(numSquares(1)).toBe(1);
    });

    test('Perfect square: n = 4', () => {
        expect(numSquares(4)).toBe(1);
    });

    test('Perfect square: n = 16', () => {
        expect(numSquares(16)).toBe(1);
    });

    test('n = 2', () => {
        expect(numSquares(2)).toBe(2);
    });

    test('n = 3', () => {
        expect(numSquares(3)).toBe(3);
    });

    test('Sum of two squares: n = 5', () => {
        expect(numSquares(5)).toBe(2);
    });

    test('Needs 4 squares: n = 7', () => {
        expect(numSquares(7)).toBe(4);
    });

    test('Larger: n = 100', () => {
        expect(numSquares(100)).toBe(1);
    });
});