# 763. Partition Labels

**Difficulty:** Medium  
**Topics:** String, Hash Table, Two Pointers, Greedy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/partition-labels/)

## Problem Description

You are given a string `s`. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Return a list of integers representing the size of these parts.

### Examples

**Example 1:**

    Input: s = "ababcbacadefegdehijhklij"
    Output: [9, 7, 8]
    Explanation:
      "ababcbaca" | "defegde" | "hijhklij"
      Each letter appears in at most one partition.

**Example 2:**

    Input: s = "eccbbbbdec"
    Output: [10]
    Explanation: The whole string is one partition because 'e' appears at both ends.

### Constraints

- `1 <= s.length <= 500`
- `s` consists of lowercase English letters

## Approach

### Two-Pass Greedy with Last Occurrence

**Pass 1:** Record the last index of each character.  
**Pass 2:** Walk through the string, greedily extending the current partition's end to the furthest last-occurrence of any character seen so far. When we reach that end, close the partition.

**Key Insight:** A partition must include every character's last occurrence. So as we walk through, the partition's end must be at least the furthest last-occurrence of any character seen so far. When the current index equals this end, we've covered everything — close the partition.

**Algorithm:**
1. Loop through string, record last index of each character in a map
2. Initialize `start = 0` and `end = 0`
3. Loop through string with index `i`:
   - Extend `end` to `max(end, lastIndex[s[i]])`
   - If `i === end`, partition ends here:
     - Add `end - start + 1` to result
     - Move `start = i + 1` for next partition
4. Return result

**Walkthrough:**

    s = "ababcbacadefegdehijhklij"

    Pass 1 — last indices:
    a: 8, b: 5, c: 7, d: 14, e: 15, f: 11,
    g: 13, h: 19, i: 22, j: 23, k: 20, l: 21

    Pass 2:
    start=0, end=0

    i=0: 'a' → end = max(0, 8) = 8
    i=1: 'b' → end = max(8, 5) = 8
    i=2: 'a' → end = 8
    i=3: 'b' → end = 8
    i=4: 'c' → end = max(8, 7) = 8
    i=5: 'b' → end = 8
    i=6: 'a' → end = 8
    i=7: 'c' → end = 8
    i=8: 'a' → end = 8, i === end → partition! size = 8-0+1 = 9
                   start = 9

    i=9: 'd' → end = max(8, 14) = 14
    i=10: 'e' → end = max(14, 15) = 15
    i=11: 'f' → end = 15
    i=12: 'e' → end = 15
    i=13: 'g' → end = 15
    i=14: 'd' → end = 15
    i=15: 'e' → end = 15, i === end → partition! size = 15-9+1 = 7
                   start = 16

    i=16: 'h' → end = 19
    i=17: 'i' → end = 22
    i=18: 'j' → end = 23
    ...
    i=23: 'j' → end = 23, i === end → partition! size = 23-16+1 = 8

    Return [9, 7, 8] ✓

    s = "eccbbbbdec"

    Pass 1: e:9, c:8, b:6, d:7

    Pass 2:
    i=0: 'e' → end=9
    i=1..8: continuing, never matches end
    i=9: 'c'... wait, 'c' last is 8. But end is already 9 because of 'e'.
    
    Actually let me retrace:
    i=0: 'e' → end=9
    i=1: 'c' → end=max(9,8)=9
    i=2: 'c' → end=9
    i=3: 'b' → end=max(9,6)=9
    ...
    i=9: 'c' → end=9, i===end → partition! size=10

    Return [10] ✓

**Why greedy works:** We always extend the partition to cover all seen characters' last occurrences. When `i === end`, we've seen every character that needs to be in this partition, so it's safe to close.

**Time Complexity:** O(n) - Two passes through the string  
**Space Complexity:** O(1) - At most 26 characters in the map

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Two-pass greedy: first learn the "deadline" of each character, then extend partitions
- Tracking the furthest last-occurrence is how we know when we can close a partition
- This "extend end to include more" pattern is a classic greedy technique
- Similar in spirit to Merge Intervals (#56) — extend until you can't anymore
- Understanding the insight (`end = furthest last occurrence`) is key