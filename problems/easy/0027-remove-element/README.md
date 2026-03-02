# 27. Remove Element

**Difficulty:** Easy  
**Topics:** Array, Two Pointers  
**Link:** [LeetCode Problem](https://leetcode.com/problems/remove-element/)

## Problem Description

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in-place. The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.

Only the first `k` elements of `nums` matter after modification, where `k` is the return value.

### Examples

**Example 1:**
```
Input: nums = [3, 2, 2, 3], val = 3
Output: 2, nums = [2, 2, _, _]
Explanation: Return 2. First two elements are 2.
```

**Example 2:**
```
Input: nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2
Output: 5, nums = [0, 1, 3, 0, 4, _, _, _]
Explanation: Return 5. First five elements contain 0, 1, 3, 0, and 4.
```

### Constraints

- `0 <= nums.length <= 100`
- `0 <= nums[i] <= 50`
- `0 <= val <= 100`

## Approach

### Two Pointer — Overwrite

Use a write pointer `k` that tracks where to place the next non-val element. Scan through the array and copy non-val elements to the front.

**Key Insight:** We don't need to actually "remove" anything. Just overwrite from the front with values we want to keep. The write pointer `k` tells us both where to write next AND how many elements we've kept.

**Algorithm:**
1. Initialize write pointer `k = 0`
2. Loop through each element:
   - If the element is NOT equal to `val`, copy it to `nums[k]` and increment `k`
   - If it equals `val`, skip it
3. Return `k`

**Walkthrough:**
```
nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2
        i                          k = 0

i=0: 0 != 2 → nums[0] = 0, k = 1
i=1: 1 != 2 → nums[1] = 1, k = 2
i=2: 2 == 2 → skip
i=3: 2 == 2 → skip
i=4: 3 != 2 → nums[2] = 3, k = 3
i=5: 0 != 2 → nums[3] = 0, k = 4
i=6: 4 != 2 → nums[4] = 4, k = 5
i=7: 2 == 2 → skip

nums = [0, 1, 3, 0, 4, 0, 4, 2]
        ←─── k = 5 ───→
Return 5 ✓
```

**Comparison with Remove Duplicates (#26):**
- #26: Skip if same as previous (keeping unique values)
- #27: Skip if equal to val (removing a specific value)
- Both use the same write pointer pattern

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(1) - In-place modification

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- The "write pointer" pattern is ideal for in-place array modifications
- Don't think of it as removing — think of it as copying what you want to keep
- The write pointer `k` serves double duty: write position AND count of kept elements
- Same pattern as Remove Duplicates (#26) with a different skip condition