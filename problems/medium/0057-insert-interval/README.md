# 57. Insert Interval

**Difficulty:** Medium  
**Topics:** Array, Intervals  
**Link:** [LeetCode Problem](https://leetcode.com/problems/insert-interval/)

## Problem Description

You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [starti, endi]` is sorted in ascending order by `starti`. You are also given an interval `newInterval = [start, end]`.

Insert `newInterval` into `intervals` such that `intervals` is still sorted and non-overlapping. Merge overlapping intervals if necessary.

Return `intervals` after the insertion.

### Examples

**Example 1:**

    Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
    Output: [[1,5],[6,9]]

**Example 2:**

    Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
    Output: [[1,2],[3,10],[12,16]]

**Example 3:**

    Input: intervals = [], newInterval = [5,7]
    Output: [[5,7]]

### Constraints

- `0 <= intervals.length <= 10^4`
- `intervals[i].length == 2`
- `0 <= starti <= endi <= 10^5`
- `intervals` is sorted by `starti` in ascending order
- `newInterval.length == 2`
- `0 <= start <= end <= 10^5`

## Approach

### Three-Phase Linear Scan

Walk through the intervals in three phases: add everything before the new interval, merge everything that overlaps, then add everything after.

**Key Insight:** Since intervals are already sorted and non-overlapping, we can process them in one pass. Two intervals overlap when one starts before the other ends. The three phases cleanly separate the logic.

**How to detect overlap:**
- Interval ends before new starts → no overlap (before)
- Interval starts after new ends → no overlap (after)
- Everything else → overlaps, merge!

**Algorithm:**
1. **Phase 1 — Before:** While current interval ends before new interval starts, add to result
2. **Phase 2 — Merge:** While current interval overlaps with new interval:
   - Extend new interval: `start = min(start, interval start)`, `end = max(end, interval end)`
3. Add the merged new interval to result
4. **Phase 3 — After:** Add all remaining intervals

**Walkthrough:**

    intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]

    Phase 1 — Before (interval end < new start 4):
      [1,2]: end 2 < 4 → add → result: [[1,2]]

    Phase 2 — Overlapping (interval start ≤ new end):
      [3,5]: start 3 ≤ 8 → merge: new = [min(4,3), max(8,5)] = [3,8]
      [6,7]: start 6 ≤ 8 → merge: new = [min(3,6), max(8,7)] = [3,8]
      [8,10]: start 8 ≤ 8 → merge: new = [min(3,8), max(8,10)] = [3,10]
    Add merged [3,10] → result: [[1,2],[3,10]]

    Phase 3 — After:
      [12,16]: add → result: [[1,2],[3,10],[12,16]]

    Return [[1,2],[3,10],[12,16]] ✓

    intervals = [[1,3],[6,9]], newInterval = [2,5]

    Phase 1 — Before:
      [1,3]: end 3 < 2? No → stop

    Phase 2 — Overlapping:
      [1,3]: start 1 ≤ 5 → merge: new = [min(2,1), max(5,3)] = [1,5]
      [6,9]: start 6 ≤ 5? No → stop
    Add [1,5] → result: [[1,5]]

    Phase 3 — After:
      [6,9]: add → result: [[1,5],[6,9]]

    Return [[1,5],[6,9]] ✓

**Comparison with Merge Intervals (#56):**
- #56: Sort unsorted intervals, then merge all overlapping
- #57: Already sorted, just insert one and merge where needed
- Both use the same overlap detection: start ≤ end

**Time Complexity:** O(n) — single pass through the intervals  
**Space Complexity:** O(n) — result array

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Three-phase approach (before, merge, after) cleanly separates the logic
- Overlap detection: interval start ≤ new end AND interval end ≥ new start
- Merging uses min of starts and max of ends
- Already sorted input means no sorting needed — just linear scan
- Builds directly on Merge Intervals (#56)