# 283. Move Zeroes

**Difficulty:** Easy  
**Topics:** Array, Two Pointers  
**Link:** [LeetCode Problem](https://leetcode.com/problems/move-zeroes/)

## Problem Description

Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Note** that you must do this in-place without making a copy of the array.

### Examples

**Example 1:**
```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

**Example 2:**
```
Input: nums = [0]
Output: [0]
```

### Constraints

- `1 <= nums.length <= 10^4`
- `-2^31 <= nums[i] <= 2^31 - 1`

**Follow up:** Could you minimize the total number of operations done?

## Understanding In-Place

**In-place** means modifying the array directly without creating a new array.

**Example:**
```javascript
// NOT in-place (creates new array)
function bad(nums) {
    const result = [];
    return result;
}

// In-place (modifies original array)
function good(nums) {
    nums[0] = 5;  // Modifies directly
}
```

**Why in-place?**
- Saves memory (O(1) space instead of O(n))
- More efficient
- Common requirement in interviews

## Approach

### Two Pointers: Move Non-Zeros Forward

Instead of moving zeros backward (slow), move non-zeros forward (fast)!

**Key insight:** 
- Moving zeros to the back requires shifting everything → O(n²)
- Moving non-zeros to the front is much simpler → O(n)

**Algorithm:**

1. **Use a pointer `leftPointer`** to track where to place the next non-zero number
2. **Loop through array** with index `i`
3. **When you find a non-zero:**
   - Place it at position `leftPointer`
   - Increment `leftPointer`
4. **After processing all elements:**
   - Fill remaining positions (from `leftPointer` to end) with zeros

**Example Walkthrough for [0,1,0,3,12]:**
```
Initial state:
nums = [0, 1, 0, 3, 12]
leftPointer = 0

---

Iteration 1: i = 0
nums[0] = 0 → It's zero, skip
leftPointer stays at 0

nums = [0, 1, 0, 3, 12]
        ↑
   leftPointer

---

Iteration 2: i = 1
nums[1] = 1 → Non-zero!
Place at leftPointer: nums[0] = 1
leftPointer++

nums = [1, 1, 0, 3, 12]
           ↑
      leftPointer = 1

---

Iteration 3: i = 2
nums[2] = 0 → It's zero, skip
leftPointer stays at 1

nums = [1, 1, 0, 3, 12]
           ↑
      leftPointer

---

Iteration 4: i = 3
nums[3] = 3 → Non-zero!
Place at leftPointer: nums[1] = 3
leftPointer++

nums = [1, 3, 0, 3, 12]
              ↑
         leftPointer = 2

---

Iteration 5: i = 4
nums[4] = 12 → Non-zero!
Place at leftPointer: nums[2] = 12
leftPointer++

nums = [1, 3, 12, 3, 12]
                 ↑
            leftPointer = 3

---

Fill remaining with zeros:
From leftPointer (3) to end (4):

nums[3] = 0
nums[4] = 0

nums = [1, 3, 12, 0, 0] ✓
```

**Visual of the process:**
```
Original: [0, 1, 0, 3, 12]
           ↑
      leftPointer

After moving non-zeros: [1, 3, 12, 3, 12]
                                ↑
                           leftPointer

After filling zeros: [1, 3, 12, 0, 0]
                               ← ←
                            Fill these
```

### Why This Works

**Two phases:**
1. **Phase 1:** Move all non-zeros to the front in order
   - leftPointer tracks next position
   - Only advances when we place a non-zero
2. **Phase 2:** Fill remaining positions with zeros
   - Everything from leftPointer to end becomes 0

**Maintains order:**
- We process left to right
- Non-zeros are placed in the order we find them
- Example: 1 comes before 3, which comes before 12

### Alternative: Single Pass with Swap

There's an even more optimized version using swaps (fewer writes):
```
leftPointer = 0

For i from 0 to end:
    If nums[i] != 0:
        Swap nums[leftPointer] with nums[i]
        leftPointer++
```

This works because:
- When i = leftPointer, we swap element with itself (no change)
- When i > leftPointer, we swap non-zero forward and zero backward
- Achieves same result in one pass!

**Time Complexity:** O(n) - Single pass through array  
**Space Complexity:** O(1) - Only use a pointer variable

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- In-place operations modify the original array without extra space
- Moving non-zeros forward is simpler than moving zeros backward
- Two pointers: one for placement position, one for scanning
- Can be done in two passes (move non-zeros, fill zeros) or one pass (swap)
- Always maintain relative order of non-zero elements
- This pattern (moving elements to one end) appears in many problems
- Time: O(n), Space: O(1) is optimal for this problem