# 72. Edit Distance

**Difficulty:** Hard  
**Topics:** String, Dynamic Programming  
**Link:** [LeetCode Problem](https://leetcode.com/problems/edit-distance/)

## Problem Description

Given two strings `word1` and `word2`, return the minimum number of operations required to convert `word1` to `word2`.

You have the following three operations permitted on a word:
- **Insert** a character
- **Delete** a character
- **Replace** a character

### Examples

**Example 1:**

    Input: word1 = "horse", word2 = "ros"
    Output: 3
    Explanation:
      horse → rorse (replace 'h' with 'r')
      rorse → rose (remove 'r')
      rose → ros (remove 'e')

**Example 2:**

    Input: word1 = "intention", word2 = "execution"
    Output: 5
    Explanation:
      intention → inention (remove 't')
      inention → enention (replace 'i' with 'e')
      enention → exention (replace 'n' with 'x')
      exention → exection (replace 'n' with 'c')
      exection → execution (insert 'u')

### Constraints

- `0 <= word1.length, word2.length <= 500`
- `word1` and `word2` consist of lowercase English letters

## Approach

### 2D Dynamic Programming

Build a 2D table where `dp[i][j]` = minimum operations to convert `word1[0..i-1]` to `word2[0..j-1]`.

**Key Insight:** At each pair of characters, either they match (free — take diagonal) or they don't (choose the cheapest of three operations). This is LCS (#1143) but tracking cost instead of length.

**Three operations mapped to the table:**

    dp[i-1][j-1] + 1 → Replace: change word1[i-1] to word2[j-1]
    dp[i][j-1] + 1   → Insert: add word2[j-1] to word1
    dp[i-1][j] + 1   → Delete: remove word1[i-1]

**Recurrence:**

    if word1[i-1] === word2[j-1]:
        dp[i][j] = dp[i-1][j-1]              (match — no operation needed)
    else:
        dp[i][j] = min(
            dp[i-1][j-1],   ← replace
            dp[i][j-1],     ← insert
            dp[i-1][j]      ← delete
        ) + 1

**Base cases:**
- `dp[i][0] = i` → converting word1[0..i-1] to "" takes i deletions
- `dp[0][j] = j` → converting "" to word2[0..j-1] takes j insertions

**Algorithm:**
1. Create a `(m+1) × (n+1)` table
2. Fill base cases: first row = 0,1,2,...n and first column = 0,1,2,...m
3. Fill each cell: match → diagonal, no match → min(diagonal, left, above) + 1
4. Return `dp[m][n]`

**Walkthrough:**

    word1 = "horse", word2 = "ros"

            ""  r  o  s
        ""   0  1  2  3
        h    1  1  2  3
        o    2  2  1  2
        r    3  2  2  2
        s    4  3  3  2
        e    5  4  4  3

    Step by step:
    dp[1][1]: 'h'≠'r' → min(dp[0][0], dp[1][0], dp[0][1])+1 = min(0,1,1)+1 = 1
    dp[2][1]: 'o'≠'r' → min(dp[1][0], dp[2][0], dp[1][1])+1 = min(1,2,1)+1 = 2
    dp[2][2]: 'o'='o' → dp[1][1] = 1 (match! free!)
    dp[3][1]: 'r'='r' → dp[2][0] = 2 (match! free!)
    dp[4][3]: 's'='s' → dp[3][2] = 2 (match!)
    dp[5][3]: 'e'≠'s' → min(dp[4][2], dp[5][2], dp[4][3])+1 = min(3,4,2)+1 = 3

    Return dp[5][3] = 3 ✓

**Comparison with LCS (#1143):**
- LCS: Match → diagonal+1, no match → max(left, above)
- Edit Distance: Match → diagonal (free), no match → min(diagonal, left, above)+1
- Same table structure, different recurrence

**The 2D DP family:**
- LCS (#1143): Find longest common subsequence
- Unique Paths (#62): Count paths in a grid
- **Edit Distance (#72): Minimum cost transformation** ✅

**Time Complexity:** O(m × n) — fill every cell  
**Space Complexity:** O(m × n) — the DP table

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Same 2D DP table as LCS but tracking minimum cost instead of maximum length
- Three operations map to three neighbors: diagonal (replace), left (insert), above (delete)
- Match = free (take diagonal without adding 1)
- Base cases represent converting to/from empty string
- Powers real-world features: spell check, diff tools, DNA sequence alignment
- One of the most elegant and important DP problems