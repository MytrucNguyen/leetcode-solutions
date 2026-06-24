# 525. Contiguous Array

**Difficulty:** Medium  
**Topics:** Array, Hash Table, Prefix Sum  
**Link:** [LeetCode Problem](https://leetcode.com/problems/contiguous-array/)

## Problem Description

Given a binary array `nums`, return the maximum length of a contiguous subarray with an equal number of `0` and `1`.

### Examples

**Example 1:**

    Input: nums = [0, 1]
    Output: 2
    Explanation: [0, 1] has equal 0s and 1s.

**Example 2:**

    Input: nums = [0, 1, 0]
    Output: 2
    Explanation: [0, 1] is the longest with equal count.

### Constraints

- `1 <= nums.length <= 10^5`
- `nums[i]` is either `0` or `1`

## Approach

### Prefix Sum with Hash Map — Treat 0 as -1

Convert the problem: treat 0 as -1, then "equal 0s and 1s" becomes "subarray sum = 0". Use prefix sum + hash map — same technique as Subarray Sum Equals K (#560).

**Key Insight:** If we replace every 0 with -1, then a subarray with equal 0s and 1s has a sum of 0. A subarray sum of 0 means the prefix sum at the start and end are the same. So we just find the farthest apart indices with the same prefix sum!

**Connection to #560:**

- #560: Find count of subarrays where sum = k → store prefix sum frequencies
- #525: Find longest subarray where sum = 0 → store FIRST occurrence of each prefix sum

**Algorithm:**

1. Initialize `prefixSum = 0`, `maxLen = 0`
2. Create map with `{0: -1}` (prefix sum 0 seen at index -1, before the array)
3. For each index:
    - Add +1 for 1, -1 for 0
    - If prefixSum already in map → subarray from `map[prefixSum]+1` to `i` has sum 0
        - Update maxLen with `i - map[prefixSum]`
    - Else → store first occurrence: `map[prefixSum] = i`
4. Return maxLen

**Why store FIRST occurrence?** We want the LONGEST subarray. If we see the same prefix sum again later, the longer gap gives a longer subarray. So never update an existing entry.

**Walkthrough:**

    nums = [0, 1, 0]
    Treat as: [-1, 1, -1]
    map = {0: -1}, prefixSum = 0, maxLen = 0

    i=0: prefixSum = 0 + (-1) = -1
      -1 not in map → store map[-1] = 0

    i=1: prefixSum = -1 + 1 = 0
      0 in map at index -1 → length = 1 - (-1) = 2
      maxLen = 2

    i=2: prefixSum = 0 + (-1) = -1
      -1 in map at index 0 → length = 2 - 0 = 2
      maxLen = 2

    Return 2 ✓

    nums = [0, 1, 1, 0, 1, 1, 1, 0, 0, 0]
    Treat as: [-1, 1, 1, -1, 1, 1, 1, -1, -1, -1]
    map = {0: -1}

    i=0: sum=-1 → store map[-1]=0
    i=1: sum=0  → in map at -1 → len=1-(-1)=2, maxLen=2
    i=2: sum=1  → store map[1]=2
    i=3: sum=0  → in map at -1 → len=3-(-1)=4, maxLen=4
    i=4: sum=1  → in map at 2 → len=4-2=2
    i=5: sum=2  → store map[2]=5
    i=6: sum=3  → store map[3]=6
    i=7: sum=2  → in map at 5 → len=7-5=2
    i=8: sum=1  → in map at 2 → len=8-2=6, maxLen=6
    i=9: sum=0  → in map at -1 → len=9-(-1)=10, maxLen=10

    Return 10 ✓ (entire array has 5 zeros and 5 ones!)

**Time Complexity:** O(n) — single pass  
**Space Complexity:** O(n) — hash map stores prefix sums

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Replace 0 with -1 transforms "equal count" into "sum = 0"
- Same prefix sum + hash map pattern as #560
- Store FIRST occurrence of each prefix sum → gives longest subarray
- The `{0: -1}` initialization handles subarrays starting from index 0
- Problem transformation is a powerful technique — change the problem into one you know!
