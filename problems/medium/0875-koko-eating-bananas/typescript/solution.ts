function totalHours(piles: number[], speed: number): number {
    let hours = 0;

    for (const pile of piles) {
        hours += Math.ceil(pile / speed);
    }

    return hours;
}

export function minEatingSpeed(piles: number[], h: number): number {
    let left = 1;
    let right = Math.max(...piles);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const hours = totalHours(piles, mid);

        if (hours <= h) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
