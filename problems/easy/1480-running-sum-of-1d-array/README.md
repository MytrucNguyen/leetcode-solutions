# 1480. Running Sum of 1d Array

**Difficulty:** Easy  
**Topics:** Array, Prefix Sum  
**Link:** [LeetCode Problem](https://leetcode.com/problems/running-sum-of-1d-array/)

## Problem Description

Given an array `nums`. We define a running sum of an array as `runningSum[i] = sum(nums[0]...nums[i])`.

Return the running sum of `nums`.

### Examples

**Example 1:**
```
Input: nums = [1, 2, 3, 4]
Output: [1, 3, 6, 10]
Explanation: Running sum is [1, 1+2, 1+2+3, 1+2+3+4].
```

**Example 2:**
```
Input: nums = [1, 1, 1, 1, 1]
Output: [1, 2, 3, 4, 5]
```

**Example 3:**
```
Input: nums = [3, 1, 2, 10, 1]
Output: [3, 4, 6, 16, 17]
```

### Constraints

- `1 <= nums.length <= 1000`
- `-10^6 <= nums[i] <= 10^6`

## Approach

### In-Place Prefix Sum

Each element becomes the sum of itself and all previous elements. Since each running sum is just the previous running sum plus the current value, we can do this in-place.

**Key Insight:** `runningSum[i] = runningSum[i-1] + nums[i]`. Each position just adds to the accumulated sum before it. This is the fundamental **prefix sum** pattern.

**Algorithm:**
1. Start from index 1 (index 0 stays the same)
2. For each element: `nums[i] = nums[i] + nums[i-1]`
3. Return nums

**Walkthrough:**
```
nums = [1, 2, 3, 4]

i=1: nums[1] = 2 + 1 = 3   → [1, 3, 3, 4]
i=2: nums[2] = 3 + 3 = 6   → [1, 3, 6, 4]
i=3: nums[3] = 4 + 6 = 10  → [1, 3, 6, 10]

Result: [1, 3, 6, 10] ✓
```
```
nums = [3, 1, 2, 10, 1]

i=1: nums[1] = 1 + 3 = 4    → [3, 4, 2, 10, 1]
i=2: nums[2] = 2 + 4 = 6    → [3, 4, 6, 10, 1]
i=3: nums[3] = 10 + 6 = 16  → [3, 4, 6, 16, 1]
i=4: nums[4] = 1 + 16 = 17  → [3, 4, 6, 16, 17]

Result: [3, 4, 6, 16, 17] ✓
```

**Why is prefix sum important?**
This is the foundation for many advanced techniques. Once you have a prefix sum array, you can find the sum of any subarray in O(1) time: `sum(i..j) = prefix[j] - prefix[i-1]`. This powers problems like Product of Array Except Self (#238), Subarray Sum Equals K, and many more.

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(1) - Modified in-place

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Prefix sum is one of the most fundamental and useful array techniques
- Each element is just the previous sum plus itself — one line of logic
- In-place modification avoids extra space
- This pattern is the foundation for subarray sum queries, range sums, and many medium/hard problems