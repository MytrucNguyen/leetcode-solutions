import { minEatingSpeed } from './solution';

describe('875. Koko Eating Bananas', () => {
    test('Example 1: [3,6,7,11], h=8', () => {
        expect(minEatingSpeed([3, 6, 7, 11], 8)).toBe(4);
    });

    test('Example 2: [30,11,23,4,20], h=5', () => {
        expect(minEatingSpeed([30, 11, 23, 4, 20], 5)).toBe(30);
    });

    test('Example 3: [30,11,23,4,20], h=6', () => {
        expect(minEatingSpeed([30, 11, 23, 4, 20], 6)).toBe(23);
    });

    test('Single pile', () => {
        expect(minEatingSpeed([10], 5)).toBe(2);
    });

    test('h equals piles length — must eat each in one hour', () => {
        expect(minEatingSpeed([5, 10, 15], 3)).toBe(15);
    });

    test('Plenty of time', () => {
        expect(minEatingSpeed([3, 6, 7, 11], 100)).toBe(1);
    });

    test('All same piles', () => {
        expect(minEatingSpeed([10, 10, 10], 6)).toBe(5);
    });

    test('One banana piles', () => {
        expect(minEatingSpeed([1, 1, 1, 1], 4)).toBe(1);
    });

    test('Large pile small h', () => {
        expect(minEatingSpeed([1000000000], 2)).toBe(500000000);
    });
});
