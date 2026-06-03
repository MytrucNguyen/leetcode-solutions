export function lengthOfLastWord(s: string): number {
    let i = s.length - 1;

    while (i >= 0 && s[i] === ' ') {
        i--;
    }

    let length = 0;
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
}

export function lengthOfLastWordOneLiner(s: string): string {
    return s.trim().split(' ').pop()!.length;
}
