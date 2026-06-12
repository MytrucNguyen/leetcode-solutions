export function evalRPN(tokens: string[]): number {
    const stack: number[] = [];
    const ops = new Set(['+', '-', '*', '/']);

    for (const token of tokens) {
        if (ops.has(token)) {
            const right = stack.pop()!;
            const left = stack.pop()!;

            let result: number;

            if (token === '+') result = left + right;
            else if (token === '-') result = left - right;
            else if (token === '*') result = left * right;
            else result = Math.trunc(left / right);

            stack.push(result);
        } else {
            stack.push(Number(token));
        }
    }

    return stack[0];
}
