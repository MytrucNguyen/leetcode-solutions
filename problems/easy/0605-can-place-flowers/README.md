# 605. Can Place Flowers

**Difficulty:** Easy  
**Topics:** Array, Greedy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/can-place-flowers/)

## Problem Description

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in **adjacent** plots.

Given an integer array `flowerbed` containing `0`'s and `1`'s, where `0` means empty and `1` means not empty, and an integer `n`, return `true` if `n` new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and `false` otherwise.

### Examples

**Example 1:**
```
Input: flowerbed = [1, 0, 0, 0, 1], n = 1
Output: true
```

**Example 2:**
```
Input: flowerbed = [1, 0, 0, 0, 1], n = 2
Output: false
```

### Constraints

- `1 <= flowerbed.length <= 2 * 10^4`
- `flowerbed[i]` is `0` or `1`
- There are no two adjacent flowers in `flowerbed`
- `0 <= n <= flowerbed.length`

## Approach

### Greedy — Plant as You Go

Scan through the array and greedily plant whenever a valid spot is found. A spot is valid when the current position and both neighbors are all 0.

**Key Insight:** Greedy works here because planting at the earliest valid spot never blocks a better solution later. If you can plant somewhere, you should — there's no benefit to waiting.

**Algorithm:**
1. Loop through the flowerbed
2. At each position, check three conditions:
   - Current spot is `0`
   - Left neighbor is `0` (or index is 0, meaning no left neighbor)
   - Right neighbor is `0` (or index is last, meaning no right neighbor)
3. If all three are true, plant (set to `1`), decrement `n`
4. If `n` reaches 0, return `true` early
5. If loop finishes and `n > 0`, return `false`

**Walkthrough:**
```
flowerbed = [1, 0, 0, 0, 1], n = 1

i=0: value is 1 → skip
i=1: value is 0, left is 1 → can't plant
i=2: value is 0, left is 0, right is 0 → plant!
  flowerbed = [1, 0, 1, 0, 1], n = 0
  n is 0 → return true ✓
```
```
flowerbed = [0, 0, 0, 0, 0], n = 3

i=0: value is 0, no left, right is 0 → plant!
  flowerbed = [1, 0, 0, 0, 0], n = 2
i=1: value is 0, left is 1 → can't plant
i=2: value is 0, left is 0, right is 0 → plant!
  flowerbed = [1, 0, 1, 0, 0], n = 1
i=3: value is 0, left is 1 → can't plant
i=4: value is 0, left is 0, no right → plant!
  flowerbed = [1, 0, 1, 0, 1], n = 0
  n is 0 → return true ✓
```

**Why greedy works:** Planting at the first available spot is always optimal. Skipping a valid spot can never let you plant more flowers later — it can only plant the same or fewer.

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(1) - Modifies array in place

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Greedy works when making the locally optimal choice leads to the globally optimal solution
- Boundary handling (first and last positions) is key — treat out-of-bounds as empty
- Modifying the array in-place as you plant prevents adjacent conflicts automatically
- Early exit when `n` reaches 0 avoids unnecessary work