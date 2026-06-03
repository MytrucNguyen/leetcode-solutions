# LeetCode Solutions

My collection of LeetCode solutions organized by difficulty and topic. Each problem includes explanations, performance notes, and different approaches when applicable.

## Progress

![Problems Solved](https://img.shields.io/badge/solved-13/3000-blue)
![Easy](https://img.shields.io/badge/easy-11-green)
![Medium](https://img.shields.io/badge/medium-2-orange)
![Hard](https://img.shields.io/badge/hard-0-red)

## Problems

| # | Title | Python | TypeScript | C# | Difficulty | Topics |
|---|-------|--------|------------|-----|------------|--------|
| 1 | [Two Sum](https://leetcode.com/problems/two-sum/) | [✓](./problems/easy/0001-two-sum/python/solution.py) | [✓](./problems/easy/0001-two-sum/typescript/solution.ts) | [✓](./problems/easy/0001-two-sum/csharp/Solution.cs) | Easy | Array, Hash Table |
| 15 | [3Sum](https://leetcode.com/problems/3sum/) | | [✓](./problems/medium/0015-3sum/typescript/solution.ts) | | Medium | Array, Two Pointers, Sorting |
| 20 | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | [✓](./problems/easy/0020-valid-parentheses/python/solution.py) | [✓](./problems/easy/0020-valid-parentheses/typescript/solution.ts) | | Easy | String, Stack |
| 21 | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | | [✓](./problems/easy/0021-merge-two-sorted-lists/typescript/solution.ts) | | Easy | Linked List, Recursion |
| 70 | [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) | | [✓](./problems/easy/0070-climbing-stairs/typescript/solution.ts) | | Easy | Math, Dynamic Programming, Memoization |
| 104 | [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | | [✓](./problems/easy/0104-maximum-depth-of-binary-tree/typescript/solution.ts) | | Easy | Tree, Depth-First Search, Binary Tree |
| 121 | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | | [✓](./problems/easy/0121-best-time-to-buy-and-sell-stock/typescript/solution.ts) | | Easy | Array, Dynamic Programming |
| 125 | [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) | | [✓](./problems/easy/0125-valid-palindrome/typescript/solution.ts) | | Easy | String, Two Pointers |
| 146 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | | [✓](./problems/medium/0146-lru-cache/typescript/solution.ts) | | Medium | Hash Table, Linked List, Design, Doubly-Linked List |
| 206 | [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) | | [✓](./problems/easy/0206-reverse-linked-list/typescript/solution.ts) | | Easy | Linked List, Recursion |
| 217 | [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/) | | [✓](./problems/easy/0217-contains-duplicate/typescript/solution.ts) | | Easy | Array, Hash Table, Sorting |
| 226 | [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) | | [✓](./problems/easy/0226-invert-binary-tree/typescript/solution.ts) | | Easy | Tree, Depth-First Search, Binary Tree |
| 268 | [Missing Number](https://leetcode.com/problems/missing-number/) | | [✓](./problems/easy/0268-missing-number/typescript/solution.ts) | | Easy | Array, Hash Table, Math, Bit Manipulation |

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

**Happy Coding!**