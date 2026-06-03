export function largestNumber(nums: number[]): string {
    const strs = nums.map(String);

    strs.sort((a, b) => {
        const ab = a + b;
        const ba = b + a;
        return ab > ba ? -1 : ab < ba ? 1 : 0;
    });

    if (strs[0] === '0') return '0';

    return strs.join('');
}
