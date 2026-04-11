import { searchMatrix } from './solution';

describe('74. Search a 2D Matrix', () => {
    test('Example 1: target found', () => {
        const matrix = [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60],
        ];
        expect(searchMatrix(matrix, 3)).toBe(true);
    });

    test('Example 2: target not found', () => {
        const matrix = [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60],
        ];
        expect(searchMatrix(matrix, 13)).toBe(false);
    });

    test('Target is first element', () => {
        const matrix = [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
        ];
        expect(searchMatrix(matrix, 1)).toBe(true);
    });

    test('Target is last element', () => {
        const matrix = [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
        ];
        expect(searchMatrix(matrix, 20)).toBe(true);
    });

    test('Single element found', () => {
        expect(searchMatrix([[1]], 1)).toBe(true);
    });

    test('Single element not found', () => {
        expect(searchMatrix([[1]], 2)).toBe(false);
    });

    test('Single row', () => {
        expect(searchMatrix([[1, 3, 5, 7]], 5)).toBe(true);
    });

    test('Single column', () => {
        expect(searchMatrix([[1], [3], [5]], 3)).toBe(true);
    });

    test('Target smaller than all', () => {
        const matrix = [
            [1, 3, 5],
            [10, 11, 16],
        ];
        expect(searchMatrix(matrix, 0)).toBe(false);
    });

    test('Target larger than all', () => {
        const matrix = [
            [1, 3, 5],
            [10, 11, 16],
        ];
        expect(searchMatrix(matrix, 20)).toBe(false);
    });
});
