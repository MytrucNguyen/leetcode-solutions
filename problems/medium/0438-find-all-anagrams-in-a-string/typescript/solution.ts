export function findAnagrams(s: string, p: string): number[] {
  if (s.length < p.length) return [];

  const result: number[] = [];
  const pFreq = new Array(26).fill(0);
  const windowFreq = new Array(26).fill(0);
  const aCode = "a".charCodeAt(0);

  for (const char of p) {
    pFreq[char.charCodeAt(0) - aCode]++;
  }

  for (let i = 0; i < p.length; i++) {
    windowFreq[s.charCodeAt(i) - aCode]++;
  }

  let matches = 0;
  for (let i = 0; i < 26; i++) {
    if (pFreq[i] === windowFreq[i]) matches++;
  }

  if (matches === 26) result.push(0);

  for (let i = p.length; i < s.length; i++) {
    const addIndex = s.charCodeAt(i) - aCode;
    const removeIndex = s.charCodeAt(i - p.length) - aCode;

    windowFreq[addIndex]++;
    if (windowFreq[addIndex] === pFreq[addIndex]) matches++;
    else if (windowFreq[addIndex] === pFreq[addIndex] + 1) matches--;

    windowFreq[removeIndex]--;
    if (windowFreq[removeIndex] === pFreq[removeIndex]) matches++;
    else if (windowFreq[removeIndex] === pFreq[removeIndex] - 1) matches--;

    if (matches === 26) result.push(i - p.length + 1);
  }

  return result;
}
