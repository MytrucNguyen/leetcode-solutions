# 136. Single Number

**Difficulty:** Easy  
**Topics:** Array, Bit Manipulation  
**Link:** [LeetCode Problem](https://leetcode.com/problems/single-number/)

## Problem Description

Given a **non-empty** array of integers `nums`, every element appears **twice** except for one. Find that single one.

You must implement a solution with a **linear runtime complexity** and use only **constant extra space**.

### Examples

**Example 1:**
```
Input: nums = [2,2,1]
Output: 1
```

**Example 2:**
```
Input: nums = [4,1,2,1,2]
Output: 4
```

**Example 3:**
```
Input: nums = [1]
Output: 1
```

### Constraints

- `1 <= nums.length <= 3 * 10^4`
- `-3 * 10^4 <= nums[i] <= 3 * 10^4`
- Each element in the array appears twice except for one element which appears only once.

## Understanding the Problem

We need to find the one number that appears only once, while all others appear exactly twice.

**Constraints:**
- **O(n) time complexity** - Must be linear, no sorting allowed!
- **O(1) space complexity** - Can't use hash maps or extra arrays!

**Example:**
```
[4, 1, 2, 1, 2]

4 appears once   ← This is the answer!
1 appears twice
2 appears twice
```

## Approach

### XOR Bit Manipulation (The Elegant Solution!)

This problem has a BRILLIANT solution using **XOR (exclusive OR)** bit manipulation!

**What is XOR?**

XOR is a bitwise operation with special properties:
```
Symbol: ^

Truth table:
0 ^ 0 = 0
0 ^ 1 = 1
1 ^ 0 = 1
1 ^ 1 = 0
```

**Key Properties of XOR:**

1. **Any number XOR itself equals 0:**
```
   a ^ a = 0
   
   Examples:
   5 ^ 5 = 0
   123 ^ 123 = 0
```

2. **Any number XOR 0 equals itself:**
```
   a ^ 0 = a
   
   Examples:
   5 ^ 0 = 5
   123 ^ 0 = 123
```

3. **XOR is commutative and associative:**
```
   a ^ b = b ^ a
   (a ^ b) ^ c = a ^ (b ^ c)
   
   This means order doesn't matter!
```

**The Magic Trick:**

If we XOR all numbers together, the pairs cancel out and only the single number remains!
```
Example: [4, 1, 2, 1, 2]

4 ^ 1 ^ 2 ^ 1 ^ 2

Reorder (doesn't matter due to commutative property):
= 4 ^ (1 ^ 1) ^ (2 ^ 2)

Apply XOR:
= 4 ^ 0 ^ 0  (pairs become 0)
= 4          (answer!)
```

**Algorithm:**

1. Initialize result = 0
2. XOR result with each number in the array
3. Return result

**Why it works:**
- Pairs cancel out: `a ^ a = 0`
- Only the single number remains: `single ^ 0 = single`

### **Step-by-Step for [4, 1, 2, 1, 2]:**
```
Initial: result = 0

---

Step 1: XOR with 4
  result = 0 ^ 4 = 4
  
  Binary:
    0000 (0)
  ^ 0100 (4)
  ------
    0100 (4)

---

Step 2: XOR with 1
  result = 4 ^ 1 = 5
  
  Binary:
    0100 (4)
  ^ 0001 (1)
  ------
    0101 (5)

---

Step 3: XOR with 2
  result = 5 ^ 2 = 7
  
  Binary:
    0101 (5)
  ^ 0010 (2)
  ------
    0111 (7)

---

Step 4: XOR with 1 (second occurrence)
  result = 7 ^ 1 = 6
  
  Binary:
    0111 (7)
  ^ 0001 (1)
  ------
    0110 (6)

---

Step 5: XOR with 2 (second occurrence)
  result = 6 ^ 2 = 4
  
  Binary:
    0110 (6)
  ^ 0010 (2)
  ------
    0100 (4)

---

Return result = 4 ✓
```

**Another way to see it:**
```
4 ^ 1 ^ 2 ^ 1 ^ 2

Group the pairs (order doesn't matter):
= 4 ^ (1 ^ 1) ^ (2 ^ 2)

Pairs cancel:
= 4 ^ 0 ^ 0

Simplify:
= 4
```

### **Step-by-Step for [2, 2, 1]:**
```
Initial: result = 0

Step 1: result = 0 ^ 2 = 2
Step 2: result = 2 ^ 2 = 0  (pair cancels!)
Step 3: result = 0 ^ 1 = 1

Return 1 ✓
```

### **Step-by-Step for [1]:**
```
Initial: result = 0

Step 1: result = 0 ^ 1 = 1

Return 1 ✓
```

**Why This is the Best Solution:**

1. **O(n) time** - Single pass through array
2. **O(1) space** - Only one variable
3. **Elegant** - Just XOR everything together
4. **No edge cases** - Works for all inputs
5. **Order independent** - Don't need to sort

**Time Complexity:** O(n) - Visit each element once  
**Space Complexity:** O(1) - Only one variable

### **Alternative Approaches (Not Recommended):**

**1. Hash Map:**
```
Count occurrences
Find the one with count = 1
Time: O(n), Space: O(n) ❌ (violates space constraint)
```

**2. Sorting:**
```
Sort array
Check pairs
Time: O(n log n) ❌ (violates time constraint), Space: O(1)
```

**3. Math:**
```
2 * (sum of unique) - (sum of all) = single
Time: O(n), Space: O(n) for set ❌ (violates space constraint)
```

**XOR is the ONLY solution that meets both constraints!**

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- XOR (^) is a powerful bitwise operation
- `a ^ a = 0` makes pairs cancel out
- `a ^ 0 = a` leaves single numbers unchanged
- XOR is commutative and associative (order doesn't matter)
- This trick solves the problem in O(n) time and O(1) space
- One of the most elegant solutions in computer science
- Foundation for many bit manipulation problems
- Shows the power of understanding bitwise operations
- Perfect example of "aha!" moment in problem solving
- This pattern appears in many interview questions