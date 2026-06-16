import { eraseOverlapIntervals } from './solution';

describe('435. Non-overlapping Intervals', () => {
    test('Example 1: [[1,2],[2,3],[3,4],[1,3]]', () => {
        expect(
            eraseOverlapIntervals([
                [1, 2],
                [2, 3],
                [3, 4],
                [1, 3],
            ]),
        ).toBe(1);
    });

    test('Example 2: [[1,2],[1,2],[1,2]]', () => {
        expect(
            eraseOverlapIntervals([
                [1, 2],
                [1, 2],
                [1, 2],
            ]),
        ).toBe(2);
    });

    test('Example 3: [[1,2],[2,3]]', () => {
        expect(
            eraseOverlapIntervals([
                [1, 2],
                [2, 3],
            ]),
        ).toBe(0);
    });

    test('Single interval', () => {
        expect(eraseOverlapIntervals([[1, 2]])).toBe(0);
    });

    test('All overlapping', () => {
        expect(
            eraseOverlapIntervals([
                [1, 4],
                [2, 5],
                [3, 6],
            ]),
        ).toBe(2);
    });

    test('No overlaps', () => {
        expect(
            eraseOverlapIntervals([
                [1, 2],
                [3, 4],
                [5, 6],
            ]),
        ).toBe(0);
    });

    test('Nested intervals', () => {
        expect(
            eraseOverlapIntervals([
                [1, 10],
                [2, 3],
                [4, 5],
                [6, 7],
            ]),
        ).toBe(1);
    });

    test('Touching endpoints', () => {
        expect(
            eraseOverlapIntervals([
                [1, 2],
                [2, 3],
                [3, 4],
            ]),
        ).toBe(0);
    });

    test('Negative values', () => {
        expect(
            eraseOverlapIntervals([
                [-2, -1],
                [0, 1],
                [-1, 0],
            ]),
        ).toBe(0);
    });
});
