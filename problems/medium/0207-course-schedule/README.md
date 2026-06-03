# 207. Course Schedule

**Difficulty:** Medium  
**Topics:** Depth-First Search, Breadth-First Search, Graph, Topological Sort  
**Link:** [LeetCode Problem](https://leetcode.com/problems/course-schedule/)

## Problem Description

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`.

Return `true` if you can finish all courses. Otherwise, return `false`.

### Examples

**Example 1:**

    Input: numCourses = 2, prerequisites = [[1,0]]
    Output: true
    Explanation: Take course 0 first, then course 1.

**Example 2:**

    Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
    Output: false
    Explanation: Course 0 requires 1, and course 1 requires 0. Impossible.

### Constraints

- `1 <= numCourses <= 2000`
- `0 <= prerequisites.length <= 5000`
- `prerequisites[i].length == 2`
- `0 <= ai, bi < numCourses`
- All prerequisite pairs are unique

## Approach

### DFS Cycle Detection with Three States

Build an adjacency list from prerequisites, then use DFS to detect cycles. Each node has three states: unvisited, visiting (in current path), and visited (confirmed no cycle).

**Key Insight:** If during DFS we encounter a node that's in the "visiting" state, we've found a cycle — that node is an ancestor in the current path, so we're going in circles. If we encounter a "visited" node, we already confirmed it has no cycles, so skip it.

**Three states:**
- **Unvisited (0):** Haven't explored this course yet
- **Visiting (1):** Currently in the DFS path — if we see this again, it's a cycle!
- **Visited (2):** Fully explored, confirmed no cycle from here

**Algorithm:**
1. Build an adjacency list: `course → [courses that depend on it]`
2. Create a state array for all courses (all start as unvisited)
3. For each course, run DFS:
   - If visiting → cycle found, return false
   - If visited → already safe, return true
   - Mark as visiting
   - DFS all neighbors
   - If any neighbor has a cycle → return false
   - Mark as visited (confirmed safe)
4. If no cycles found, return true

**Walkthrough:**

    numCourses = 4, prerequisites = [[1,0],[2,1],[3,2]]

    Adjacency list:
    0 → [1]
    1 → [2]
    2 → [3]
    3 → []

    DFS from 0:
      0: unvisited → mark visiting
        DFS 1: unvisited → mark visiting
          DFS 2: unvisited → mark visiting
            DFS 3: unvisited → mark visiting
              No neighbors → mark 3 visited ✓
            Mark 2 visited ✓
          Mark 1 visited ✓
        Mark 0 visited ✓

    DFS from 1, 2, 3: all already visited → skip

    No cycles → return true ✓

    numCourses = 2, prerequisites = [[1,0],[0,1]]

    Adjacency list:
    0 → [1]
    1 → [0]

    DFS from 0:
      0: unvisited → mark visiting
        DFS 1: unvisited → mark visiting
          DFS 0: state is VISITING → cycle found!
    
    Return false ✓

**Why three states instead of two?**

    With just visited/unvisited:
    0 → 1
    0 → 2 → 1

    DFS from 0: visit 1 (mark visited), visit 2 → visit 1 (already visited).
    With two states, we'd think 1 being visited means a cycle — but it's not!
    1 was visited from a DIFFERENT path, not the current one.

    Three states fix this:
    - "Visiting" = in the current path (cycle if seen again)
    - "Visited" = fully explored from a previous path (safe to skip)

**Time Complexity:** O(V + E) where V is courses and E is prerequisites  
**Space Complexity:** O(V + E) — adjacency list and state array

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Cycle detection in directed graphs uses three states: unvisited, visiting, visited
- "Visiting" means in the current DFS path — seeing it again means a cycle
- "Visited" means fully explored and safe — skip it
- Building an adjacency list from edge pairs is the first step for any graph problem
- This is the foundation for topological sort (Course Schedule II #210)
- Your first graph problem! This pattern applies to dependency resolution, build systems, etc.