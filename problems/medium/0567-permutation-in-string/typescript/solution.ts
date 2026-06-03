export function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) return false;

    const s1Freq = new Array(26).fill(0);
    const windowFreq = new Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);

    for (const char of s1) {
        s1Freq[char.charCodeAt(0) - aCode]++;
    }

    for (let i = 0; i < s1.length; i++) {
        windowFreq[s2.charCodeAt(i) - aCode]++;
    }

    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (s1Freq[i] === windowFreq[i]) matches++;
    }

    if (matches === 26) return true;

    for (let i = s1.length; i < s2.length; i++) {
        const addIndex = s2.charCodeAt(i) - aCode;
        const removeIndex = s2.charCodeAt(i - s1.length) - aCode;

        windowFreq[addIndex]++;
        if (windowFreq[addIndex] === s1Freq[addIndex]) matches++;
        else if (windowFreq[addIndex] === s1Freq[addIndex] + 1) matches--;

        windowFreq[removeIndex]--;
        if (windowFreq[removeIndex] === s1Freq[removeIndex]) matches++;
        else if (windowFreq[removeIndex] === s1Freq[removeIndex] - 1) matches--;

        if (matches === 26) return true;
    }

    return false;
}
