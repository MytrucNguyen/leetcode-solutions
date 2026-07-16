export function maxOperations(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums.length - 1;
    let pairs = 0;

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum === k) {
            pairs++;
            left++;
            right--;
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }

    return pairs;
}
