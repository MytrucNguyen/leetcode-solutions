# 20. Valid Parentheses

**Difficulty:** Easy  
**Topics:** String, Stack  
**Link:** [LeetCode Problem](https://leetcode.com/problems/valid-parentheses/)

## Problem Description

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

### Examples

**Example 1:**
```
Input: s = "()"
Output: true
```

**Example 2:**
```
Input: s = "()[]{}"
Output: true
```

**Example 3:**
```
Input: s = "(]"
Output: false
```

**Example 4:**
```
Input: s = "([])"
Output: true
```

### Constraints

- `1 <= s.length <= 10^4`
- `s` consists of parentheses only `'()[]{}'`.

## Approach

### Stack Solution (Optimal)

The key insight is that **the last bracket opened must be the first one closed** - this is a perfect use case for a stack (Last In, First Out).

**Algorithm:**
1. Create an empty stack
2. Iterate through each character in the string:
   - If it's an **opening bracket** `(`, `[`, `{`:
     - Push it onto the stack (save it for later)
   - If it's a **closing bracket** `)`, `]`, `}`:
     - Check if the stack is empty → If yes, return false (no matching opening)
     - Check if it matches the top of the stack → If no, return false (wrong type)
     - If it matches, pop the opening bracket from the stack (found its pair!)
3. After processing all characters:
   - If stack is empty → All brackets matched → Return true
   - If stack has items → Some brackets never closed → Return false

**Example Walkthrough for `"([])"`:**
```
Stack: []
1. '(' → Opening → Push → Stack: ['(']
2. '[' → Opening → Push → Stack: ['(', '[']
3. ']' → Closing → Matches top '[' → Pop → Stack: ['(']
4. ')' → Closing → Matches top '(' → Pop → Stack: []
5. Stack empty → Valid! → Return true
```

**Example Walkthrough for `"([)]"` (Invalid):**
```
Stack: []
1. '(' → Opening → Push → Stack: ['(']
2. '[' → Opening → Push → Stack: ['(', '[']
3. ')' → Closing → Does NOT match top '[' → Return false
```

**Time Complexity:** O(n) - Single pass through string  
**Space Complexity:** O(n) - Stack storage in worst case (all opening brackets)

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- **Stacks are perfect for matching/pairing problems** where the most recent item needs to be processed first (LIFO - Last In, First Out)
- **Think of stacks like a pile of plates** - you can only add/remove from the top
- The pattern: opening elements go on the stack, closing elements must match the top
- Always check for edge cases: empty stack when trying to close, non-empty stack at the end
- This same pattern applies to many problems: HTML tag validation, expression evaluation, etc.