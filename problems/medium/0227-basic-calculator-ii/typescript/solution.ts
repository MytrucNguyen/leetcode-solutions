export function calculate(s: string): number {
    const stack: number[] = [];
    let currentNum = 0;
    let prevOp = '+';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char >= '0' && char <= '9') {
            currentNum = currentNum * 10 + Number(char);
        }

        if ((char !== ' ' && (char < '0' || char > '9')) || i === s.length - 1) {
            if (prevOp === '+') {
                stack.push(currentNum);
            } else if (prevOp === '-') {
                stack.push(-currentNum);
            } else if (prevOp === '*') {
                stack.push(stack.pop()! * currentNum);
            } else if (prevOp === '/') {
                stack.push(Math.trunc(stack.pop()! / currentNum));
            }

            prevOp = char;
            currentNum = 0;
        }
    }

    return stack.reduce((sum, val) => sum + val, 0);
}
