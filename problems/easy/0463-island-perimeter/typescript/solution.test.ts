import { islandPerimeter } from './solution';

describe('463. Island Perimeter', () => {
    test('Example 1: irregular island', () => {
        expect(
            islandPerimeter([
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 1, 0, 0],
                [1, 1, 0, 0],
            ]),
        ).toBe(16);
    });

    test('Example 2: single cell', () => {
        expect(islandPerimeter([[1]])).toBe(4);
    });

    test('Example 3: single row', () => {
        expect(islandPerimeter([[1, 0]])).toBe(4);
    });

    test('2x2 square island', () => {
        expect(
            islandPerimeter([
                [1, 1],
                [1, 1],
            ]),
        ).toBe(8);
    });

    test('Horizontal line', () => {
        expect(islandPerimeter([[1, 1, 1, 1]])).toBe(10);
    });

    test('Vertical line', () => {
        expect(islandPerimeter([[1], [1], [1]])).toBe(8);
    });

    test('L-shaped island', () => {
        expect(
            islandPerimeter([
                [1, 0],
                [1, 0],
                [1, 1],
            ]),
        ).toBe(10);
    });

    test('Island surrounded by water', () => {
        expect(
            islandPerimeter([
                [0, 0, 0],
                [0, 1, 0],
                [0, 0, 0],
            ]),
        ).toBe(4);
    });
});
