import { canFinish } from './solution';

describe('207. Course Schedule', () => {
    test('Example 1: no cycle', () => {
        expect(canFinish(2, [[1, 0]])).toBe(true);
    });

    test('Example 2: simple cycle', () => {
        expect(
            canFinish(2, [
                [1, 0],
                [0, 1],
            ]),
        ).toBe(false);
    });

    test('No prerequisites', () => {
        expect(canFinish(3, [])).toBe(true);
    });

    test('Linear chain', () => {
        expect(
            canFinish(4, [
                [1, 0],
                [2, 1],
                [3, 2],
            ]),
        ).toBe(true);
    });

    test('Three node cycle', () => {
        expect(
            canFinish(3, [
                [1, 0],
                [2, 1],
                [0, 2],
            ]),
        ).toBe(false);
    });

    test('Disconnected courses', () => {
        expect(
            canFinish(4, [
                [1, 0],
                [3, 2],
            ]),
        ).toBe(true);
    });

    test('Multiple prerequisites for one course', () => {
        expect(
            canFinish(3, [
                [2, 0],
                [2, 1],
            ]),
        ).toBe(true);
    });

    test('Single course', () => {
        expect(canFinish(1, [])).toBe(true);
    });

    test('Diamond shape no cycle', () => {
        expect(
            canFinish(4, [
                [1, 0],
                [2, 0],
                [3, 1],
                [3, 2],
            ]),
        ).toBe(true);
    });

    test('Cycle in subset of courses', () => {
        expect(
            canFinish(5, [
                [1, 0],
                [2, 1],
                [1, 2],
                [3, 4],
            ]),
        ).toBe(false);
    });
});
