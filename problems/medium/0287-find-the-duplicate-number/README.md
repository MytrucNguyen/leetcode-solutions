# 287. Find the Duplicate Number

**Difficulty:** Medium  
**Topics:** Array, Two Pointers, Binary Search, Bit Manipulation  
**Link:** [LeetCode Problem](https://leetcode.com/problems/find-the-duplicate-number/)

## Problem Description

Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive, there is only **one repeated number**. Return this repeated number.

You must solve the problem **without** modifying the array and using only **O(1)** extra space.

### Examples

**Example 1:**
```
Input: nums = [1, 3, 4, 2, 2]
Output: 2
```

**Example 2:**
```
Input: nums = [3, 1, 3, 4, 2]
Output: 3
```

**Example 3:**
```
Input: nums = [3, 3, 3, 3, 3]
Output: 3
```

### Constraints

- `1 <= n <= 10^5`
- `nums.length == n + 1`
- `1 <= nums[i] <= n`
- Only one number is repeated, but it could be repeated more than once

## Approach

### Floyd's Cycle Detection (Tortoise and Hare)

Treat the array as a linked list where each value points to the next index. Since there are `n + 1` values in range `[1, n]`, following the pointers must create a cycle. The duplicate number is where the cycle begins.

**Key Insight:** This is Linked List Cycle (#141) applied to an array! Instead of `node.next`, we use `nums[index]` to follow the chain. The duplicate creates the cycle because two different indices point to the same value (index).

**Why a cycle exists:**
- Array has `n + 1` slots, values range from `1` to `n`
- By pigeonhole principle, at least one value is repeated
- Two indices pointing to the same value = two paths merging = cycle

**Algorithm — Two phases:**

**Phase 1: Detect the cycle (find meeting point)**
1. `slow` moves one step: `slow = nums[slow]`
2. `fast` moves two steps: `fast = nums[nums[fast]]`
3. They will meet inside the cycle

**Phase 2: Find the cycle entrance (the duplicate)**
1. Reset `slow` to index 0
2. Move both `slow` and `fast` one step at a time
3. Where they meet is the cycle entrance = the duplicate number

**Walkthrough:**
```
nums = [1, 3, 4, 2, 2]
index:  0  1  2  3  4

Following pointers from index 0:
0 → 1 → 3 → 2 → 4 → 2 → 4 → 2...
                  ↑───────────↑ cycle!

Phase 1 — Find meeting point:
  slow: 0 → 1 → 3 → 2 → 4 → 2
  fast: 0 → 3 → 4 → 3 → 4 → 3
  
  Step by step:
  slow=nums[0]=1, fast=nums[nums[0]]=nums[1]=3
  slow=nums[1]=3, fast=nums[nums[3]]=nums[2]=4
  slow=nums[3]=2, fast=nums[nums[4]]=nums[2]=4
  slow=nums[2]=4, fast=nums[nums[4]]=nums[2]=4
  Meet at 4!

Phase 2 — Find entrance:
  slow=0, fast=4
  slow=nums[0]=1, fast=nums[4]=2
  slow=nums[1]=3, fast=nums[2]=4
  slow=nums[3]=2, fast=nums[4]=2
  Meet at 2 → that's the duplicate! ✓
```

**Comparison with Linked List Cycle (#141):**
- #141: `slow = slow.next`, `fast = fast.next.next` → detects if cycle exists
- #287: `slow = nums[slow]`, `fast = nums[nums[fast]]` → finds where cycle starts (the duplicate)
- Same algorithm, different data structure

**Time Complexity:** O(n) - Each pointer traverses at most 2n steps  
**Space Complexity:** O(1) - Only two pointer variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Arrays with values in range [1, n] can be treated as linked lists (value = next index)
- Floyd's cycle detection works on arrays, not just linked lists
- Phase 1 finds a meeting point inside the cycle, Phase 2 finds the entrance
- The duplicate number IS the cycle entrance — where two paths converge
- This connects Linked List Cycle (#141) to array problems in an elegant way