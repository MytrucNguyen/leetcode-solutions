# 1. Two Sum

**Difficulty:** Easy  
**Topics:** Array, Hash Table  
**Link:** [LeetCode Problem](https://leetcode.com/problems/two-sum/)

## Problem Description

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

### Examples

**Example 1:**
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2:**
```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

**Example 3:**
```
Input: nums = [3,3], target = 6
Output: [0,1]
```

### Constraints

- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Only one valid answer exists.

## Approach

### Brute Force (Not Implemented)
Check every pair of numbers to see if they sum to the target.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

### Hash Map (Optimal)
Use a hash map to store numbers we've seen and their indices. For each number, check if `target - current number` exists in the map.

**Algorithm:**
1. Create an empty hash map
2. Iterate through the array
3. For each number, calculate `complement = target - current number`
4. If complement exists in hash map, return `[hash_map[complement], current_index]`
5. Otherwise, store `current number: current_index` in hash map

**Time Complexity:** O(n) - Single pass through array  
**Space Complexity:** O(n) - Hash map storage

## Solutions

- [Python Solution](./solution.py)
- [TypeScript Solution](./solution.ts)
- [C# Solution](./Solution.cs)

## Key Takeaways

- Hash maps are excellent for lookups in O(1) time
- Trading space for time is a common optimization pattern
- Always consider the complement when looking for pairs that sum to a target