# 131. Palindrome Partitioning

**Difficulty:** Medium  
**Topics:** String, Dynamic Programming, Backtracking  
**Link:** [LeetCode Problem](https://leetcode.com/problems/palindrome-partitioning/)

## Problem Description

Given a string `s`, partition `s` such that every substring of the partition is a **palindrome**. Return all possible palindrome partitioning of `s`.

### Examples

**Example 1:**

    Input: s = "aab"
    Output: [["a","a","b"], ["aa","b"]]

**Example 2:**

    Input: s = "a"
    Output: [["a"]]

### Constraints

- `1 <= s.length <= 16`
- `s` contains only lowercase English letters

## Approach

### Backtracking — Try Every Palindrome Prefix

At each position, try every possible substring starting here. If it's a palindrome, add it to the current partition and recurse on the remainder. When you reach the end, you've found a valid partition.

**Key Insight:** This is Subsets (#78) meets palindrome checking. At each step, instead of include/skip, you try every possible palindrome-length cut. Only continue if the cut is a palindrome.

**Algorithm:**

1. Start at index 0 with empty partition
2. For each end index from current to string length:
    - Extract substring from current to end
    - If it's a palindrome:
        - Add to current partition
        - Recurse from end
        - Remove (backtrack)
3. When current reaches string length → complete partition, add to results

**Walkthrough:**

    s = "aab"

    backtrack(0, [])
      Try s[0..0] = "a" → palindrome ✓
        backtrack(1, ["a"])
          Try s[1..1] = "a" → palindrome ✓
            backtrack(2, ["a","a"])
              Try s[2..2] = "b" → palindrome ✓
                backtrack(3, ["a","a","b"])
                  index 3 = s.length → add ["a","a","b"] ✓
              Backtrack
            Backtrack
          Try s[1..2] = "ab" → NOT palindrome ✗ skip
        Backtrack
      Try s[0..1] = "aa" → palindrome ✓
        backtrack(2, ["aa"])
          Try s[2..2] = "b" → palindrome ✓
            backtrack(3, ["aa","b"])
              index 3 = s.length → add ["aa","b"] ✓
        Backtrack
      Try s[0..2] = "aab" → NOT palindrome ✗ skip

    Result: [["a","a","b"], ["aa","b"]] ✓

**The backtracking family:**

- Subsets (#78): include/skip each element
- Permutations (#46): pick any unused element
- Parentheses (#22): constrained ( or )
- Phone Number (#17): mapped choices per digit
- Word Search (#79): four directions on grid
- **Palindrome Partitioning (#131): try every palindrome prefix** ✅

**Time Complexity:** O(n × 2^n) — 2^n possible partitions, O(n) to check palindrome  
**Space Complexity:** O(n) — recursion depth and current partition

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Backtracking + palindrome check — two skills combined
- Only recurse when the current substring IS a palindrome — prunes invalid paths early
- Same "choose, recurse, undo" template as all backtracking problems
- The palindrome check acts as the constraint (like parentheses rules in #22)
- Every partition must cover the entire string — reaching the end = valid result
