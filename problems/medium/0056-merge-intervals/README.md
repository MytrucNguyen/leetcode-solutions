# 56. Merge Intervals

**Difficulty:** Medium  
**Topics:** Array, Sorting  
**Link:** [LeetCode Problem](https://leetcode.com/problems/merge-intervals/)

## Problem Description

Given an array of `intervals` where `intervals[i] = [start_i, end_i]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

### Examples

**Example 1:**
```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
```

**Example 2:**
```
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```

### Constraints

- `1 <= intervals.length <= 10^4`
- `intervals[i].length == 2`
- `0 <= start_i <= end_i <= 10^4`

## Understanding Overlapping Intervals

Two intervals overlap if one starts before the other ends.

**Examples:**
```
[1, 3] and [2, 6]  → OVERLAP (2 <= 3)
[1, 3] and [5, 7]  → NO OVERLAP (5 > 3)
[1, 4] and [4, 5]  → OVERLAP (4 <= 4, touching counts!)
```

**Visual:**
```
[1, 3]
    [2, 6]
Overlap! → Merge to [1, 6]

[1, 3]
          [5, 7]
No overlap → Keep both
```

## Approach

### Sort and Merge

The key insight: If we sort intervals by start time, we only need to check if the current interval overlaps with the previous one.

**Algorithm:**

1. **Sort intervals by start time**
   - After sorting, we process left to right
   - Earlier intervals come first

2. **Iterate through sorted intervals:**
   - If current interval overlaps with the last merged interval:
     - Merge them by extending the end time
   - Otherwise:
     - Add current interval as a new non-overlapping interval

3. **Return the merged intervals**

**How to check overlap (after sorting):**
```
Last merged interval: [a, b]
Current interval: [c, d]

Overlap if: c <= b
(Current start is before or at last end)
```

**How to merge:**
```
Merged = [a, max(b, d)]
(Keep original start, extend to furthest end)
```

**Example Walkthrough for `[[1,3],[2,6],[8,10],[15,18]]`:**

Already sorted by start time.
```
Step 1: Start with first interval
merged = [[1, 3]]

Step 2: Process [2, 6]
Current start (2) <= Last end (3)? YES → Overlap!
Merge: [1, max(3, 6)] = [1, 6]
merged = [[1, 6]]

Step 3: Process [8, 10]
Current start (8) <= Last end (6)? NO → No overlap
Add as new interval
merged = [[1, 6], [8, 10]]

Step 4: Process [15, 18]
Current start (15) <= Last end (10)? NO → No overlap
Add as new interval
merged = [[1, 6], [8, 10], [15, 18]]

Return: [[1, 6], [8, 10], [15, 18]]
```

**Another Example: `[[1,4],[4,5]]`**
```
Step 1: Start with [1, 4]
merged = [[1, 4]]

Step 2: Process [4, 5]
Current start (4) <= Last end (4)? YES → Overlap!
Merge: [1, max(4, 5)] = [1, 5]
merged = [[1, 5]]

Return: [[1, 5]]
```

**Edge Cases:**
- Single interval: Return as-is
- No overlaps: Return sorted intervals
- All intervals overlap: Return single merged interval
- Intervals in reverse order: Sorting handles it

**Time Complexity:** O(n log n) - Dominated by sorting  
**Space Complexity:** O(n) - For the result array (or O(log n) if sorting in-place)

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Sorting simplifies interval problems - process left to right
- After sorting, only need to compare with the last merged interval
- Overlapping condition: `currentStart <= lastEnd`
- Merging: Keep original start, extend to `max(lastEnd, currentEnd)`
- Edge touching counts as overlapping (e.g., [1,4] and [4,5])
- This pattern applies to many interval/range problems