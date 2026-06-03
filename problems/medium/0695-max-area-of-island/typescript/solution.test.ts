import { maxAreaOfIsland } from './solution';

describe('695. Max Area of Island', () => {
    test('Example 1: large grid', () => {
        const grid = [
            [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        ];
        expect(maxAreaOfIsland(grid)).toBe(6);
    });

    test('Example 2: all water', () => {
        expect(maxAreaOfIsland([[0, 0, 0, 0, 0]])).toBe(0);
    });

    test('Single cell island', () => {
        expect(
            maxAreaOfIsland([
                [0, 1, 0],
                [0, 0, 0],
            ]),
        ).toBe(1);
    });

    test('Entire grid is one island', () => {
        expect(
            maxAreaOfIsland([
                [1, 1],
                [1, 1],
            ]),
        ).toBe(4);
    });

    test('Multiple islands different sizes', () => {
        const grid = [
            [1, 1, 0, 0, 0],
            [1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1],
            [0, 0, 0, 1, 1],
            [0, 0, 0, 1, 1],
        ];
        expect(maxAreaOfIsland(grid)).toBe(6);
    });

    test('L-shaped island', () => {
        const grid = [
            [1, 0, 0],
            [1, 0, 0],
            [1, 1, 1],
        ];
        expect(maxAreaOfIsland(grid)).toBe(5);
    });

    test('Diagonal not connected', () => {
        const grid = [
            [1, 0],
            [0, 1],
        ];
        expect(maxAreaOfIsland(grid)).toBe(1);
    });

    test('Single row', () => {
        expect(maxAreaOfIsland([[1, 1, 0, 1, 1, 1]])).toBe(3);
    });
});
