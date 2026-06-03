# 15. 3Sum

**Difficulty:** Medium  
**Topics:** Array, Two Pointers, Sorting  
**Link:** [LeetCode Problem](https://leetcode.com/problems/3sum/)

## Problem Description

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

### Examples

**Example 1:**
```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
```

**Example 2:**
```
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
```

**Example 3:**
```
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
```

### Constraints

- `3 <= nums.length <= 3000`
- `-10^5 <= nums[i] <= 10^5`

## Approach

### Sort + Two Pointers

The key insight is to reduce this three-number problem into a two-number problem (similar to Two Sum) by fixing one number and using two pointers to find the other two.

**High-level strategy:**
1. Sort the array first (enables two pointers and duplicate skipping)
2. Fix one number (call it `first`)
3. Use two pointers to find two other numbers that sum to `-first`
4. Skip duplicates to avoid duplicate triplets

**Algorithm:**

1. **Sort the array**: `[-1, 0, 1, 2, -1, -4]` → `[-4, -1, -1, 0, 1, 2]`

2. **For each number (index i):**
   - Skip if it's a duplicate of the previous number
   - Set `target = -nums[i]` (we need two numbers that sum to this)
   - Use two pointers on the remaining array (from i+1 to end):
     - `left = i + 1`
     - `right = length - 1`

3. **While left < right:**
   - Calculate `sum = nums[left] + nums[right]`
   - If `sum == target`: Found a triplet! Add `[nums[i], nums[left], nums[right]]`
     - Skip duplicate lefts
     - Skip duplicate rights
     - Move both pointers inward
   - If `sum < target`: Need larger sum → move `left` right
   - If `sum > target`: Need smaller sum → move `right` left

**Example Walkthrough for `[-4, -1, -1, 0, 1, 2]`:**
```
i=0, first=-4, target=4:
  [-1, -1, 0, 1, 2]
    ↑           ↑
   left       right
   sum = -1 + 2 = 1 < 4 → move left
   ... no triplet found

i=1, first=-1, target=1:
  [-1, 0, 1, 2]
    ↑       ↑
   left   right
   sum = -1 + 2 = 1 ✓ Found: [-1, -1, 2]
   
  [-1, 0, 1, 2]
       ↑   ↑
      left right
   sum = 0 + 1 = 1 ✓ Found: [-1, 0, 1]

i=2, first=-1:
  Skip! Same as previous (duplicate)
  
Result: [[-1, -1, 2], [-1, 0, 1]]
```

**Handling Duplicates:**
- Skip duplicate `i` values: `if (i > 0 && nums[i] === nums[i-1]) continue`
- Skip duplicate lefts: `while (left < right && nums[left] === nums[left+1]) left++`
- Skip duplicate rights: `while (left < right && nums[right] === nums[right-1]) right--`

**Time Complexity:** O(n²) - O(n log n) for sorting + O(n²) for the nested loops  
**Space Complexity:** O(1) - Not counting the output array (sorting in-place)

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Sorting enables efficient two-pointer technique and duplicate handling
- Fix one element and reduce 3Sum to a Two Sum problem
- Two pointers technique: move inward based on whether sum is too small or too large
- Careful duplicate handling is crucial to avoid returning the same triplet multiple times
- This pattern (sort + fix + two pointers) is common for k-sum problems