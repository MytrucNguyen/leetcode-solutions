# 11. Container With Most Water

**Difficulty:** Medium  
**Topics:** Array, Two Pointers, Greedy  
**Link:** [LeetCode Problem](https://leetcode.com/problems/container-with-most-water/)

## Problem Description

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i-th` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

**Notice** that you may not slant the container.

### Examples

**Example 1:**

![alt text](image.png)

```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49

Explanation: 
The vertical lines are at positions with heights [1,8,6,2,5,4,8,3,7].
The max area is between the line at index 1 (height 8) and index 8 (height 7).
Area = min(8, 7) × (8 - 1) = 7 × 7 = 49

Visual:
        |               |
        |               |   |
        |   |           |   |
        |   |       |   |   |
        |   |   |   |   |   |
    |   |   |   |   |   |   |
    0 1 2 3 4 5 6 7 8
    
Container between index 1 and 8 (marked with |)
```

**Example 2:**
```
Input: height = [1,1]
Output: 1
```

### Constraints

- `n == height.length`
- `2 <= n <= 10^5`
- `0 <= height[i] <= 10^4`

## Understanding the Problem

**What is a container?**
- Two vertical lines act as walls
- The ground (x-axis) acts as the bottom
- Water fills the space between the walls

**How to calculate area?**
```
Area = width × height

width = distance between two lines = right_index - left_index
height = the shorter of the two lines = min(height[left], height[right])
```

**Why use the shorter line?**
Water can only be as high as the shorter wall - it would overflow otherwise!

**Example:**
```
height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
         0  1  2  3  4  5  6  7  8

Container between index 1 and 8:
height[1] = 8
height[8] = 7
width = 8 - 1 = 7
height of water = min(8, 7) = 7  (limited by shorter wall)
area = 7 × 7 = 49
```

## Understanding Greedy Algorithms

### What is a Greedy Algorithm?

A **greedy algorithm** makes the locally optimal choice at each step, hoping to find a global optimum.

**Think of it like:**
- At each decision point, pick what looks best RIGHT NOW
- Don't reconsider previous choices
- Hope that these local "best" choices lead to the overall best solution

**Real-world analogy:**

Imagine you're hiking and want to reach the highest peak:
- **Greedy approach:** At each fork, always take the path that goes upward the most
- You make the best choice at each step
- Sometimes this works! Sometimes you might miss a better peak

### Greedy vs Other Approaches

**Greedy Algorithm:**
```
At each step: Make the best immediate choice
Never look back or reconsider
Fast but not always optimal
```

**Dynamic Programming:**
```
Consider all possibilities
Build up solutions from smaller problems
Always finds optimal, but slower
```

**Brute Force:**
```
Try every possible combination
Guaranteed to find best, but very slow
```

### When Do Greedy Algorithms Work?

Greedy works when the problem has **greedy choice property**:
- Making locally optimal choices leads to a globally optimal solution
- Not all problems have this property!

**Examples where greedy works:**
- Container With Most Water ✓
- Activity Selection (schedule most meetings) ✓
- Huffman Coding ✓

**Examples where greedy fails:**
- Coin change (some denominations) ✗
- Knapsack problem (0/1) ✗
- Shortest path (negative weights) ✗

### Greedy for Container With Most Water

**The greedy strategy:**
Start with the widest possible container (leftmost and rightmost lines), then:
1. Calculate current area
2. Move the pointer with the shorter height inward (greedy choice!)
3. Repeat until pointers meet

**Why move the shorter pointer?**
- Width decreases no matter which pointer we move
- Moving the taller pointer can only decrease or maintain height
- Moving the shorter pointer gives us a chance to find a taller line
- This is the **greedy choice** - gives best potential for improvement

## Approach

### Two Pointers with Greedy Strategy

Use two pointers starting at the widest position, then greedily move the shorter pointer inward.

**Algorithm:**

1. **Initialize two pointers:**
   - `left = 0` (start)
   - `right = n - 1` (end)
   - `maxArea = 0`

2. **While left < right:**
   - Calculate current area: `width × min(height[left], height[right])`
   - Update maxArea if current area is larger
   - **Greedy choice:** Move the pointer with the shorter height
     - If `height[left] < height[right]`: move `left` forward
     - Otherwise: move `right` backward

3. **Return maxArea**

**Why This Works:**

Starting with maximum width, we explore potentially better containers by moving inward. The key insight:
- Width always decreases as we move inward
- To compensate, we need a chance at greater height
- Moving the shorter pointer gives us that opportunity
- Moving the taller pointer can't improve the area (height stays limited by the shorter side)

**Example Walkthrough for height = [1,8,6,2,5,4,8,3,7]:**
```
Initial state:
left = 0, right = 8
maxArea = 0

Iteration 1:
left=0 (height=1), right=8 (height=7)
area = min(1, 7) × (8 - 0) = 1 × 8 = 8
maxArea = 8
height[left]=1 < height[right]=7 → move left++

Iteration 2:
left=1 (height=8), right=8 (height=7)
area = min(8, 7) × (8 - 1) = 7 × 7 = 49
maxArea = 49
height[left]=8 > height[right]=7 → move right--

Iteration 3:
left=1 (height=8), right=7 (height=3)
area = min(8, 3) × (7 - 1) = 3 × 6 = 18
maxArea = 49 (no change)
height[left]=8 > height[right]=3 → move right--

Iteration 4:
left=1 (height=8), right=6 (height=8)
area = min(8, 8) × (6 - 1) = 8 × 5 = 40
maxArea = 49 (no change)
height[left]=8 = height[right]=8 → move right--

Iteration 5:
left=1 (height=8), right=5 (height=4)
area = min(8, 4) × (5 - 1) = 4 × 4 = 16
maxArea = 49 (no change)
height[left]=8 > height[right]=4 → move right--

Iteration 6:
left=1 (height=8), right=4 (height=5)
area = min(8, 5) × (4 - 1) = 5 × 3 = 15
maxArea = 49 (no change)
height[left]=8 > height[right]=5 → move right--

Iteration 7:
left=1 (height=8), right=3 (height=2)
area = min(8, 2) × (3 - 1) = 2 × 2 = 4
maxArea = 49 (no change)
height[left]=8 > height[right]=2 → move right--

Iteration 8:
left=1 (height=8), right=2 (height=6)
area = min(8, 6) × (2 - 1) = 6 × 1 = 6
maxArea = 49 (no change)
height[left]=8 > height[right]=6 → move right--

left=1, right=1 → left < right is false, stop

Return maxArea = 49
```

**Visual of the process:**
```
Start: [1, 8, 6, 2, 5, 4, 8, 3, 7]
        ↑                       ↑
      left                    right

Move shorter (left):
       [1, 8, 6, 2, 5, 4, 8, 3, 7]
           ↑                   ↑
         left                right

Keep moving shorter pointer inward until they meet
```

**Brute Force Comparison:**
- Brute force: Check every pair → O(n²)
- Greedy two pointers: Check only n pairs → O(n)

**Time Complexity:** O(n) - Single pass through array  
**Space Complexity:** O(1) - Only use a few variables

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Greedy algorithms make locally optimal choices at each step
- Two pointers is perfect for maximizing/minimizing with constraints
- Always move the pointer that limits the current solution
- Width × height formula requires minimum of two heights (water level)
- Starting wide and moving inward is a common optimization pattern
- O(n) solution is possible through greedy strategy vs O(n²) brute force
- Not all greedy strategies work - this one does because of problem structure