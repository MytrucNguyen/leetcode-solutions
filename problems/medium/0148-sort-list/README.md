# 148. Sort List

**Difficulty:** Medium  
**Topics:** Linked List, Two Pointers, Divide and Conquer, Sorting, Merge Sort  
**Link:** [LeetCode Problem](https://leetcode.com/problems/sort-list/)

## Problem Description

Given the `head` of a linked list, return the list sorted in **ascending order**.

### Examples

**Example 1:**

    Input: head = [4, 2, 1, 3]
    Output: [1, 2, 3, 4]

**Example 2:**

    Input: head = [-1, 5, 3, 4, 0]
    Output: [-1, 0, 3, 4, 5]

**Example 3:**

    Input: head = []
    Output: []

### Constraints

- The number of nodes in the list is in the range `[0, 5 * 10^4]`
- `-10^5 <= Node.val <= 10^5`

**Follow up:** Can you sort in O(n log n) time and O(1) memory?

## Approach

### Merge Sort — Split, Sort, Merge

Split the list in half using fast/slow pointers (#876), recursively sort each half, then merge the sorted halves (#21).

**Key Insight:** This combines two problems you've already solved:
- Middle of Linked List (#876) → find the middle to split
- Merge Two Sorted Lists (#21) → merge two sorted halves

Merge sort is the natural choice for linked lists because:
- Splitting at the middle is easy with fast/slow pointers
- Merging doesn't need random access (unlike quicksort's partition)
- No extra array needed — just rewire pointers

**Algorithm:**
1. **Base case:** If list is empty or has one node, it's already sorted
2. **Split:** Use fast/slow to find middle, cut the list in two
3. **Recurse:** Sort left half and right half
4. **Merge:** Merge the two sorted halves

**Walkthrough:**

    [4, 2, 1, 3]

    Split at middle:
      Left: [4, 2]
      Right: [1, 3]

    Sort left [4, 2]:
      Split: [4] and [2]
      Both single → already sorted
      Merge [4] + [2] → [2, 4]

    Sort right [1, 3]:
      Split: [1] and [3]
      Both single → already sorted
      Merge [1] + [3] → [1, 3]

    Merge [2, 4] + [1, 3]:
      Compare 2 vs 1 → take 1
      Compare 2 vs 3 → take 2
      Compare 4 vs 3 → take 3
      Take 4
      Result: [1, 2, 3, 4] ✓

**Important detail — cutting the list:** After finding the middle with slow pointer, we need to CUT the list by setting the node before middle's next to null. Otherwise both halves still connect.

    [4, 2, 1, 3]
         ↑ slow (middle)

    Before cut: 4 → 2 → 1 → 3
    Set 2.next = null
    Left: 4 → 2 → null
    Right: 1 → 3 → null

**Comparison with array merge sort:**
- Array: Split by index → O(1). Merge needs temp array → O(n) space.
- Linked list: Split by fast/slow → O(n). Merge by rewiring → O(1) extra space.
- Linked list merge sort is actually more natural!

**Time Complexity:** O(n log n) — log n levels of splitting, O(n) merge per level  
**Space Complexity:** O(log n) — recursion stack depth

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Merge sort = split + sort + merge — each step uses a technique you already know
- Fast/slow to find middle (#876) + merge two sorted lists (#21) = sort list
- Cut the list by setting the node before middle to null
- Merge sort is the natural O(n log n) sort for linked lists
- This is a great example of combining known patterns to solve a harder problem