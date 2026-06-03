# 268. Missing Number

**Difficulty:** Easy  
**Topics:** Array, Hash Table, Math, Binary Search, Bit Manipulation, Sorting  
**Link:** [LeetCode Problem](https://leetcode.com/problems/missing-number/)

## Problem Description

Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.

### Examples

**Example 1:**
```
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
```

**Example 2:**
```
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
```

**Example 3:**
```
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
```

### Constraints

- `n == nums.length`
- `1 <= n <= 10^4`
- `0 <= nums[i] <= n`
- All the numbers of `nums` are **unique**.

**Follow up:** Could you implement a solution using only `O(1)` extra space complexity and `O(n)` runtime complexity?

## Approach

### Math Solution (Sum Formula)

The key insight is that we know exactly what numbers should be in the array: `[0, 1, 2, ..., n]`. We can calculate what the sum should be and compare it to the actual sum.

**Formula for sum of numbers from 0 to n:**
```
expectedSum = n × (n + 1) / 2
```

**Algorithm:**
1. Calculate `n` (the length of the array)
2. Calculate the expected sum using the formula: `n × (n + 1) / 2`
3. Calculate the actual sum of all numbers in the array
4. The missing number is: `expectedSum - actualSum`

**Example for `[3, 0, 1]`:**
```
n = 3
expectedSum = 3 × 4 / 2 = 6
actualSum = 3 + 0 + 1 = 4
missing = 6 - 4 = 2
```

**Time Complexity:** O(n) - Single pass to calculate sum  
**Space Complexity:** O(1) - Only using a few variables

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Mathematical formulas can provide elegant solutions to array problems
- The sum formula `n × (n + 1) / 2` is useful for calculating the sum of consecutive integers
- Sometimes the most efficient solution involves transforming the problem (from "find missing" to "calculate difference")
- This solution achieves O(1) space complexity, which is optimal
- Alternative approaches include using a Set (O(n) space) or sorting (O(n log n) time)