export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const nextGreater = new Map<number, number>();
    const stack: number[] = [];

    for (const num of nums2) {
        while (stack.length > 0 && num > stack[stack.length - 1]) {
            nextGreater.set(stack.pop()!, num);
        }
        stack.push(num);
    }

    while (stack.length > 0) {
        nextGreater.set(stack.pop()!, -1);
    }

    return nums1.map((num) => nextGreater.get(num)!);
}
