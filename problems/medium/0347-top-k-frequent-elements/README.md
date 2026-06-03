# 347. Top K Frequent Elements

**Difficulty:** Medium  
**Topics:** Array, Hash Table, Divide and Conquer, Sorting, Heap, Bucket Sort, Counting, Quickselect  
**Link:** [LeetCode Problem](https://leetcode.com/problems/top-k-frequent-elements/)

## Problem Description

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in **any order**.

### Examples

**Example 1:**
```
Input: nums = [1, 1, 1, 2, 2, 3], k = 2
Output: [1, 2]
```

**Example 2:**
```
Input: nums = [1], k = 1
Output: [1]
```

### Constraints

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`
- `k` is in the range `[1, the number of unique elements in the array]`
- It is guaranteed that the answer is unique

**Follow up:** Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

## Approach

### Sort by Frequency (Simple)
Count frequencies with a hash map, then sort by frequency.
- **Time Complexity:** O(n log n) — doesn't meet the follow-up requirement
- **Space Complexity:** O(n)

### Bucket Sort (Optimal)
Use the frequency as an index into a bucket array. The maximum possible frequency is `nums.length`, so create that many buckets. Then collect elements from the highest frequency buckets.

**Key Insight:** Instead of sorting by frequency (O(n log n)), use bucket sort where the index IS the frequency. Since frequency ranges from 1 to n, we can create an array of n+1 buckets and place each number in its frequency bucket. Then walk backwards from the highest bucket to collect the top k.

**Algorithm:**
1. Count frequency of each number using a hash map
2. Create a bucket array of size `nums.length + 1`
3. Place each number in the bucket matching its frequency
4. Walk the buckets from highest to lowest, collecting elements until we have k

**Walkthrough:**
```
nums = [1, 1, 1, 2, 2, 3], k = 2

Step 1 — Count frequencies:
  {1: 3, 2: 2, 3: 1}

Step 2 — Create buckets (index = frequency):
  bucket[0]: []
  bucket[1]: [3]      ← 3 appears 1 time
  bucket[2]: [2]      ← 2 appears 2 times
  bucket[3]: [1]      ← 1 appears 3 times
  bucket[4]: []
  bucket[5]: []
  bucket[6]: []

Step 3 — Collect from highest bucket down:
  bucket[6]: empty, skip
  bucket[5]: empty, skip
  bucket[4]: empty, skip
  bucket[3]: [1] → result = [1], need 1 more
  bucket[2]: [2] → result = [1, 2], got k=2!

Return [1, 2] ✓
```
```
nums = [4, 4, 4, 1, 1, 2, 2, 3], k = 2

Step 1 — Count: {4: 3, 1: 2, 2: 2, 3: 1}

Step 2 — Buckets:
  bucket[1]: [3]
  bucket[2]: [1, 2]    ← both have frequency 2
  bucket[3]: [4]

Step 3 — Collect from back:
  bucket[3]: [4] → result = [4]
  bucket[2]: [1, 2] → result = [4, 1], got k=2!

Return [4, 1] ✓
```

**Why bucket sort works here:** The key constraint is that frequency is bounded by array length. This lets us use the frequency as an index, turning a sort operation into a linear scan.

**Time Complexity:** O(n) - Counting is O(n), bucket creation is O(n), collection is O(n)  
**Space Complexity:** O(n) - Hash map and bucket array

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Bucket sort achieves O(n) when the range of values is bounded
- Using frequency as an index is a clever way to avoid sorting
- This builds on frequency counting from Valid Anagram (#242) and First Unique Character (#387)
- The "count then bucket" pattern is useful for any top-k frequency problem
- Walking buckets from high to low gives elements in frequency order for free