export function minWindow(s: string, t: string): string {
    if (t.length > s.length) return '';

    const tFreq = new Map<string, number>();
    for (const char of t) {
        tFreq.set(char, (tFreq.get(char) || 0) + 1);
    }

    const required = tFreq.size;
    const windowFreq = new Map<string, number>();
    let formed = 0;

    let left = 0;
    let minLen = Infinity;
    let minStart = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        windowFreq.set(char, (windowFreq.get(char) || 0) + 1);

        if (tFreq.has(char) && windowFreq.get(char) === tFreq.get(char)) {
            formed++;
        }

        while (formed === required) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }

            const leftChar = s[left];
            windowFreq.set(leftChar, windowFreq.get(leftChar)! - 1);

            if (tFreq.has(leftChar) && windowFreq.get(leftChar)! < tFreq.get(leftChar)!) {
                formed--;
            }

            left++;
        }
    }

    return minLen === Infinity ? '' : s.substring(minStart, minStart + minLen);
}
