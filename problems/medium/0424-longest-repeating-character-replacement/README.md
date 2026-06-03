# 424. Longest Repeating Character Replacement

**Difficulty:** Medium  
**Topics:** String, Hash Table, Sliding Window  
**Link:** [LeetCode Problem](https://leetcode.com/problems/longest-repeating-character-replacement/)

## Problem Description

You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `k` times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

### Examples

**Example 1:**

    Input: s = "ABAB", k = 2
    Output: 4
    Explanation: Replace both 'B's with 'A' → "AAAA". Length = 4.

**Example 2:**

    Input: s = "AABABBA", k = 1
    Output: 4
    Explanation: Replace 'B' at index 3 → "AAAAABA". Longest = "AAAA" = 4.

### Constraints

- `1 <= s.length <= 10^5`
- `s` consists of only uppercase English letters
- `0 <= k <= s.length`

## Approach

### Sliding Window with Max Frequency Tracking

Expand the window to the right. Track the frequency of each character in the window and the count of the most frequent character. If the number of characters that need replacing exceeds k, shrink from the left.

**Key Insight:** In any window, the minimum replacements needed = `window size - most frequent character count`. If this exceeds k, the window is invalid and needs to shrink. The most frequent character is the one we keep — everything else gets replaced.

**Formula:**

    replacements needed = window size - maxFreq
    if replacements > k → shrink window from left

**Algorithm:**
1. Use two pointers `left` and `right` for the window
2. Track character frequencies in the window
3. Track `maxFreq` — the highest frequency of any single character in the window
4. Expand right: add character, update frequency and maxFreq
5. If `window size - maxFreq > k`: shrink left (remove character, update frequency)
6. Update result with current window size
7. Return result

**Walkthrough:**

    s = "AABABBA", k = 1

    right=0: 'A' freq={A:1}, maxFreq=1
      window=1, replacements=1-1=0 ≤ 1 ✓ result=1

    right=1: 'A' freq={A:2}, maxFreq=2
      window=2, replacements=2-2=0 ≤ 1 ✓ result=2

    right=2: 'B' freq={A:2,B:1}, maxFreq=2
      window=3, replacements=3-2=1 ≤ 1 ✓ result=3

    right=3: 'A' freq={A:3,B:1}, maxFreq=3
      window=4, replacements=4-3=1 ≤ 1 ✓ result=4

    right=4: 'B' freq={A:3,B:2}, maxFreq=3
      window=5, replacements=5-3=2 > 1 ✗
      Shrink: remove s[0]='A' → freq={A:2,B:2}, left=1
      window=4, replacements=4-2=2 > 1 ✗
      Shrink: remove s[1]='A' → freq={A:1,B:2}, left=2
      window=3, replacements=3-2=1 ≤ 1 ✓ result=4

    right=5: 'B' freq={A:1,B:3}, maxFreq=3
      window=4, replacements=4-3=1 ≤ 1 ✓ result=4

    right=6: 'A' freq={A:2,B:3}, maxFreq=3
      window=5, replacements=5-3=2 > 1 ✗
      Shrink: remove s[2]='B' → freq={A:2,B:2}, left=3
      window=4, replacements=4-2=2 > 1 ✗
      Shrink: remove s[3]='A' → freq={A:1,B:2}, left=4
      window=3, replacements=3-2=1 ≤ 1 ✓ result=4

    Return 4 ✓

**Optimization note:** Some solutions don't shrink `maxFreq` when the window shrinks. This works because we only care about finding a window LARGER than our current best. If maxFreq is stale (too high), the window just won't grow — but it also won't give a wrong larger answer.

**Comparison with other sliding window problems:**
- Find All Anagrams (#438): fixed window size, match exact frequencies
- Permutation in String (#567): fixed window size, match exact frequencies
- This problem (#424): variable window size, track max frequency

**Time Complexity:** O(n) — each character is added and removed at most once  
**Space Complexity:** O(1) — at most 26 characters in the frequency map

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- `window size - maxFreq = replacements needed` is the core formula
- Variable-size sliding window: expand right, shrink left when invalid
- MaxFreq doesn't need to decrease when window shrinks — only growing windows matter
- This is the "grow/shrink" sliding window pattern vs the "fixed size" from #438 and #567
- One of the cleanest examples of the variable sliding window technique