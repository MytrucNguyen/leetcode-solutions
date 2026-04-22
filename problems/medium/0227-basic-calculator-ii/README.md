# 227. Basic Calculator II

**Difficulty:** Medium  
**Topics:** String, Math, Stack  
**Link:** [LeetCode Problem](https://leetcode.com/problems/basic-calculator-ii/)

## Problem Description

Given a string `s` which represents an expression, evaluate this expression and return its value.

The integer division should truncate toward zero. You may assume the given expression is always valid. All intermediate results will be in the range of `[-2^31, 2^31 - 1]`.

**Note:** You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as `eval()`.

### Examples

**Example 1:**

    Input: s = "3+2*2"
    Output: 7

**Example 2:**

    Input: s = " 3/2 "
    Output: 1

**Example 3:**

    Input: s = " 3+5 / 2 "
    Output: 5

### Constraints

- `1 <= s.length <= 3 * 10^5`
- `s` consists of integers and operators `('+', '-', '*', '/')` separated by some number of spaces
- `s` represents a valid expression
- All integers are non-negative and fit in a 32-bit integer

## Approach

### Stack with Operator Precedence

Use a stack to handle operator precedence. `*` and `/` are processed immediately (pop, compute, push result). `+` and `-` push values to the stack for later. At the end, sum everything.

**Key Insight:** Multiplication and division have higher precedence than addition and subtraction. By processing `*` and `/` immediately and deferring `+` and `-` to the stack, we handle precedence naturally without parentheses or recursion.

**Algorithm:**
1. Track `currentNum` and `prevOp` (the operator before the current number)
2. Walk through the string:
   - Digit: build the number (`currentNum = currentNum * 10 + digit`)
   - Operator or end of string: process the previous operator:
     - `+`: push `+currentNum` to stack
     - `-`: push `-currentNum` to stack
     - `*`: pop top, push `top * currentNum`
     - `/`: pop top, push `trunc(top / currentNum)`
   - Update `prevOp` to the new operator, reset `currentNum`
3. Sum the stack → that's the answer

**Walkthrough:**

    s = "3+2*2"
    prevOp = '+', currentNum = 0, stack = []

    '3': currentNum = 3
    '+': prevOp is '+' → push +3 → stack: [3]
         prevOp = '+', currentNum = 0
    '2': currentNum = 2
    '*': prevOp is '+' → push +2 → stack: [3, 2]
         prevOp = '*', currentNum = 0
    '2': currentNum = 2
    end: prevOp is '*' → pop 2, push 2*2=4 → stack: [3, 4]

    Sum stack: 3 + 4 = 7 ✓

    s = "3+5 / 2"
    prevOp = '+', stack = []

    '3': currentNum = 3
    '+': push +3 → stack: [3], prevOp = '+'
    '5': currentNum = 5
    '/': push +5 → stack: [3, 5], prevOp = '/'
    '2': currentNum = 2
    end: prevOp is '/' → pop 5, push trunc(5/2)=2 → stack: [3, 2]

    Sum: 3 + 2 = 5 ✓

    s = "14-3/2"
    prevOp = '+', stack = []

    '1': currentNum = 1
    '4': currentNum = 14 (multi-digit!)
    '-': prevOp is '+' → push +14 → stack: [14], prevOp = '-'
    '3': currentNum = 3
    '/': prevOp is '-' → push -3 → stack: [14, -3], prevOp = '/'
    '2': currentNum = 2
    end: prevOp is '/' → pop -3, push trunc(-3/2)=-1 → stack: [14, -1]

    Sum: 14 + (-1) = 13 ✓

**Why this works:** By pushing negative values for `-`, we convert everything to addition. `*` and `/` are resolved immediately so they don't affect the wrong operands. The stack holds only values that need to be summed.

**Comparison with Decode String (#394):**
- #394: Stack saves context (string + count), process on `]`
- #227: Stack saves values, process `*`/`/` immediately, defer `+`/`-`
- Both use stack to handle nested/precedence operations

**Time Complexity:** O(n) — single pass through the string  
**Space Complexity:** O(n) — stack stores intermediate values

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Stack naturally handles operator precedence: process high-priority ops immediately, defer low-priority
- Pushing negative values for `-` converts everything to addition at the end
- Build multi-digit numbers with `num * 10 + digit`
- Process at operator boundaries (when you see a new operator or reach the end)
- This extends to Basic Calculator I (#224) and III (#772) with parentheses