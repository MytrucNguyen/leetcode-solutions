# 69. Sqrt(x)

**Difficulty:** Easy  
**Topics:** Math, Binary Search  
**Link:** [LeetCode Problem](https://leetcode.com/problems/sqrtx/)

## Problem Description

Given a non-negative integer `x`, return the square root of `x` rounded down to the nearest integer. The returned integer should be **non-negative** as well.

You **must not use** any built-in exponent function or operator.

- For example, do not use `pow(x, 0.5)` in C++ or `x ** 0.5` in Python.

### Examples

**Example 1:**
```
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
```

**Example 2:**
```
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
```

### Constraints

- `0 <= x <= 2^31 - 1`

## Understanding the Problem

We need to find the integer square root (rounded down).

**Examples:**
```
sqrt(4) = 2 exactly
sqrt(8) = 2.828... → Round down to 2
sqrt(16) = 4 exactly
sqrt(17) = 4.123... → Round down to 4
```

**Key insight:** We're looking for the largest integer `n` where `n * n <= x`
```
For x = 8:
1 * 1 = 1 ≤ 8 ✓
2 * 2 = 4 ≤ 8 ✓
3 * 3 = 9 > 8 ✗

Answer: 2 (largest n where n² ≤ x)
```

## Understanding Binary Search

**Binary Search** is a "divide and conquer" algorithm that eliminates half the search space in each step.

**How it works:**
1. Start with a range [left, right]
2. Check the middle value
3. Based on the result, eliminate either the left half or right half
4. Repeat until you find the answer

**Analogy:** Guessing a number between 1-100
```
Guess 50 → "Too high!"
Now search 1-49

Guess 25 → "Too low!"
Now search 26-49

Guess 37 → "Too high!"
Now search 26-36

...continue halving the range
```

**Why is this fast?**
- Linear search: Check every number → O(n)
- Binary search: Cut in half each time → O(log n)

**Example for x = 100:**
```
Linear: Check 0, 1, 2, 3... up to 10 (11 checks)
Binary: Check 50 (too high), 25 (too high), 12 (too high), 6 (too low), 9 (too low), 10 (perfect!) (6 checks)
```

## Approach

### Binary Search for Square Root

Search the range [0, x] for the largest integer whose square is ≤ x.

**Algorithm:**

1. **Handle edge cases:**
   - If x = 0 or x = 1, return x

2. **Set up binary search:**
   - left = 0
   - right = x
   - result = 0

3. **While left ≤ right:**
   - Calculate mid = left + Math.floor((right - left) / 2)
   - Calculate mid * mid
   - If mid * mid = x:
     - Found exact square root, return mid
   - If mid * mid < x:
     - mid could be the answer, save it
     - Search right half (left = mid + 1)
   - If mid * mid > x:
     - mid is too large
     - Search left half (right = mid - 1)

4. **Return result**

**Step-by-Step for x = 8:**
```
Initial: left = 0, right = 8, result = 0

Iteration 1:
  mid = 0 + Math.floor((8 - 0) / 2) = 4
  4 * 4 = 16
  Is 16 > 8? YES (too large)
  Search left half: right = 3
  
  Range now: [0, 3]

Iteration 2:
  mid = 0 + Math.floor((3 - 0) / 2) = 1
  1 * 1 = 1
  Is 1 < 8? YES (could be answer)
  Save: result = 1
  Search right half: left = 2
  
  Range now: [2, 3]

Iteration 3:
  mid = 2 + Math.floor((3 - 2) / 2) = 2
  2 * 2 = 4
  Is 4 < 8? YES (could be answer)
  Save: result = 2
  Search right half: left = 3
  
  Range now: [3, 3]

Iteration 4:
  mid = 3 + Math.floor((3 - 3) / 2) = 3
  3 * 3 = 9
  Is 9 > 8? YES (too large)
  Search left half: right = 2
  
  Range now: [3, 2]

left > right, exit loop!

Return result = 2 ✓
```

**Step-by-Step for x = 16:**
```
Initial: left = 0, right = 16

Iteration 1:
  mid = 8
  8 * 8 = 64 > 16
  right = 7

Iteration 2:
  mid = 3
  3 * 3 = 9 < 16
  result = 3
  left = 4

Iteration 3:
  mid = 5
  5 * 5 = 25 > 16
  right = 4

Iteration 4:
  mid = 4
  4 * 4 = 16 = 16 (exact!)
  Return 4 ✓
```

### Why This Works

**Binary search eliminates half the possibilities each time:**
```
For x = 100, possible answers are 0-100

Check 50: 50² = 2500 (too big)
Now we know answer is in 0-49
Eliminated 50-100 (50 numbers!)

Check 25: 25² = 625 (too big)
Now we know answer is in 0-24
Eliminated 25-49 (25 numbers!)

...continue halving
```

**Why save result when mid² < x?**

We're looking for the **largest** integer where n² ≤ x:
```
For x = 8:
When we find 2 (2² = 4 < 8):
  2 might be the answer
  But there could be a larger answer (3?)
  Save 2 and keep searching right
  
When we find 3 (3² = 9 > 8):
  3 is too large
  Good thing we saved 2!
```

### Important: Avoiding Overflow

**Problem:** `mid * mid` can overflow for large numbers!
```
For x = 2^31 - 1:
mid could be very large
mid * mid could exceed integer limits!
```

**Solution:** Use division instead of multiplication
```typescript
// Instead of: mid * mid <= x
// Use: mid <= x / mid

if (mid <= x / mid) {
    // mid² ≤ x
}
```

**Why this works:**
```
mid * mid ≤ x
Divide both sides by mid:
mid ≤ x / mid
```

**Time Complexity:** O(log x) - Halve the range each time  
**Space Complexity:** O(1) - Only use a few variables

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Binary search eliminates half the search space each iteration
- Much faster than linear search: O(log n) vs O(n)
- Key pattern: Check middle, eliminate left OR right half
- Always calculate mid as `left + Math.floor((right - left) / 2)` to avoid overflow
- Save potential answers when mid² < x (we want the largest valid answer)
- Use division `mid <= x / mid` instead of multiplication to avoid overflow
- Binary search is fundamental - appears in many problems!
- Works on any sorted or monotonic space (here: 0 to x)
- The "rounded down" requirement means we want the largest n where n² ≤ x