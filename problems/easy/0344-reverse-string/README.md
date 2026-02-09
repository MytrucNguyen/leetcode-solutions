# 344. Reverse String

**Difficulty:** Easy  
**Topics:** Two Pointers, String  
**Link:** [LeetCode Problem](https://leetcode.com/problems/reverse-string/)

## Problem Description

Write a function that reverses a string. The input string is given as an array of characters `s`.

You must do this by modifying the input array **in-place** with O(1) extra memory.

### Examples

**Example 1:**
```
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

**Example 2:**
```
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```

### Constraints

- `1 <= s.length <= 10^5`
- `s[i]` is a printable ASCII character.

## Approach

### Two Pointers

Use two pointers starting at opposite ends of the array. Swap elements and move the pointers toward the center until they meet.

**Algorithm:**
1. Set `left = 0` and `right = length - 1`
2. While `left < right`:
   - Swap `s[left]` and `s[right]`
   - Increment `left`
   - Decrement `right`
3. Return (array is modified in-place)

**Time Complexity:** O(n) - Visit each element once  
**Space Complexity:** O(1) - Only two pointer variables

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Two pointers moving from opposite ends is a classic pattern
- In-place modification means O(1) extra space
- Stop when pointers meet or cross (left >= right)