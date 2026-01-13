export function lengthOfLongestSubstring(s: string): number {
  let leftPointer = 0;
  let maxLength = 0;
  let substring = new Set<string>();

  for (let right = 0; right < s.length; right++) {
    while (substring.has(s[right])) {
      substring.delete(s[leftPointer]);
      leftPointer++;
    }

    substring.add(s[right]);
    maxLength = Math.max(maxLength, right - leftPointer + 1);
  }

  return maxLength;
}
