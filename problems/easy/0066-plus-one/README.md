# 66. Plus One

**Difficulty:** Easy  
**Topics:** Array, Math  
**Link:** [LeetCode Problem](https://leetcode.com/problems/plus-one/)

## Problem Description

You are given a **large integer** represented as an integer array `digits`, where each `digits[i]` is the `i-th` digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading `0`'s.

Increment the large integer by one and return the resulting array of digits.

### Examples

**Example 1:**
```
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
```

**Example 2:**
```
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
```

**Example 3:**
```
Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
```

### Constraints

- `1 <= digits.length <= 100`
- `0 <= digits[i] <= 9`
- `digits` does not contain any leading zeros.

## Understanding the Problem

We're adding 1 to a number represented as an array of digits.

**Key insight:** We only add to the **rightmost** digit (the ones place).

**Examples:**
```
123 + 1 = 124
[1,2,3] → [1,2,4]

4321 + 1 = 4322
[4,3,2,1] → [4,3,2,2]
```

**The challenge:** Handling carry when digits are 9.
```
9 + 1 = 10 (need to carry the 1!)

129 + 1 = 130
[1,2,9] → [1,3,0]

999 + 1 = 1000
[9,9,9] → [1,0,0,0] (array grows!)
```

## Approach

### Carry Propagation from Right to Left

Process digits from right to left (like adding by hand), handling carries as needed.

**Key cases:**

1. **No carry needed:** If last digit < 9
```
   [1,2,3] → Add 1 to last digit → [1,2,4] ✓
```

2. **Carry needed:** If digit = 9
```
   [1,2,9] → 9 becomes 0, carry to next → [1,3,0] ✓
```

3. **All 9s:** Special case - array grows
```
   [9,9,9] → All become 0, need new digit → [1,0,0,0] ✓
```

**Algorithm:**

1. Loop from right to left (end to beginning):
   - Add 1 to current digit
   - If result < 10: Update digit and return (done!)
   - If result = 10: Set digit to 0 and continue (carry)

2. If loop completes without returning:
   - All digits were 9
   - Create new array with 1 at front, followed by all 0s

**Step-by-Step for [1,2,9]:**
```
Initial: [1,2,9]

i = 2 (last index):
  digits[2] = 9
  9 + 1 = 10 (need carry!)
  Set digits[2] = 0
  Continue to next digit
  
  Array now: [1,2,0]

i = 1:
  digits[1] = 2
  2 + 1 = 3 (no carry needed!)
  Set digits[1] = 3
  Return [1,3,0] ✓
```

**Step-by-Step for [9,9,9]:**
```
Initial: [9,9,9]

i = 2:
  9 + 1 = 10 → Set to 0, continue
  Array: [9,9,0]

i = 1:
  9 + 1 = 10 → Set to 0, continue
  Array: [9,0,0]

i = 0:
  9 + 1 = 10 → Set to 0, continue
  Array: [0,0,0]

Loop finished without returning!
All digits were 9.
Create new array: [1,0,0,0] ✓
```

**Why this works:**

**Early return optimization:**
- Most numbers don't end in 9
- Stop as soon as there's no carry
- Example: `[1,2,3]` only processes one digit

**Carry propagation:**
```
[1,9,9] + 1

Process from right:
9 → 0 (carry 1)
9 → 0 (carry 1)
1 → 2 (no carry, done!)

Result: [2,0,0]
```

**All 9s case:**
```
[9,9,9] + 1

All digits become 0: [0,0,0]
Loop exits without returning
Create [1,0,0,0]

This represents: 999 + 1 = 1000 ✓
```

**Time Complexity:** O(n) - In worst case (all 9s), visit all digits  
**Space Complexity:** O(1) - Modify in-place, except all-9s case needs O(n)

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Process digits from right to left (like adding by hand)
- Early return when no carry needed (optimization)
- Set digit to 0 when it's 9 and continue for carry
- Only when ALL digits are 9 do we need to grow the array
- Similar to "Add Two Numbers" but simpler (only adding 1)
- In-place modification is efficient for most cases
- The all-9s case is the only one requiring new array