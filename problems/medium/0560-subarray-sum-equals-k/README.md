# 560. Subarray Sum Equals K

**Difficulty:** Medium  
**Topics:** Array, Hash Table, Prefix Sum  
**Link:** [LeetCode Problem](https://leetcode.com/problems/subarray-sum-equals-k/)

## Problem Description

Given an array of integers `nums` and an integer `k`, return the total number of subarrays whose sum equals to `k`.

A subarray is a contiguous non-empty sequence of elements within an array.

### Examples

**Example 1:**
```
Input: nums = [1, 1, 1], k = 2
Output: 2
Explanation: [1,1] at index 0-1, and [1,1] at index 1-2.
```

**Example 2:**
```
Input: nums = [1, 2, 3], k = 3
Output: 2
Explanation: [1,2] and [3] both sum to 3.
```

### Constraints

- `1 <= nums.length <= 2 * 10^4`
- `-1000 <= nums[i] <= 1000`
- `-10^7 <= k <= 10^7`

## Approach

### Prefix Sum + Hash Map

Track the running sum and use a hash map to count how many times each prefix sum has occurred. At each position, check if `currentSum - k` exists in the map — if it does, that many subarrays ending here sum to k.

**Key Insight:** If the prefix sum at index `j` minus the prefix sum at index `i` equals `k`, then the subarray from `i+1` to `j` sums to `k`. So instead of checking every pair, store prefix sums in a map and look up `currentSum - k` in O(1).

**Why this works:**
```
If prefixSum[j] - prefixSum[i] = k
Then prefixSum[i] = prefixSum[j] - k

So at each j, count how many previous prefix sums equal currentSum - k.
```

**Algorithm:**
1. Create a hash map initialized with `{0: 1}` (empty prefix has sum 0)
2. Track `currentSum = 0` and `count = 0`
3. For each number:
   - Add it to `currentSum`
   - If `currentSum - k` exists in the map, add its count to `count`
   - Add `currentSum` to the map (increment its frequency)
4. Return `count`

**Why initialize with `{0: 1}`?**
This handles the case where a subarray starting from index 0 sums to k. Without it, we'd miss subarrays that begin at the start.

**Walkthrough:**
```
nums = [1, 1, 1], k = 2
map = {0: 1}, sum = 0, count = 0

i=0: sum = 1
  sum - k = 1 - 2 = -1, not in map
  map = {0: 1, 1: 1}

i=1: sum = 2
  sum - k = 2 - 2 = 0, in map with count 1 → count = 1
  map = {0: 1, 1: 1, 2: 1}

i=2: sum = 3
  sum - k = 3 - 2 = 1, in map with count 1 → count = 2
  map = {0: 1, 1: 1, 2: 1, 3: 1}

Return 2 ✓
```
```
nums = [1, 2, 3], k = 3
map = {0: 1}, sum = 0, count = 0

i=0: sum = 1
  sum - k = 1 - 3 = -2, not in map
  map = {0: 1, 1: 1}

i=1: sum = 3
  sum - k = 3 - 3 = 0, in map with count 1 → count = 1
  (subarray [1,2] sums to 3)
  map = {0: 1, 1: 1, 3: 1}

i=2: sum = 6
  sum - k = 6 - 3 = 3, in map with count 1 → count = 2
  (subarray [3] sums to 3)
  map = {0: 1, 1: 1, 3: 1, 6: 1}

Return 2 ✓
```

**Builds on your knowledge:**
- Running Sum (#1480) → prefix sum concept
- Find Pivot Index (#724) → using total sum to derive subsums
- Two Sum (#1) → storing seen values in a map for O(1) lookup

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(n) - Hash map storing prefix sums

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Prefix sum + hash map turns an O(n²) problem into O(n)
- Initialize the map with `{0: 1}` to handle subarrays starting from index 0
- The pattern "have we seen currentValue - target before?" is the same as Two Sum (#1)
- This is one of the most important prefix sum patterns for interviews
- Negative numbers mean we can't use sliding window — hash map is the way