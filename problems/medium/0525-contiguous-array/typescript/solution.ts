export function findMaxLength(nums: number[]): number {
    const map = new Map<number, number>();
    map.set(0, -1);
    let prefixSum = 0;
    let maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i] === 1 ? 1 : -1;

        if (map.has(prefixSum)) {
            maxLen = Math.max(maxLen, i - map.get(prefixSum)!);
        } else {
            map.set(prefixSum, i);
        }
    }

    return maxLen;
}
