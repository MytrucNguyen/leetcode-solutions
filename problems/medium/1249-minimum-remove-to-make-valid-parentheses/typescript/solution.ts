export function minRemoveToMakeValid(s: string): string {
    const stack: number[] = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            if (stack.length > 0 && s[stack[stack.length - 1]] === '(') {
                stack.pop();
            } else {
                stack.push(i);
            }
        }
    }

    const removeSet = new Set(stack);

    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (!removeSet.has(i)) {
            result += s[i];
        }
    }

    return result;
}
