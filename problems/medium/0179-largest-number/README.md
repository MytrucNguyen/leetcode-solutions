# 179. Largest Number

**Difficulty:** Medium  
**Topics:** String, Greedy, Sorting  
**Link:** [LeetCode Problem](https://leetcode.com/problems/largest-number/)

## Problem Description

Given a list of non-negative integers `nums`, arrange them such that they form the **largest number** and return it as a string.

### Examples

**Example 1:**

    Input: nums = [10, 2]
    Output: "210"

**Example 2:**

    Input: nums = [3, 30, 34, 5, 9]
    Output: "9534330"

### Constraints

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 10^9`

## Approach

### Custom Sort with String Comparison

Convert numbers to strings and sort with a custom comparator: for two numbers `a` and `b`, compare `a+b` vs `b+a`. If `a+b` is larger, `a` should come first.

**Key Insight:** You can't just sort by the numbers themselves. `9 > 34` numerically but we want `9` before `34` → "934" > "349". And `3 > 30` numerically but we need to check: "330" vs "303" → "330" wins, so `3` before `30`. The `a+b` vs `b+a` comparison handles all cases correctly.

**Why does this work?** If `a+b > b+a` for every adjacent pair in the sorted order, then we have the globally optimal arrangement. This is provable by transitivity — if `a` beats `b` and `b` beats `c`, then `a` beats `c`.

**Algorithm:**
1. Convert all numbers to strings
2. Sort with custom comparator: `(a, b) → compare b+a vs a+b`
3. Join the sorted strings
4. Handle edge case: if result starts with "0", return "0" (all zeros)

**Walkthrough:**

    nums = [3, 30, 34, 5, 9]
    strings = ["3", "30", "34", "5", "9"]

    Sort comparisons:
      "9" vs "5": "95" vs "59" → "95" wins → 9 first
      "9" vs "34": "934" vs "349" → "934" wins → 9 first
      "5" vs "34": "534" vs "345" → "534" wins → 5 first
      "5" vs "3": "53" vs "35" → "53" wins → 5 first
      "34" vs "3": "343" vs "334" → "343" wins → 34 first
      "34" vs "30": "3430" vs "3034" → "3430" wins → 34 first
      "3" vs "30": "330" vs "303" → "330" wins → 3 first

    Sorted: ["9", "5", "34", "3", "30"]
    Join: "9534330" ✓

    nums = [0, 0]
    strings = ["0", "0"]
    Sorted: ["0", "0"]
    Join: "00" → starts with "0" → return "0" ✓

**Time Complexity:** O(n log n × k) where n is array length and k is average digit count — sorting with string comparison  
**Space Complexity:** O(n × k) — storing string representations

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Custom comparator `a+b vs b+a` solves the ordering problem elegantly
- Can't sort by numeric value alone — relative positioning matters
- Edge case: all zeros should return "0" not "000..."
- This is a greedy approach — locally optimal pairwise ordering gives globally optimal result
- The `a+b vs b+a` trick is unique to this problem but worth remembering