let _pick: number;

function guess(num: number): number {
    if (num === _pick) return 0;
    if (num > _pick) return -1;
    return 1;
}

function guessNumber(n: number): number {
    let left = 1;
    let right = n;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        const result = guess(mid);

        if (result === 0) {
            return mid;
        } else if (result === -1) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

export { guessNumber, _pick };
