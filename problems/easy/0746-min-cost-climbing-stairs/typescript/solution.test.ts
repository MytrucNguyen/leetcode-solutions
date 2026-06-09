import { minCostClimbingStairs } from './solution';

describe('746. Min Cost Climbing Stairs', () => {
    test('Example 1: [10, 15, 20]', () => {
        expect(minCostClimbingStairs([10, 15, 20])).toBe(15);
    });

    test('Example 2: [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]', () => {
        expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
    });

    test('Two steps — take cheaper', () => {
        expect(minCostClimbingStairs([10, 15])).toBe(10);
    });

    test('Two steps — second cheaper', () => {
        expect(minCostClimbingStairs([15, 10])).toBe(10);
    });

    test('All same cost', () => {
        expect(minCostClimbingStairs([5, 5, 5, 5])).toBe(10);
    });

    test('All zeros', () => {
        expect(minCostClimbingStairs([0, 0, 0, 0])).toBe(0);
    });

    test('Ascending costs', () => {
        expect(minCostClimbingStairs([1, 2, 3, 4, 5])).toBe(6);
    });

    test('Descending costs', () => {
        expect(minCostClimbingStairs([5, 4, 3, 2, 1])).toBe(6);
    });

    test('Skip every other', () => {
        expect(minCostClimbingStairs([0, 100, 0, 100, 0])).toBe(0);
    });
});
