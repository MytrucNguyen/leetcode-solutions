# 58. Length of Last Word

**Difficulty:** Easy  
**Topics:** String  
**Link:** [LeetCode Problem](https://leetcode.com/problems/length-of-last-word/)

## Problem Description

Given a string `s` consisting of words and spaces, return the length of the **last** word in the string.

A **word** is a maximal substring consisting of non-space characters only.

### Examples

**Example 1:**

    Input: s = "Hello World"
    Output: 5
    Explanation: The last word is "World" with length 5.

**Example 2:**

    Input: s = "   fly me   to   the moon  "
    Output: 4
    Explanation: The last word is "moon" with length 4.

**Example 3:**

    Input: s = "luffy is still joyboy"
    Output: 6
    Explanation: The last word is "joyboy" with length 6.

### Constraints

- `1 <= s.length <= 10^4`
- `s` consists of only English letters and spaces `' '`
- There is at least one word in `s`

## Approach

### Traverse from the End

Walk backwards from the end of the string. Skip trailing spaces, then count characters until you hit a space or the start.

**Key Insight:** Starting from the end is more efficient than splitting the whole string. Skip trailing spaces first, then count until the next space.

**Algorithm:**
1. Start from the end of the string
2. Skip trailing spaces
3. Count characters until you hit a space or the start
4. Return the count

**Walkthrough:**

    s = "   fly me   to   the moon  "

    Start from end (index 27):
    Skip spaces: "  " → i = 25

    Count letters:
    'n' → count=1, i=24
    'o' → count=2, i=23
    'o' → count=3, i=22
    'm' → count=4, i=21
    ' ' → stop!

    Return 4 ✓

**Time Complexity:** O(n) — worst case traverse the whole string  
**Space Complexity:** O(1) — only a counter and index

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Traversing from the end avoids processing the entire string
- Skip trailing spaces first, then count — two simple phases
- Can also be solved with trim + split, but the manual approach is O(1) space