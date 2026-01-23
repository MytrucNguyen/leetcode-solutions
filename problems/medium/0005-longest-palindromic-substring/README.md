# 5. Longest Palindromic Substring

**Difficulty:** Medium  
**Topics:** String, Dynamic Programming  
**Link:** [LeetCode Problem](https://leetcode.com/problems/longest-palindromic-substring/)

## Problem Description

Given a string `s`, return the longest palindromic substring in `s`.

### Examples

**Example 1:**
```
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
```

**Example 2:**
```
Input: s = "cbbd"
Output: "bb"
```

### Constraints

- `1 <= s.length <= 1000`
- `s` consist of only digits and English letters.

## Understanding Palindromes

A **palindrome** reads the same forwards and backwards.

**Examples:**
```
"aba" → forwards: aba, backwards: aba ✓
"racecar" → forwards: racecar, backwards: racecar ✓
"hello" → forwards: hello, backwards: olleh ✗
"bb" → forwards: bb, backwards: bb ✓
"a" → palindrome (single character) ✓
```

**For this problem:**
Find the longest substring in `s` that is a palindrome.

**Example:**
```
s = "babad"

Palindromic substrings:
"b" → length 1
"a" → length 1
"bab" → length 3 ✓
"aba" → length 3 ✓
"d" → length 1

Longest: "bab" or "aba" (both valid, same length)
```

## Approach

### Expand Around Center

The key insight: A palindrome mirrors around its center. We can find palindromes by expanding outward from each possible center.

**Algorithm:**

1. For each position in the string, treat it as a potential center
2. Expand outward while characters match on both sides
3. Track the longest palindrome found

**Two types of centers:**

**Odd-length palindromes:** Single character center
```
"racecar"
    ↑
  center = 'e'
Expand: r ← a ← c ← e → c → a → r
```

**Even-length palindromes:** Between two characters
```
"abba"
   ↑↑
center between the two b's
Expand: a ← b b → a
```

### Step-by-Step for "babad"

**Try center at index 0 ('b'):**
```
b a b a d
↑
Odd: Just 'b' → length 1
Even: 'b' and 'a' don't match → length 0
```

**Try center at index 1 ('a'):**
```
b a b a d
  ↑
Odd: 'a' alone → length 1
     'b' ← 'a' → 'b' → match! → "bab" → length 3 ✓
     'nothing' ← 'b' → 'a' → stop
Even: 'a' and 'b' don't match → length 0
```

**Try center at index 2 ('b'):**
```
b a b a d
    ↑
Odd: 'b' alone → length 1
     'a' ← 'b' → 'a' → match! → "aba" → length 3 ✓
     'b' ← 'a' → 'd' → don't match → stop
Even: 'b' and 'a' don't match → length 0
```

**Try center at index 3 ('a'):**
```
b a b a d
      ↑
Odd: 'a' alone → length 1
     'b' ← 'a' → 'd' → don't match → stop
Even: 'a' and 'd' don't match → length 0
```

**Try center at index 4 ('d'):**
```
b a b a d
        ↑
Odd: Just 'd' → length 1
Even: No character to the right → length 0
```

**Result:** Longest palindrome = "bab" or "aba" (length 3)

### Visual of Expanding
```
s = "babad"
      ↑
   center at 'b' (index 2)

Step 1: Check just center
b a b a d
    ↑
Length = 1, palindrome = "b"

Step 2: Expand outward once
b a b a d
  ← ↑ →
  a   a (match!)
Length = 3, palindrome = "aba"

Step 3: Try to expand again
b a b a d
← ← ↑ → →
b     d (don't match!)
Stop expanding

Final: "aba" with length 3
```

### Helper Function: Expand Around Center

We need a helper function that:
1. Takes left and right pointers (starting at center)
2. Expands while characters match and indices are valid
3. Returns the length of the palindrome found
```typescript
function expandAroundCenter(s: string, left: number, right: number): number {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    // Return length of palindrome
    return right - left - 1;
}
```

**Why `right - left - 1`?**
When the loop exits, left and right have gone one step too far, so we need to adjust.

### Main Algorithm
```typescript
1. Initialize variables to track the longest palindrome:
   - start position
   - max length

2. For each index i in string:
   - Check odd-length palindrome (center at i)
   - Check even-length palindrome (center between i and i+1)
   - If either is longer than current max, update

3. Return substring from start position with max length
```

**Example for "cbbd":**
```
Index 0 ('c'):
  Odd: "c" → length 1
  Even: "c" and "b" → length 0

Index 1 ('b'):
  Odd: "b" → length 1
  Even: "bb" → length 2 ✓

Index 2 ('b'):
  Odd: "b" → length 1
  Even: "b" and "d" → length 0

Index 3 ('d'):
  Odd: "d" → length 1

Longest: "bb" at index 1, length 2
```

**Time Complexity:** O(n²) - For each of n centers, we expand up to n times  
**Space Complexity:** O(1) - Only use a few variables

**Alternative Approaches:**
- Dynamic Programming: O(n²) time, O(n²) space
- Manacher's Algorithm: O(n) time but very complex

For this problem, expand-around-center is the best balance of simplicity and efficiency.

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Palindromes mirror around their center
- Two types of centers: odd-length (single char) and even-length (between chars)
- Expand outward from each center while characters match
- Track the longest palindrome's start position and length
- Helper function simplifies the expansion logic
- This approach avoids nested loops by expanding from centers
- Simpler than DP and nearly as efficient