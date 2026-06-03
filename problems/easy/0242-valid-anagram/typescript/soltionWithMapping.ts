export function isAnagramWithMapping(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const charCount = new Map<string, number>();

  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (!charCount.has(char)) {
      return false;
    }

    const newCount = charCount.get(char)! - 1;

    if (newCount < 0) {
      return false;
    }

    charCount.set(char, newCount);
  }

  for (const count of charCount.values()) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
}
