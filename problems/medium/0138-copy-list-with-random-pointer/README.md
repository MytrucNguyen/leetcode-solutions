# 138. Copy List with Random Pointer

**Difficulty:** Medium  
**Topics:** Hash Table, Linked List  
**Link:** [LeetCode Problem](https://leetcode.com/problems/copy-list-with-random-pointer/)

## Problem Description

A linked list of length `n` is given such that each node contains an additional random pointer, which could point to any node in the list, or `null`.

Construct a **deep copy** of the list. The deep copy should consist of exactly `n` brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the `next` and `random` pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state.

### Examples

**Example 1:**

    Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
    Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

**Example 2:**

    Input: head = [[1,1],[2,1]]
    Output: [[1,1],[2,1]]

**Example 3:**

    Input: head = [[3,null],[3,0],[3,null]]
    Output: [[3,null],[3,0],[3,null]]

### Constraints

- `0 <= n <= 1000`
- `-10^4 <= Node.val <= 10^4`
- `Node.random` is `null` or is pointing to some node in the linked list

## Approach

### Two-Pass with Hash Map

Pass 1: Create a copy of each node and store the mapping (original → copy) in a hash map. Pass 2: Walk through again and wire up `next` and `random` pointers using the map.

**Key Insight:** The challenge is that when you're copying a node's `random` pointer, the target node's copy might not exist yet. A hash map solves this — first create ALL copies, then wire ALL pointers.

**Why not just copy as you go?** If node 1's random points to node 5, but you haven't reached node 5 yet, you can't set the random pointer. The hash map decouples creation from wiring.

**Algorithm:**
1. **Pass 1 — Create copies:** Walk through original list, create a new node for each, store in map
2. **Pass 2 — Wire pointers:** Walk through original list again:
   - `copy.next = map[original.next]`
   - `copy.random = map[original.random]`
3. Return `map[head]` (the copy of the head)

**Walkthrough:**

    Original: 7 → 13 → 11
    Randoms:  7→null, 13→7, 11→13

    Pass 1 — Create copies:
      map: { 7→7', 13→13', 11→11' }

    Pass 2 — Wire pointers:
      7':  next = map[13] = 13', random = map[null] = null
      13': next = map[11] = 11', random = map[7] = 7'
      11': next = map[null] = null, random = map[13] = 13'

    Result: 7' → 13' → 11'
    Randoms: 7'→null, 13'→7', 11'→13' ✓

**Time Complexity:** O(n) — two passes through the list  
**Space Complexity:** O(n) — hash map storing n node mappings

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Hash map decouples node creation from pointer wiring — solves the "target doesn't exist yet" problem
- Two-pass approach: create first, connect second
- This "clone a complex structure" pattern applies to graphs too (Clone Graph #133)
- Handling null in the map cleanly covers nodes with no random pointer
- Very commonly asked at Meta, Amazon, and Microsoft