import { exist } from './solution';

describe('79. Word Search', () => {
    test('Example 1: "ABCCED"', () => {
        const board = [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
        ];
        expect(exist(board, 'ABCCED')).toBe(true);
    });

    test('Example 2: "SEE"', () => {
        const board = [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
        ];
        expect(exist(board, 'SEE')).toBe(true);
    });

    test('Example 3: "ABCB" (no reuse)', () => {
        const board = [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
        ];
        expect(exist(board, 'ABCB')).toBe(false);
    });

    test('Single cell match', () => {
        expect(exist([['A']], 'A')).toBe(true);
    });

    test('Single cell no match', () => {
        expect(exist([['A']], 'B')).toBe(false);
    });

    test('Word longer than board', () => {
        expect(
            exist(
                [
                    ['A', 'B'],
                    ['C', 'D'],
                ],
                'ABCDE',
            ),
        ).toBe(false);
    });

    test('Snake path', () => {
        const board = [
            ['A', 'B'],
            ['D', 'C'],
        ];
        expect(exist(board, 'ABCD')).toBe(true);
    });

    test('Word not in grid', () => {
        const board = [
            ['A', 'B', 'C'],
            ['D', 'E', 'F'],
        ];
        expect(exist(board, 'XYZ')).toBe(false);
    });

    test('Board not modified after search', () => {
        const board = [
            ['A', 'B'],
            ['C', 'D'],
        ];
        exist(board, 'ABDC');
        expect(board).toEqual([
            ['A', 'B'],
            ['C', 'D'],
        ]);
    });
});
