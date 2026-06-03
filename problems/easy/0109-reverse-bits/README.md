# 190. Reverse Bits

**Difficulty:** Easy  
**Topics:** Divide and Conquer, Bit Manipulation  
**Link:** [LeetCode Problem](https://leetcode.com/problems/reverse-bits/)

## Problem Description

Reverse bits of a given 32 bits unsigned integer.

**Note:**
- Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
- In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in **Example 2** below, the input represents the signed integer `-3` and the output represents the signed integer `-1073741825`.

### Examples

**Example 1:**
```
Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
```

**Example 2:**
```
Input: n = 11111111111111111111111111111101
Output:   3221225471 (10111111111111111111111111111111)
Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.
```

### Constraints

- The input must be a binary string of length 32

**Follow up:** If this function is called many times, how would you optimize it?

## Understanding the Problem

Reverse the order of bits in a 32-bit number.

**Simple example (8 bits):**
```
Original: 10110001
          ↓↓↓↓↓↓↓↓
Reversed: 10001101

First bit becomes last bit
Last bit becomes first bit
```

**Like reversing a string:** `"hello"` → `"olleh"`

## Approach

### Bit Manipulation - Process One Bit at a Time

Process each of the 32 bits from right to left, building the reversed result.

**Algorithm:**

1. Initialize `result = 0`
2. For each of the 32 bits:
   - Shift `result` left to make room: `result << 1`
   - Extract rightmost bit from `n`: `n & 1`
   - Add this bit to `result`: `result | bit`
   - Shift `n` right to process next bit: `n >>> 1`
3. Return `result`

**Key insight:** By shifting result left BEFORE adding the bit, we avoid needing a special case for the last iteration.

**Bit Operations Used:**
- `result << 1`: Makes room for next bit (left shift)
- `n & 1`: Gets the rightmost bit (AND with 1)
- `result | bit`: Adds bit to result (OR)
- `n >>> 1`: Removes rightmost bit (unsigned right shift)

**Time Complexity:** O(1) - Always process exactly 32 bits  
**Space Complexity:** O(1) - Only a few variables

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Bit manipulation processes numbers at the binary level
- Use `&` to extract specific bits
- Use `>>` or `>>>` to shift bits right (remove)
- Use `<<` to shift bits left (make room)
- Use `|` to combine bits
- Shifting result left BEFORE adding bit eliminates edge cases
- Fixed number of iterations (32) makes it O(1) time
- Foundation for more complex bit manipulation problems