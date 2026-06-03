# 23. Merge K Sorted Lists

**Difficulty:** Hard  
**Topics:** Linked List, Divide and Conquer, Heap, Merge Sort  
**Link:** [LeetCode Problem](https://leetcode.com/problems/merge-k-sorted-lists/)

## Problem Description

You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

### Examples

**Example 1:**

    Input: lists = [[1,4,5],[1,3,4],[2,6]]
    Output: [1,1,2,3,4,4,5,6]

**Example 2:**

    Input: lists = []
    Output: []

**Example 3:**

    Input: lists = [[]]
    Output: []

### Constraints

- `k == lists.length`
- `0 <= k <= 10^4`
- `0 <= lists[i].length <= 500`
- `-10^4 <= lists[i][j] <= 10^4`
- `lists[i]` is sorted in ascending order
- The sum of `lists[i].length` will not exceed `10^4`

## Approach

### Divide and Conquer — Merge Pairs

Repeatedly merge pairs of lists until one remains. Like a tournament bracket — each round halves the number of lists.

**Key Insight:** You already know how to merge two sorted lists (#21). Merging k lists is just applying that repeatedly. Divide and conquer is optimal — merge pairs in rounds, halving the count each time.

**Why not merge one by one?** Merging list 1+2, then result+3, then result+4... is O(kn) per merge × k merges = O(k²n). Divide and conquer does O(n) per merge × log(k) rounds = O(n log k). Much better!

**Algorithm:**

1. If lists is empty, return null
2. While more than one list remains:
    - Merge lists in pairs: [0]+[1], [2]+[3], etc.
    - If odd number, last list carries forward
    - Replace lists with merged results
3. Return the single remaining list

**Walkthrough:**

    lists = [[1,4,5], [1,3,4], [2,6]]

    Round 1 (3 lists → 2):
      Merge [1,4,5] + [1,3,4] → [1,1,3,4,4,5]
      [2,6] carries forward (odd one out)
      lists = [[1,1,3,4,4,5], [2,6]]

    Round 2 (2 lists → 1):
      Merge [1,1,3,4,4,5] + [2,6] → [1,1,2,3,4,4,5,6]
      lists = [[1,1,2,3,4,4,5,6]]

    One list remaining → return [1,1,2,3,4,4,5,6] ✓

**With more lists:**

    6 lists → Round 1: 3 pairs → 3 lists
           → Round 2: 1 pair + 1 carry → 2 lists
           → Round 3: 1 pair → 1 list ✓

    log2(6) ≈ 3 rounds — much better than 5 sequential merges!

**Comparison with Sort List (#148):**

- Sort List: Split ONE list in half → sort → merge
- Merge K: Start with K lists → merge pairs → reduce to one
- Both use divide and conquer + merge two sorted lists (#21)

**Alternative: Min Heap approach**
Push the head of each list into a min heap. Pop the smallest, add to result, push its next node. O(n log k) as well, uses the heap from #215.

**Time Complexity:** O(n log k) where n is total nodes and k is number of lists  
**Space Complexity:** O(1) extra for divide and conquer (O(log k) for recursion if recursive merge)

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Divide and conquer: merge pairs in rounds, halving the count each time
- Reuses Merge Two Sorted Lists (#21) as the building block
- O(n log k) vs O(nk²) for sequential merging — divide and conquer wins
- This completes the top 25 most asked interview problems!
- Same pattern as merge sort — just starting with k lists instead of splitting one
