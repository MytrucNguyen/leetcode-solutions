# 210. Course Schedule II

**Difficulty:** Medium  
**Topics:** Depth-First Search, Breadth-First Search, Graph, Topological Sort  
**Link:** [LeetCode Problem](https://leetcode.com/problems/course-schedule-ii/)

## Problem Description

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`.

Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

### Examples

**Example 1:**

    Input: numCourses = 2, prerequisites = [[1,0]]
    Output: [0, 1]

**Example 2:**

    Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
    Output: [0, 2, 1, 3] (or [0, 1, 2, 3])

**Example 3:**

    Input: numCourses = 1, prerequisites = []
    Output: [0]

### Constraints

- `1 <= numCourses <= 2000`
- `0 <= prerequisites.length <= numCourses * (numCourses - 1)`
- `prerequisites[i].length == 2`
- `0 <= ai, bi < numCourses`
- `ai != bi`
- All pairs are distinct

## Approach

### DFS with Topological Sort

Same three-state DFS as Course Schedule (#207) for cycle detection. The only addition: when a node is fully explored (marked visited), add it to the result. Since DFS finishes deepest nodes first, reverse the result at the end.

**Key Insight:** In DFS, a node is marked "visited" only AFTER all its dependencies are processed. So the order nodes finish is reverse topological order. Just collect and reverse!

**Algorithm:**
1. Build adjacency list (same as #207)
2. Three-state DFS (same as #207): unvisited=0, visiting=1, visited=2
3. When marking a node as visited (state=2), push it to result
4. If cycle detected → return []
5. Reverse the result → topological order!

**Why reverse?** DFS finishes leaf nodes first. Course 3 (which depends on 1 and 2) finishes after 1 and 2. So the result is [3, 1, 2, 0] — reversed gives [0, 2, 1, 3], the correct order.

**Walkthrough:**

    numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]

    Graph:
    0 → [1, 2]
    1 → [3]
    2 → [3]
    3 → []

    DFS from 0:
      0: mark visiting
        DFS 1: mark visiting
          DFS 3: mark visiting
            No neighbors → mark visited, add 3 → result: [3]
          Mark 1 visited, add 1 → result: [3, 1]
        DFS 2: mark visiting
          DFS 3: already visited, skip
          Mark 2 visited, add 2 → result: [3, 1, 2]
        Mark 0 visited, add 0 → result: [3, 1, 2, 0]

    Reverse: [0, 2, 1, 3] ✓

    Cycle case: prerequisites = [[1,0],[0,1]]

    DFS from 0:
      0: mark visiting
        DFS 1: mark visiting
          DFS 0: state is VISITING → cycle!
    Return [] ✓

**Comparison with Course Schedule (#207):**
- #207: Detect cycle → return true/false
- #210: Detect cycle + collect order → return ordering or []
- Same DFS, one extra line (push to result on visited)

**Time Complexity:** O(V + E) — visit each node and edge once  
**Space Complexity:** O(V + E) — adjacency list, state array, result

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Topological sort = DFS + collect nodes when fully explored + reverse
- Same three-state cycle detection from #207 — just add one line
- Nodes finish in reverse topological order because DFS processes dependencies first
- This pattern applies to: build systems, task scheduling, dependency resolution
- Natural follow-up to Course Schedule (#207)