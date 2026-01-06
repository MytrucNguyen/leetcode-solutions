# 125. Valid Palindrome

**Difficulty:** Easy  
**Topics:** String, Two Pointers  
**Link:** [LeetCode Problem](https://leetcode.com/problems/valid-palindrome/)

## Problem Description

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

### Examples

**Example 1:**
```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

**Example 2:**
```
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

**Example 3:**
```
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
```

### Constraints

- `1 <= s.length <= 2 * 10^5`
- `s` consists only of printable ASCII characters.

## Approach

### Two Pointers Solution

Use two pointers - one at the start, one at the end, and move them toward each other:
```
"racecar"
 ↑     ↑
 L     R

Compare L and R:
- If they match → move both pointers inward
- If they don't match → NOT a palindrome
- If pointers meet/cross → It's a palindrome!
```

**Example Walkthrough:**
```
"racecar"
 ↓     ↓
 L     R    r == r ✓ Move inward

"racecar"
  ↓   ↓
  L   R     a == a ✓ Move inward

"racecar"
   ↓ ↓
   LR       c == c ✓ Move inward

Pointers crossed → Palindrome!
```

For this problem, skip non-alphanumeric characters (spaces, punctuation) and compare valid characters in a case-insensitive manner.

**Time Complexity:** O(n) - Single pass through the string  
**Space Complexity:** O(1) - Only using two pointers

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Two-pointer technique is efficient for palindrome checking without creating a reversed string
- Skipping invalid characters while moving pointers saves space
- Case-insensitive comparison and alphanumeric validation are key to this problem
- Alphanumeric check can be done with regex (`/[a-zA-Z0-9]/`) or character code ranges
- Always check that pointers haven't crossed before comparing