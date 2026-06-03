# 91. Decode Ways

**Difficulty:** Medium  
**Topics:** String, Dynamic Programming  
**Link:** [LeetCode Problem](https://leetcode.com/problems/decode-ways/)

## Problem Description

A message containing letters from `A-Z` can be **encoded** into numbers using the following mapping:

    'A' → "1"
    'B' → "2"
    ...
    'Z' → "26"

To **decode** an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above. There may be multiple ways to decode. For example, `"11106"` can be mapped into `"AAJF"` (1,1,10,6) or `"KJF"` (11,10,6).

Note that the grouping `(1,11,06)` is invalid because `"06"` cannot be mapped.

Given a string `s` containing only digits, return the number of ways to **decode** it. If the entire string cannot be decoded in any valid way, return `0`.

### Examples

**Example 1:**

    Input: s = "12"
    Output: 2
    Explanation: "AB" (1,2) or "L" (12).

**Example 2:**

    Input: s = "226"
    Output: 3
    Explanation: "BZ" (2,26), "VF" (22,6), or "BBF" (2,2,6).

**Example 3:**

    Input: s = "06"
    Output: 0
    Explanation: "06" is not valid because "0" has no mapping. Leading zeros are invalid.

### Constraints

- `1 <= s.length <= 100`
- `s` contains only digits and may contain leading zeros

## Approach

### Dynamic Programming — Two Variables

Same pattern as Climbing Stairs (#70) and House Robber (#198) — at each position, check if you can take one digit or two digits. Track just two previous values.

**Key Insight:** At each position `i`, two choices:
- **Take one digit** `s[i]`: valid if it's `1-9` (not `0`). Add `dp[i-1]` ways.
- **Take two digits** `s[i-1..i]`: valid if it's `10-26`. Add `dp[i-2]` ways.

This is Climbing Stairs but with conditions on each step!

**Recurrence:**

    dp[i] = 0
    if s[i] is '1'-'9':  dp[i] += dp[i-1]    (one digit valid)
    if s[i-1..i] is 10-26: dp[i] += dp[i-2]   (two digits valid)

**Algorithm:**
1. Initialize `prev2 = 1` (empty string — one way), `prev1 = 1 if s[0] != '0' else 0`
2. For each position from index 1:
   - `current = 0`
   - If single digit is valid (`s[i] != '0'`): `current += prev1`
   - If two digits are valid (10-26): `current += prev2`
   - Shift: `prev2 = prev1`, `prev1 = current`
3. Return `prev1`

**Walkthrough:**

    s = "226"

    prev2 = 1 (base), prev1 = 1 ("2" is valid)

    i=1, digit='2', twoDigits="22":
      '2' != '0' → current += prev1 = 1
      22 is 10-26 → current += prev2 = 1
      current = 2, prev2=1, prev1=2

    i=2, digit='6', twoDigits="26":
      '6' != '0' → current += prev1 = 2
      26 is 10-26 → current += prev2 = 1
      current = 3, prev2=2, prev1=3

    Return 3 ✓

    s = "06"

    prev2 = 1, prev1 = 0 ("0" is not valid single digit)

    i=1, digit='6', twoDigits="06":
      '6' != '0' → current += prev1 = 0
      06 is < 10 → not valid
      current = 0, prev2=0, prev1=0

    Return 0 ✓

    s = "10"

    prev2 = 1, prev1 = 1 ("1" is valid)

    i=1, digit='0', twoDigits="10":
      '0' == '0' → single digit not valid
      10 is 10-26 → current += prev2 = 1
      current = 1, prev2=1, prev1=1

    Return 1 ✓ (only "J", can't split as "1|0")

**The DP family tree:**
- Climbing Stairs (#70): `dp[i] = dp[i-1] + dp[i-2]` — always both options
- House Robber (#198): `dp[i] = max(dp[i-1], dp[i-2] + nums[i])` — choose better
- Decode Ways (#91): `dp[i] = (valid1 ? dp[i-1] : 0) + (valid2 ? dp[i-2] : 0)` — conditional options

**Time Complexity:** O(n) - Single pass through the string  
**Space Complexity:** O(1) - Only two variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- This is Climbing Stairs with validity constraints on each step
- Zero handling is the tricky part — '0' alone is invalid, but '10' and '20' are valid
- Same two-variable DP optimization from Climbing Stairs and House Robber
- Ties together DP skills with string parsing — a common interview combo
- One of the most asked DP problems at Meta, Amazon, and Google