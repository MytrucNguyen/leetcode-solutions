import { kClosest } from './solution';

describe('973. K Closest Points to Origin', () => {
    test('Example 1: [[1,3],[-2,2]], k=1', () => {
        expect(
            kClosest(
                [
                    [1, 3],
                    [-2, 2],
                ],
                1,
            ),
        ).toEqual([[-2, 2]]);
    });

    test('Example 2: [[3,3],[5,-1],[-2,4]], k=2', () => {
        const result = kClosest(
            [
                [3, 3],
                [5, -1],
                [-2, 4],
            ],
            2,
        );
        const dists = result.map(([x, y]) => x * x + y * y).sort((a, b) => a - b);
        expect(dists).toEqual([18, 20]);
    });

    test('k equals points length', () => {
        const result = kClosest(
            [
                [1, 1],
                [2, 2],
            ],
            2,
        );
        expect(result.length).toBe(2);
    });

    test('Single point', () => {
        expect(kClosest([[0, 1]], 1)).toEqual([[0, 1]]);
    });

    test('Origin point', () => {
        const result = kClosest(
            [
                [0, 0],
                [1, 1],
            ],
            1,
        );
        expect(result).toEqual([[0, 0]]);
    });

    test('Negative coordinates', () => {
        const result = kClosest(
            [
                [-1, -1],
                [-2, -2],
                [1, 1],
            ],
            2,
        );
        const dists = result.map(([x, y]) => x * x + y * y).sort((a, b) => a - b);
        expect(dists).toEqual([2, 2]);
    });

    test('Same distance', () => {
        const result = kClosest(
            [
                [1, 0],
                [0, 1],
                [-1, 0],
            ],
            2,
        );
        expect(result.length).toBe(2);
        result.forEach(([x, y]) => expect(x * x + y * y).toBe(1));
    });

    test('k = 1 from many', () => {
        const result = kClosest(
            [
                [10, 10],
                [1, 1],
                [5, 5],
                [3, 3],
            ],
            1,
        );
        expect(result).toEqual([[1, 1]]);
    });
});
