# 217. Contains Duplicate

**Difficulty:** Easy  
**Topics:** Array, Hash Table, Sorting  
**Link:** [LeetCode Problem](https://leetcode.com/problems/contains-duplicate/)

## Problem Description

Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

### Examples

**Example 1:**
```
Input: nums = [1,2,3,1]
Output: true
```

**Example 2:**
```
Input: nums = [1,2,3,4]
Output: false
```

**Example 3:**
```
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

### Constraints

- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

## Approach

### Hash Set Solution

Use a Set to track numbers we've seen. As soon as we encounter a number that's already in the set, we've found a duplicate.

**Algorithm:**
1. Create an empty set
2. For each number in the array:
   - If the number is already in the set → Return `true` (duplicate found)
   - Otherwise, add the number to the set
3. If we finish the loop without finding duplicates → Return `false`

**Example Walkthrough for `[1, 2, 3, 1]`:**
```
set = {}

i=0, num=1: Is 1 in set? No → Add it → set = {1}
i=1, num=2: Is 2 in set? No → Add it → set = {1, 2}
i=2, num=3: Is 3 in set? No → Add it → set = {1, 2, 3}
i=3, num=1: Is 1 in set? YES! → Return true
```

**Time Complexity:** O(n) - Single pass through array  
**Space Complexity:** O(n) - Set storage in worst case (all unique elements)

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Sets are perfect for checking presence/existence without needing to count
- Early return optimization - stop as soon as duplicate is found
- Hash-based lookups provide O(1) time for checking if element exists
- This problem demonstrates when a Set is more efficient than a Map
- Alternative approach: Sort the array and check adjacent elements (O(n log n) time, O(1) space)