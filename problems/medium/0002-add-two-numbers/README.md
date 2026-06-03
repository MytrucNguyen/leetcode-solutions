# 2. Add Two Numbers

**Difficulty:** Medium  
**Topics:** Linked List, Math, Recursion  
**Link:** [LeetCode Problem](https://leetcode.com/problems/add-two-numbers/)

## Problem Description

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

### Examples

**Example 1:**
```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Visual:
  2 → 4 → 3  (represents 342)
+ 5 → 6 → 4  (represents 465)
-----------
  7 → 0 → 8  (represents 807)
```

**Example 2:**
```
Input: l1 = [0], l2 = [0]
Output: [0]
```

**Example 3:**
```
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
Explanation: 9999999 + 9999 = 10009998
```

### Constraints

- The number of nodes in each linked list is in the range `[1, 100]`.
- `0 <= Node.val <= 9`
- It is guaranteed that the list represents a number that does not have leading zeros.

## Understanding the Problem

### Why Reverse Order?

Numbers are stored in reverse order because addition starts from the **rightmost digit** (ones place).

**Normal number:** 342 = 3 hundreds + 4 tens + 2 ones

**Reversed in list:** 2 → 4 → 3 (ones first, then tens, then hundreds)

This allows us to traverse the lists from left to right while adding from the ones place up, just like manual addition!

### How Addition Works
```
    342
  + 465
  -----
    
Step 1 (ones): 2 + 5 = 7
Step 2 (tens): 4 + 6 = 10 → write 0, carry 1
Step 3 (hundreds): 3 + 4 + carry(1) = 8

Result: 807
```

### Understanding Carry

When two digits add up to 10 or more, we "carry" to the next position:
```
sum = 4 + 6 = 10

digit = sum % 10 = 0    (remainder)
carry = Math.floor(sum / 10) = 1    (quotient)
```

## Approach

### Iterative Solution with Carry Tracking

Simulate manual addition by traversing both lists simultaneously, tracking the carry at each step.

**Algorithm:**

1. Initialize a `carry` to 0
2. Create a dummy head node to simplify result list creation
3. Use a `current` pointer to build the result list
4. While there are nodes in l1 OR l2 OR carry exists:
   - Get value from l1 (or 0 if l1 is null)
   - Get value from l2 (or 0 if l2 is null)
   - Calculate sum: `val1 + val2 + carry`
   - Calculate digit: `sum % 10`
   - Calculate new carry: `Math.floor(sum / 10)`
   - Create new node with digit and add to result
   - Move to next nodes in l1 and l2 (if they exist)
5. Return `dummy.next` (the actual head of result list)

**Example Walkthrough for [2,4,3] + [5,6,4]:**
```
Step 1:
l1: 2, l2: 5, carry: 0
sum = 2 + 5 + 0 = 7
digit = 7, carry = 0
Result: 7

Step 2:
l1: 4, l2: 6, carry: 0
sum = 4 + 6 + 0 = 10
digit = 0, carry = 1
Result: 7 → 0

Step 3:
l1: 3, l2: 4, carry: 1
sum = 3 + 4 + 1 = 8
digit = 8, carry = 0
Result: 7 → 0 → 8

No more nodes, carry = 0, done!
```

**Handling Different Lengths:**

Treat missing nodes as 0:
```
l1: 9 → 9 → 9 → 9
l2: 9 → 9

Step 3: 9 + 0 + carry
Step 4: 9 + 0 + carry
```

**Handling Final Carry:**

If there's a carry after processing all nodes, add one more node:
```
l1: 9 → 9 → 9
l2: 1

After all steps, carry = 1
Add final node: 0 → 0 → 0 → 1
```

**Time Complexity:** O(max(m, n)) - Where m and n are the lengths of the two lists  
**Space Complexity:** O(max(m, n)) - For the result list

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Reversed storage allows natural left-to-right traversal while maintaining correct addition order
- Carry tracking is essential - don't forget the final carry!
- Handle different list lengths by treating missing nodes as 0
- Dummy head node simplifies linked list construction
- This pattern applies to many digit manipulation problems
- The % (modulo) and Math.floor(/) operators are perfect for extracting digits and carries