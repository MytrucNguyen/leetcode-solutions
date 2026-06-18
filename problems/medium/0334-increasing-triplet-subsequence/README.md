# 334. Increasing Triplet Subsequence

**Difficulty:** Medium  
**Topics:** Array, Greedy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/increasing-triplet-subsequence/)

## Problem Description

Given an integer array `nums`, return `true` if there exists a triple of indices `(i, j, k)` such that `i < j < k` and `nums[i] < nums[j] < nums[k]`. If no such indices exist, return `false`.

### Examples

**Example 1:**

    Input: nums = [1, 2, 3, 4, 5]
    Output: true
    Explanation: Any triplet works, e.g. [1, 2, 3].

**Example 2:**

    Input: nums = [5, 4, 3, 2, 1]
    Output: false
    Explanation: No increasing triplet exists.

**Example 3:**

    Input: nums = [2, 1, 5, 0, 4, 6]
    Output: true
    Explanation: [0, 4, 6] is an increasing triplet.

### Constraints

- `1 <= nums.length <= 5 * 10^5`
- `-2^31 <= nums[i] <= 2^31 - 1`

**Follow up:** Could you implement a solution that runs in O(n) time and O(1) space?

## Approach

### Greedy — Track First and Second Smallest

Track two values: `first` (smallest seen) and `second` (smallest value greater than some earlier value). If any number is greater than `second`, we found a triplet.

**Key Insight:** We're building an increasing subsequence of length 3 greedily. Keep the first two elements as small as possible — this maximizes the chance of finding a third.

**Why updating `first` after `second` is set still works:**

    nums = [2, 1, 5, 0, 4, 6]

    first=2
    first=1 (smaller!)
    second=5 (bigger than first)
    first=0 (even smaller! But second=5 still valid because there WAS a value < 5 before it)
    second=4 (smaller second, still valid)
    6 > second → true!

Even though `first` changed to 0 after `second` was set to 5, the fact that `second` has a value means there EXISTS some earlier number smaller than it. We don't need to track which one — just that it exists.

**Algorithm:**

1. Set `first = Infinity`, `second = Infinity`
2. For each number:
    - If `num <= first` → update first (new smallest)
    - Else if `num <= second` → update second (new second smallest, bigger than some first)
    - Else → num > second > some first → triplet found! return true
3. Return false

**Walkthrough:**

    nums = [2, 1, 5, 0, 4, 6]
    first = ∞, second = ∞

    2: 2 <= ∞ → first = 2
    1: 1 <= 2 → first = 1
    5: 5 > 1, 5 <= ∞ → second = 5
    0: 0 <= 1 → first = 0
       (second=5 still valid — there was a 1 before 5)
    4: 4 > 0, 4 <= 5 → second = 4
       (even better — smaller second)
    6: 6 > 0, 6 > 4 → found triplet! return true ✓

    nums = [5, 4, 3, 2, 1]
    first = ∞, second = ∞

    5: first = 5
    4: first = 4
    3: first = 3
    2: first = 2
    1: first = 1
    (second never set → no triplet)

    Return false ✓

**Connection to LIS (#300):**

- LIS: Find longest increasing subsequence (O(n²) DP or O(n log n))
- Triplet: Just need length ≥ 3 — greedy O(n) with O(1) space is enough

**Time Complexity:** O(n) — single pass  
**Space Complexity:** O(1) — two variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Track first and second smallest — if anything beats both, triplet exists
- Updating first after second is set is safe — second's existence proves a valid pair before it
- This is LIS of length 3 solved greedily instead of with DP
- The "keep candidates as small as possible" greedy strategy maximizes future options
- Elegant O(1) space solution for what seems like it needs more tracking
