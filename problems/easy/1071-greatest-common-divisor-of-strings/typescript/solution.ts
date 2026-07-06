function gcd(a: number, b: number): number {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

export function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) return '';

    const g = gcd(str1.length, str2.length);

    return str1.substring(0, g);
}
