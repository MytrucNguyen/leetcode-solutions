# 345. Reverse Vowels of a String

**Difficulty:** Easy  
**Topics:** Two Pointers, String  
**Link:** [LeetCode Problem](https://leetcode.com/problems/reverse-vowels-of-a-string/)

## Problem Description

Given a string `s`, reverse only all the vowels in the string and return it.

The vowels are `'a'`, `'e'`, `'i'`, `'o'`, `'u'`, and they can appear in both lower and upper cases, more than once.

### Examples

**Example 1:**

    Input: s = "IcesCreAm"
    Output: "AcesCreIm"

**Example 2:**

    Input: s = "leetcode"
    Output: "leotcede"

### Constraints

- `1 <= s.length <= 3 * 10^5`
- `s` consist of printable ASCII characters

## Approach

### Two Pointers — Swap Vowels from Both Ends

Left pointer finds the next vowel from the start, right pointer finds the next vowel from the end. Swap them and move inward.

**Key Insight:** Same left/right two-pointer pattern as Two Sum II (#167), Container With Most Water (#11), and Valid Palindrome (#125). Instead of comparing values, we find and swap vowels.

**Algorithm:**

1. Convert string to array (strings are immutable in JS/TS)
2. Set `left = 0`, `right = length - 1`
3. While `left < right`:
    - Move left forward until it's a vowel
    - Move right backward until it's a vowel
    - If `left < right` → swap them
    - Move both inward
4. Join array back to string

**Walkthrough:**

    s = "leetcode"
    chars = ['l','e','e','t','c','o','d','e']
    vowels = {a, e, i, o, u, A, E, I, O, U}

    left=0: 'l' not vowel → left=1
    left=1: 'e' is vowel ✓
    right=7: 'e' is vowel ✓
    Swap: ['l','e','e','t','c','o','d','e'] → ['l','e','e','t','c','o','d','e']
    Wait, both are 'e' so no visible change. left=2, right=6

    left=2: 'e' is vowel ✓
    right=6: 'd' not vowel → right=5
    right=5: 'o' is vowel ✓
    Swap: ['l','e','o','t','c','e','d','e'] → swap index 2 and 5
    left=3, right=4

    left=3: 't' not vowel → left=4
    left=4: 'c' not vowel → left=5
    left=5 > right=4 → stop

    Result: "leotcede" ✓

**Time Complexity:** O(n) — each pointer moves at most n times  
**Space Complexity:** O(n) — character array (strings are immutable)

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Same two-pointer from-both-ends pattern used across many problems
- Use a Set for O(1) vowel checking — don't forget uppercase!
- Convert to array since strings are immutable in JS/TS/Python
- Skip non-vowels, swap vowels — simple and clean
