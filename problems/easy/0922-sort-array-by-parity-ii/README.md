# 922. Sort Array By Parity II

**Difficulty:** Easy  
**Topics:** Array, Two Pointers, Sorting  
**Link:** [LeetCode Problem](https://leetcode.com/problems/sort-array-by-parity-ii/)

## Problem Description

Given an array of integers `nums`, half of the integers are odd and half are even. Sort the array so that whenever `nums[i]` is odd, `i` is odd, and whenever `nums[i]` is even, `i` is even.

Return any answer array that satisfies this condition.

### Examples

**Example 1:**
```
Input: nums = [4, 2, 5, 7]
Output: [4, 5, 2, 7]
Explanation: [4, 7, 2, 5] and [2, 5, 4, 7] are also accepted.
```

**Example 2:**
```
Input: nums = [2, 3]
Output: [2, 3]
```

### Constraints

- `2 <= nums.length <= 2 * 10^4`
- `nums.length` is even
- Half of the integers are even, half are odd
- `0 <= nums[i] <= 1000`

## Approach

### Two Pointer — Even and Odd Index Tracking

Use two pointers: one scanning even indices, one scanning odd indices. When the even pointer finds an odd number at an even index, find the next even number sitting at an odd index and swap them.

**Key Insight:** If there's an odd number at an even index, there must be an even number at an odd index somewhere (since half are even and half are odd). So we just need to find and swap these misplaced pairs.

**Algorithm:**
1. Set `even = 0` (scans 0, 2, 4...) and `odd = 1` (scans 1, 3, 5...)
2. While `even < nums.length`:
   - If `nums[even]` is even → it's correct, move `even += 2`
   - If `nums[even]` is odd → it's misplaced:
     - Advance `odd` until we find an even number at an odd index
     - Swap `nums[even]` and `nums[odd]`
     - Move both pointers forward
3. Return nums

**Walkthrough:**
```
nums = [4, 2, 5, 7]

even=0, odd=1
  nums[0]=4, even number at even index ✓ → even=2

even=2, odd=1
  nums[2]=5, odd number at even index ✗
  Check odd=1: nums[1]=2, even number at odd index ✗
  Swap! nums = [4, 5, 2, 7] → even=4, odd=3

even=4 → out of bounds, done

Result: [4, 5, 2, 7] ✓
```
```
nums = [3, 4, 2, 1]

even=0, odd=1
  nums[0]=3, odd at even index ✗
  Check odd=1: nums[1]=4, even at odd index ✗
  Swap! nums = [4, 3, 2, 1] → even=2, odd=3

even=2, odd=3
  nums[2]=2, even at even index ✓ → even=4

even=4 → out of bounds, done

Result: [4, 3, 2, 1] ✓
```

**Time Complexity:** O(n) - Each pointer traverses at most n/2 elements  
**Space Complexity:** O(1) - In-place swaps

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Using two pointers that skip by 2 (even indices and odd indices) is a clean pattern
- Misplaced elements always come in pairs — an odd at an even index means an even at an odd index
- In-place swapping avoids needing extra space
- This "fix mismatches by swapping" pattern appears in other sorting problems too