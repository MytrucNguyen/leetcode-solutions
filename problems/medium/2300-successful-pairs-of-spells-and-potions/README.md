# 2300. Successful Pairs of Spells and Potions

**Difficulty:** Medium  
**Topics:** Array, Two Pointers, Binary Search, Sorting  
**Link:** [LeetCode Problem](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/)

## Problem Description

You are given two positive integer arrays `spells` and `potions`, of length `n` and `m` respectively, where `spells[i]` represents the strength of the `ith` spell and `potions[j]` represents the strength of the `jth` potion.

A spell and potion pair is considered **successful** if the product of their strengths is **at least** `success`.

Return an integer array of length `n` where the `ith` element is the number of potions that will form a successful pair with the `ith` spell.

### Examples

**Example 1:**

    Input: spells = [5,1,3], potions = [1,2,3,4,5], success = 7
    Output: [4,0,3]
    Explanation:
      Spell 5: 5×1=5✗, 5×2=10✓, 5×3=15✓, 5×4=20✓, 5×5=25✓ → 4
      Spell 1: all products < 7 → 0
      Spell 3: 3×1=3✗, 3×2=6✗, 3×3=9✓, 3×4=12✓, 3×5=15✓ → 3

**Example 2:**

    Input: spells = [3,1,2], potions = [8,5,8], success = 16
    Output: [2,0,2]

### Constraints

- `n == spells.length`
- `m == potions.length`
- `1 <= n, m <= 10^5`
- `1 <= spells[i], potions[j] <= 10^5`
- `1 <= success <= 10^10`

## Approach

### Sort Potions + Binary Search

Sort potions. For each spell, binary search for the minimum potion that makes `spell × potion ≥ success`. Everything from that point to the end works.

**Key Insight:** After sorting potions, if potion at index `i` works, all potions after it work too (they're bigger). So binary search for the first working potion, and the count is `m - index`.

**What's the minimum potion needed?**

    spell × potion ≥ success
    potion ≥ success / spell
    minPotion = ceil(success / spell)

Binary search for the first potion ≥ minPotion in the sorted array.

**Algorithm:**

1. Sort potions
2. For each spell:
    - Calculate `minPotion = ceil(success / spell)`
    - Binary search for first potion ≥ minPotion
    - Count = `m - index`
3. Return counts

**Walkthrough:**

    spells = [5,1,3], potions = [1,2,3,4,5], success = 7
    Sorted potions: [1, 2, 3, 4, 5]

    Spell 5: minPotion = ceil(7/5) = 2
      Binary search for first ≥ 2 → index 1
      Count = 5 - 1 = 4 ✓

    Spell 1: minPotion = ceil(7/1) = 7
      Binary search for first ≥ 7 → index 5 (past end)
      Count = 5 - 5 = 0 ✓

    Spell 3: minPotion = ceil(7/3) = 3
      Binary search for first ≥ 3 → index 2
      Count = 5 - 2 = 3 ✓

    Result: [4, 0, 3] ✓

**Comparison with other binary search problems:**

- Standard (#704): Search for exact value
- Answer space (#875): Search for minimum valid answer
- Successful Pairs (#2300): Search for first valid position, count remainder

**Time Complexity:** O((n + m) log m) — sort potions O(m log m) + n binary searches O(n log m)  
**Space Complexity:** O(1) — sort in-place, result array doesn't count

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Sort once, binary search many times — amortize the sort cost
- ceil(success / spell) gives the minimum potion needed
- First valid position → count from there to end is `m - index`
- Same "find leftmost insertion point" as Search Insert Position (#35)
