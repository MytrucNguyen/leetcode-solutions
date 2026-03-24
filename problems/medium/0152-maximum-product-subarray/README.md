# 152. Maximum Product Subarray

**Difficulty:** Medium  
**Topics:** Array, Dynamic Programming  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-product-subarray/)

## Problem Description

Given an integer array `nums`, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a **32-bit** integer.

### Examples

**Example 1:**
```
Input: nums = [2, 3, -2, 4]
Output: 6
Explanation: [2, 3] has the largest product.
```

**Example 2:**
```
Input: nums = [-2, 0, -1]
Output: 0
Explanation: The subarray [0] has the largest product.
```

### Constraints

- `1 <= nums.length <= 2 * 10^4`
- `-10 <= nums[i] <= 10`
- The product of any subarray fits in a 32-bit integer

## Approach

### Track Max and Min (Modified Kadane's)

Like Maximum Subarray (#53) but track both the current max AND current min at each step, because a negative × negative = positive.

**Key Insight:** With addition (#53), a running negative sum is always bad. But with multiplication, a large negative product can become the largest positive product when multiplied by another negative number. So we must track both extremes.

**Algorithm:**
1. Initialize `curMax`, `curMin`, and `result` to `nums[0]`
2. Loop from index 1:
   - Calculate three candidates: `num`, `num * curMax`, `num * curMin`
   - `curMax` = max of all three
   - `curMin` = min of all three
   - Update `result` with `curMax`
3. Return `result`

**Why three candidates?**
- `num` alone: start a new subarray (previous product was bad)
- `num * curMax`: extend the current best (both positive)
- `num * curMin`: a negative × negative flips to positive!

**Walkthrough:**
```
nums = [2, 3, -2, 4]

Start: curMax=2, curMin=2, result=2

i=1: num=3
  candidates: 3, 3*2=6, 3*2=6
  curMax=6, curMin=3, result=6

i=2: num=-2
  candidates: -2, -2*6=-12, -2*3=-6
  curMax=-2, curMin=-12, result=6

i=3: num=4
  candidates: 4, 4*-2=-8, 4*-12=-48
  curMax=4, curMin=-48, result=6

Return 6 ✓
```
```
nums = [-2, 3, -4]

Start: curMax=-2, curMin=-2, result=-2

i=1: num=3
  candidates: 3, 3*-2=-6, 3*-2=-6
  curMax=3, curMin=-6, result=3

i=2: num=-4
  candidates: -4, -4*3=-12, -4*-6=24
  curMax=24, curMin=-12, result=24
       ↑ negative × negative = big positive!

Return 24 ✓
```

**Important:** We need to save `curMax` before updating it, because we use the old value to calculate `curMin`.

**Comparison with Maximum Subarray (#53):**
- #53: Track only curMax (negative sums are always bad)
- #152: Track curMax AND curMin (negative products can flip)
- Same Kadane's spirit, one extra variable

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(1) - Only three variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Negative × negative = positive means we must track both max and min
- At each step, three choices: start fresh, extend max, or extend min
- Save the old curMax before updating — both curMax and curMin depend on it
- This "track both extremes" pattern applies whenever operations can flip signs
- Directly builds on Kadane's algorithm from Maximum Subarray (#53)