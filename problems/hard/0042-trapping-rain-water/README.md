# 42. Trapping Rain Water

**Difficulty:** Hard  
**Topics:** Array, Two Pointers, Dynamic Programming, Stack  
**Link:** [LeetCode Problem](https://leetcode.com/problems/trapping-rain-water/)

## Problem Description

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

### Examples

**Example 1:**

    Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
    Output: 6

    Visual:
            █
        █   ██ █
     █  ██ ██████
    _█__██_██████_

    Water (shown as ~):
            █
        █~~~██~█
     █~~██~██████
    _█__██_██████_

    6 units of water trapped.

**Example 2:**

    Input: height = [4,2,0,3,2,5]
    Output: 9

### Constraints

- `n == height.length`
- `1 <= n <= 2 * 10^4`
- `0 <= height[i] <= 10^5`

## Approach

### Two Pointers — Process the Shorter Side

Use two pointers from both ends, each tracking the max height seen from their side. Always process the side with the smaller max — that side determines the water level.

**Key Insight:** Water at any position is limited by the shorter of the two sides: `min(maxLeft, maxRight) - height`. If the left max is smaller, water at the left pointer is determined by left max (regardless of what's on the right — it's at least as tall). So we can safely process the left side. Same logic for the right.

**Why process the shorter side?**

    If leftMax < rightMax:
      Water at left = leftMax - height[left]
      (We know right side is at LEAST rightMax, so leftMax is the bottleneck)

    If rightMax <= leftMax:
      Water at right = rightMax - height[right]
      (Left side is at least leftMax, so rightMax is the bottleneck)

**Algorithm:**
1. Set `left = 0`, `right = length - 1`
2. Track `leftMax = 0`, `rightMax = 0`
3. While `left < right`:
   - If `height[left] < height[right]`:
     - If `height[left] >= leftMax` → update leftMax (this bar is a new wall)
     - Else → water += leftMax - height[left] (water trapped here)
     - Move `left++`
   - Else:
     - If `height[right] >= rightMax` → update rightMax
     - Else → water += rightMax - height[right]
     - Move `right--`
4. Return water

**Walkthrough:**

    height = [0,1,0,2,1,0,1,3,2,1,2,1]
             L                       R
    leftMax=0, rightMax=0, water=0

    h[L]=0 < h[R]=1:
      h[0]=0 >= leftMax(0) → leftMax=0
      left=1

    h[L]=1 >= h[R]=1:
      h[11]=1 >= rightMax(0) → rightMax=1
      right=10

    h[L]=1 < h[R]=2:
      h[1]=1 >= leftMax(0) → leftMax=1
      left=2

    h[L]=0 < h[R]=2:
      h[2]=0 < leftMax(1) → water += 1-0 = 1
      left=3

    h[L]=2 >= h[R]=2:
      h[10]=2 >= rightMax(1) → rightMax=2
      right=9

    h[L]=2 >= h[R]=1:
      h[9]=1 < rightMax(2) → water += 2-1 = 1 (total=2)
      right=8

    h[L]=2 >= h[R]=2:
      h[8]=2 >= rightMax(2) → rightMax=2
      right=7

    h[L]=2 < h[R]=3:
      h[3]=2 >= leftMax(1) → leftMax=2
      left=4

    h[L]=1 < h[R]=3:
      h[4]=1 < leftMax(2) → water += 2-1 = 1 (total=3)
      left=5

    h[L]=0 < h[R]=3:
      h[5]=0 < leftMax(2) → water += 2-0 = 2 (total=5)
      left=6

    h[L]=1 < h[R]=3:
      h[6]=1 < leftMax(2) → water += 2-1 = 1 (total=6)
      left=7

    left=7 === right=7 → done!
    Return 6 ✓

**Comparison with Container With Most Water (#11):**
- #11: Two pointers find max area between two bars
- #42: Two pointers calculate water trapped between ALL bars
- Both process the shorter side first — same intuition!

**Time Complexity:** O(n) — single pass with two pointers  
**Space Complexity:** O(1) — only four variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Water at any position = min(maxLeft, maxRight) - height
- Process the shorter side first — it's the bottleneck for water level
- Same "move the shorter pointer" intuition as Container With Most Water (#11)
- Two pointers give O(1) space vs O(n) for the precomputed max arrays approach
- THE most iconic hard interview problem — knowing this one is essential