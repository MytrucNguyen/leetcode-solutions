function lowerBound(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

export function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    potions.sort((a, b) => a - b);
    const m = potions.length;

    return spells.map((spell) => {
        const minPotion = Math.ceil(success / spell);
        const index = lowerBound(potions, minPotion);
        return m - index;
    });
}
