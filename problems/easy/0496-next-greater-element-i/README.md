# 496. Next Greater Element I

**Difficulty:** Easy  
**Topics:** Array, Hash Table, Stack, Monotonic Stack  
**Link:** [LeetCode Problem](https://leetcode.com/problems/next-greater-element-i/)

## Problem Description

The **next greater element** of some element `x` in an array is the first greater element that is to the **right** of `x` in the same array.

You are given two **distinct 0-indexed** integer arrays `nums1` and `nums2`, where `nums1` is a subset of `nums2`.

For each `0 <= i < nums1.length`, find the index `j` such that `nums1[i] == nums2[j]` and determine the next greater element of `nums2[j]` in `nums2`. If there is no next greater element, then the answer for this query is `-1`.

Return an array of length `nums1.length` such that `ans[i]` is the next greater element as described above.

### Examples

**Example 1:**

    Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
    Output: [-1,3,-1]
    Explanation:
      4 → next greater in nums2 after index 2: none → -1
      1 → next greater in nums2 after index 0: 3 → 3
      2 → next greater in nums2 after index 3: none → -1

**Example 2:**

    Input: nums1 = [2,4], nums2 = [1,2,3,4]
    Output: [3,-1]
    Explanation:
      2 → next greater: 3
      4 → next greater: none → -1

### Constraints

- `1 <= nums1.length <= nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 10^4`
- All integers in `nums1` and `nums2` are unique
- All integers of `nums1` also appear in `nums2`

## Approach

### Monotonic Stack + Hash Map

Precompute the next greater element for every number in nums2 using a monotonic stack (same as Daily Temperatures #739). Store results in a hash map. Then just look up each nums1 element.

**Key Insight:** Instead of finding next greater for each nums1 element individually (O(n×m)), precompute ALL next greater elements in nums2 with one pass, then look up in O(1). Same monotonic stack from #739, but store value→next_greater in a map instead of index gaps.

**Algorithm:**

1. Use a monotonic decreasing stack on nums2
2. For each element in nums2:
    - While stack is not empty AND current > stack top: pop, map popped → current
    - Push current onto stack
3. Remaining stack elements have no next greater → map to -1
4. For each element in nums1, look up the map

**Walkthrough:**

    nums2 = [1, 3, 4, 2]
    stack = [], map = {}

    1: stack empty → push 1.           Stack: [1]
    3: 3 > 1 → pop 1, map[1]=3.       Stack: []
       Push 3.                          Stack: [3]
    4: 4 > 3 → pop 3, map[3]=4.       Stack: []
       Push 4.                          Stack: [4]
    2: 2 < 4 → push 2.                Stack: [4, 2]

    Remaining: map[4]=-1, map[2]=-1

    map = {1:3, 3:4, 4:-1, 2:-1}

    nums1 = [4, 1, 2]
    Lookup: [map[4], map[1], map[2]] = [-1, 3, -1] ✓

**Comparison with Daily Temperatures (#739):**

- #739: Store index gaps (answer[popped] = i - popped)
- #496: Store value mappings (map[popped] = current value)
- Same monotonic stack, different what you record on pop

**Time Complexity:** O(n + m) where n = nums1.length, m = nums2.length  
**Space Complexity:** O(m) — map and stack for nums2

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Precompute with monotonic stack, then look up — two-phase approach
- Same monotonic stack as #739 but stores value→next_greater in a map
- Precomputing for all of nums2 is faster than searching for each nums1 element
- The monotonic stack pattern is versatile — same core, different outputs
