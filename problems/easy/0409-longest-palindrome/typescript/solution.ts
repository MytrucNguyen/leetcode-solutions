export function longestPalindrome(s: string): number {
    const freq = new Map<string, number>();

    for (const char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    let length = 0;

    for (const count of freq.values()) {
        length += Math.floor(count / 2) * 2;
    }

    if (length < s.length) length++;

    return length;
}
