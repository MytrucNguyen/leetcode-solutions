import { largestAltitude } from './solution';

describe('1732. Find the Highest Altitude', () => {
    test('Example 1: [-5,1,5,0,-7]', () => {
        expect(largestAltitude([-5, 1, 5, 0, -7])).toBe(1);
    });

    test('Example 2: [-4,-3,-2,-1,4,3,2]', () => {
        expect(largestAltitude([-4, -3, -2, -1, 4, 3, 2])).toBe(0);
    });

    test('All positive gains', () => {
        expect(largestAltitude([1, 2, 3])).toBe(6);
    });

    test('All negative gains', () => {
        expect(largestAltitude([-1, -2, -3])).toBe(0);
    });

    test('Single gain positive', () => {
        expect(largestAltitude([5])).toBe(5);
    });

    test('Single gain negative', () => {
        expect(largestAltitude([-5])).toBe(0);
    });

    test('Up and down', () => {
        expect(largestAltitude([10, -5, 10, -5])).toBe(10);
    });

    test('All zeros', () => {
        expect(largestAltitude([0, 0, 0])).toBe(0);
    });
});
