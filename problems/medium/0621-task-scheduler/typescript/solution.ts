export function leastInterval(tasks: string[], n: number): number {
    const freq = new Array(26).fill(0);

    for (const task of tasks) {
        freq[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }

    const maxFreq = Math.max(...freq);
    const countOfMaxFreq = freq.filter((f) => f === maxFreq).length;
    const frameSize = (maxFreq - 1) * (n + 1) + countOfMaxFreq;

    return Math.max(tasks.length, frameSize);
}
