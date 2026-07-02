export function reverseWords(s: string): string {
    const words = s.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split('').reverse().join('');
    }

    return words.join(' ');
}

export function reverseWordsOneLine(s: string): string {
    return s
        .split(' ')
        .map((word) => word.split('').reverse().join(''))
        .join(' ');
}
