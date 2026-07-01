# 981. Time Based Key-Value Store

**Difficulty:** Medium  
**Topics:** Hash Table, String, Binary Search, Design  
**Link:** [LeetCode Problem](https://leetcode.com/problems/time-based-key-value-store/)

## Problem Description

Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

Implement the `TimeMap` class:

- `TimeMap()` Initializes the object
- `void set(String key, String value, int timestamp)` Stores the key with the value at the given timestamp
- `String get(String key, int timestamp)` Returns a value such that `set` was called previously, with `timestamp_prev <= timestamp`. If there are multiple such values, it returns the value associated with the largest `timestamp_prev`. If there are no values, it returns `""`.

### Examples

**Example 1:**

    Input:
    ["TimeMap", "set", "get", "get", "set", "get", "get"]
    [[], ["foo","bar",1], ["foo",1], ["foo",3], ["foo","bar2",4], ["foo",4], ["foo",5]]
    Output: [null, null, "bar", "bar", null, "bar2", "bar2"]

### Constraints

- `1 <= key.length, value.length <= 100`
- `key` and `value` consist of lowercase English letters and digits
- `1 <= timestamp <= 10^7`
- All timestamps of `set` are strictly increasing for the same key
- At most `2 * 10^5` calls will be made to `set` and `get`

## Approach

### Hash Map + Binary Search

Use a hash map where each key maps to a sorted list of [timestamp, value] pairs. Since timestamps are strictly increasing per key, the list is already sorted. Use binary search on `get` to find the largest timestamp ≤ the query.

**Key Insight:** The constraint "all timestamps are strictly increasing" means our list is pre-sorted — no need to sort! This makes `set` O(1) (just append) and `get` O(log n) (binary search).

**Binary search goal:** Find the rightmost timestamp that's ≤ the query timestamp. This is the "find last valid position" binary search pattern — similar to Find First and Last Position (#34) but searching for the rightmost valid entry.

**Algorithm:**

**set(key, value, timestamp):**

1. If key doesn't exist in map, create empty list
2. Append [timestamp, value] to the list

**get(key, timestamp):**

1. If key doesn't exist, return ""
2. Binary search the list for largest timestamp ≤ query:
    - If `mid` timestamp ≤ query → valid, try going right: `left = mid + 1`, save result
    - If `mid` timestamp > query → too new, go left: `right = mid - 1`
3. Return saved result, or "" if nothing found

**Walkthrough:**

    set("foo", "bar", 1)   → map: {"foo": [[1,"bar"]]}
    set("foo", "bar2", 4)  → map: {"foo": [[1,"bar"],[4,"bar2"]]}

    get("foo", 1):
      Binary search [[1,"bar"],[4,"bar2"]] for timestamp ≤ 1
      left=0, right=1, mid=0: timestamp 1 ≤ 1 → save "bar", left=1
      left=1, right=1, mid=1: timestamp 4 > 1 → right=0
      Return "bar" ✓

    get("foo", 3):
      Binary search for timestamp ≤ 3
      left=0, right=1, mid=0: timestamp 1 ≤ 3 → save "bar", left=1
      left=1, right=1, mid=1: timestamp 4 > 3 → right=0
      Return "bar" ✓

    get("foo", 4):
      left=0, right=1, mid=0: timestamp 1 ≤ 4 → save "bar", left=1
      left=1, right=1, mid=1: timestamp 4 ≤ 4 → save "bar2", left=2
      Return "bar2" ✓

    get("foo", 5):
      left=0, right=1, mid=0: 1 ≤ 5 → save "bar", left=1
      mid=1: 4 ≤ 5 → save "bar2", left=2
      Return "bar2" ✓

**Comparison with other design + binary search problems:**

- Trie (#208): Design with character-by-character traversal
- RandomizedSet (#380): Design with array + hash map
- TimeMap (#981): Design with hash map + binary search

**Time Complexity:** set O(1), get O(log n) where n is entries for that key  
**Space Complexity:** O(total entries)

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Pre-sorted data (increasing timestamps) means no sorting needed — just append
- Binary search for "rightmost value ≤ target" — save result when valid, keep going right
- Combines hash map (per-key storage) with binary search (efficient lookup)
- Practical design — this is how versioned databases and caches work
- Real-world application of binary search beyond searching arrays
