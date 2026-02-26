export function firstUniqChar(s: string): number {
  const freq = new Map<string, number>();
  // Count frequencies
  for (const char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  // Find first unique
  for (let i = 0; i < s.length; i++) {
    if (freq.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
}
