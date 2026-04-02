export function permute(nums: number[]): number[][] {
    const result: number[][] = [];
    const used = new Set<number>();

    function backtrack(current: number[]): void {
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }

        for (const num of nums) {
            if (used.has(num)) continue;

            current.push(num);
            used.add(num);
            backtrack(current);

            current.pop();
            used.delete(num);
        }
    }

    backtrack([]);
    return result;
}