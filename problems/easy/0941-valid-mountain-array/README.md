# 941. Valid Mountain Array

**Difficulty:** Easy  
**Topics:** Array  
**Link:** [LeetCode Problem](https://leetcode.com/problems/valid-mountain-array/)

## Problem Description

Given an array of integers `arr`, return `true` if and only if it is a valid mountain array.

A valid mountain array must:
- Have `arr.length >= 3`
- There exists some index `i` where:
  - `arr[0] < arr[1] < ... < arr[i]` (strictly increasing)
  - `arr[i] > arr[i+1] > ... > arr[arr.length - 1]` (strictly decreasing)

### Examples

**Example 1:**
```
Input: arr = [2, 1]
Output: false
Explanation: Less than 3 elements.
```

**Example 2:**
```
Input: arr = [3, 5, 5]
Output: false
Explanation: Not strictly increasing (5 = 5).
```

**Example 3:**
```
Input: arr = [0, 3, 2, 1]
Output: true
Explanation: Increases to 3, then decreases to 1.
```

### Constraints

- `1 <= arr.length <= 10^4`
- `0 <= arr[i] <= 10^4`

## Approach

### Walk Up Then Walk Down

Use a single pointer. First walk up while values are increasing. Then walk down while values are decreasing. If you reach the end and both phases happened, it's a mountain.

**Key Insight:** Think of it as two phases — climbing and descending. Walk up as far as you can, then walk down as far as you can. A valid mountain means you climbed at least one step, the peak wasn't at the edges, and you descended all the way to the end.

**Algorithm:**
1. If length < 3, return false
2. Start at index 0, walk up while `arr[i] < arr[i+1]`
3. Check: if we didn't move (peak at start) or reached the end (peak at end) → return false
4. Walk down while `arr[i] > arr[i+1]`
5. Return true if we reached the end

**Walkthrough:**
```
arr = [0, 3, 2, 1]

Walk up:
  i=0: 0 < 3 → i=1
  i=1: 3 < 2? No → stop at peak, i=1

Peak check: i=1 (not 0, not 3) ✓

Walk down:
  i=1: 3 > 2 → i=2
  i=2: 2 > 1 → i=3

i=3 === length-1 → reached the end → return true ✓
```
```
arr = [0, 1, 2, 3]

Walk up:
  i=0: 0 < 1 → i=1
  i=1: 1 < 2 → i=2
  i=2: 2 < 3 → i=3

Peak check: i=3 === length-1 → peak at end → return false ✓
(Only goes up, no descent)
```
```
arr = [3, 2, 1]

Walk up:
  i=0: 3 < 2? No → stop, i=0

Peak check: i=0 → peak at start → return false ✓
(Only goes down, no climb)
```

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(1) - Only one pointer variable

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Two-phase traversal (walk up, walk down) cleanly handles the mountain shape
- Edge checks ensure the peak isn't at the start or end
- This "state transition" pattern (climbing → descending) appears in many problems
- Always handle the minimum length requirement first