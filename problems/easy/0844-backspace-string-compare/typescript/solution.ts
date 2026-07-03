function findNextValid(str: string, index: number): number {
    let skip = 0;

    while (index >= 0) {
        if (str[index] === '#') {
            skip++;
            index--;
        } else if (skip > 0) {
            skip--;
            index--;
        } else {
            break;
        }
    }

    return index;
}

export function backspaceCompare(s: string, t: string): boolean {
    let i = s.length - 1;
    let j = t.length - 1;

    while (i >= 0 || j >= 0) {
        i = findNextValid(s, i);
        j = findNextValid(t, j);

        if (i >= 0 && j >= 0) {
            if (s[i] !== t[j]) return false;
        } else if (i >= 0 || j >= 0) {
            return false;
        }

        i--;
        j--;
    }

    return true;
}
