# LeetCode Solutions

My collection of LeetCode solutions organized by difficulty and topic. Each problem includes explanations, performance notes, and different approaches when applicable.

## Repository Structure
```
problems/
└── [difficulty]/
    └── [problem-number-name]/
        ├── csharp/ (optional)
        │   └── Solution.cs
        ├── csharp-tests/ (optional)
        │   └── SolutionTests.cs
        ├── python/ (optional)
        │   ├── solution.py
        │   └── test_solution.py
        ├── typescript/ (optional)
        │   ├── solution.ts
        │   └── solution.test.ts
        └── README.md
```

Each problem may contain solutions in one or more languages:
- **C#**
  - `csharp/Solution.cs` - C# solution
  - `csharp-tests/SolutionTests.cs` - xUnit test cases
- **Python**
  - `python/solution.py` - Python solution with LeetCode class format
  - `python/test_solution.py` - unittest test cases
- **TypeScript**
  - `typescript/solution.ts` - TypeScript solution with comments
  - `typescript/solution.test.ts` - Jest test cases
- `README.md` - Problem description, approach, complexity analysis

## How to Use

### C#
```bash
# Create solution project (first time only)
cd problems/[difficulty]/[problem-number-name]/csharp
dotnet new classlib -n [FunctionName]CSharp -o .
mv Class1.cs Solution.cs  # Rename to Solution.cs
# Edit Solution.cs with your code

# Create test project (first time only)
cd ../csharp-tests
dotnet new xunit -n [FunctionName].Tests -o .
mv UnitTest1.cs SolutionTests.cs  # Rename to SolutionTests.cs
dotnet add reference ../csharp/[FunctionName]CSharp.csproj
# Edit SolutionTests.cs with your tests

# Run tests (from anywhere)
dotnet test problems/[difficulty]/[problem-number-name]/csharp-tests
```

**Example:**
```bash
# Setup for Two Sum
cd problems/easy/0001-two-sum/csharp
dotnet new classlib -n TwoSumCSharp -o .
mv Class1.cs Solution.cs

cd ../csharp-tests
dotnet new xunit -n TwoSum.Tests -o .
mv UnitTest1.cs SolutionTests.cs
dotnet add reference ../csharp/TwoSumCSharp.csproj

# Run tests from root
dotnet test problems/easy/0001-two-sum/csharp-tests
```

### Python
```bash
# Run tests from anywhere
python problems/[difficulty]/[problem-number-name]/python/test_solution.py

# Run with verbose output (optional)
python problems/[difficulty]/[problem-number-name]/python/test_solution.py -v
```

**Example:**
```bash
python problems/easy/0001-two-sum/python/test_solution.py
```

### TypeScript
```bash
# Run all tests from root
npm test

# Run specific problem tests
npm test [problem-number-name]
```

**Example:**
```bash
npm test 0001-two-sum
```

## Testing Frameworks

- **C#**: xUnit
- **Python**: unittest (built-in)
- **TypeScript**: Jest

---

## Progress

