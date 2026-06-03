export function partition(s: string): string[][] {
    const result: string[][] = [];

    function isPalindrome(start: number, end: number): boolean {
        while (start < end) {
            if (s[start] !== s[end]) return false;
            start++;
            end--;
        }
        return true;
    }

    function backtrack(index: number, current: string[]): void {
        if (index === s.length) {
            result.push([...current]);
            return;
        }

        for (let end = index; end < s.length; end++) {
            if (isPalindrome(index, end)) {
                current.push(s.substring(index, end + 1));
                backtrack(end + 1, current);
                current.pop();
            }
        }
    }

    backtrack(0, []);
    return result;
}