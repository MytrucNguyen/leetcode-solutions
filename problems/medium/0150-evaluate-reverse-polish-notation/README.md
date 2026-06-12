# 150. Evaluate Reverse Polish Notation

**Difficulty:** Medium  
**Topics:** Array, Math, Stack  
**Link:** [LeetCode Problem](https://leetcode.com/problems/evaluate-reverse-polish-notation/)

## Problem Description

You are given an array of strings `tokens` that represents an arithmetic expression in **Reverse Polish Notation**.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

- The valid operators are `+`, `-`, `*`, and `/`
- Each operand may be an integer or another expression
- Division truncates toward zero
- There will not be any division by zero
- The input always represents a valid expression

### Examples

**Example 1:**

    Input: tokens = ["2","1","+","3","*"]
    Output: 9
    Explanation: ((2 + 1) * 3) = 9

**Example 2:**

    Input: tokens = ["4","13","5","/","+"]
    Output: 6
    Explanation: (4 + (13 / 5)) = (4 + 2) = 6

**Example 3:**

    Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
    Output: 22
    Explanation:
      ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
    = ((10 * (6 / (12 * -11))) + 17) + 5
    = ((10 * (6 / -132)) + 17) + 5
    = ((10 * 0) + 17) + 5
    = 22

### Constraints

- `1 <= tokens.length <= 10^4`
- `tokens[i]` is either an operator or an integer in the range `[-200, 200]`

## Approach

### Stack — Push Numbers, Pop on Operators

Walk through the tokens. Numbers go on the stack. When you hit an operator, pop two numbers, compute, push the result.

**Key Insight:** Reverse Polish Notation eliminates the need for parentheses and operator precedence rules. The order of operations is built into the token sequence. A stack naturally evaluates it — no need for the complex precedence logic from Basic Calculator II (#227).

**Important detail:** When popping for operators, the SECOND popped value is the left operand and the FIRST popped value is the right operand (stack reverses the order).

    tokens = ["4", "13", "5", "/", "+"]

    "/" → pop 5 (right), pop 13 (left) → 13 / 5 = 2 ✓
    NOT: 5 / 13

**Algorithm:**

1. Create a stack
2. For each token:
    - If number → push to stack
    - If operator → pop right, pop left, compute, push result
3. Return the last value on the stack

**Walkthrough:**

    tokens = ["4","13","5","/","+"]

    "4"  → push 4.           Stack: [4]
    "13" → push 13.          Stack: [4, 13]
    "5"  → push 5.           Stack: [4, 13, 5]
    "/"  → pop 5, pop 13.    13 / 5 = 2. Push 2.  Stack: [4, 2]
    "+"  → pop 2, pop 4.     4 + 2 = 6. Push 6.   Stack: [6]

    Return 6 ✓

    tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

    "10" → push.  Stack: [10]
    "6"  → push.  Stack: [10, 6]
    "9"  → push.  Stack: [10, 6, 9]
    "3"  → push.  Stack: [10, 6, 9, 3]
    "+"  → 9+3=12. Stack: [10, 6, 12]
    "-11"→ push.  Stack: [10, 6, 12, -11]
    "*"  → 12*-11=-132. Stack: [10, 6, -132]
    "/"  → 6/-132=0 (truncate). Stack: [10, 0]
    "*"  → 10*0=0. Stack: [0]
    "17" → push.  Stack: [0, 17]
    "+"  → 0+17=17. Stack: [17]
    "5"  → push.  Stack: [17, 5]
    "+"  → 17+5=22. Stack: [22]

    Return 22 ✓

**Comparison with Basic Calculator II (#227):**

- #227: Infix notation (3+2\*2) → need precedence logic with stack
- #150: Postfix notation → no precedence needed, just stack push/pop
- Both use stacks, but RPN is much simpler to evaluate

**Time Complexity:** O(n) — process each token once  
**Space Complexity:** O(n) — stack holds numbers

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- RPN eliminates precedence — the stack naturally handles order of operations
- Pop order matters: second pop is left operand, first pop is right operand
- Division truncates toward zero — use Math.trunc, not Math.floor
- Simpler than infix evaluation (#227) because no precedence rules needed
- RPN is used in HP calculators, Forth programming language, and JVM bytecode
