import { canVisitAllRooms } from './solution';

describe('841. Keys and Rooms', () => {
    test('Example 1: [[1],[2],[3],[]]', () => {
        expect(canVisitAllRooms([[1], [2], [3], []])).toBe(true);
    });

    test('Example 2: [[1,3],[3,0,1],[2],[0]]', () => {
        expect(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])).toBe(false);
    });

    test('Two rooms, can visit', () => {
        expect(canVisitAllRooms([[1], []])).toBe(true);
    });

    test('Two rooms, cannot visit', () => {
        expect(canVisitAllRooms([[], [0]])).toBe(false);
    });

    test('All keys in room 0', () => {
        expect(canVisitAllRooms([[1, 2, 3], [], [], []])).toBe(true);
    });

    test('Circular keys', () => {
        expect(canVisitAllRooms([[1], [2], [0]])).toBe(true);
    });

    test('Multiple keys to same room', () => {
        expect(canVisitAllRooms([[1, 2], [2], []])).toBe(true);
    });

    test('Isolated room', () => {
        expect(canVisitAllRooms([[2], [], [0]])).toBe(false);
    });
});
