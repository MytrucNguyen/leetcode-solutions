export function strStr(haystack: string, needle: string): number {
    if (needle.length > haystack.length) return -1;

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let match = true;

        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                match = false;
                break;
            }
        }

        if (match) return i;
    }

    return -1;
}

export function strStrOneLiner(haystack: string, needle: string): number {
    return haystack.indexOf(needle);
}
