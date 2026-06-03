import { TicTacToe } from './solution.test';

describe('348. Design Tic-Tac-Toe', () => {
    test('LeetCode example: player 1 wins bottom row', () => {
        const game = new TicTacToe(3);
        expect(game.move(0, 0, 1)).toBe(0);
        expect(game.move(0, 2, 2)).toBe(0);
        expect(game.move(2, 2, 1)).toBe(0);
        expect(game.move(1, 1, 2)).toBe(0);
        expect(game.move(2, 0, 1)).toBe(0);
        expect(game.move(1, 0, 2)).toBe(0);
        expect(game.move(2, 1, 1)).toBe(1);
    });

    test('Player 2 wins column', () => {
        const game = new TicTacToe(3);
        expect(game.move(0, 0, 1)).toBe(0);
        expect(game.move(0, 1, 2)).toBe(0);
        expect(game.move(1, 0, 1)).toBe(0);
        expect(game.move(1, 1, 2)).toBe(0);
        expect(game.move(0, 2, 1)).toBe(0);
        expect(game.move(2, 1, 2)).toBe(2);
    });

    test('Player 1 wins main diagonal', () => {
        const game = new TicTacToe(3);
        expect(game.move(0, 0, 1)).toBe(0);
        expect(game.move(0, 1, 2)).toBe(0);
        expect(game.move(1, 1, 1)).toBe(0);
        expect(game.move(0, 2, 2)).toBe(0);
        expect(game.move(2, 2, 1)).toBe(1);
    });

    test('Player 2 wins anti-diagonal', () => {
        const game = new TicTacToe(3);
        expect(game.move(0, 0, 1)).toBe(0);
        expect(game.move(0, 2, 2)).toBe(0);
        expect(game.move(2, 0, 1)).toBe(0);
        expect(game.move(1, 1, 2)).toBe(0);
        expect(game.move(1, 0, 1)).toBe(0);
        expect(game.move(2, 0, 2)).toBe(0);
    });

    test('Larger board: n=4', () => {
        const game = new TicTacToe(4);
        expect(game.move(0, 0, 1)).toBe(0);
        expect(game.move(1, 1, 1)).toBe(0);
        expect(game.move(2, 2, 1)).toBe(0);
        expect(game.move(3, 3, 1)).toBe(1);
    });

    test('2x2 board', () => {
        const game = new TicTacToe(2);
        expect(game.move(0, 0, 1)).toBe(0);
        expect(game.move(0, 1, 1)).toBe(1);
    });

    test('No winner yet', () => {
        const game = new TicTacToe(3);
        expect(game.move(0, 0, 1)).toBe(0);
        expect(game.move(1, 1, 2)).toBe(0);
        expect(game.move(0, 1, 1)).toBe(0);
        expect(game.move(1, 0, 2)).toBe(0);
    });
});
