export function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    candidates.sort((a, b) => a - b);

    function backtrack(start: number, remaining: number, current: number[]): void {
        if (remaining === 0) {
            result.push([...current]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] > remaining) break;

            current.push(candidates[i]);
            backtrack(i, remaining - candidates[i], current);
            current.pop();
        }
    }

    backtrack(0, target, []);
    return result;
}
