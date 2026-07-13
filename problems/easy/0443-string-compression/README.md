# 443. String Compression

**Difficulty:** Medium  
**Topics:** Two Pointers, String  
**Link:** [LeetCode Problem](https://leetcode.com/problems/string-compression/)

## Problem Description

Given an array of characters `chars`, compress it using the following algorithm:

Begin with an empty string `s`. For each group of consecutive repeating characters in `chars`:

- If the group's length is 1, append the character to `s`
- Otherwise, append the character followed by the group's length

The compressed string `s` should not be returned separately, but instead be stored in the input character array `chars`. Group lengths that are 10 or longer will be split into multiple characters in `chars`.

After you are done modifying the input array, return the new length of the array.

You must do this with only constant extra space.

### Examples

**Example 1:**

    Input: chars = ["a","a","b","b","c","c","c"]
    Output: 6, chars = ["a","2","b","2","c","3"]

**Example 2:**

    Input: chars = ["a"]
    Output: 1, chars = ["a"]

**Example 3:**

    Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
    Output: 4, chars = ["a","b","1","2"]
    Explanation: "b" appears 12 times → "b","1","2"

### Constraints

- `1 <= chars.length <= 2000`
- `chars[i]` is a lowercase English letter, uppercase English letter, digit, or symbol

## Approach

### Two Pointers — Read and Write

Use a read pointer to scan groups of consecutive characters and a write pointer to fill in the compressed result in-place.

**Key Insight:** The write pointer always stays behind or at the read pointer, so we never overwrite data we haven't read yet. This makes in-place modification safe.

**Algorithm:**

1. Set `write = 0`, `read = 0`
2. While `read < length`:
    - Record current character
    - Count consecutive occurrences (advance read)
    - Write the character at write pointer
    - If count > 1, write each digit of the count
3. Return write (new length)

**Multi-digit counts:** Convert count to string, write each character individually. "12" becomes "1", "2".

**Walkthrough:**

    chars = ["a","a","b","b","c","c","c"]
    write=0, read=0

    Group 'a': count=2, read=2
      Write 'a' at 0, write=1
      Count > 1: write '2' at 1, write=2

    Group 'b': count=2, read=4
      Write 'b' at 2, write=3
      Write '2' at 3, write=4

    Group 'c': count=3, read=7
      Write 'c' at 4, write=5
      Write '3' at 5, write=6

    chars = ["a","2","b","2","c","3"]
    Return 6 ✓

    chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
    write=0, read=0

    Group 'a': count=1, read=1
      Write 'a' at 0, write=1
      Count is 1 → don't write count

    Group 'b': count=12, read=13
      Write 'b' at 1, write=2
      Count 12 → "12" → write '1' at 2, '2' at 3, write=4

    Return 4 ✓

**Time Complexity:** O(n) — read each character once  
**Space Complexity:** O(1) — in-place modification, only pointers

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Read pointer scans groups, write pointer fills compressed result
- Write never overtakes read — in-place is safe
- Count of 1 is not written (only the character)
- Multi-digit counts are written digit by digit
- Convert count to string for easy digit-by-digit writing
