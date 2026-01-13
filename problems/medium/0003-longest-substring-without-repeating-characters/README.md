# 3. Longest Substring Without Repeating Characters

**Difficulty:** Medium  
**Topics:** Hash Table, String, Sliding Window  
**Link:** [LeetCode Problem](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## Problem Description

Given a string `s`, find the length of the **longest substring** without repeating characters.

### Examples

**Example 1:**
```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

**Example 2:**
```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

**Example 3:**
```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

### Constraints

- `0 <= s.length <= 5 * 10^4`
- `s` consists of English letters, digits, symbols and spaces.

## Understanding Substring vs Subsequence

- **Substring:** Must be continuous characters (e.g., "abc" from "abcdef")
- **Subsequence:** Can skip characters but maintains order (e.g., "ace" from "abcdef")

For this problem, we need continuous characters only (substring).

## Understanding Sliding Window

**Sliding Window** is a technique where you maintain a "window" (a range) that slides across the data structure.

Think of it like looking through a **physical window** that you can:
- **Expand** to the right (see more characters)
- **Shrink** from the left (see fewer characters)

The window always shows a **continuous substring**.

**Visual:**
```
"a b c a b c b b"
[---]              Window shows "abc"
  [---]            Slide right, shows "bca"
    [---]          Slide right, shows "cab"
```

**Two Pointers:**
```
"abcabcbb"
 ↑     ↑
left  right

Window = everything between left and right (inclusive)
```

- **left pointer** = Start of the window
- **right pointer** = End of the window (expands every iteration)

## Approach

### Sliding Window with Set

Use two pointers to maintain a window of unique characters. The window expands to the right and shrinks from the left when duplicates are found.

**Algorithm:**

1. Initialize `left = 0`, `maxLength = 0`, and an empty `Set`
2. For each character at position `right` (from 0 to end):
   - **While** the character at `right` is already in the set:
     - Remove character at `left` from set
     - Move `left` forward (shrink window)
   - Add character at `right` to set
   - Update `maxLength` with current window size: `right - left + 1`
3. Return `maxLength`

**Example Walkthrough for "abcabcbb":**
```
Step 1: right=0
"a b c a b c b b"
 ↑
left=0, right=0
Window: "a", Set: {a}, Length: 1, Max: 1

Step 2: right=1
"a b c a b c b b"
 ↑ ↑
left right
Window: "ab", Set: {a,b}, Length: 2, Max: 2

Step 3: right=2
"a b c a b c b b"
 ↑   ↑
left right
Window: "abc", Set: {a,b,c}, Length: 3, Max: 3

Step 4: right=3 (duplicate 'a' found!)
"a b c a b c b b"
 ↑     ↑
left  right
'a' is in set! Shrink window:
  Remove 'a' at left, move left → left=1
Window: "bca", Set: {b,c,a}, Length: 3, Max: 3

Step 5: right=4 (duplicate 'b' found!)
"a b c a b c b b"
   ↑     ↑
  left  right
'b' is in set! Shrink window:
  Remove 'b' at left, move left → left=2
Window: "cab", Set: {c,a,b}, Length: 3, Max: 3

... and so on
```

**Key Insight:** Instead of restarting when you find a duplicate, just shrink the window from the left until the duplicate is gone. This ensures O(n) time complexity because:
- Each character is added once (right pointer)
- Each character is removed at most once (left pointer)

**Time Complexity:** O(n) - Each character visited at most twice (once by right, once by left)  
**Space Complexity:** O(min(n, m)) - Where m is the size of the character set (at most 128 ASCII characters)

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Sliding window is perfect for subarray/substring problems with constraints
- Two pointers (left and right) maintain a valid window
- Set provides O(1) lookup to check for duplicates
- Shrink window when constraint is violated, expand when valid
- This pattern appears in many string/array problems
- Window size = right - left + 1