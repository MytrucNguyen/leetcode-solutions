# LeetCode Solutions

Collection of LeetCode solutions in Python, TypeScript, and C# organized by difficulty and topic. Includes detailed explanations, complexity analysis, and multiple approaches where applicable.

## Progress

![Problems Solved](https://img.shields.io/badge/solved-3/3000-blue)
![Easy](https://img.shields.io/badge/easy-3-green)
![Medium](https://img.shields.io/badge/medium-0-orange)
![Hard](https://img.shields.io/badge/hard-0-red)

## Problems

| # | Title | Python | TypeScript | C# | Difficulty | Topics |
|---|-------|--------|------------|-----|------------|--------|
| 1 | [Two Sum](https://leetcode.com/problems/two-sum/) | [✓](./problems/easy/0001-two-sum/python/solution.py) | [✓](./problems/easy/0001-two-sum/typescript/solution.ts) | [✓](./problems/easy/0001-two-sum/csharp/Solution.cs) | Easy | Array, Hash Table |
| 20 | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | [✓](./problems/easy/0020-valid-parentheses/python/solution.py) | [✓](./problems/easy/0020-valid-parentheses/typescript/solution.ts) | | Easy | String, Stack |
| 21 | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | | [✓](./problems/easy/0021-merge-two-sorted-lists/typescript/solution.ts) | | Easy | Linked List, Recursion |

## Repository Structure
```
problems/
└── [difficulty]/
    └── [problem-number-name]/
        ├── csharp/
        │   └── Solution.cs
        ├── csharp-tests/
        │   └── SolutionTests.cs
        ├── python/
        │   ├── solution.py
        │   └── test_solution.py
        ├── typescript/
        │   ├── solution.ts
        │   └── solution.test.ts
        └── README.md
```

Each problem folder contains:
- **C#**
  - `csharp/` - Solution project
    - `Solution.cs` - C# solution
  - `csharp-tests/` - Test project
    - `SolutionTests.cs` - xUnit test cases
- **Python**
  - `python/` - Python solutions
    - `solution.py` - Python solution with LeetCode class format
    - `test_solution.py` - unittest test cases
- **TypeScript**
  - `typescript/` - TypeScript solutions
    - `solution.ts` - TypeScript solution with comments
    - `solution.test.ts` - Jest test cases
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