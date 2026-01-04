class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        opening_brackets = {"(", "[", "{"}

        pair = {
            ")": "(",
            "]": "[",
            "}": "{",
        }

        for char in s:
            if char in opening_brackets:
                stack.append(char)

            else:
                if len(stack) == 0: 
                    return False

                top = stack[-1]

                if top == pair[char]:
                    stack.pop()

                else:
                    return False

        return len(stack) == 0

