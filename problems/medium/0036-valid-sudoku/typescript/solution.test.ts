import { isValidSudoku } from './solution';

describe('36. Valid Sudoku', () => {
    test('Example 1: valid board', () => {
        const board = [
            ["5", "3", ".", ".", "7", ".", ".", ".", "."],
            ["6", ".", ".", "1", "9", "5", ".", ".", "."],
            [".", "9", "8", ".", ".", ".", ".", "6", "."],
            ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
            ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
            ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
            [".", "6", ".", ".", ".", ".", "2", "8", "."],
            [".", ".", ".", "4", "1", "9", ".", ".", "5"],
            [".", ".", ".", ".", "8", ".", ".", "7", "9"]
        ];
        expect(isValidSudoku(board)).toBe(true);
    });

    test('Example 2: invalid — duplicate in column', () => {
        const board = [
            ["8", "3", ".", ".", "7", ".", ".", ".", "."],
            ["6", ".", ".", "1", "9", "5", ".", ".", "."],
            [".", "9", "8", ".", ".", ".", ".", "6", "."],
            ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
            ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
            ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
            [".", "6", ".", ".", ".", ".", "2", "8", "."],
            [".", ".", ".", "4", "1", "9", ".", ".", "5"],
            [".", ".", ".", ".", "8", ".", ".", "7", "9"]
        ];
        expect(isValidSudoku(board)).toBe(false);
    });

    test('Duplicate in row', () => {
        const board = Array.from({ length: 9 }, () => Array(9).fill('.'));
        board[0][0] = '1';
        board[0][8] = '1';
        expect(isValidSudoku(board)).toBe(false);
    });

    test('Duplicate in box', () => {
        const board = Array.from({ length: 9 }, () => Array(9).fill('.'));
        board[0][0] = '1';
        board[2][2] = '1';
        expect(isValidSudoku(board)).toBe(false);
    });

    test('Empty board', () => {
        const board = Array.from({ length: 9 }, () => Array(9).fill('.'));
        expect(isValidSudoku(board)).toBe(true);
    });

    test('Single number', () => {
        const board = Array.from({ length: 9 }, () => Array(9).fill('.'));
        board[4][4] = '5';
        expect(isValidSudoku(board)).toBe(true);
    });

    test('Same number different boxes', () => {
        const board = Array.from({ length: 9 }, () => Array(9).fill('.'));
        board[0][0] = '1';
        board[3][3] = '1';
        board[6][6] = '1';
        expect(isValidSudoku(board)).toBe(true);
    });
});