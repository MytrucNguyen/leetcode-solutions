# 215. Kth Largest Element in an Array

**Difficulty:** Medium  
**Topics:** Array, Divide and Conquer, Sorting, Heap, Quickselect  
**Link:** [LeetCode Problem](https://leetcode.com/problems/kth-largest-element-in-an-array/)

## Problem Description

Given an integer array `nums` and an integer `k`, return the `kth` largest element in the array.

Note that it is the `kth` largest element in the sorted order, not the `kth` distinct element.

Can you solve it without sorting?

### Examples

**Example 1:**

    Input: nums = [3,2,1,5,6,4], k = 2
    Output: 5

**Example 2:**

    Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
    Output: 4

### Constraints

- `1 <= k <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

## Approach

### Sort (Simple)
Sort the array and return the element at index `length - k`.
- **Time Complexity:** O(n log n)
- **Space Complexity:** O(1)

### Min Heap of Size K (Optimal)
Maintain a min heap of size k. After processing all elements, the top of the heap is the kth largest.

**Key Insight:** A min heap of size k always holds the k largest elements seen so far. The smallest element in the heap (the top) is the kth largest. Any element smaller than the heap's top can't be in the top k, so we skip it.

**Why min heap and not max heap?** With a min heap, the smallest of the k largest is at the top — easy to compare and replace. We want quick access to the smallest of the big ones, not the biggest.

**Algorithm:**
1. For each number in the array:
   - If heap size < k → push the number
   - Else if number > heap top → remove top, push number
2. Return the heap top (kth largest)

**Walkthrough:**

    nums = [3,2,1,5,6,4], k = 2

    num=3: heap size < 2 → push → heap: [3]
    num=2: heap size < 2 → push → heap: [2, 3]  (min=2 on top)
    num=1: 1 < top(2) → skip
    num=5: 5 > top(2) → pop 2, push 5 → heap: [3, 5]  (min=3 on top)
    num=6: 6 > top(3) → pop 3, push 6 → heap: [5, 6]  (min=5 on top)
    num=4: 4 < top(5) → skip

    Return top = 5 ✓

    nums = [3,2,3,1,2,4,5,5,6], k = 4

    Build heap of size 4:
    3 → [3]
    2 → [2, 3]
    3 → [2, 3, 3]
    1 → [1, 2, 3, 3]  (size=4, min=1)
    2 → 2 > 1 → pop 1, push 2 → [2, 2, 3, 3]
    4 → 4 > 2 → pop 2, push 4 → [2, 3, 3, 4]
    5 → 5 > 2 → pop 2, push 5 → [3, 3, 4, 5]
    5 → 5 > 3 → pop 3, push 5 → [3, 4, 5, 5]
    6 → 6 > 3 → pop 3, push 6 → [4, 5, 5, 6]

    Return top = 4 ✓

**Note on JavaScript/TypeScript:** JavaScript doesn't have a built-in heap, so we'll implement a simple MinHeap class or use the sort approach. In interviews, you can mention the heap approach and implement a basic one if asked.

**Comparison with Top K Frequent (#347):**
- #347: Used bucket sort for O(n) — frequency was bounded by array length
- #215: Uses heap for O(n log k) — general purpose top-k pattern
- Both solve "find the top k" but with different techniques

**Time Complexity:** O(n log k) — each of n elements may trigger a heap operation of O(log k)  
**Space Complexity:** O(k) — heap stores at most k elements

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Min heap of size k is the standard pattern for "kth largest" problems
- The heap top is always the kth largest — smallest of the k largest
- Skip elements smaller than the heap top — they can't be in the top k
- JavaScript lacks a built-in heap — implement a basic one or use sort
- This pattern applies to: kth largest in a stream, top k elements, merge k sorted lists