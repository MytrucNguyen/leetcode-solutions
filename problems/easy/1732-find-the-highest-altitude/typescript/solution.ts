export function largestAltitude(gain: number[]): number {
    let altitude = 0;
    let maxAlt = 0;

    for (const g of gain) {
        altitude += g;
        maxAlt = Math.max(maxAlt, altitude);
    }

    return maxAlt;
}
