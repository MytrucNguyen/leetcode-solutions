# 380. Insert Delete GetRandom O(1)

**Difficulty:** Medium  
**Topics:** Array, Hash Table, Math, Design, Randomized  
**Link:** [LeetCode Problem](https://leetcode.com/problems/insert-delete-getrandom-o1/)

## Problem Description

Implement the `RandomizedSet` class:

- `RandomizedSet()` Initializes the object
- `bool insert(int val)` Inserts `val` if not present. Returns `true` if inserted, `false` if already exists.
- `bool remove(int val)` Removes `val` if present. Returns `true` if removed, `false` if not found.
- `int getRandom()` Returns a random element from the set. Each element must have **equal probability**.

You must implement each function in **O(1)** average time complexity.

### Examples

**Example 1:**

    Input:
    ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
    [[], [1], [2], [2], [], [1], [2], []]
    Output: [null, true, false, true, 2, true, false, 2]

### Constraints

- `-2^31 <= val <= 2^31 - 1`
- At most `2 * 10^5` calls will be made to `insert`, `remove`, and `getRandom`
- There will be at least one element when `getRandom` is called

## Approach

### Array + Hash Map — Swap with Last for O(1) Delete

Use an array for O(1) random access and a hash map for O(1) lookup. The clever trick: when deleting, swap the element with the last one, then pop — both O(1).

**Key Insight:** The problem with arrays is that deleting from the middle is O(n) because you need to shift elements. But if you don't care about order (and we don't!), you can swap the element to delete with the last element, then pop from the end — O(1).

**Data structures:**
- `nums[]` — array of values (for getRandom)
- `indexMap` — hash map of value → index in array (for O(1) lookup)

**Algorithm:**

**insert(val):**
1. If val is in map → return false
2. Push val to end of array
3. Add `val → array.length - 1` to map
4. Return true

**remove(val):**
1. If val is NOT in map → return false
2. Get val's index from map
3. Swap val with the last element in array
4. Update the swapped element's index in map
5. Pop the last element (which is now val)
6. Delete val from map
7. Return true

**getRandom():**
1. Pick random index from 0 to array.length - 1
2. Return array[randomIndex]

**Walkthrough:**

    insert(1):
      nums = [1], map = {1: 0}
      return true

    insert(2):
      nums = [1, 2], map = {1: 0, 2: 1}
      return true

    insert(3):
      nums = [1, 2, 3], map = {1: 0, 2: 1, 3: 2}
      return true

    remove(2):
      2 is at index 1
      Last element is 3 at index 2
      Swap: nums = [1, 3, 3]
      Update map: 3 → index 1
      Pop: nums = [1, 3]
      Delete 2 from map
      map = {1: 0, 3: 1}
      return true

    getRandom():
      Random index 0 or 1 → return 1 or 3

**Why swap with last?** Removing from the end of an array is O(1) — no shifting needed. By swapping first, we move our target to the end, then pop it off. The order doesn't matter for getRandom.

**Comparison with other design problems:**
- LRU Cache (#146): Hash map + doubly linked list for O(1) access + eviction
- Min Stack (#155): Two stacks for O(1) getMin
- Tic-Tac-Toe (#348): Counter arrays for O(1) win detection
- **RandomizedSet (#380): Array + hash map for O(1) insert/delete/random** ✅

**Time Complexity:** O(1) average for all operations  
**Space Complexity:** O(n) — storing n elements in array and map

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Array + hash map together cover each other's weaknesses
- Swap-with-last is the key trick for O(1) array deletion when order doesn't matter
- Always update the map when swapping — easy to forget!
- getRandom needs an array — sets and maps can't do uniform random in O(1)
- One of the most asked design problems at Meta and Amazon