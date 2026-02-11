# 350. Intersection of Two Arrays II

**Difficulty:** Easy  
**Topics:** Array, Hash Table, Two Pointers, Binary Search, Sorting  
**Link:** [LeetCode Problem](https://leetcode.com/problems/intersection-of-two-arrays-ii/)

## Problem Description

Given two integer arrays `nums1` and `nums2`, return an array of their **intersection**. Each element in the result must appear as many times as it shows in **both** arrays and you may return the result in **any order**.

### Examples

**Example 1:**
```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
```

**Example 2:**
```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9] or [9,4]
```

### Constraints

- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`

**Follow up:**
- What if the given array is already sorted? How would you optimize your algorithm?
- What if `nums1`'s size is small compared to `nums2`'s size? Which algorithm is better?
- What if elements of `nums2` are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

## Approach

### Hash Map (Frequency Count)
Count frequency of elements in one array, then iterate through the other array and collect matches.

**Algorithm:**
1. Create a frequency map from nums1
2. Iterate through nums2
3. For each element, if it exists in the map with count > 0:
   - Add to result
   - Decrease count in map
4. Return result

**Time Complexity:** O(n + m) - Two passes  
**Space Complexity:** O(min(n, m)) - Hash map storage

### Two Pointers (After Sorting)
Sort both arrays and use two pointers to find matching elements.

**Algorithm:**
1. Sort both arrays
2. Initialize two pointers: `i = 0`, `j = 0`
3. While both pointers are in bounds:
   - If `nums1[i] === nums2[j]`: Add to result, increment both
   - Else if `nums1[i] < nums2[j]`: Increment `i`
   - Else: Increment `j`
4. Return result

**Time Complexity:** O(n log n + m log m) - Sorting dominates  
**Space Complexity:** O(1) - Not counting output array

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Two approaches: Hash map (unsorted) vs Two pointers (sorted)
- Hash map is faster if arrays are unsorted
- Two pointers uses less space and works well if arrays are already sorted
- Include elements as many times as they appear in both arrays
- Take minimum count when frequencies differ