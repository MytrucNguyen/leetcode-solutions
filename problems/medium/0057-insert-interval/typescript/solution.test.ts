import { insert } from './solution';

describe('57. Insert Interval', () => {
    test('Example 1: merge with one', () => {
        expect(
            insert(
                [
                    [1, 3],
                    [6, 9],
                ],
                [2, 5],
            ),
        ).toEqual([
            [1, 5],
            [6, 9],
        ]);
    });

    test('Example 2: merge with multiple', () => {
        expect(
            insert(
                [
                    [1, 2],
                    [3, 5],
                    [6, 7],
                    [8, 10],
                    [12, 16],
                ],
                [4, 8],
            ),
        ).toEqual([
            [1, 2],
            [3, 10],
            [12, 16],
        ]);
    });

    test('Example 3: empty intervals', () => {
        expect(insert([], [5, 7])).toEqual([[5, 7]]);
    });

    test('No overlap — insert at beginning', () => {
        expect(
            insert(
                [
                    [3, 5],
                    [6, 9],
                ],
                [1, 2],
            ),
        ).toEqual([
            [1, 2],
            [3, 5],
            [6, 9],
        ]);
    });

    test('No overlap — insert at end', () => {
        expect(
            insert(
                [
                    [1, 3],
                    [6, 9],
                ],
                [10, 12],
            ),
        ).toEqual([
            [1, 3],
            [6, 9],
            [10, 12],
        ]);
    });

    test('No overlap — insert in middle', () => {
        expect(
            insert(
                [
                    [1, 2],
                    [6, 9],
                ],
                [3, 5],
            ),
        ).toEqual([
            [1, 2],
            [3, 5],
            [6, 9],
        ]);
    });

    test('Merge all into one', () => {
        expect(
            insert(
                [
                    [1, 3],
                    [4, 6],
                    [7, 9],
                ],
                [2, 8],
            ),
        ).toEqual([[1, 9]]);
    });

    test('Exact overlap', () => {
        expect(insert([[1, 5]], [1, 5])).toEqual([[1, 5]]);
    });

    test('New interval contains all', () => {
        expect(
            insert(
                [
                    [2, 3],
                    [4, 5],
                ],
                [1, 10],
            ),
        ).toEqual([[1, 10]]);
    });
});
