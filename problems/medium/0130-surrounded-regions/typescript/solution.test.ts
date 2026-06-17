import { solve } from './solution';

describe('130. Surrounded Regions', () => {
    test('Example 1: surrounded and border-connected', () => {
        const board = [
            ['X', 'X', 'X', 'X'],
            ['X', 'O', 'O', 'X'],
            ['X', 'X', 'O', 'X'],
            ['X', 'O', 'X', 'X'],
        ];
        solve(board);
        expect(board).toEqual([
            ['X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X'],
            ['X', 'O', 'X', 'X'],
        ]);
    });

    test('Example 2: single cell', () => {
        const board = [['X']];
        solve(board);
        expect(board).toEqual([['X']]);
    });

    test('All O on border', () => {
        const board = [
            ['O', 'O', 'O'],
            ['O', 'X', 'O'],
            ['O', 'O', 'O'],
        ];
        solve(board);
        expect(board).toEqual([
            ['O', 'O', 'O'],
            ['O', 'X', 'O'],
            ['O', 'O', 'O'],
        ]);
    });

    test('All surrounded', () => {
        const board = [
            ['X', 'X', 'X'],
            ['X', 'O', 'X'],
            ['X', 'X', 'X'],
        ];
        solve(board);
        expect(board).toEqual([
            ['X', 'X', 'X'],
            ['X', 'X', 'X'],
            ['X', 'X', 'X'],
        ]);
    });

    test('All X', () => {
        const board = [
            ['X', 'X', 'X'],
            ['X', 'X', 'X'],
            ['X', 'X', 'X'],
        ];
        solve(board);
        expect(board).toEqual([
            ['X', 'X', 'X'],
            ['X', 'X', 'X'],
            ['X', 'X', 'X'],
        ]);
    });

    test('Connected to border through chain', () => {
        const board = [
            ['X', 'X', 'X', 'X'],
            ['X', 'O', 'O', 'X'],
            ['X', 'O', 'O', 'X'],
            ['X', 'X', 'O', 'X'],
            ['X', 'X', 'O', 'O'],
        ];
        solve(board);
        expect(board).toEqual([
            ['X', 'X', 'X', 'X'],
            ['X', 'O', 'O', 'X'],
            ['X', 'O', 'O', 'X'],
            ['X', 'X', 'O', 'X'],
            ['X', 'X', 'O', 'O'],
        ]);
    });

    test('2x2 board — no surrounded possible', () => {
        const board = [
            ['O', 'O'],
            ['O', 'O'],
        ];
        solve(board);
        expect(board).toEqual([
            ['O', 'O'],
            ['O', 'O'],
        ]);
    });
});
