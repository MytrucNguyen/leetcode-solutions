import { jump } from './solution';

describe('45. Jump Game II', () => {
    test('Example 1: [2,3,1,1,4]', () => {
        expect(jump([2, 3, 1, 1, 4])).toBe(2);
    });

    test('Example 2: [2,3,0,1,4]', () => {
        expect(jump([2, 3, 0, 1, 4])).toBe(2);
    });

    test('Single element — already there', () => {
        expect(jump([0])).toBe(0);
    });

    test('Two elements', () => {
        expect(jump([1, 1])).toBe(1);
    });

    test('One big jump', () => {
        expect(jump([5, 0, 0, 0, 0, 1])).toBe(1);
    });

    test('All ones', () => {
        expect(jump([1, 1, 1, 1, 1])).toBe(4);
    });

    test('Decreasing values', () => {
        expect(jump([4, 3, 2, 1, 1])).toBe(1);
    });

    test('Optimal not always first max', () => {
        expect(jump([1, 2, 1, 1, 1])).toBe(3);
    });

    test('Large first jump', () => {
        expect(jump([10, 1, 1, 1, 1])).toBe(1);
    });
});
