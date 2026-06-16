# 435. Non-overlapping Intervals

**Difficulty:** Medium  
**Topics:** Array, Dynamic Programming, Greedy, Sorting  
**Link:** [LeetCode Problem](https://leetcode.com/problems/non-overlapping-intervals/)

## Problem Description

Given an array of intervals `intervals` where `intervals[i] = [starti, endi]`, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

### Examples

**Example 1:**

    Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
    Output: 1
    Explanation: [1,3] can be removed to make the rest non-overlapping.

**Example 2:**

    Input: intervals = [[1,2],[1,2],[1,2]]
    Output: 2
    Explanation: Remove two [1,2] to leave one.

**Example 3:**

    Input: intervals = [[1,2],[2,3]]
    Output: 0
    Explanation: Already non-overlapping (touching endpoints are ok).

### Constraints

- `1 <= intervals.length <= 10^5`
- `intervals[i].length == 2`
- `-5 * 10^4 <= starti < endi <= 5 * 10^4`

## Approach

### Greedy — Sort by End Time, Keep Non-overlapping

Sort intervals by end time. Greedily keep each interval that doesn't overlap with the last kept one. Count the rest as removals.

**Key Insight:** Sorting by end time is the key. An interval that ends earlier leaves more room for future intervals. This is the classic "activity selection" problem — always pick the activity that finishes first.

**Why sort by end, not start?**

    [[1,10], [2,3], [4,5]]

    Sort by start: keep [1,10] → overlaps with both → remove 2
    Sort by end: keep [2,3], keep [4,5] → remove only [1,10] → remove 1 ✓

Sorting by end picks the shortest intervals, leaving maximum room.

**Algorithm:**

1. Sort intervals by end time
2. Track `prevEnd` = end of last kept interval (start with first interval's end)
3. For each remaining interval:
    - If `start >= prevEnd` → no overlap, keep it, update `prevEnd`
    - Else → overlaps, count as removal
4. Return removal count

**Walkthrough:**

    intervals = [[1,2],[2,3],[3,4],[1,3]]
    Sort by end: [[1,2],[2,3],[1,3],[3,4]]

    Keep [1,2]: prevEnd = 2, removals = 0
    [2,3]: start 2 >= prevEnd 2 → keep. prevEnd = 3, removals = 0
    [1,3]: start 1 < prevEnd 3 → overlap! removals = 1
    [3,4]: start 3 >= prevEnd 3 → keep. prevEnd = 4, removals = 1

    Return 1 ✓

    intervals = [[1,2],[1,2],[1,2]]
    Sort by end: [[1,2],[1,2],[1,2]]

    Keep [1,2]: prevEnd = 2, removals = 0
    [1,2]: start 1 < prevEnd 2 → overlap! removals = 1
    [1,2]: start 1 < prevEnd 2 → overlap! removals = 2

    Return 2 ✓

**Comparison with other interval problems:**

- Merge Intervals (#56): Sort by start, merge overlapping
- Insert Interval (#57): Insert and merge in sorted list
- Non-overlapping Intervals (#435): Sort by end, greedily keep non-overlapping

**Time Complexity:** O(n log n) — sorting  
**Space Complexity:** O(1) — only tracking prevEnd and count (O(log n) for sort)

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Sort by END time, not start — earlier ending leaves more room
- This is the classic "activity selection" greedy algorithm
- Touching endpoints (start === prevEnd) are NOT overlapping
- Completes the intervals trilogy: merge, insert, and now remove
- Greedy works because locally optimal choice (earliest end) gives globally optimal result
