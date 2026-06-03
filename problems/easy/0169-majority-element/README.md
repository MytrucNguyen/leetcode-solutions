# 169. Majority Element

**Difficulty:** Easy  
**Topics:** Array, Hash Table, Divide and Conquer, Sorting, Counting  
**Link:** [LeetCode Problem](https://leetcode.com/problems/majority-element/)

## Problem Description

Given an array `nums` of size `n`, return the majority element.

The majority element is the element that appears **more than ⌊n/2⌋ times**. You may assume that the majority element always exists in the array.

### Examples

**Example 1:**
```
Input: nums = [3,2,3]
Output: 3
```

**Example 2:**
```
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

### Constraints

- `n == nums.length`
- `1 <= n <= 5 * 10^4`
- `-10^9 <= nums[i] <= 10^9`

**Follow up:** Could you solve the problem in linear time and in O(1) space?

## Understanding Majority Element

**Majority element** = appears **more than ⌊n/2⌋ times**

**What does ⌊n/2⌋ mean?**
- Floor division (round down)
- For n = 7: ⌊7/2⌋ = 3, so majority needs > 3 times (at least 4)
- For n = 8: ⌊8/2⌋ = 4, so majority needs > 4 times (at least 5)

**Examples:**
```
[3,2,3]
Length = 3, need > 1.5 times → need at least 2
3 appears 2 times ✓

[2,2,1,1,1,2,2]
Length = 7, need > 3.5 times → need at least 4
2 appears 4 times ✓
1 appears 3 times (not majority)
```

**Key insight:** The majority element appears in MORE than half the positions!

## Approaches

### Approach 1: Hash Map (Counting)

**The straightforward approach:** Count how many times each element appears.

**Algorithm:**

1. Create a hash map to count occurrences
2. Loop through array:
   - For each number, increment its count in the map
3. Loop through map:
   - Find the number with count > n/2
4. Return that number

**Example for [2,2,1,1,1,2,2]:**
```
Step 1: Count occurrences
Process 2: map = { 2: 1 }
Process 2: map = { 2: 2 }
Process 1: map = { 2: 2, 1: 1 }
Process 1: map = { 2: 2, 1: 2 }
Process 1: map = { 2: 2, 1: 3 }
Process 2: map = { 2: 3, 1: 3 }
Process 2: map = { 2: 4, 1: 3 }

Step 2: Find majority
n = 7, need > 3.5
2 appears 4 times (4 > 3.5) ✓
Return 2
```

**Code structure:**
```typescript
function majorityElement(nums: number[]): number {
    const counts = new Map<number, number>();
    
    // Count occurrences
    for (const num of nums) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }
    
    // Find majority
    const majority = Math.floor(nums.length / 2);
    for (const [num, count] of counts) {
        if (count > majority) {
            return num;
        }
    }
    
    return -1; // Never reached (majority always exists)
}
```

**Time Complexity:** O(n) - Two passes through array  
**Space Complexity:** O(n) - Hash map stores up to n distinct elements

---

### Approach 2: Sorting (Middle Element)

**Clever insight:** If an element appears MORE than n/2 times, after sorting it MUST be at the middle!

**Why this works:**
```
Array length = 7, majority appears at least 4 times

Case 1: Majority at beginning
[M,M,M,M,x,x,x]
       ↑
   Index 3 (middle) = M

Case 2: Majority at end
[x,x,x,M,M,M,M]
       ↑
   Index 3 (middle) = M

Case 3: Majority in middle
[x,M,M,M,M,M,x]
       ↑
   Index 3 (middle) = M

No matter the arrangement, the majority element 
ALWAYS occupies the middle position after sorting!
```

**Algorithm:**

1. Sort the array
2. Return the element at index ⌊n/2⌋

**Example for [2,2,1,1,1,2,2]:**
```
Original: [2,2,1,1,1,2,2]

After sorting: [1,1,1,2,2,2,2]

Length = 7
Middle index = Math.floor(7 / 2) = 3

