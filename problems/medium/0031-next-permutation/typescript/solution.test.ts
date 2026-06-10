import { nextPermutation } from './solution';

describe('31. Next Permutation', () => {
    test('Example 1: [1,2,3]', () => {
        const nums = [1, 2, 3];
        nextPermutation(nums);
        expect(nums).toEqual([1, 3, 2]);
    });

    test('Example 2: [3,2,1] — wrap to smallest', () => {
        const nums = [3, 2, 1];
        nextPermutation(nums);
        expect(nums).toEqual([1, 2, 3]);
    });

    test('Example 3: [1,1,5]', () => {
        const nums = [1, 1, 5];
        nextPermutation(nums);
        expect(nums).toEqual([1, 5, 1]);
    });

    test('Single element', () => {
        const nums = [1];
        nextPermutation(nums);
        expect(nums).toEqual([1]);
    });

    test('Two elements ascending', () => {
        const nums = [1, 2];
        nextPermutation(nums);
        expect(nums).toEqual([2, 1]);
    });

    test('Two elements descending', () => {
        const nums = [2, 1];
        nextPermutation(nums);
        expect(nums).toEqual([1, 2]);
    });

    test('Pivot in the middle', () => {
        const nums = [1, 3, 2];
        nextPermutation(nums);
        expect(nums).toEqual([2, 1, 3]);
    });

    test('Longer array', () => {
        const nums = [1, 5, 8, 4, 7, 6, 5, 3, 1];
        nextPermutation(nums);
        expect(nums).toEqual([1, 5, 8, 5, 1, 3, 4, 6, 7]);
    });

    test('Duplicates', () => {
        const nums = [2, 3, 1, 3, 3];
        nextPermutation(nums);
        expect(nums).toEqual([2, 3, 3, 1, 3]);
    });
});
