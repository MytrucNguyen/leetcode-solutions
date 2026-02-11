# 349. Intersection of Two Arrays

**Difficulty:** Easy  
**Topics:** Array, Hash Table, Two Pointers, Binary Search, Sorting  
**Link:** [LeetCode Problem](https://leetcode.com/problems/intersection-of-two-arrays/)

## Problem Description

Given two integer arrays `nums1` and `nums2`, return an array of their **intersection**. Each element in the result must be **unique** and you may return the result in **any order**.

### Examples

**Example 1:**
```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
```

**Example 2:**
```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
```

### Constraints

- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`

## Approach

### Hash Set
Convert one array to a set and check which elements from the other array exist in it.

**Algorithm:**
1. Convert nums1 to a Set (removes duplicates automatically)
2. Create a result Set
3. Iterate through nums2
4. For each element, if it exists in the nums1 Set, add to result Set
5. Convert result Set to array and return

**Time Complexity:** O(n + m) - Two passes  
**Space Complexity:** O(n + m) - Two sets

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Use Set to automatically handle uniqueness
- Set lookups are O(1)
- Converting array to Set removes duplicates
- Simple and efficient for finding unique intersection