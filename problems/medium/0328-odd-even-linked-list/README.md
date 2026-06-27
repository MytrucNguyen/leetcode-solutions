# 328. Odd Even Linked List

**Difficulty:** Medium  
**Topics:** Linked List  
**Link:** [LeetCode Problem](https://leetcode.com/problems/odd-even-linked-list/)

## Problem Description

Given the `head` of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered **odd**, and the second node is **even**, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in **O(1)** extra space complexity and **O(n)** time complexity.

### Examples

**Example 1:**

    Input: head = [1,2,3,4,5]
    Output: [1,3,5,2,4]

**Example 2:**

    Input: head = [2,1,3,5,6,4,7]
    Output: [2,3,6,7,1,5,4]

### Constraints

- The number of nodes in the linked list is in the range `[0, 10^4]`
- `-10^6 <= Node.val <= 10^6`

## Approach

### Two Chains — Odd and Even

Build two separate chains by alternating nodes. Then connect the odd chain's tail to the even chain's head.

**Key Insight:** Walk through the list with two pointers — one for odd-indexed nodes, one for even-indexed nodes. Each pointer skips ahead by 2, building their own chain. At the end, link them together.

**Algorithm:**

1. If head is null or has one node, return as-is
2. Set `odd = head`, `even = head.next`, save `evenHead = even`
3. While even and even.next exist:
    - `odd.next = even.next` (skip even, link to next odd)
    - `odd = odd.next`
    - `even.next = odd.next` (skip odd, link to next even)
    - `even = even.next`
4. Connect: `odd.next = evenHead`
5. Return head

**Walkthrough:**

    1 → 2 → 3 → 4 → 5
    odd=1, even=2, evenHead=2

    Step 1:
      odd.next = even.next = 3.   1 → 3
      odd = 3
      even.next = odd.next = 4.   2 → 4
      even = 4

    Step 2:
      odd.next = even.next = 5.   3 → 5
      odd = 5
      even.next = odd.next = null. 4 → null
      even = null

    even is null → stop

    Connect: odd.next = evenHead → 5 → 2

    Result: 1 → 3 → 5 → 2 → 4 ✓

    2 → 1 → 3 → 5 → 6 → 4 → 7
    odd=2, even=1, evenHead=1

    Step 1: odd=3, even=5.   Odd chain: 2→3, Even chain: 1→5
    Step 2: odd=6, even=4.   Odd chain: 2→3→6, Even chain: 1→5→4
    Step 3: odd=7, even=null. Odd chain: 2→3→6→7, Even chain: 1→5→4

    Connect: 7 → 1

    Result: 2 → 3 → 6 → 7 → 1 → 5 → 4 ✓

**Time Complexity:** O(n) — single pass  
**Space Complexity:** O(1) — only pointer variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Build two chains simultaneously by alternating — odd skips evens, even skips odds
- Save evenHead before starting — you'll need it to connect at the end
- Each pointer advances by 2 (skipping the other chain's node)
- The even pointer controls the loop — when it or its next is null, we're done
- Clean in-place rearrangement with O(1) space
