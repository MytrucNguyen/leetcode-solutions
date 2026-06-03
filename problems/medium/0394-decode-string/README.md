# 394. Decode String

**Difficulty:** Medium  
**Topics:** String, Stack, Recursion  
**Link:** [LeetCode Problem](https://leetcode.com/problems/decode-string/)

## Problem Description

Given an encoded string, return its decoded string.

The encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is being repeated exactly `k` times. You may assume the input string is always valid.

### Examples

**Example 1:**
```
Input: s = "3[a]2[bc]"
Output: "aaabcbc"
```

**Example 2:**
```
Input: s = "3[a2[c]]"
Output: "accaccacc"
Explanation: Inner first: 2[c] → "cc", then "a" + "cc" = "acc", then 3[acc] → "accaccacc"
```

**Example 3:**
```
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
```

### Constraints

- `1 <= s.length <= 30`
- `s` consists of lowercase English letters, digits, and square brackets `[]`
- `s` is guaranteed to be a valid input
- All integers in `s` are in the range `[1, 300]`

## Approach

### Stack-Based

Use a stack to handle nested brackets. Track the current string and current number. When you hit `[`, push the current state and start fresh. When you hit `]`, pop the previous state and repeat the current string.

**Key Insight:** This is like Valid Parentheses (#20) but instead of just matching brackets, you're building strings at each nesting level. The stack saves your "context" (previous string and repeat count) so you can return to it after closing a bracket.

**Algorithm:**
1. Initialize `currentString = ""` and `currentNum = 0`
2. Loop through each character:
   - **Digit:** Build the number (`currentNum = currentNum * 10 + digit`) — handles multi-digit numbers like `12[a]`
   - **`[`:** Push `currentString` and `currentNum` onto the stack, then reset both
   - **`]`:** Pop the previous string and count, then: `previousString + currentString.repeat(count)`
   - **Letter:** Append to `currentString`
3. Return `currentString`

**Walkthrough:**
```
s = "3[a2[c]]"

char '3': currentNum = 3
char '[': push ("", 3), reset → currentString="", currentNum=0
char 'a': currentString = "a"
char '2': currentNum = 2
char '[': push ("a", 2), reset → currentString="", currentNum=0
char 'c': currentString = "c"
char ']': pop ("a", 2) → currentString = "a" + "c".repeat(2) = "acc"
char ']': pop ("", 3) → currentString = "" + "acc".repeat(3) = "accaccacc"

Return "accaccacc" ✓
```
```
s = "2[abc]3[cd]ef"

char '2': currentNum = 2
char '[': push ("", 2), reset
char 'a': currentString = "a"
char 'b': currentString = "ab"
char 'c': currentString = "abc"
char ']': pop ("", 2) → currentString = "" + "abc".repeat(2) = "abcabc"
char '3': currentNum = 3
char '[': push ("abcabc", 3), reset
char 'c': currentString = "c"
char 'd': currentString = "cd"
char ']': pop ("abcabc", 3) → currentString = "abcabc" + "cd".repeat(3) = "abcabccdcdcd"
char 'e': currentString = "abcabccdcdcde"
char 'f': currentString = "abcabccdcdcdef"

Return "abcabccdcdcdef" ✓
```

**Comparison with Valid Parentheses (#20):**
- #20: Push opening brackets, pop and match on closing brackets
- #394: Push current context (string + number) on `[`, pop and build on `]`
- Same stack pattern, just saving more state

**Time Complexity:** O(n) where n is the length of the decoded output  
**Space Complexity:** O(n) - Stack depth for nested brackets

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Stacks are perfect for nested structures — save context on open, restore on close
- Building numbers digit by digit (`num * 10 + digit`) handles multi-digit counts
- The "push context, reset, process, pop and combine" pattern is reusable
- This extends the Valid Parentheses (#20) stack pattern to build actual content