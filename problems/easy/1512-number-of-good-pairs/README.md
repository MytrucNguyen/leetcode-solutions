# 1512. Number of Good Pairs

**Difficulty:** Easy  
**Topics:** Array, Hash Table, Math, Counting  
**Link:** [LeetCode Problem](https://leetcode.com/problems/number-of-good-pairs/)

## Problem Description

Given an array of integers `nums`, return the number of **good pairs**.

A pair `(i, j)` is called good if `nums[i] == nums[j]` and `i < j`.

### Examples

**Example 1:**
```
Input: nums = [1, 2, 3, 1, 1, 3]
Output: 4
Explanation: The 4 good pairs are (0,3), (0,4), (3,4), (2,5).
```

**Example 2:**
```
Input: nums = [1, 1, 1, 1]
Output: 6
Explanation: Every pair of indices is good. 4 choose 2 = 6.
```

**Example 3:**
```
Input: nums = [1, 2, 3]
Output: 0
Explanation: No duplicates, so no good pairs.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Approach

### Count as You Go

Track the frequency of each number. When you encounter a number that's appeared `n` times before, it forms `n` new pairs with all previous occurrences.

**Key Insight:** You don't need to check every pair. Each time you see a number, the count of new pairs equals how many times you've seen it before. This is because each previous occurrence forms exactly one new pair with the current one.

**Algorithm:**
1. Create a hash map to track counts
2. For each number:
   - Add the current count of that number to total pairs (this is how many new pairs it forms)
   - Increment the count
3. Return total pairs

**Walkthrough:**
```
nums = [1, 2, 3, 1, 1, 3]

num=1: count=0, pairs += 0, total=0  → counts: {1: 1}
num=2: count=0, pairs += 0, total=0  → counts: {1: 1, 2: 1}
num=3: count=0, pairs += 0, total=0  → counts: {1: 1, 2: 1, 3: 1}
num=1: count=1, pairs += 1, total=1  → counts: {1: 2, 2: 1, 3: 1}
num=1: count=2, pairs += 2, total=3  → counts: {1: 3, 2: 1, 3: 1}
num=3: count=1, pairs += 1, total=4  → counts: {1: 3, 2: 1, 3: 2}

Return 4 ✓
```

**Why does this work mathematically?**
If a number appears `n` times, the total pairs is `n * (n-1) / 2` (n choose 2). By adding the count each time we see it, we build up to this same result incrementally: `0 + 1 + 2 + ... + (n-1) = n*(n-1)/2`.

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(n) - Hash map storing counts

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Counting pairs incrementally avoids O(n²) brute force
- Each new occurrence of a number forms pairs with ALL previous occurrences
- The pattern of "add current count then increment" is elegant and efficient
- Mathematically equivalent to n choose 2 for each group of duplicates