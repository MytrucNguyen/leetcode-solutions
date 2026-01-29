# 88. Merge Sorted Array

**Difficulty:** Easy  
**Topics:** Array, Two Pointers, Sorting  
**Link:** [LeetCode Problem](https://leetcode.com/problems/merge-sorted-array/)

## Problem Description

You are given two integer arrays `nums1` and `nums2`, sorted in **non-decreasing order**, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

**Merge** `nums2` into `nums1` as one sorted array.

The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.

### Examples

**Example 1:**
```
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6].
```

**Example 2:**
```
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
```

**Example 3:**
```
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
```

### Constraints

- `nums1.length == m + n`
- `nums2.length == n`
- `0 <= m, n <= 200`
- `1 <= m + n <= 200`
- `-10^9 <= nums1[i], nums2[j] <= 10^9`

**Follow up:** Can you come up with an algorithm that runs in O(m + n) time?

## Understanding the Problem

We need to merge two sorted arrays **in-place** into nums1.

**Key insight:** nums1 has extra space at the end!
```
nums1 = [1,2,3,0,0,0]
         ↑↑↑ ^^^^^^
      m=3 real  empty space (n=3)

nums2 = [2,5,6]
         ↑↑↑
        n=3

Goal: [1,2,2,3,5,6]
```

**The challenge:** How to merge without overwriting elements?

## Why NOT Merge Left to Right?

**Naive approach:** Start from the beginning
```
nums1 = [1,2,3,0,0,0]
nums2 = [2,5,6]

Try to insert 2:
  Should go between index 1 and 2
  Need to shift 3 to the right!
  nums1 = [1,2,2,3,0,0]
  
Problem: Shifting elements is expensive!
Time: O(n) per insertion → O(n²) total
```

**Why shifting is bad:**
- Every insertion requires moving elements
- Can overwrite data we haven't processed yet
- Inefficient!

## Approach

### Work Backwards - Three Pointers

**Key insight:** The end of nums1 is EMPTY - we can fill it without conflicts!
```
nums1 = [1,2,3,_,_,_]
              ↑     ↑
            last   fill
            real   here!
            (m-1)  (m+n-1)
```

**Algorithm:**

Use three pointers:
- `p1` = Last real element in nums1 (index m-1)
- `p2` = Last element in nums2 (index n-1)
- `p` = Current position to fill (index m+n-1)

**Steps:**

1. Start at the end of both arrays
2. While both arrays have elements:
   - Compare nums1[p1] with nums2[p2]
   - Place the LARGER one at nums1[p]
   - Move the corresponding pointer left
   - Move p left
3. If nums2 has remaining elements, copy them

**Why this works:**
- We fill from right to left
- The empty space is at the right
- No shifting needed!
- No overwriting unprocessed elements!

### Step-by-Step for [1,2,3,0,0,0] and [2,5,6]
```
Initial state:
nums1 = [1,2,3,0,0,0]
           p1=2    p=5
nums2 = [2,5,6]
           p2=2

---

Iteration 1:
  Compare nums1[2]=3 with nums2[2]=6
  6 > 3
  Place 6 at position 5
  nums1 = [1,2,3,0,0,6]
  p2--, p--
  
  p1=2, p2=1, p=4

---

Iteration 2:
  Compare nums1[2]=3 with nums2[1]=5
  5 > 3
  Place 5 at position 4
  nums1 = [1,2,3,0,5,6]
  p2--, p--
  
  p1=2, p2=0, p=3

---

Iteration 3:
  Compare nums1[2]=3 with nums2[0]=2
  3 > 2
  Place 3 at position 3
  nums1 = [1,2,3,3,5,6]
  p1--, p--
  
  p1=1, p2=0, p=2

---

Iteration 4:
  Compare nums1[1]=2 with nums2[0]=2
  Equal! (Place either, let's use nums2)
  Place 2 at position 2
  nums1 = [1,2,2,3,5,6]
  p2--, p--
  
  p1=1, p2=-1, p=1

---

p2 < 0, nums2 is exhausted!
Remaining elements in nums1 are already in place.

Final: [1,2,2,3,5,6] ✓
```

### Why Copy Remaining nums2 Elements?

**Important case:** What if nums2 has leftover elements?
```
nums1 = [4,5,6,0,0,0], m=3
nums2 = [1,2,3], n=3

After comparing:
  All nums2 elements are smaller!
  They haven't been placed yet.
  
We need to copy remaining nums2 elements to the front.
```

**But if nums1 has leftovers:**
```
They're already in the correct position!
No need to copy.
```

### Visual Comparison

**Merging forward (bad):**
```
[1,2,3,0,0,0] + [2,5,6]
 ↑
Start here
- Need to shift when inserting
- Overwrites unprocessed data
- Complex and slow
```

**Merging backward (good):**
```
[1,2,3,0,0,0] + [2,5,6]
           ↑
Start here (empty space!)
- Fill empty space first
- No shifting needed
- Clean and fast
```

### Edge Cases

**Empty nums2:**
```
nums1 = [1,2,3], m=3
nums2 = [], n=0

Nothing to merge, nums1 already correct!
```

**Empty nums1:**
```
nums1 = [0,0,0], m=0
nums2 = [1,2,3], n=3

Copy all of nums2 to nums1
Result: [1,2,3]
```

**All nums2 elements smaller:**
```
nums1 = [4,5,6,0,0,0], m=3
nums2 = [1,2,3], n=3

After backward merge:
- 6,5,4 placed first
- Copy remaining [1,2,3] to front
Result: [1,2,3,4,5,6]
```

**Time Complexity:** O(m + n) - Visit each element once  
**Space Complexity:** O(1) - In-place, only use pointers

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Working backwards avoids shifting elements
- Use three pointers: two for reading, one for writing
- Fill from right to left into the empty space
- Always place the LARGER element (since we're going backwards)
- Only need to copy remaining nums2 elements (nums1 elements are already in place)
- In-place merge is possible with the right approach
- This pattern (working backwards to avoid overwrites) appears in many problems
- Counter-intuitive but elegant: sometimes backwards is better than forwards!