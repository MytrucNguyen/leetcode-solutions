# 238. Product of Array Except Self

**Difficulty:** Medium  
**Topics:** Array, Prefix Sum  
**Link:** [LeetCode Problem](https://leetcode.com/problems/product-of-array-except-self/)

## Problem Description

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.

You must write an algorithm that runs in **O(n)** time and without using the division operation.

### Examples

**Example 1:**
```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Explanation:
answer[0] = 2*3*4 = 24
answer[1] = 1*3*4 = 12
answer[2] = 1*2*4 = 8
answer[3] = 1*2*3 = 6
```

**Example 2:**
```
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```

### Constraints

- `2 <= nums.length <= 10^5`
- `-30 <= nums[i] <= 30`
- The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.

**Follow up:** Can you solve the problem in **O(1)** extra space complexity? (The output array **does not** count as extra space for space complexity analysis.)

## Understanding the Problem

We need the product of all elements **except** the current one at each position.

**Naive approach (Brute Force):**
```typescript
for each index i:
    multiply all elements except nums[i]
```
Time: O(n²) - Too slow!

**Division approach:**
```
Total product = multiply all numbers
answer[i] = total / nums[i]
```
Problems:
- Division by zero if any element is 0
- Problem explicitly says "without using division"

## Approach

### Left and Right Products (Prefix/Suffix)

The key insight: For each position, we need:
- **Left product** = Product of all elements to the LEFT
- **Right product** = Product of all elements to the RIGHT
- **Answer** = Left × Right

**Example: `[1, 2, 3, 4]`**
```
Index:     0    1    2    3
Value:     1    2    3    4

Left products (everything to the left):
Index 0:   1        (nothing to left)
Index 1:   1        (1)
Index 2:   1*2 = 2  (1*2)
Index 3:   1*2*3 = 6 (1*2*3)

Right products (everything to the right):
Index 0:   2*3*4 = 24 (2*3*4)
Index 1:   3*4 = 12   (3*4)
Index 2:   4          (4)
Index 3:   1          (nothing to right)

Answer = Left * Right:
Index 0:   1 * 24 = 24 ✓
Index 1:   1 * 12 = 12 ✓
Index 2:   2 * 4 = 8 ✓
Index 3:   6 * 1 = 6 ✓
```

**Visual for Index 2:**
```
nums = [1, 2, 3, 4]
              ↑
           Index 2

Left:  [1, 2] → product = 2
Right: [4]    → product = 4
Answer: 2 * 4 = 8 ✓
```

### Algorithm

**Approach 1: Using Two Arrays (Easier to understand)**

1. Create `left` array where `left[i]` = product of all elements to the left of `i`
2. Create `right` array where `right[i]` = product of all elements to the right of `i`
3. Calculate `answer[i] = left[i] * right[i]`

**Step-by-step for `[1, 2, 3, 4]`:**
```
Step 1: Build left array
left[0] = 1           (nothing to left)
left[1] = left[0] * nums[0] = 1 * 1 = 1
left[2] = left[1] * nums[1] = 1 * 2 = 2
left[3] = left[2] * nums[2] = 2 * 3 = 6

left = [1, 1, 2, 6]

Step 2: Build right array (go backwards)
right[3] = 1           (nothing to right)
right[2] = right[3] * nums[3] = 1 * 4 = 4
right[1] = right[2] * nums[2] = 4 * 3 = 12
right[0] = right[1] * nums[1] = 12 * 2 = 24

right = [24, 12, 4, 1]

Step 3: Multiply left and right
answer[0] = left[0] * right[0] = 1 * 24 = 24
answer[1] = left[1] * right[1] = 1 * 12 = 12
answer[2] = left[2] * right[2] = 2 * 4 = 8
answer[3] = left[3] * right[3] = 6 * 1 = 6

answer = [24, 12, 8, 6] ✓
```

**Approach 2: Using One Array (Space Optimized)**

Instead of creating both `left` and `right` arrays, we can:
1. Build left products directly in the `answer` array
2. Build right products on the fly and multiply with `answer`

This achieves O(1) extra space (not counting output array).

### Handling Zeros

This approach naturally handles zeros!
```
nums = [-1, 1, 0, -3, 3]

For index 2 (the zero):
Left = -1 * 1 = -1  (everything before 0)
Right = -3 * 3 = -9  (everything after 0)
Answer = -1 * -9 = 9 ✓

For index 0:
Left = 1
Right = 1 * 0 * -3 * 3 = 0  (includes the zero)
Answer = 1 * 0 = 0 ✓
```

The zero naturally propagates to all positions except its own!

**Time Complexity:** O(n) - Three passes through array (left, right, multiply)  
**Space Complexity:** O(n) for two arrays approach, O(1) for optimized approach (output array doesn't count)

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Prefix/suffix (left/right) product pattern is powerful for array problems
- Think about what information you need "before" and "after" each position
- Building cumulative products avoids nested loops
- This pattern naturally handles edge cases like zeros
- Space optimization: Build results directly in output array
- No division needed - multiplication in two directions achieves the same goal