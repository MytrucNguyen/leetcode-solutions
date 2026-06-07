import { floodFill } from './solution';

describe('733. Flood Fill', () => {
    test('Example 1: fill connected region', () => {
        expect(
            floodFill(
                [
                    [1, 1, 1],
                    [1, 1, 0],
                    [1, 0, 1],
                ],
                1,
                1,
                2,
            ),
        ).toEqual([
            [2, 2, 2],
            [2, 2, 0],
            [2, 0, 1],
        ]);
    });

    test('Example 2: same color, no change', () => {
        expect(
            floodFill(
                [
                    [0, 0, 0],
                    [0, 0, 0],
                ],
                0,
                0,
                0,
            ),
        ).toEqual([
            [0, 0, 0],
            [0, 0, 0],
        ]);
    });

    test('Single pixel', () => {
        expect(floodFill([[5]], 0, 0, 3)).toEqual([[3]]);
    });

    test('Fill entire grid', () => {
        expect(
            floodFill(
                [
                    [1, 1],
                    [1, 1],
                ],
                0,
                0,
                2,
            ),
        ).toEqual([
            [2, 2],
            [2, 2],
        ]);
    });

    test('Corner start', () => {
        expect(
            floodFill(
                [
                    [0, 0, 0],
                    [0, 1, 1],
                ],
                1,
                1,
                2,
            ),
        ).toEqual([
            [0, 0, 0],
            [0, 2, 2],
        ]);
    });

    test('Disconnected same-color regions', () => {
        expect(
            floodFill(
                [
                    [1, 0, 1],
                    [0, 1, 0],
                    [1, 0, 1],
                ],
                1,
                1,
                2,
            ),
        ).toEqual([
            [1, 0, 1],
            [0, 2, 0],
            [1, 0, 1],
        ]);
    });

    test('L-shaped region', () => {
        expect(
            floodFill(
                [
                    [1, 1, 0],
                    [1, 0, 0],
                    [1, 1, 1],
                ],
                0,
                0,
                3,
            ),
        ).toEqual([
            [3, 3, 0],
            [3, 0, 0],
            [3, 3, 3],
        ]);
    });

    test('Only starting pixel changes', () => {
        expect(
            floodFill(
                [
                    [0, 1, 0],
                    [1, 0, 1],
                    [0, 1, 0],
                ],
                1,
                1,
                5,
            ),
        ).toEqual([
            [0, 1, 0],
            [1, 5, 1],
            [0, 1, 0],
        ]);
    });
});
