# 228. Summary Ranges

**Difficulty:** Easy  
**Topics:** Array  
**Link:** [LeetCode Problem](https://leetcode.com/problems/summary-ranges/)

## Problem Description

You are given a **sorted unique** integer array `nums`. A range `[a,b]` is the set of all integers from `a` to `b` (inclusive).

Return the **smallest sorted** list of ranges that **cover all the numbers in the array exactly**. Each element is covered by exactly one range, and there is no integer in a range that is not in `nums`.

Each range `[a,b]` in the list should be output as:
- `"a->b"` if `a != b`
- `"a"` if `a == b`

### Examples

**Example 1:**
```
Input: nums = [0, 1, 2, 4, 5, 7]
Output: ["0->2", "4->5", "7"]
Explanation: 0,1,2 form a range. 4,5 form a range. 7 is alone.
```

**Example 2:**
```
Input: nums = [0, 2, 3, 4, 6, 8, 9]
Output: ["0", "2->4", "6", "8->9"]
```

### Constraints

- `0 <= nums.length <= 20`
- `-2^31 <= nums[i] <= 2^31 - 1`
- All values are unique
- `nums` is sorted in ascending order

## Approach

### Track Range Start

Walk through the array tracking where each range starts. When the next number isn't consecutive, close the current range and start a new one.

**Key Insight:** Since the array is sorted and unique, a range breaks when `nums[i+1] !== nums[i] + 1`. Track the start of each range and when it breaks, format the range as either `"a->b"` or `"a"`.

**Algorithm:**
1. Initialize a pointer `start` at index 0
2. Walk through the array:
   - If the next number isn't consecutive (or we've reached the end), close the range
   - If `start === current` → push `"a"` (single number)
   - If `start !== current` → push `"a->b"` (range)
   - Move `start` to the next number
3. Return the result

**Walkthrough:**
```
nums = [0, 1, 2, 4, 5, 7]

start = 0 (value 0)
i=0: next is 1 = 0+1 → continue
i=1: next is 2 = 1+1 → continue
i=2: next is 4 ≠ 2+1 → close range "0->2"
start = 3 (value 4)
i=3: next is 5 = 4+1 → continue
i=4: next is 7 ≠ 5+1 → close range "4->5"
start = 5 (value 7)
i=5: end of array → close range "7"

Result: ["0->2", "4->5", "7"] ✓
```
```
nums = [0, 2, 3, 4, 6, 8, 9]

start = 0 (value 0)
i=0: next is 2 ≠ 0+1 → close range "0"
start = 1 (value 2)
i=1: next is 3 = 2+1 → continue
i=2: next is 4 = 3+1 → continue
i=3: next is 6 ≠ 4+1 → close range "2->4"
start = 4 (value 6)
i=4: next is 8 ≠ 6+1 → close range "6"
start = 5 (value 8)
i=5: next is 9 = 8+1 → continue
i=6: end of array → close range "8->9"

Result: ["0", "2->4", "6", "8->9"] ✓
```

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(1) - Only tracking the start pointer (output doesn't count)

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Tracking range start and closing when consecutive breaks is a clean pattern
- Formatting the output differently for single numbers vs ranges is a common requirement
- This builds on the same "streak tracking" concept from #674 and #485
- The sorted and unique constraints make this much simpler — no duplicates or ordering to handle