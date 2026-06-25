export function checkValidString(s: string): boolean {
    let low = 0;
    let high = 0;

    for (const char of s) {
        if (char === '(') {
            low++;
            high++;
        } else if (char === ')') {
            low--;
            high--;
        } else {
            low--;
            high++;
        }

        if (high < 0) return false;
        if (low < 0) low = 0;
    }

    return low === 0;
}
