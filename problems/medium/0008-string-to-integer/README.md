# 8. String to Integer (atoi)

**Difficulty:** Medium  
**Topics:** String  
**Link:** [LeetCode Problem](https://leetcode.com/problems/string-to-integer-atoi/)

## Problem Description

Implement the `myAtoi(string s)` function, which converts a string to a 32-bit signed integer.

The algorithm for `myAtoi(string s)` is as follows:

1. **Whitespace:** Ignore any leading whitespace
2. **Sign:** Determine the sign by checking for `+` or `-`. Assume positive if neither present.
3. **Digits:** Read digits until a non-digit character or end of string
4. **Overflow:** Clamp the integer to the 32-bit signed integer range `[-2^31, 2^31 - 1]`

### Examples

**Example 1:**

    Input: s = "42"
    Output: 42

**Example 2:**

    Input: s = "   -42"
    Output: -42

**Example 3:**

    Input: s = "4193 with words"
    Output: 4193

**Example 4:**

    Input: s = "words and 987"
    Output: 0
    Explanation: First non-whitespace is 'w', not a digit or sign. Stop.

**Example 5:**

    Input: s = "-91283472332"
    Output: -2147483648
    Explanation: Exceeds INT_MIN, clamped to -2147483648.

### Constraints

- `0 <= s.length <= 200`
- `s` consists of English letters (lower and upper), digits, `' '`, `'+'`, `'-'`, and `'.'`

## Approach

### Step-by-Step Parsing

Walk through the string handling each phase in order: skip whitespace, read sign, read digits with overflow checking.

**Key Insight:** This isn't an algorithm problem — it's an edge case handling problem. The logic is straightforward, but the tricky part is handling all cases cleanly: leading spaces, optional sign, overflow, invalid characters, empty strings, etc.

**Algorithm:**
1. Initialize index `i = 0`, `sign = 1`, `result = 0`
2. **Skip whitespace:** advance `i` while `s[i] === ' '`
3. **Read sign:** if `s[i]` is `+` or `-`, set sign and advance
4. **Read digits:** while `s[i]` is a digit:
   - Check for overflow BEFORE adding the digit
   - `result = result * 10 + digit`
5. Return `sign * result`, clamped to `[-2^31, 2^31 - 1]`

**Overflow check:** Before `result = result * 10 + digit`, check:
- If `result > INT_MAX / 10` → will overflow
- If `result === INT_MAX / 10` and `digit > 7` → will overflow
(INT_MAX = 2147483647, last digit is 7)

**Walkthrough:**

    s = "   -42"

    Step 1: Skip spaces → i=3
    Step 2: s[3]='-' → sign=-1, i=4
    Step 3: s[4]='4' → result=4, i=5
            s[5]='2' → result=42, i=6
    Return -1 * 42 = -42 ✓

    s = "4193 with words"

    Step 1: No spaces, i=0
    Step 2: No sign
    Step 3: '4' → result=4
            '1' → result=41
            '9' → result=419
            '3' → result=4193
            ' ' → stop (not a digit)
    Return 4193 ✓

    s = "-91283472332"

    Step 1: No spaces
    Step 2: '-' → sign=-1
    Step 3: Building 91283472332...
            At some point result > INT_MAX/10 → overflow!
            Clamp to INT_MAX (2147483647)
    Return -1 * 2147483647 → clamped to INT_MIN = -2147483648 ✓

**Time Complexity:** O(n) — single pass through the string  
**Space Complexity:** O(1) — only a few variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- This is an edge case problem, not an algorithm problem — clean handling is what matters
- Check overflow BEFORE multiplying/adding, not after
- The four phases (whitespace, sign, digits, clamp) should be distinct and ordered
- Interviewers use this to test attention to detail and defensive coding
- Common edge cases: empty string, only spaces, only sign, overflow in both directions