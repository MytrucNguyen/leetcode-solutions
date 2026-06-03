import { findOrder } from './solution';

function isValidOrder(numCourses: number, prerequisites: number[][], order: number[]): boolean {
    if (order.length !== numCourses) return false;

    const position = new Map<number, number>();
    for (let i = 0; i < order.length; i++) {
        position.set(order[i], i);
    }

    for (const [course, prereq] of prerequisites) {
        if (position.get(prereq)! >= position.get(course)!) return false;
    }

    return true;
}

describe('210. Course Schedule II', () => {
    test('Example 1: 2 courses', () => {
        const result = findOrder(2, [[1, 0]]);
        expect(isValidOrder(2, [[1, 0]], result)).toBe(true);
    });

    test('Example 2: 4 courses', () => {
        const result = findOrder(4, [
            [1, 0],
            [2, 0],
            [3, 1],
            [3, 2],
        ]);
        expect(
            isValidOrder(
                4,
                [
                    [1, 0],
                    [2, 0],
                    [3, 1],
                    [3, 2],
                ],
                result,
            ),
        ).toBe(true);
    });

    test('Example 3: single course', () => {
        expect(findOrder(1, [])).toEqual([0]);
    });

    test('Cycle — impossible', () => {
        expect(
            findOrder(2, [
                [1, 0],
                [0, 1],
            ]),
        ).toEqual([]);
    });

    test('No prerequisites', () => {
        const result = findOrder(3, []);
        expect(result.length).toBe(3);
        expect(result.sort()).toEqual([0, 1, 2]);
    });

    test('Linear chain', () => {
        const result = findOrder(4, [
            [1, 0],
            [2, 1],
            [3, 2],
        ]);
        expect(
            isValidOrder(
                4,
                [
                    [1, 0],
                    [2, 1],
                    [3, 2],
                ],
                result,
            ),
        ).toBe(true);
    });

    test('Three node cycle', () => {
        expect(
            findOrder(3, [
                [1, 0],
                [2, 1],
                [0, 2],
            ]),
        ).toEqual([]);
    });

    test('Disconnected courses', () => {
        const result = findOrder(4, [
            [1, 0],
            [3, 2],
        ]);
        expect(
            isValidOrder(
                4,
                [
                    [1, 0],
                    [3, 2],
                ],
                result,
            ),
        ).toBe(true);
    });
});
