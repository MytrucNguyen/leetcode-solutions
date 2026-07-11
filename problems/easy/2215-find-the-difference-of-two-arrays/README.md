# 2215. Find the Difference of Two Arrays

**Difficulty:** Easy  
**Topics:** Array, Hash Table  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-the-difference-of-two-arrays/)

## Problem Description

Given two **0-indexed** integer arrays `nums1` and `nums2`, return a list `answer` of size `2` where:

- `answer[0]` is a list of all **distinct** integers in `nums1` which are **not** present in `nums2`
- `answer[1]` is a list of all **distinct** integers in `nums2` which are **not** present in `nums1`

### Examples

**Example 1:**

    Input: nums1 = [1,2,3], nums2 = [2,4,6]
    Output: [[1,3],[4,6]]

**Example 2:**

    Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
    Output: [[3],[]]

### Constraints

- `1 <= nums1.length, nums2.length <= 1000`
- `-1000 <= nums1[i], nums2[i] <= 1000`

## Approach

### Two Sets — Filter What's Missing

Convert both arrays to Sets (removes duplicates), then filter each set for elements not in the other.

**Key Insight:** Sets give us O(1) lookup and automatically handle duplicates. The answer needs distinct values, so Sets do double duty — dedup and fast lookup.

**Algorithm:**

1. Convert nums1 to Set1, nums2 to Set2
2. Filter Set1 for elements not in Set2 → answer[0]
3. Filter Set2 for elements not in Set1 → answer[1]
4. Return both lists

**Walkthrough:**

    nums1 = [1,2,3,3], nums2 = [1,1,2,2]

    set1 = {1, 2, 3}, set2 = {1, 2}

    In set1 but not set2: 3 → [3]
    In set2 but not set1: (none) → []

    Return [[3], []] ✓

**Time Complexity:** O(n + m) — convert to sets and filter  
**Space Complexity:** O(n + m) — two sets

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Sets handle both deduplication and fast lookup in one step
- This is the set difference operation: A - B and B - A
- Python has built-in set difference with `-` operator
