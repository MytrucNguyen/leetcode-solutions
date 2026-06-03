export function multiply(num1: string, num2: string): string {
    if (num1 === '0' || num2 === '0') return '0';

    const m = num1.length;
    const n = num2.length;
    const result = new Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const product = Number(num1[i]) * Number(num2[j]) + result[i + j + 1];
            result[i + j + 1] = product % 10;
            result[i + j] += Math.floor(product / 10);
        }
    }

    let str = result.join('');
    str = str.replace(/^0+/, '');
    return str || '0';
}
