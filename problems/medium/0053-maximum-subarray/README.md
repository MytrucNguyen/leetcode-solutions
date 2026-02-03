# 53. Maximum Subarray

**Difficulty:** Easy  
**Topics:** Array, Divide and Conquer, Dynamic Programming  
**Link:** [LeetCode Problem](https://leetcode.com/problems/maximum-subarray/)

## Problem Description

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A **subarray** is a contiguous part of an array.

### Examples

**Example 1:**
```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
```

**Example 2:**
```
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
```

**Example 3:**
```
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

**Follow up:** If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

## Understanding the Problem

We need to find a **contiguous subarray** with the largest sum.

**What is a subarray?**
```
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

Some subarrays:
[-2]              sum = -2
[1]               sum = 1
[-2, 1]           sum = -1
[4, -1, 2, 1]     sum = 6  ← Maximum!
[1, -3, 4]        sum = 2
[-5, 4]           sum = -1
```

**Key:** Must be **contiguous** (adjacent elements)!

### **Brute Force Approach**

Check every possible subarray:
```
For i from 0 to n:
  For j from i to n:
    Calculate sum of subarray[i...j]
    Track maximum
```

**Time Complexity:** O(n²) or O(n³) - too slow!
```
nums = [-2, 1, -3, 4]

Check all subarrays:
[-2]           = -2
[-2, 1]        = -1
[-2, 1, -3]    = -4
[-2, 1, -3, 4] = 0
[1]            = 1
[1, -3]        = -2
[1, -3, 4]     = 2
[-3]           = -3
[-3, 4]        = 1
[4]            = 4  ← Maximum!

16 operations for 4 elements!
For 100 elements → 5,000+ operations!
```

**Can we do better?**

## Approach

### Kadane's Algorithm (Optimal - O(n))

**Key insight:** At each position, we only need to decide:
- **Add** the current number to our running sum, OR
- **Start fresh** from the current number

**Why start fresh?** If the running sum is **negative**, it's dragging us down!

**Algorithm:**

1. Track two values:
   - `currentSum` = sum of current subarray we're building
   - `maxSum` = best sum we've seen so far

2. For each number:
   - Decide: Add to current sum OR start fresh
   - Update maxSum if current is better

3. Return maxSum

**The decision:**
```typescript
currentSum = Math.max(nums[i], currentSum + nums[i])
             ↑                  ↑
        start fresh         add to current
        
If currentSum + nums[i] < nums[i]:
  The previous sum is negative, dragging us down
  Better to start fresh!
```

**Simpler rule:**
```
If currentSum < 0:
  Start fresh! currentSum = nums[i]
Else:
  Keep building! currentSum += nums[i]
  
Always update: maxSum = Math.max(maxSum, currentSum)
```

### **Step-by-Step for [-2,1,-3,4,-1,2,1,-5,4]:**
```
Initial: currentSum = 0, maxSum = -Infinity

i=0, nums[0] = -2:
  currentSum = max(-2, 0 + (-2)) = -2
  maxSum = max(-Infinity, -2) = -2
  
  State: currentSum = -2, maxSum = -2

---

i=1, nums[1] = 1:
  currentSum = max(1, -2 + 1) = max(1, -1) = 1
               ↑ Start fresh! Previous was negative
  maxSum = max(-2, 1) = 1
  
  State: currentSum = 1, maxSum = 1

---

i=2, nums[2] = -3:
  currentSum = max(-3, 1 + (-3)) = max(-3, -2) = -2
                                    ↑ Keep going (less bad)
  maxSum = max(1, -2) = 1
  
  State: currentSum = -2, maxSum = 1

---

i=3, nums[3] = 4:
  currentSum = max(4, -2 + 4) = max(4, 2) = 4
               ↑ Start fresh! -2 was dragging down
  maxSum = max(1, 4) = 4
  
  State: currentSum = 4, maxSum = 4
  Subarray so far: [4]

---

i=4, nums[4] = -1:
  currentSum = max(-1, 4 + (-1)) = max(-1, 3) = 3
                                    ↑ Keep adding!
  maxSum = max(4, 3) = 4
  
  State: currentSum = 3, maxSum = 4
  Subarray so far: [4, -1]

---

i=5, nums[5] = 2:
  currentSum = max(2, 3 + 2) = max(2, 5) = 5
                                ↑ Keep adding!
  maxSum = max(4, 5) = 5
  
  State: currentSum = 5, maxSum = 5
  Subarray so far: [4, -1, 2]

---

i=6, nums[6] = 1:
  currentSum = max(1, 5 + 1) = max(1, 6) = 6
                                ↑ Keep adding!
  maxSum = max(5, 6) = 6
  
  State: currentSum = 6, maxSum = 6
  Subarray so far: [4, -1, 2, 1]

---

i=7, nums[7] = -5:
  currentSum = max(-5, 6 + (-5)) = max(-5, 1) = 1
                                    ↑ Keep adding (still positive)
  maxSum = max(6, 1) = 6
  
  State: currentSum = 1, maxSum = 6

---

i=8, nums[8] = 4:
  currentSum = max(4, 1 + 4) = max(4, 5) = 5
                                ↑ Keep adding!
  maxSum = max(6, 5) = 6
  
  State: currentSum = 5, maxSum = 6

---

Final answer: maxSum = 6 ✓
The subarray [4, -1, 2, 1] has sum 6
```

### **Why This Works**

**Key insight:** If the current sum goes negative, it will only **reduce** any future sum!
```
Example: currentSum = -3

If we add the next number (say 5):
  -3 + 5 = 2

But if we start fresh:
  5 = 5

5 > 2, so starting fresh is better!
```

**Visual of when we reset:**
```
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

currentSum: -2  1  -2  4   3   5   6   1   5
            ↑   ↑       ↑
         Reset Reset Reset
         (neg) (neg)  (fresh start better)
```

**We only track TWO numbers** (currentSum, maxSum), not entire subarrays!

**Time Complexity:** O(n) - Single pass through array  
**Space Complexity:** O(1) - Only two variables

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Kadane's Algorithm is one of the most elegant DP algorithms
- Key decision: Add to current sum OR start fresh
- Rule: If current sum is negative, start fresh (it's dragging you down)
- Only need to track currentSum and maxSum
- Single pass → O(n) vs brute force O(n²)
- This pattern (tracking running sum with resets) appears in many problems
- Classic dynamic programming - each step depends on the previous decision
- Foundation for many harder array problems
- Must-know algorithm for interviews!