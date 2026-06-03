# 300. Longest Increasing Subsequence

**Difficulty:** Medium  
**Topics:** Array, Binary Search, Dynamic Programming  
**Link:** [LeetCode Problem](https://leetcode.com/problems/longest-increasing-subsequence/)

## Problem Description

Given an integer array `nums`, return the length of the **longest strictly increasing subsequence**.

### Examples

**Example 1:**

    Input: nums = [10, 9, 2, 5, 3, 7, 101, 18]
    Output: 4
    Explanation: The longest increasing subsequence is [2, 3, 7, 101].

**Example 2:**

    Input: nums = [0, 1, 0, 3, 2, 3]
    Output: 4
    Explanation: [0, 1, 2, 3]

**Example 3:**

    Input: nums = [7, 7, 7, 7, 7]
    Output: 1
    Explanation: All same, strictly increasing requires different values.

### Constraints

- `1 <= nums.length <= 2500`
- `-10^4 <= nums[i] <= 10^4`

**Follow up:** Can you come up with an algorithm that runs in O(n log n) time?

## Approach

### Dynamic Programming — O(n²)

`dp[i]` = length of the longest increasing subsequence ending at index `i`. For each element, look back at all previous elements — if they're smaller, we can extend their subsequence.

**Key Insight:** The LIS ending at index `i` is built by extending the best LIS ending at some earlier index `j` where `nums[j] < nums[i]`. We try all valid `j` and take the maximum.

**Recurrence:**

    dp[i] = max(dp[j] + 1) for all j < i where nums[j] < nums[i]

**Algorithm:**
1. Create `dp` array filled with 1 (each element alone is a subsequence of length 1)
2. For each index `i` from 1 to end:
   - For each previous index `j` from 0 to `i-1`:
     - If `nums[j] < nums[i]` → `dp[i] = max(dp[i], dp[j] + 1)`
3. Return the maximum value in `dp`

**Walkthrough:**

    nums = [10, 9, 2, 5, 3, 7, 101, 18]

    dp = [1, 1, 1, 1, 1, 1, 1, 1]  (all start at 1)

    i=1 (9): check j=0: 10 < 9? No → dp[1] = 1
    i=2 (2): check j=0,1: none smaller → dp[2] = 1
    i=3 (5): check j=0: 10<5? No
             check j=1: 9<5? No
             check j=2: 2<5? Yes → dp[3] = max(1, dp[2]+1) = 2
    i=4 (3): check j=2: 2<3? Yes → dp[4] = max(1, 1+1) = 2
    i=5 (7): check j=2: 2<7? Yes → dp[5] = max(1, 1+1) = 2
             check j=3: 5<7? Yes → dp[5] = max(2, 2+1) = 3
             check j=4: 3<7? Yes → dp[5] = max(3, 2+1) = 3
    i=6 (101): check all → best is dp[5]+1 = 4
    i=7 (18):  check j=5: 7<18 → dp[7] = max(1, 3+1) = 4

    dp = [1, 1, 1, 2, 2, 3, 4, 4]
    Max = 4 ✓

**Note:** The answer is the MAX of the dp array, not dp[last]. The LIS might not include the last element.

**Comparison with other DP problems:**
- House Robber (#198): dp[i] depends on dp[i-1] and dp[i-2] → fixed lookback
- Coin Change (#322): dp[i] depends on dp[i-coin] → specific lookbacks
- LIS (#300): dp[i] depends on ALL previous dp[j] where nums[j] < nums[i] → variable lookback

**Time Complexity:** O(n²) — two nested loops  
**Space Complexity:** O(n) — dp array

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- dp[i] = longest increasing subsequence ENDING at index i
- Look back at all previous elements, extend the best valid one
- Answer is max of entire dp array, not just the last cell
- The O(n log n) optimization uses binary search with a "tails" array — worth knowing for follow-up
- One of the most classic and frequently asked DP problems