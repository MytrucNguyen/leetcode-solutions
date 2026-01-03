export function isValid(s: string): boolean {
    const stack: string[] = [];
    const pairs: { [key: string]: string } = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for(let i = 0; i < s.length; i++){
        const char = s[i];

        if(char === '(' || char === '[' || char === '{'){
            stack.push(char);
        } 
        
        else {
            if (stack.length === 0){
                return false;
            }

            const top = stack[stack.length - 1];

            if(top === pairs[char]){
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
};