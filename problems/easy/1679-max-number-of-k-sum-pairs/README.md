# 1679. Max Number of K-Sum Pairs

**Difficulty:** Medium  
**Topics:** Array, Hash Table, Two Pointers, Sorting  
**Link:** [LeetCode Problem](https://leetcode.com/problems/max-number-of-k-sum-pairs/)

## Problem Description

You are given an integer array `nums` and an integer `k`.

In one operation, you can pick two numbers from the array whose sum equals `k` and remove them from the array.

Return the maximum number of operations you can perform on the array.

### Examples

**Example 1:**

    Input: nums = [1,2,3,4], k = 5
    Output: 2
    Explanation: (1,4) and (2,3) both sum to 5.

**Example 2:**

    Input: nums = [3,1,3,4,3], k = 6
    Output: 1
    Explanation: Only one pair (3,3) sums to 6.

### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
- `1 <= k <= 10^9`

## Approach

### Sort + Two Pointers

Sort the array, then use left/right pointers. Same as Two Sum II (#167) but count pairs instead of returning indices.

**Key Insight:** After sorting, if the sum is too small move left (increase), too big move right (decrease), exact match counts as a pair and move both.

**Algorithm:**

1. Sort the array
2. Set `left = 0`, `right = length - 1`, `pairs = 0`
3. While `left < right`:
    - If `nums[left] + nums[right] === k` → pair found! pairs++, left++, right--
    - If sum < k → need bigger, left++
    - If sum > k → need smaller, right--
4. Return pairs

**Walkthrough:**

    nums = [3,1,3,4,3], k = 6
    Sorted: [1, 3, 3, 3, 4]

    left=0, right=4: 1+4=5 < 6 → left=1
    left=1, right=4: 3+4=7 > 6 → right=3
    left=1, right=3: 3+3=6 ✓ → pairs=1, left=2, right=2
    left=2 === right=2 → stop

    Return 1 ✓

    nums = [1,2,3,4], k = 5
    Sorted: [1, 2, 3, 4]

    left=0, right=3: 1+4=5 ✓ → pairs=1, left=1, right=2
    left=1, right=2: 2+3=5 ✓ → pairs=2, left=2, right=1
    left > right → stop

    Return 2 ✓

**Time Complexity:** O(n log n) — sorting dominates  
**Space Complexity:** O(1) — only pointers (O(log n) for sort)

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Same two-pointer as Two Sum II (#167) — sort, then converge from both ends
- Match → count and move both, too small → move left, too big → move right
- Each element used at most once — both pointers move inward on match
- Can also solve with hash map (count complements) for O(n) time
