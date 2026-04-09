export function reverseWords(s: string): string {
    return s.trim().split(/\s+/).reverse().join(' ');
}

// trim() — removes leading/trailing spaces
// split(/\s+/) — splits by one or more spaces (regex), handles multiple spaces
// reverse() — reverses the array of words
// join(' ') — joins with a single space

// without built-ins
export function reverseWordsManual(s: string): string {
    const words: string[] = [];
    let i = 0;

    while (i < s.length) {
        // Skip spaces
        while (i < s.length && s[i] === ' ') i++;

        // Build a word
        if (i < s.length) {
            let word = '';
            while (i < s.length && s[i] !== ' ') {
                word += s[i];
                i++;
            }
            words.push(word);
        }
    }

    return words.reverse().join(' ');
}
