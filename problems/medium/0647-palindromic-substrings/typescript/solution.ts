export function countSubstrings(s: string): number {
    let count = 0;

    function expandFromCenter(left: number, right: number): void {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandFromCenter(i, i);
        expandFromCenter(i, i + 1);
    }

    return count;
}
