# 9. Palindrome Number

**Difficulty:** Easy  
**Topics:** Math  
**Link:** [LeetCode Problem](https://leetcode.com/problems/palindrome-number/)

## Problem Description

Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

### Examples

**Example 1:**
```
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```

**Example 2:**
```
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

**Example 3:**
```
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

### Constraints

- `-2^31 <= x <= 2^31 - 1`

**Follow up:** Could you solve it without converting the integer to a string?

## Understanding Palindrome Numbers

A **palindrome number** reads the same forwards and backwards.

**Examples:**
```
121 → forwards: 121, backwards: 121 ✓
-121 → forwards: -121, backwards: 121- ✗
10 → forwards: 10, backwards: 01 ✗
0 → forwards: 0, backwards: 0 ✓
```

**Key observations:**

1. **Negative numbers are NEVER palindromes**
   - The minus sign is only at the front
   - `-121` backwards is `121-`, not the same

2. **Numbers ending in 0 are NOT palindromes** (except 0 itself)
   - `10` backwards is `01` = `1`, not the same
   - `100` backwards is `001` = `1`, not the same
   - `0` is the only exception

## Approaches

### Approach 1: String Conversion (Simple)

**The straightforward approach:** Convert to string, reverse, and compare.

**Algorithm:**

1. Convert number to string
2. Reverse the string
3. Compare original with reversed
4. Return true if equal, false otherwise

**Example for x = 121:**
```
Step 1: Convert to string
x = 121 → str = "121"

Step 2: Reverse string
"121" → "121"

Step 3: Compare
"121" === "121" → true ✓
```

**Example for x = -121:**
```
Step 1: Convert to string
x = -121 → str = "-121"

Step 2: Reverse string
"-121" → "121-"

Step 3: Compare
"-121" === "121-" → false ✓
```

**Example for x = 10:**
```
Step 1: Convert to string
x = 10 → str = "10"

Step 2: Reverse string
"10" → "01"

Step 3: Compare
"10" === "01" → false ✓
```

**Code:**
```typescript
function isPalindrome(x: number): boolean {
    const str = x.toString();
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
```

**Time Complexity:** O(n) where n is number of digits  
**Space Complexity:** O(n) - Creates string

**Pros:**
- Very simple and clean
- Easy to understand
- Handles all edge cases automatically

---

### Approach 2: Mathematical Reversal (Follow-up)

**Without converting to string:** Reverse the number mathematically and compare.

**Key insight:** We can extract digits from right to left and build the reversed number.

**How to extract digits:**
```
x = 121

Get last digit: 121 % 10 = 1
Remove last digit: Math.floor(121 / 10) = 12

Get last digit: 12 % 10 = 2
Remove last digit: Math.floor(12 / 10) = 1

Get last digit: 1 % 10 = 1
Remove last digit: Math.floor(1 / 10) = 0

Done! We've extracted all digits: 1, 2, 1
```

**Algorithm:**

1. **Quick checks:**
   - If x < 0, return false (negatives aren't palindromes)
   - If x ends in 0 and x ≠ 0, return false

2. **Reverse the entire number:**
   - While x > 0:
     - Extract last digit with `x % 10`
     - Add to reversed number
     - Remove last digit with `Math.floor(x / 10)`

3. **Compare original with reversed**

**Example for x = 121:**
```
Step 1: Quick checks
x = 121
Is negative? NO
Ends in 0? NO
Continue...

Step 2: Build reversed number
original = 121
reversed = 0

Iteration 1:
  digit = 121 % 10 = 1
  reversed = 0 * 10 + 1 = 1
  x = Math.floor(121 / 10) = 12

Iteration 2:
  digit = 12 % 10 = 2
  reversed = 1 * 10 + 2 = 12
  x = Math.floor(12 / 10) = 1

Iteration 3:
  digit = 1 % 10 = 1
  reversed = 12 * 10 + 1 = 121
  x = Math.floor(1 / 10) = 0

Step 3: Compare
original (121) === reversed (121) → true ✓
```

**Example for x = 123:**
```
Step 1: Quick checks pass

Step 2: Build reversed
original = 123

Iteration 1: digit = 3, reversed = 3, x = 12
Iteration 2: digit = 2, reversed = 32, x = 1
Iteration 3: digit = 1, reversed = 321, x = 0

Step 3: Compare
original (123) === reversed (321) → false ✓
```

**Why `reversed = reversed * 10 + digit`?**

Think of building a number digit by digit:
```
Start: reversed = 0

Add digit 1: reversed = 0 * 10 + 1 = 1
Add digit 2: reversed = 1 * 10 + 2 = 12
Add digit 3: reversed = 12 * 10 + 3 = 123
```

Multiplying by 10 shifts digits left, making room for the new digit!

**Code:**
```typescript
function isPalindrome(x: number): boolean {
    // Negative numbers are not palindromes
    if (x < 0) return false;
    
    // Numbers ending in 0 are not palindromes (except 0 itself)
    if (x !== 0 && x % 10 === 0) return false;
    
    // Reverse the number
    const original = x;
    let reversed = 0;
    
    while (x > 0) {
        const digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }
    
    return original === reversed;
}
```

**Time Complexity:** O(log₁₀(n)) - Number of digits in x  
**Space Complexity:** O(1) - Only use a few variables

**Pros:**
- No string conversion
- More mathematical/elegant
- O(1) space

---

### Approach 3: Half Reversal (Optimal Follow-up)

**Even more optimized:** Only reverse half the number!

**Key insight:** We only need to compare the first half with the reversed second half.
```
x = 1221

First half: 12
Second half reversed: 12

12 === 12 → Palindrome!
```

**Algorithm:**

1. Quick checks (same as approach 2)
2. Reverse only the second half:
   - While x > reversed:
     - Move digits from x to reversed
3. Compare:
   - For even length: x === reversed
   - For odd length: x === Math.floor(reversed / 10)

**Example for x = 12321 (odd length):**
```
Start: x = 12321, reversed = 0

Iteration 1:
  reversed = 0 * 10 + 1 = 1
  x = 1232
  
Iteration 2:
  reversed = 1 * 10 + 2 = 12
  x = 123
  
x (123) > reversed (12)? YES, continue

Iteration 3:
  reversed = 12 * 10 + 3 = 123
  x = 12

x (12) > reversed (123)? NO, stop!

Compare for odd length:
  x === Math.floor(reversed / 10)
  12 === Math.floor(123 / 10)
  12 === 12 → true ✓
```

**Why `Math.floor(reversed / 10)` for odd length?**

The middle digit doesn't need to match anything (it's the same forwards and backwards)!
```
12321
  ↑
Middle digit (3) - ignore it!

Compare: 12 with 12 ✓
```

**Code:**
```typescript
function isPalindrome(x: number): boolean {
    if (x < 0 || (x !== 0 && x % 10 === 0)) return false;
    
    let reversed = 0;
    
    while (x > reversed) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    
    // For even length: x === reversed
    // For odd length: x === Math.floor(reversed / 10)
    return x === reversed || x === Math.floor(reversed / 10);
}
```

**Time Complexity:** O(log₁₀(n)) - Half the digits  
**Space Complexity:** O(1)

**Pros:**
- Most efficient
- Half the iterations
- Elegant logic

---

## Edge Cases

**1. Zero:**
```
x = 0
Is palindrome? YES
```

**2. Single digit:**
```
x = 7
Is palindrome? YES (reads same forwards/backwards)
```

**3. Negative numbers:**
```
x = -121
Is palindrome? NO (minus sign only at front)
```

**4. Numbers ending in 0:**
```
x = 10
10 → 01 → 1
Is palindrome? NO
```

**5. Large palindrome:**
```
x = 123454321
Is palindrome? YES
```

---

## Comparison of Approaches

| Approach | Time | Space | Difficulty | Notes |
|----------|------|-------|------------|-------|
| String | O(n) | O(n) | Easy | Simplest, most readable |
| Full Reversal | O(log n) | O(1) | Easy | No strings, elegant |
| Half Reversal | O(log n/2) | O(1) | Medium | Most optimal, clever |

**For interviews:**
- Start with string approach (shows you can solve it)
- Mention mathematical approach (shows optimization thinking)
- Implement half reversal if time permits (shows expertise!)

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Palindrome numbers read the same forwards and backwards
- Negative numbers are never palindromes
- Numbers ending in 0 (except 0 itself) are never palindromes
- String approach: Simple but uses O(n) space
- Mathematical approach: Reverse the number without strings
- Half reversal: Only compare first half with reversed second half
- Use `% 10` to get last digit, `Math.floor(x / 10)` to remove it
- Building reversed: `reversed = reversed * 10 + digit`
- Understanding multiple solutions demonstrates problem-solving depth