nums[3] = 2 ✓
```

**Code:**
```typescript
function majorityElement(nums: number[]): number {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
}
```

**Time Complexity:** O(n log n) - Sorting dominates  
**Space Complexity:** O(1) - In-place sort (or O(log n) for recursion stack in some sort implementations)

**Pros:**
- Simple and elegant
- Easy to understand
- No extra data structures

---

### Approach 3: Boyer-Moore Voting Algorithm (Optimal!)

**The most clever approach:** Treat finding the majority as a "voting" problem.

**Key insight:** 
- The majority element appears MORE than n/2 times
- We can "cancel out" pairs of different elements
- The majority will always survive!

**The algorithm:**

1. Initialize `candidate = null` and `count = 0`
2. For each element:
   - If `count = 0`, set current element as new candidate
   - If element equals candidate, increment count
   - If element differs from candidate, decrement count
3. Return the candidate

**Why it works:**

Think of it as a battle:
- When we see the candidate, it gains strength (+1)
- When we see a different element, they cancel each other out (-1)
- Because the majority appears MORE than half the time, it will always win!

**Example for [2,2,1,1,1,2,2]:**
```
Initial: candidate = null, count = 0

Process 2:
  count = 0 → New candidate!
  candidate = 2, count = 1

Process 2:
  Same as candidate
  count = 2

Process 1:
  Different from candidate
  count = 1 (decrement)

Process 1:
  Different from candidate
  count = 0 (decrement)

Process 1:
  count = 0 → New candidate!
  candidate = 1, count = 1

Process 2:
  Different from candidate
  count = 0 (decrement)

Process 2:
  count = 0 → New candidate!
  candidate = 2, count = 1

Final: candidate = 2 ✓
```

**Visual of "battles":**
```
[2, 2, 1, 1, 1, 2, 2]

2 vs nothing → 2 wins (count = 1)
2 vs nothing → 2 wins (count = 2)
2 vs 1 → cancel (count = 1)
2 vs 1 → cancel (count = 0)
1 vs nothing → 1 wins (count = 1)
1 vs 2 → cancel (count = 0)
2 vs nothing → 2 wins (count = 1)

Last standing: 2!
```

**Another example [3,3,4]:**
```
Process 3: candidate = 3, count = 1
Process 3: candidate = 3, count = 2
Process 4: candidate = 3, count = 1 (cancel one)

Final: candidate = 3 ✓
(3 appears 2 times, 4 appears 1 time)
```

**Code:**
```typescript
function majorityElement(nums: number[]): number {
    let candidate = 0;
    let count = 0;
    
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        
        count += (num === candidate) ? 1 : -1;
    }
    
    return candidate;
}
```

**Simplified version:**
```typescript
function majorityElement(nums: number[]): number {
    let candidate = 0;
    let count = 0;
    
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }
    
    return candidate;
}
```

**Time Complexity:** O(n) - Single pass  
**Space Complexity:** O(1) - Only two variables

**Pros:**
- Optimal time and space
- Very elegant algorithm
- Classic interview question

---

## Comparison of Approaches

| Approach | Time | Space | Difficulty | Notes |
|----------|------|-------|------------|-------|
| Hash Map | O(n) | O(n) | Easy | Straightforward, easy to understand |
| Sorting | O(n log n) | O(1) | Easy | Clever insight, simple code |
| Boyer-Moore | O(n) | O(1) | Medium | Optimal, elegant, worth learning |

**For interviews:**
- Start with hash map (shows you can solve it)
- Mention sorting (shows creativity)
- Implement Boyer-Moore (shows you know optimal algorithms!)

**Which to use:**
- **Hash Map:** When clarity matters most
- **Sorting:** When you want simple, elegant code
- **Boyer-Moore:** When you need optimal performance

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Majority element appears MORE than ⌊n/2⌋ times (more than half)
- Three valid approaches: hash map, sorting, Boyer-Moore
- Sorting works because majority MUST be at middle position
- Boyer-Moore uses "cancellation" - pairs of different elements cancel out
- Boyer-Moore is optimal: O(n) time, O(1) space
- The problem guarantees a majority exists (no need to verify)
- Understanding multiple solutions shows algorithmic maturity
- Boyer-Moore is a classic algorithm worth memorizing