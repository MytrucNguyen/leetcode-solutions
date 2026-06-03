# 724. Find Pivot Index

**Difficulty:** Easy  
**Topics:** Array, Prefix Sum  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-pivot-index/)

## Problem Description

Given an array of integers `nums`, calculate the **pivot index** of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the right of the index.

If no such index exists, return `-1`. If there are multiple pivot indices, return the **left-most** one.

### Examples

**Example 1:**
```
Input: nums = [1, 7, 3, 6, 5, 6]
Output: 3
Explanation: Left sum = 1+7+3 = 11, Right sum = 5+6 = 11
```

**Example 2:**
```
Input: nums = [1, 2, 3]
Output: -1
Explanation: No index has equal left and right sums.
```

**Example 3:**
```
Input: nums = [2, 1, -1]
Output: 0
Explanation: Left sum = 0 (nothing to the left), Right sum = 1+(-1) = 0.
```

### Constraints

- `1 <= nums.length <= 10^4`
- `-1000 <= nums[i] <= 1000`

## Approach

### Running Left Sum vs Total Sum

Instead of calculating left and right sums from scratch at every index, use the total sum to derive the right sum: `rightSum = totalSum - leftSum - nums[i]`.

**Key Insight:** You don't need two separate sums. If you know the total sum and the left sum, the right sum is just `totalSum - leftSum - currentElement`. This lets you solve it in a single pass after computing the total.

**Algorithm:**
1. Calculate the total sum of the array
2. Initialize `leftSum = 0`
3. Loop through each index:
   - Calculate `rightSum = totalSum - leftSum - nums[i]`
   - If `leftSum === rightSum` → return this index
   - Add `nums[i]` to `leftSum`
4. Return -1

**Walkthrough:**
```
nums = [1, 7, 3, 6, 5, 6]
totalSum = 28

i=0: leftSum=0, rightSum = 28-0-1 = 27, 0 !== 27
  leftSum = 1

i=1: leftSum=1, rightSum = 28-1-7 = 20, 1 !== 20
  leftSum = 8

i=2: leftSum=8, rightSum = 28-8-3 = 17, 8 !== 17
  leftSum = 11

i=3: leftSum=11, rightSum = 28-11-6 = 11, 11 === 11 → return 3 ✓
```
```
nums = [2, 1, -1]
totalSum = 2

i=0: leftSum=0, rightSum = 2-0-2 = 0, 0 === 0 → return 0 ✓
```

**Why this works:** At any index `i`, the array is split into three parts: left side, current element, right side. Since `leftSum + nums[i] + rightSum = totalSum`, we can derive `rightSum` without recalculating it.

**Time Complexity:** O(n) - One pass for total sum, one pass to find pivot  
**Space Complexity:** O(1) - Only two variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Using total sum to derive right sum avoids recalculating at every index
- `rightSum = totalSum - leftSum - nums[i]` is the key formula
- Left sum of index 0 is 0 (nothing to the left) — handle this naturally
- This "derive one value from known values" pattern is common in prefix sum problems
- Directly builds on Running Sum (#1480) concepts