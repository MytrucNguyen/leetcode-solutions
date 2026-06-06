# 973. K Closest Points to Origin

**Difficulty:** Medium  
**Topics:** Array, Math, Divide and Conquer, Geometry, Sorting, Heap  
**Link:** [LeetCode Problem](https://leetcode.com/problems/k-closest-points-to-origin/)

## Problem Description

Given an array of `points` where `points[i] = [xi, yi]` represents a point on the X-Y plane and an integer `k`, return the `k` closest points to the origin `(0, 0)`.

The distance between two points on the X-Y plane is the Euclidean distance `√(x² + y²)`.

You may return the answer in **any order**.

### Examples

**Example 1:**

    Input: points = [[1,3],[-2,2]], k = 1
    Output: [[-2,2]]
    Explanation: dist(1,3) = √10, dist(-2,2) = √8.

**Example 2:**

    Input: points = [[3,3],[5,-1],[-2,4]], k = 2
    Output: [[3,3],[-2,4]]

### Constraints

- `1 <= k <= points.length <= 10^4`
- `-10^4 <= xi, yi <= 10^4`

## Approach

### Max Heap of Size K

Keep a max heap of size k. The top of the heap is the FARTHEST of the k closest points seen so far. If a new point is closer, swap them out.

**Key Insight:** This is Kth Largest (#215) in reverse:

- #215: Min heap of size k → top is kth largest (smallest of the big ones)
- #973: Max heap of size k → top is kth closest (farthest of the close ones)

When a new point is closer than the heap's farthest, replace it.

**Why max heap?** We want quick access to the farthest point in our "k closest" set. If a new point beats the farthest, swap. A max heap puts the farthest on top — O(1) to check, O(log k) to swap.

**No sqrt needed:** Comparing `x² + y²` gives the same ordering as comparing actual distances. Skip the sqrt!

**Algorithm:**

1. For each point, calculate `dist = x² + y²`
2. If heap size < k → push the point
3. If dist < heap top's dist → pop the farthest, push this point
4. Return everything in the heap

**Walkthrough:**

    points = [[3,3],[5,-1],[-2,4]], k = 2

    [3,3]: dist=18. Heap size < 2 → push. Heap: [(18,[3,3])]
    [5,-1]: dist=26. Heap size < 2 → push. Heap: [(26,[5,-1]), (18,[3,3])]
      Max heap top = 26

    [-2,4]: dist=20. 20 < top(26) → pop [5,-1], push [-2,4]
      Heap: [(20,[-2,4]), (18,[3,3])]

    Return [[3,3],[-2,4]] ✓

**Alternative: Sort approach**
Sort by distance, take first k. O(n log n) time. Simpler code but heap is O(n log k) — better when k << n.

**Time Complexity:** O(n log k) — each of n points may trigger a heap operation  
**Space Complexity:** O(k) — heap stores k points

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Kth Largest (#215) used min heap, K Closest uses max heap — opposite heaps!
- Compare x² + y² instead of actual distances — skip sqrt
- Max heap keeps the farthest of the k closest on top for easy comparison
- Sort approach is simpler and acceptable in interviews — mention both
- Same "top k" pattern applies to many problems
