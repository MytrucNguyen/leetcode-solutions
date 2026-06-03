# 13. Roman to Integer

**Difficulty:** Easy  
**Topics:** String, Hash Table, Math  
**Link:** [LeetCode Problem](https://leetcode.com/problems/roman-to-integer/)

## Problem Description

Given a Roman numeral string, convert it to an integer.

Roman numerals use these symbols:

| Symbol | Value |
|--------|-------|
| I      | 1     |
| V      | 5    |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

Usually values are added largest to smallest (left to right). But there are six subtraction cases where a smaller value before a larger value means subtraction:

- `IV` = 4, `IX` = 9
- `XL` = 40, `XC` = 90
- `CD` = 400, `CM` = 900

### Examples

**Example 1:**
```
Input: s = "III"
Output: 3
Explanation: III = 1 + 1 + 1 = 3
```

**Example 2:**
```
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V = 5, III = 3 → 50 + 5 + 3 = 58
```

**Example 3:**
```
Input: s = "MCMXCIV"
Output: 1994
Explanation: M=1000, CM=900, XC=90, IV=4 → 1000 + 900 + 90 + 4 = 1994
```

### Constraints

- `1 <= s.length <= 15`
- `s` contains only the characters `('I', 'V', 'X', 'L', 'C', 'D', 'M')`
- It is guaranteed that `s` is a valid Roman numeral in the range `[1, 3999]`

## Approach

### Look Ahead Comparison

Loop through the string. If the current value is smaller than the next value, subtract it. Otherwise, add it.

**Key Insight:** In valid Roman numerals, values go from largest to smallest. The only exception is the six subtraction cases (IV, IX, XL, XC, CD, CM) where a smaller value comes before a larger value. So the rule is simple: if current < next, subtract. Otherwise, add.

**Algorithm:**
1. Create a hash map of Roman numeral values
2. Loop through each character:
   - Get the current value and the next value
   - If current < next → subtract current from total
   - Otherwise → add current to total
3. Return total

**Walkthrough:**
```
s = "MCMXCIV"

M(1000) → next C(100): 1000 > 100 → add    → total = 1000
C(100)  → next M(1000): 100 < 1000 → subtract → total = 900
M(1000) → next X(10):  1000 > 10  → add    → total = 1900
X(10)   → next C(100):  10 < 100  → subtract → total = 1890
C(100)  → next I(1):   100 > 1   → add    → total = 1990
I(1)    → next V(5):    1 < 5    → subtract → total = 1989
V(5)    → no next:                → add    → total = 1994 ✓
```
```
s = "III"

I(1) → next I(1): 1 = 1 → add → total = 1
I(1) → next I(1): 1 = 1 → add → total = 2
I(1) → no next:         → add → total = 3 ✓
```

**Time Complexity:** O(n) - Single pass through the string  
**Space Complexity:** O(1) - Fixed size hash map (7 entries)

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- The "if current < next, subtract" rule handles all six subtraction cases elegantly
- No need to check for specific pairs like IV or CM — the single rule covers everything
- Hash maps make symbol-to-value lookups clean and O(1)
- This is a great example of finding a simple rule that handles all edge cases