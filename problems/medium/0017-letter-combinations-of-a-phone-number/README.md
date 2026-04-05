# 17. Letter Combinations of a Phone Number

**Difficulty:** Medium  
**Topics:** String, Hash Table, Backtracking  
**Link:** [LeetCode Problem](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

## Problem Description

Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in **any order**.

A mapping of digits to letters (just like on telephone buttons):

2 → abc 3 → def 4 → ghi
5 → jkl 6 → mno 7 → pqrs
8 → tuv 9 → wxyz

### Examples

**Example 1:**
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

**Example 2:**
Input: digits = ""
Output: []

**Example 3:**
Input: digits = "2"
Output: ["a","b","c"]

### Constraints

- `0 <= digits.length <= 4`
- `digits[i]` is a digit in the range `['2', '9']`

## Approach

### Backtracking — Try Each Letter Per Digit

At each digit position, try every letter that digit maps to. Recurse to the next digit. When you've processed all digits, add the combination to results.

**Key Insight:** This is the same backtracking pattern as the other three — but instead of include/skip (Subsets), pick unused (Permutations), or ( vs ) (Parentheses), you pick which letter represents each digit. Each digit has 3-4 choices.

**Algorithm:**

1. Create a mapping of digit → letters
2. Start with empty string and index 0
3. At each index, get the letters for that digit
4. Try each letter → add it, recurse to next index
5. Base case: index equals digits length → add combination to results
6. Return all results

**Walkthrough:**
digits = "23"
mapping: 2→"abc", 3→"def"
backtrack(index=0, current="")
Digit '2' → letters "abc"
Try 'a': backtrack(1, "a")
Digit '3' → letters "def"
Try 'd': backtrack(2, "ad") → length=2=digits.length → add "ad" ✓
Try 'e': backtrack(2, "ae") → add "ae" ✓
Try 'f': backtrack(2, "af") → add "af" ✓
Try 'b': backtrack(1, "b")
Try 'd': → add "bd" ✓
Try 'e': → add "be" ✓
Try 'f': → add "bf" ✓
Try 'c': backtrack(1, "c")
Try 'd': → add "cd" ✓
Try 'e': → add "ce" ✓
Try 'f': → add "cf" ✓
Result: ["ad","ae","af","bd","be","bf","cd","ce","cf"] ✓

**The backtracking family:**

- Subsets (#78): include/skip → 2^n results
- Permutations (#46): pick unused → n! results
- Parentheses (#22): ( or ) with constraints → Catalan number results
- Phone Number (#17): pick letter per digit → 3^n to 4^n results

**Time Complexity:** O(4^n) where n is digits length — worst case 4 letters per digit (7 and 9)  
**Space Complexity:** O(n) — recursion depth

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Same backtracking pattern: at each position, try all valid choices and recurse
- The phone mapping is just a lookup table — the algorithm doesn't change
- String concatenation in recursion is clean — no need to push/pop like arrays
- This completes the four classic backtracking problems
- The pattern generalizes to any problem with "choices at each step"
