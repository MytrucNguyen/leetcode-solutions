# 21. Merge Two Sorted Lists

**Difficulty:** Easy  
**Topics:** Linked List, Recursion  
**Link:** [LeetCode Problem](https://leetcode.com/problems/merge-two-sorted-lists/)

## Problem Description

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

### Examples

**Example 1:**

![alt text](image.png)

```
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

**Example 2:**
```
Input: list1 = [], list2 = []
Output: []
```

**Example 3:**
```
Input: list1 = [], list2 = [0]
Output: [0]
```

### Constraints

- The number of nodes in both lists is in the range `[0, 50]`.
- `-100 <= Node.val <= 100`
- Both `list1` and `list2` are sorted in **non-decreasing** order.

## Understanding Linked Lists

### What is a Node?

A **Node** is one piece of a linked list chain. It contains two parts:
- **val**: The data stored in the node
- **next**: A pointer/reference to the next node (or `null` if it's the last node)
```
┌─────────────┐
│  val: 1     │  ← The value stored
│  next:  ●───┼──→ Points to the next node
└─────────────┘
```

### Visual Example

A linked list with values `[1, 2, 4]`:
```
HEAD
 ↓
┌───┬───┐    ┌───┬───┐    ┌───┬───┐
│ 1 │ ●─┼───→│ 2 │ ●─┼───→│ 4 │ ⊗ │
└───┴───┘    └───┴───┘    └───┴───┘
```

- **HEAD**: The starting point (first node)
- **●**: Arrow pointing to the next node
- **⊗**: Null (no next node, this is the end)

### What Does "Splice" Mean?

**Splicing** means connecting nodes together by rearranging the `next` pointers (the arrows).

**Example - Merging two lists:**
```
List 1:  1 → 3 → 5
List 2:  2 → 4 → 6

Result:  1 → 2 → 3 → 4 → 5 → 6
```

You accomplish this by changing which nodes the arrows point to, reusing the existing nodes rather than creating new ones.

## Approach

### Iterative Solution (Two Pointers)

Think of this like merging two sorted piles of cards: look at the top card of each pile, pick the smaller one, add it to your result, and move to the next card in whichever pile you took from. Repeat until both piles are empty.

The solution uses a dummy node as a starting point to simplify the code, and two pointers to traverse both lists. At each step, we compare the current nodes and connect the smaller one to our merged list. When one list is exhausted, we simply connect the remainder of the other list.

**Time Complexity:** O(n + m) - Where n and m are the lengths of the two lists  
**Space Complexity:** O(1) - Only using pointers, not creating new nodes

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Linked lists don't have indices - you traverse them by following `next` pointers
- We don't create new nodes - we reuse existing nodes by changing their `next` pointers
- A dummy node is a common technique to simplify linked list operations
- This is the same algorithm used in merge sort for merging sorted arrays
- Two-pointer technique: maintain a pointer in each list and compare values