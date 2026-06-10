export function nextPermutation(nums: number[]): void {
    const n = nums.length;
    let i = n - 2;

    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        let j = n - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    let left = i + 1;
    let right = n - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}
