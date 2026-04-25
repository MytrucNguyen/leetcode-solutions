import { orangesRotting } from './solution';

describe('994. Rotting Oranges', () => {
    test('Example 1: 4 minutes', () => {
        expect(
            orangesRotting([
                [2, 1, 1],
                [1, 1, 0],
                [0, 1, 1],
            ]),
        ).toBe(4);
    });

    test('Example 2: impossible', () => {
        expect(
            orangesRotting([
                [2, 1, 1],
                [0, 1, 1],
                [1, 0, 1],
            ]),
        ).toBe(-1);
    });

    test('Example 3: no fresh oranges', () => {
        expect(orangesRotting([[0, 2]])).toBe(0);
    });

    test('All fresh, no rotten', () => {
        expect(
            orangesRotting([
                [1, 1],
                [1, 1],
            ]),
        ).toBe(-1);
    });

    test('All rotten already', () => {
        expect(
            orangesRotting([
                [2, 2],
                [2, 2],
            ]),
        ).toBe(0);
    });

    test('Single fresh next to rotten', () => {
        expect(orangesRotting([[2, 1]])).toBe(1);
    });

    test('Empty grid', () => {
        expect(orangesRotting([[0]])).toBe(0);
    });

    test('Multiple rotten sources', () => {
        expect(
            orangesRotting([
                [2, 1, 1],
                [1, 1, 1],
                [1, 1, 2],
            ]),
        ).toBe(2);
    });

    test('Line of oranges', () => {
        expect(orangesRotting([[2, 1, 1, 1, 1]])).toBe(4);
    });
});
