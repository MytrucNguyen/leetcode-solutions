export function compress(chars: string[]): number {
    let write = 0;
    let read = 0;

    while (read < chars.length) {
        const char = chars[read];
        let count = 0;

        while (read < chars.length && chars[read] === char) {
            read++;
            count++;
        }

        chars[write] = char;
        write++;

        if (count > 1) {
            const countStr = String(count);
            for (const digit of countStr) {
                chars[write] = digit;
                write++;
            }
        }
    }

    return write;
}
