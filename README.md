# LeetCode Solutions

Collection of LeetCode solutions in Python, TypeScript, and C# organized by difficulty and topic. Includes detailed explanations, complexity analysis, and multiple approaches where applicable.

## Progress

![Problems Solved](https://img.shields.io/badge/solved-1/3000-blue)
![Easy](https://img.shields.io/badge/easy-1-green)
![Medium](https://img.shields.io/badge/medium-0-orange)
![Hard](https://img.shields.io/badge/hard-0-red)

## Problems

| # | Title | Python | TypeScript | C# | Difficulty | Topics |
|---|-------|--------|------------|-----|------------|--------|
| 1 | [Two Sum](https://leetcode.com/problems/two-sum/) | [✓](./problems/easy/0001-two-sum/python/solution.py) | [✓](./problems/easy/0001-two-sum/typescript/solution.ts) | [✓](./problems/easy/0001-two-sum/csharp/Solution.cs) | Easy | Array, Hash Table |

## Repository Structure
```
problems/
└── easy/
    └── 0001-two-sum/
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
# Setup 
cd problems/easy/0001-two-sum/csharp
dotnet new classlib -n [FunctionName]CSharp -o .
rm Class1.cs

cd ../csharp-tests
dotnet new xunit -n [FunctionName].Tests -o .

rm UnitTest1.cs
dotnet add reference ../csharp/[FunctionName]CSharp.csproj

# Run tests
cd problems/easy/0001-two-sum
dotnet test csharp-tests
```

### Python
```bash
# Navigate to problem directory
cd problems/easy/0001-two-sum/python

# Run tests
python test_solution.py

# Run with verbose output
python test_solution.py -v
```

### TypeScript
```bash
# Run all tests from root
npm test

# Run specific problem tests
npm test 0001-two-sum
```

## Testing Frameworks

- **C#**: xUnit
- **Python**: unittest (built-in)
- **TypeScript**: Jest

---

**Happy Coding!**