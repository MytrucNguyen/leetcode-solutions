# 160. Intersection of Two Linked Lists

**Difficulty:** Easy  
**Topics:** Hash Table, Linked List, Two Pointers  
**Link:** [LeetCode Problem](https://leetcode.com/problems/intersection-of-two-linked-lists/)

## Problem Description

Given the heads of two singly linked-lists `headA` and `headB`, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return `null`.

The linked lists must retain their original structure after the function returns.

**Note:** Intersection means the same node in memory, not just the same value.

### Examples

**Example 1:**

![alt text](image.png)

```
A:     4 → 1 ↘
              8 → 4 → 5
B: 5 → 6 → 1 ↗

Input: headA = [4,1,8,4,5], headB = [5,6,1,8,4,5], intersectVal = 8
Output: Node with value 8
```

**Example 2:**

![alt text](image-1.png)

```
A: 1 → 9 → 1 ↘
              2 → 4
B:         3 ↗

Input: headA = [1,9,1,2,4], headB = [3,2,4], intersectVal = 2
Output: Node with value 2
```

**Example 3:**

![alt text](image-2.png)

```
A: 2 → 6 → 4
B:     1 → 5

Input: headA = [2,6,4], headB = [1,5]
Output: null
```

### Constraints

- The number of nodes of `listA` is in the `m`.
- The number of nodes of `listB` is in the `n`.
- `1 <= m, n <= 3 * 10^4`
- `1 <= Node.val <= 10^5`

**Follow up:** Could you write a solution that runs in O(m + n) time and uses only O(1) memory?

## Approach

### Hash Set (Simple)
Store all nodes from list A in a set, then walk list B checking if any node exists in the set.
- **Time Complexity:** O(m + n)
- **Space Complexity:** O(m)

### Two Pointer Swap (Optimal)
When a pointer reaches the end of its list, redirect it to the head of the other list. Both pointers walk the same total distance (lengthA + lengthB), so they meet at the intersection.

**Key Insight:** The problem with starting both pointers at the same time is the lists might be different lengths. By swapping to the other list's head at the end, both pointers walk the same total distance and "sync up" at the intersection point.

**Algorithm:**
1. Start pointer A at headA and pointer B at headB
2. Walk both pointers forward one step at a time
3. When pointer A reaches null, redirect to headB
4. When pointer B reaches null, redirect to headA
5. If they meet at the same node, that's the intersection
6. If they both reach null, there's no intersection

**Walkthrough:**
```
A: 4 → 1 → 8 → 4 → 5
B: 5 → 6 → 1 → 8 → 4 → 5
Intersection at node 8

Pointer A path: 4 → 1 → 8 → 4 → 5 → null → 5 → 6 → 1 → [8]
Pointer B path: 5 → 6 → 1 → 8 → 4 → 5 → null → 4 → 1 → [8]
                                                            ↑
                                                     They meet here!

Both walked 10 steps total (5 + 5 and 6 + 4)
```

**Why does this work?**
- Pointer A walks: lengthA + lengthB
- Pointer B walks: lengthB + lengthA
- Same total distance! So they arrive at the intersection at the same step.
- If there's no intersection, both reach null at the same time.

**Time Complexity:** O(m + n) - Each pointer traverses both lists once  
**Space Complexity:** O(1) - Only two pointer variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Swapping list heads when reaching the end equalizes the distance walked by both pointers
- This is one of the most elegant two-pointer techniques in linked list problems
- The same node in memory (not just same value) defines intersection
- This pattern of "equalizing paths" shows up in other problems too