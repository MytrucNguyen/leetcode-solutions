# 1071. Greatest Common Divisor of Strings

**Difficulty:** Easy  
**Topics:** Math, String  
**Link:** [LeetCode Problem](https://leetcode.com/problems/greatest-common-divisor-of-strings/)

## Problem Description

For two strings `s` and `t`, we say "`t` divides `s`" if and only if `s = t + t + t + ... + t` (i.e., `t` is concatenated with itself one or more times).

Given two strings `str1` and `str2`, return the largest string `x` such that `x` divides both `str1` and `str2`.

### Examples

**Example 1:**

    Input: str1 = "ABCABC", str2 = "ABC"
    Output: "ABC"

**Example 2:**

    Input: str1 = "ABABAB", str2 = "ABAB"
    Output: "AB"

**Example 3:**

    Input: str1 = "LEET", str2 = "CODE"
    Output: ""

### Constraints

- `1 <= str1.length, str2.length <= 1000`
- `str1` and `str2` consist of English uppercase letters

## Approach

### GCD of Lengths + Concatenation Check

Two insights make this elegant:

1. If a GCD string exists, `str1 + str2 === str2 + str1` (they're built from the same base)
2. The GCD string length is `gcd(len1, len2)` — same math as number GCD!

**Key Insight #1 — The concatenation check:** If str1 and str2 are both made from the same repeating pattern, then `str1 + str2` and `str2 + str1` produce the same string. If they don't match, no GCD exists.

    "ABCABC" + "ABC" = "ABCABCABC"
    "ABC" + "ABCABC" = "ABCABCABC"
    Same! → GCD exists ✓

    "LEET" + "CODE" = "LEETCODE"
    "CODE" + "LEET" = "CODELEET"
    Different! → No GCD ✗

**Key Insight #2 — GCD of lengths:** If a pattern of length `k` divides both strings, then `k` divides both `len1` and `len2`. The LARGEST such `k` is `gcd(len1, len2)`. So the GCD string is just the prefix of that length.

**Algorithm:**

1. If `str1 + str2 !== str2 + str1` → return ""
2. Calculate `g = gcd(str1.length, str2.length)`
3. Return `str1.substring(0, g)`

**Euclidean GCD algorithm:**

    gcd(a, b):
      while b !== 0:
        [a, b] = [b, a % b]
      return a

    gcd(6, 4) → gcd(4, 2) → gcd(2, 0) → 2

**Walkthrough:**

    str1 = "ABABAB" (length 6), str2 = "ABAB" (length 4)

    Check: "ABABABABAB" === "ABABABABAB" ✓
    gcd(6, 4) = 2
    Return str1[0..1] = "AB" ✓

    str1 = "ABCABC" (length 6), str2 = "ABC" (length 3)

    Check: "ABCABCABC" === "ABCABCABC" ✓
    gcd(6, 3) = 3
    Return str1[0..2] = "ABC" ✓

    str1 = "LEET", str2 = "CODE"

    Check: "LEETCODE" !== "CODELEET" ✗
    Return "" ✓

**Time Complexity:** O(n + m) — concatenation and comparison  
**Space Complexity:** O(n + m) — concatenated strings

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Concatenation check (`s1+s2 === s2+s1`) proves a common divisor exists
- GCD of string lengths gives the divisor length — same math as number GCD
- Euclidean algorithm for GCD: `gcd(a, b) = gcd(b, a % b)`
- Elegant three-line solution that combines string insight with number theory
