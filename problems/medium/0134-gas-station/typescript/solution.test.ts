import { canCompleteCircuit } from './solution';

describe('134. Gas Station', () => {
    test('Example 1: start at 3', () => {
        expect(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).toBe(3);
    });

    test('Example 2: impossible', () => {
        expect(canCompleteCircuit([2, 3, 4], [3, 4, 3])).toBe(-1);
    });

    test('Single station — enough gas', () => {
        expect(canCompleteCircuit([5], [3])).toBe(0);
    });

    test('Single station — not enough', () => {
        expect(canCompleteCircuit([3], [5])).toBe(-1);
    });

    test('Start at first station', () => {
        expect(canCompleteCircuit([3, 1, 1], [1, 2, 2])).toBe(0);
    });

    test('Start at last station', () => {
        expect(canCompleteCircuit([1, 1, 3], [2, 2, 1])).toBe(2);
    });

    test('All equal', () => {
        expect(canCompleteCircuit([3, 3, 3], [3, 3, 3])).toBe(0);
    });

    test('Exact gas needed', () => {
        expect(canCompleteCircuit([0, 0, 0, 5], [1, 1, 1, 2])).toBe(3);
    });
});