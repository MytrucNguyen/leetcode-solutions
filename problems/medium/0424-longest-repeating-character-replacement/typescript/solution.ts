export function characterReplacement(s: string, k: number): number {
    const freq = new Array(26).fill(0);
    const aCode = 'A'.charCodeAt(0);
    let left = 0;
    let maxFreq = 0;
    let result = 0;

    for (let right = 0; right < s.length; right++) {
        freq[s.charCodeAt(right) - aCode]++;
        maxFreq = Math.max(maxFreq, freq[s.charCodeAt(right) - aCode]);

        while (right - left + 1 - maxFreq > k) {
            freq[s.charCodeAt(left) - aCode]--;
            left++;
        }

        result = Math.max(result, right - left + 1);
    }

    return result;
}
