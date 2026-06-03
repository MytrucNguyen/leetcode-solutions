import { trap } from './solution';

describe('42. Trapping Rain Water', () => {
    test('Example 1: [0,1,0,2,1,0,1,3,2,1,2,1]', () => {
        expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
    });

    test('Example 2: [4,2,0,3,2,5]', () => {
        expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
    });

    test('No water — ascending', () => {
        expect(trap([1, 2, 3, 4, 5])).toBe(0);
    });

    test('No water — descending', () => {
        expect(trap([5, 4, 3, 2, 1])).toBe(0);
    });

    test('Single element', () => {
        expect(trap([5])).toBe(0);
    });

    test('Two elements', () => {
        expect(trap([3, 1])).toBe(0);
    });

    test('Simple valley', () => {
        expect(trap([3, 0, 3])).toBe(3);
    });

    test('All same height', () => {
        expect(trap([2, 2, 2, 2])).toBe(0);
    });

    test('Deep valley', () => {
        expect(trap([5, 0, 0, 0, 5])).toBe(15);
    });

    test('Multiple valleys', () => {
        expect(trap([3, 0, 3, 0, 3])).toBe(6);
    });
});