![Problems Solved](https://img.shields.io/badge/solved-46/3892-blue)
![Easy](https://img.shields.io/badge/easy-33-green)
![Medium](https://img.shields.io/badge/medium-13-orange)
![Hard](https://img.shields.io/badge/hard-0-red)

## Problems

| # | Title | Python | TypeScript | C# | Difficulty | Topics |
|---|-------|--------|------------|-----|------------|--------|
| 1 | [Two Sum](https://leetcode.com/problems/two-sum/) | [✓](./problems/easy/0001-two-sum/python/solution.py) | [✓](./problems/easy/0001-two-sum/typescript/solution.ts) | [✓](./problems/easy/0001-two-sum/csharp/Solution.cs) | Easy | Array, Hash Table |
| 2 | [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/) | | [✓](./problems/medium/0002-add-two-numbers/typescript/solution.ts) | | Medium | Linked List, Math, Recursion |
| 3 | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | | [✓](./problems/medium/0003-longest-substring-without-repeating-characters/typescript/solution.ts) | | Medium | Hash Table, String, Sliding Window |
| 5 | [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) | | [✓](./problems/medium/0005-longest-palindromic-substring/typescript/solution.ts) | | Medium | String, Dynamic Programming |
| 9 | [Palindrome Number](https://leetcode.com/problems/palindrome-number/) | [✓](./problems/easy/0009-palindrome-number/python/solution.py) | [✓](./problems/easy/0009-palindrome-number/typescript/solution.ts) | | Easy | Math |
| 11 | [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | | [✓](./problems/medium/0011-container-with-most-water/typescript/solution.ts) | | Medium | Array, Two Pointers, Greedy |
| 15 | [3Sum](https://leetcode.com/problems/3sum/) | | [✓](./problems/medium/0015-3sum/typescript/solution.ts) | | Medium | Array, Two Pointers, Sorting |
| 20 | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | [✓](./problems/easy/0020-valid-parentheses/python/solution.py) | [✓](./problems/easy/0020-valid-parentheses/typescript/solution.ts) | | Easy | String, Stack |
| 21 | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | [✓](./problems/easy/0021-merge-two-sorted-lists/python/solution.py) | [✓](./problems/easy/0021-merge-two-sorted-lists/typescript/solution.ts) | | Easy | Linked List, Recursion |
| 26 | [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) | | [✓](./problems/easy/0026-remove-duplicates-from-sorted-array/typescript/solution.ts) | | Easy | Array, Two Pointers |
| 48 | [Rotate Image](https://leetcode.com/problems/rotate-image/) | | [✓](./problems/medium/0048-rotate-image/typescript/solution.ts) | | Medium | Array, Math, Matrix |
| 49 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | | [✓](./problems/medium/0049-group-anagrams/typescript/solution.ts) | | Medium | Array, Hash Table, String, Sorting |
| 53 | [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) | | [✓](./problems/medium/0053-maximum-subarray/typescript/solution.ts) | | Medium | Array, Divide and Conquer, Dynamic Programming |
| 54 | [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) | | [✓](./problems/medium/0054-spiral-matrix/typescript/solution.ts) | | Medium | Array, Matrix, Simulation |
| 56 | [Merge Intervals](https://leetcode.com/problems/merge-intervals/) | | [✓](./problems/medium/0056-merge-intervals/typescript/solution.ts) | | Medium | Array, Sorting |
| 66 | [Plus One](https://leetcode.com/problems/plus-one/) | [✓](./problems/easy/0066-plus-one/python/solution.py) | [✓](./problems/easy/0066-plus-one/typescript/solution.ts) | | Easy | Array, Math |
| 69 | [Sqrt(x)](https://leetcode.com/problems/sqrtx/) | [✓](./problems/easy/0069-sqrtx/python/solution.py) | [✓](./problems/easy/0069-sqrtx/typescript/solution.ts) | | Easy | Math, Binary Search |
| 70 | [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) | [✓](./problems/easy/0070-climbing-stairs/python/solution.py) | [✓](./problems/easy/0070-climbing-stairs/typescript/solution.ts) | | Easy | Math, Dynamic Programming, Memoization |
| 88 | [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/) | [✓](./problems/easy/0088-merge-sorted-array/python/solution.py) | [✓](./problems/easy/0088-merge-sorted-array/typescript/solution.ts) | | Easy | Array, Two Pointers, Sorting |
| 100 | [Same Tree](https://leetcode.com/problems/same-tree/) | | [✓](./problems/easy/0100-same-tree/typescript/solution.ts) | | Easy | Tree, Depth-First Search, Binary Tree |
| 101 | [Symmetric Tree](https://leetcode.com/problems/symmetric-tree/) | | [✓](./problems/easy/0101-symmetric-tree/typescript/solution.ts) | | Easy | Tree, Depth-First Search, Binary Tree |
| 104 | [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | | [✓](./problems/easy/0104-maximum-depth-of-binary-tree/typescript/solution.ts) | | Easy | Tree, Depth-First Search, Binary Tree |
| 118 | [Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/) | | [✓](./problems/easy/0118-pascals-triangle/typescript/solution.ts) | | Easy | Array, Dynamic Programming |
| 121 | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | [✓](./problems/easy/0121-best-time-to-buy-and-sell-stock/python/solution.py) | [✓](./problems/easy/0121-best-time-to-buy-and-sell-stock/typescript/solution.ts) | | Easy | Array, Dynamic Programming |
| 125 | [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) | [✓](./problems/easy/0125-valid-palindrome/python/solution.py) | [✓](./problems/easy/0125-valid-palindrome/typescript/solution.ts) | | Easy | String, Two Pointers |
| 136 | [Single Number](https://leetcode.com/problems/single-number/) | | [✓](./problems/easy/0136-single-number/typescript/solution.ts) | | Easy | Array, Bit Manipulation |
| 141 | [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) | | [✓](./problems/easy/0141-linked-list-cycle/typescript/solution.ts) | | Easy | Hash Table, Linked List, Two Pointers |
| 146 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | | [✓](./problems/medium/0146-lru-cache/typescript/solution.ts) | | Medium | Hash Table, Linked List, Design, Doubly-Linked List |
| 169 | [Majority Element](https://leetcode.com/problems/majority-element/) | | [✓](./problems/easy/0169-majority-element/typescript/solution.ts) | | Easy | Array, Hash Table, Divide and Conquer, Sorting, Counting |
| 190 | [Reverse Bits](https://leetcode.com/problems/reverse-bits/) | | [✓](./problems/easy/0190-reverse-bits/typescript/solution.ts) | | Easy | Divide and Conquer, Bit Manipulation |
| 200 | [Number of Islands](https://leetcode.com/problems/number-of-islands/) | | [✓](./problems/medium/0200-number-of-islands/typescript/solution.ts) | | Medium | Array, Depth-First Search, Breadth-First Search, Matrix |
| 202 | [Happy Number](https://leetcode.com/problems/happy-number/) | | [✓](./problems/easy/0202-happy-number/typescript/solution.ts) | | Easy | Hash Table, Math, Two Pointers |
| 206 | [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) | | [✓](./problems/easy/0206-reverse-linked-list/typescript/solution.ts) | | Easy | Linked List, Recursion |
| 217 | [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) | | [✓](./problems/easy/0217-contains-duplicate/typescript/solution.ts) | | Easy | Array, Hash Table, Sorting |
| 226 | [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) | | [✓](./problems/easy/0226-invert-binary-tree/typescript/solution.ts) | | Easy | Tree, Depth-First Search, Binary Tree |
| 231 | [Power of Two](https://leetcode.com/problems/power-of-two/) | | [✓](./problems/easy/0231-power-of-two/typescript/solution.ts) | | Easy | Math, Bit Manipulation |
| 232 | [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/) | | [✓](./problems/easy/0232-implement-queue-using-stacks/typescript/solution.ts) | | Easy | Stack, Queue, Design |
| 238 | [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) | | [✓](./problems/medium/0238-product-of-array-except-self/typescript/solution.ts) | | Medium | Array, Prefix Sum |
| 242 | [Valid Anagram](https://leetcode.com/problems/valid-anagram/) | | [✓](./problems/easy/0242-valid-anagram/typescript/solution.ts) | | Easy | Hash Table, String, Sorting |
| 268 | [Missing Number](https://leetcode.com/problems/missing-number/) | | [✓](./problems/easy/0268-missing-number/typescript/solution.ts) | | Easy | Array, Hash Table, Math, Bit Manipulation |
| 283 | [Move Zeroes](https://leetcode.com/problems/move-zeroes/) | | [✓](./problems/easy/0283-move-zeroes/typescript/solution.ts) | | Easy | Array, Two Pointers |
| 344 | [Reverse String](https://leetcode.com/problems/reverse-string/) | | [✓](./problems/easy/0344-reverse-string/typescript/solution.ts) | | Easy | Two Pointers, String |
| 349 | [Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/) | | [✓](./problems/easy/0349-intersection-of-two-arrays/typescript/solution.ts) | | Easy | Array, Hash Table, Two Pointers, Binary Search, Sorting |
| 367 | [Valid Perfect Square](https://leetcode.com/problems/valid-perfect-square/) | | [✓](./problems/easy/0367-valid-perfect-square/typescript/solution.ts) | | Easy | Math, Binary Search |
| 509 | [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/) | | [✓](./problems/easy/0509-fibonacci-number/typescript/solution.ts) | | Easy | Math, Dynamic Programming, Recursion, Memoization |
| 704 | [Binary Search](https://leetcode.com/problems/binary-search/) | | [✓](./problems/easy/0704-binary-search/typescript/solution.ts) | | Easy | Array, Binary Search |