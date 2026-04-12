# 139. Word Break

**Difficulty:** Medium  
**Topics:** String, Dynamic Programming, Hash Table, Trie  
**Link:** [LeetCode Problem](https://leetcode.com/problems/word-break/)

## Problem Description

Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.

**Note** that the same word in the dictionary may be reused multiple times in the segmentation.

### Examples

**Example 1:**

    Input: s = "leetcode", wordDict = ["leet","code"]
    Output: true
    Explanation: "leetcode" can be segmented as "leet code".

**Example 2:**

    Input: s = "applepenapple", wordDict = ["apple","pen"]
    Output: true
    Explanation: "applepenapple" can be segmented as "apple pen apple".
    Note that "apple" is reused.

**Example 3:**

    Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
    Output: false

### Constraints

- `1 <= s.length <= 300`
- `1 <= wordDict.length <= 1000`
- `1 <= wordDict[i].length <= 20`
- `s` and `wordDict[i]` consist of only lowercase English letters
- All the strings of `wordDict` are unique

## Approach

### Bottom-Up Dynamic Programming

Build a DP array where `dp[i]` = "can the first `i` characters of `s` be segmented into valid words?"

**Key Insight:** Position `i` is reachable if there's some word in the dictionary that ends at `i` AND the position before that word starts was also reachable. This is the same logic as Coin Change (#322) — instead of "which coin gets me to this amount?", it's "which word gets me to this position?"

**Comparison with Coin Change (#322):**
- Coin Change: `dp[amount]` = can coins reach this amount? Try each coin.
- Word Break: `dp[i]` = can words reach position i? Try each word.
- Same pattern: check if previous position was reachable + current step is valid.

**Algorithm:**
1. Put all words in a Set for O(1) lookup
2. Create `dp` array of size `s.length + 1`, all false
3. Set `dp[0] = true` (empty string is reachable)
4. For each position `i` from 1 to s.length:
   - For each position `j` from 0 to i:
     - If `dp[j]` is true AND `s.substring(j, i)` is in the dictionary:
       - Set `dp[i] = true` and break
5. Return `dp[s.length]`

**Walkthrough:**

    s = "leetcode", dict = {"leet", "code"}

    dp[0] = true (base case)

    dp[1]: check s[0..0]="l" → not in dict → false
    dp[2]: check s[0..1]="le" → no → false
    dp[3]: check s[0..2]="lee" → no → false
    dp[4]: check s[0..3]="leet" → in dict! dp[0]=true → dp[4] = true ✓
    dp[5]: check s[0..4]="leetc" → no, s[4..4]="c" → no → false
    dp[6]: check substrings → none match with a true dp[j] → false
    dp[7]: same → false
    dp[8]: check s[0..7]="leetcode" → no
           check s[4..7]="code" → in dict! dp[4]=true → dp[8] = true ✓

    Return true ✓

    s = "catsandog", dict = {"cats","dog","sand","and","cat"}

    dp[0] = true
    dp[3]: s[0..2]="cat" → in dict! dp[0]=true → dp[3] = true
    dp[4]: s[0..3]="cats" → in dict! dp[0]=true → dp[4] = true
    dp[7]: s[4..6]="and" → in dict! dp[4]=true → dp[7] = true
           s[3..6]="sand" → in dict! dp[3]=true → dp[7] = true
    dp[8]: check substrings → no valid word ending here with true start
    dp[9]: s[7..8]="og" → no, s[6..8]="dog" but dp[6]=false → false

    Return false ✓ (can't bridge the "og" at the end)

**Time Complexity:** O(n² × m) where n is string length and m is average word length for substring comparison. With a Set, the lookup is O(m) for hashing.  
**Space Complexity:** O(n) — DP array

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Same DP pattern as Coin Change — "can I reach this position using valid steps?"
- Using a Set for the dictionary gives O(1) word lookups
- Breaking early when dp[i] is set true avoids unnecessary checks
- The substring check `s[j..i]` tries every possible last word ending at position i
- One of the most commonly asked DP problems — combines string handling with DP naturally