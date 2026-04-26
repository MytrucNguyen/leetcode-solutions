# 1143. Longest Common Subsequence

**Difficulty:** Medium  
**Topics:** String, Dynamic Programming  
**Link:** [LeetCode Problem](https://leetcode.com/problems/longest-common-subsequence/)

## Problem Description

Given two strings `text1` and `text2`, return the length of their **longest common subsequence**. If there is no common subsequence, return `0`.

A **subsequence** of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

### Examples

**Example 1:**

    Input: text1 = "abcde", text2 = "ace"
    Output: 3
    Explanation: The longest common subsequence is "ace".

**Example 2:**

    Input: text1 = "abc", text2 = "abc"
    Output: 3
    Explanation: The entire string is the common subsequence.

**Example 3:**

    Input: text1 = "abc", text2 = "def"
    Output: 0
    Explanation: No common subsequence.

### Constraints

- `1 <= text1.length, text2.length <= 1000`
- `text1` and `text2` consist of only lowercase English characters

## Approach

### 2D Dynamic Programming

Build a 2D table where `dp[i][j]` represents the LCS length of `text1[0..i-1]` and `text2[0..j-1]`.

**Key Insight:** At each pair of characters, two possibilities:
- **Characters match:** The LCS extends by 1 from the previous diagonal (`dp[i-1][j-1] + 1`)
- **Characters don't match:** Take the better of skipping either character (`max(dp[i-1][j], dp[i][j-1])`)

**Recurrence:**

    if text1[i-1] === text2[j-1]:
        dp[i][j] = dp[i-1][j-1] + 1    (match! extend from diagonal)
    else:
        dp[i][j] = max(dp[i-1][j], dp[i][j-1])  (skip one, take the better)

**Algorithm:**
1. Create a 2D array of size `(m+1) × (n+1)` filled with 0
2. For each cell `(i, j)`:
   - If `text1[i-1] === text2[j-1]` → `dp[i][j] = dp[i-1][j-1] + 1`
   - Else → `dp[i][j] = max(dp[i-1][j], dp[i][j-1])`
3. Return `dp[m][n]`

**Walkthrough:**

    text1 = "abcde", text2 = "ace"

        ""  a  c  e
    ""   0  0  0  0
    a    0  1  1  1
    b    0  1  1  1
    c    0  1  2  2
    d    0  1  2  2
    e    0  1  2  3

    Step by step:
    dp[1][1]: 'a'='a' → match! dp[0][0]+1 = 1
    dp[1][2]: 'a'≠'c' → max(dp[0][2], dp[1][1]) = max(0,1) = 1
    dp[1][3]: 'a'≠'e' → max(dp[0][3], dp[1][2]) = max(0,1) = 1
    dp[2][1]: 'b'≠'a' → max(dp[1][1], dp[2][0]) = max(1,0) = 1
    dp[2][2]: 'b'≠'c' → max(dp[1][2], dp[2][1]) = max(1,1) = 1
    dp[3][2]: 'c'='c' → match! dp[2][1]+1 = 2
    dp[5][3]: 'e'='e' → match! dp[4][2]+1 = 3

    Return dp[5][3] = 3 ✓

**Why the extra row and column of zeros?** They represent empty string comparisons. LCS of any string with "" is 0. This eliminates edge cases.

**The DP family so far:**
- 1D DP: Climbing Stairs (#70), House Robber (#198), Coin Change (#322), Decode Ways (#91), Word Break (#139)
- **2D DP: LCS (#1143)** ← NEW!

**Time Complexity:** O(m × n) where m and n are string lengths  
**Space Complexity:** O(m × n) for the DP table

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- First 2D DP problem — the table compares every prefix of both strings
- Match → diagonal + 1, no match → max of left or above
- The extra row/column of zeros handles empty string base cases
- This is the foundation for Edit Distance (#72), Shortest Common Supersequence, and diff algorithms
- The same "match or skip" logic appears in Is Subsequence (#392) but greedy — this finds the optimal