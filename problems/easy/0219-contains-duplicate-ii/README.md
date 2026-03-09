# 219. Contains Duplicate II

**Difficulty:** Easy  
**Topics:** Array, Hash Table, Sliding Window  
**Link:** [LeetCode Problem](https://leetcode.com/problems/contains-duplicate-ii/)

## Problem Description

Given an integer array `nums` and an integer `k`, return `true` if there are two distinct indices `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.

### Examples

**Example 1:**
```
Input: nums = [1, 2, 3, 1], k = 3
Output: true
Explanation: nums[0] === nums[3], |0 - 3| = 3 <= 3.
```

**Example 2:**
```
Input: nums = [1, 0, 1, 1], k = 1
Output: true
Explanation: nums[2] === nums[3], |2 - 3| = 1 <= 1.
```

**Example 3:**
```
Input: nums = [1, 2, 3, 1, 2, 3], k = 2
Output: false
Explanation: Nearest duplicate of 1 is 3 apart, nearest duplicate of 2 is 3 apart. Both > k.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`
- `0 <= k <= 10^5`

## Approach

### Hash Map — Store Last Seen Index

Use a hash map to store the most recent index of each number. When you see a number again, check if the distance from the last time you saw it is within k.

**Key Insight:** You only need to track the **most recent** index of each number. If the most recent occurrence isn't within k, any earlier occurrence definitely won't be either since it's even further away.

**Algorithm:**
1. Create a hash map of `number → last index`
2. Loop through the array:
   - If the number exists in the map AND `current index - last index <= k` → return true
   - Update the map with the current index (whether new or seen before)
3. Return false

**Walkthrough:**
```
nums = [1, 2, 3, 1], k = 3

i=0: num=1, not in map → map: {1: 0}
i=1: num=2, not in map → map: {1: 0, 2: 1}
i=2: num=3, not in map → map: {1: 0, 2: 1, 3: 2}
i=3: num=1, in map! |3 - 0| = 3 <= 3 → return true ✓
```
```
nums = [1, 2, 3, 1, 2, 3], k = 2

i=0: num=1, not in map → map: {1: 0}
i=1: num=2, not in map → map: {1: 0, 2: 1}
i=2: num=3, not in map → map: {1: 0, 2: 1, 3: 2}
i=3: num=1, in map! |3 - 0| = 3 > 2 → update map: {1: 3, 2: 1, 3: 2}
i=4: num=2, in map! |4 - 1| = 3 > 2 → update map: {1: 3, 2: 4, 3: 2}
i=5: num=3, in map! |5 - 2| = 3 > 2 → update map: {1: 3, 2: 4, 3: 5}

No match found → return false ✓
```

**Comparison with Contains Duplicate (#217):**
- #217: Just check if number exists in Set → return true
- #219: Check if number exists in Map AND distance <= k → return true
- Same pattern with an extra distance check

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(n) - Hash map storing indices

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Storing the most recent index is sufficient — no need to track all occurrences
- Always update the map with the current index, even if the distance check fails
- This builds directly on Contains Duplicate (#217) with one extra condition
- The "sliding window via hash map" pattern appears in many substring/subarray problems