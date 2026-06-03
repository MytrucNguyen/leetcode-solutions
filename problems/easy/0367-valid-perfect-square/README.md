# 367. Valid Perfect Square

**Difficulty:** Easy  
**Topics:** Math, Binary Search  
**Link:** [LeetCode Problem](https://leetcode.com/problems/valid-perfect-square/)

## Problem Description

Given a positive integer `num`, return `true` if `num` is a **perfect square** or `false` otherwise.

A **perfect square** is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You **must not use** any built-in library function, such as `sqrt`.

### Examples

**Example 1:**
```
Input: num = 16
Output: true
Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
```

**Example 2:**
```
Input: num = 14
Output: false
Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.
```

### Constraints

- `1 <= num <= 2^31 - 1`

## Approach

### Binary Search
Use binary search to efficiently find if there exists an integer whose square equals num.

**Algorithm:**
1. Set `left = 1`, `right = num`
2. While `left <= right`:
   - Calculate `mid = (left + right) / 2`
   - Calculate `square = mid × mid`
   - If `square === num`: Return true
   - If `square < num`: Search right half, `left = mid + 1`
   - If `square > num`: Search left half, `right = mid - 1`
3. Return false if no exact match found

**Time Complexity:** O(log n) - Binary search halves search space each iteration  
**Space Complexity:** O(1) - Only a few variables

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Binary search works on any sorted search space
- Similar to Sqrt(x) but checking for exact match instead of floor
- Efficient for large numbers (O(log n) vs O(n) brute force)
- Three cases in binary search: found, search left, search right