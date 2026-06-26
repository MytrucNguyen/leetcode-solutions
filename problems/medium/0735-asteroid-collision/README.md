# 735. Asteroid Collision

**Difficulty:** Medium  
**Topics:** Array, Stack, Simulation  
**Link:** [LeetCode Problem](https://leetcode.com/problems/asteroid-collision/)

## Problem Description

We are given an array `asteroids` of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

### Examples

**Example 1:**

    Input: asteroids = [5, 10, -5]
    Output: [5, 10]
    Explanation: 10 and -5 collide, 10 survives. 5 and 10 same direction, no collision.

**Example 2:**

    Input: asteroids = [8, -8]
    Output: []
    Explanation: Equal size, both explode.

**Example 3:**

    Input: asteroids = [-2, -1, 1, 2]
    Output: [-2, -1, 1, 2]
    Explanation: Moving away from each other, no collisions.

### Constraints

- `2 <= asteroids.length <= 10^4`
- `-1000 <= asteroids[i] <= 1000`
- `asteroids[i] != 0`

## Approach

### Stack — Collide with Top

Use a stack. For each asteroid, check if it collides with the top of the stack (negative meets positive). Resolve all collisions before pushing.

**Key Insight:** Only one collision type happens: a negative (left-moving) asteroid meets a positive (right-moving) one on the stack. All other cases — both positive, both negative, negative then positive — never collide.

**Collision condition:**

- Stack top is positive AND current is negative → collision!
- Otherwise → no collision, just push

**Resolving a collision — three outcomes:**

1. Stack top is bigger → current asteroid explodes (don't push)
2. Current is bigger (abs) → stack top explodes (pop), check next
3. Same size → both explode (pop, don't push)

**Algorithm:**

1. For each asteroid:
    - While stack is not empty AND top > 0 AND current < 0 (collision):
        - If top < |current| → pop top (it explodes), continue checking
        - If top === |current| → pop top (both explode), mark current as destroyed
        - If top > |current| → current explodes, mark as destroyed
    - If current survived all collisions → push to stack
2. Return stack

**Walkthrough:**

    asteroids = [10, 2, -5]

    10: stack empty → push.        Stack: [10]
    2:  2 > 0, no collision → push. Stack: [10, 2]
    -5: top=2 > 0, current=-5 < 0 → collision!
        |−5|=5 > 2 → pop 2 (explodes). Stack: [10]
        top=10 > 0, current=-5 < 0 → collision!
        |−5|=5 < 10 → -5 explodes. Done.

    Stack: [10] ✓

    asteroids = [5, 10, -5]

    5: push.                        Stack: [5]
    10: push.                       Stack: [5, 10]
    -5: top=10 > 0, current=-5 < 0 → collision!
        |−5|=5 < 10 → -5 explodes.

    Stack: [5, 10] ✓

    asteroids = [-2, -1, 1, 2]

    -2: stack empty → push.         Stack: [-2]
    -1: top=-2 < 0, no collision → push. Stack: [-2, -1]
    1:  top=-1 < 0, no collision → push. Stack: [-2, -1, 1]
    2:  top=1 > 0, same direction → push. Stack: [-2, -1, 1, 2]

    Stack: [-2, -1, 1, 2] ✓

**Comparison with other stack problems:**

- Valid Parentheses (#20): Push open, pop on matching close
- Daily Temperatures (#739): Pop when current > top
- Asteroid Collision (#735): Pop when collision, resolve by size

**Time Complexity:** O(n) — each asteroid pushed and popped at most once  
**Space Complexity:** O(n) — stack holds surviving asteroids

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Only positive (right) meeting negative (left) causes collision
- Use a while loop — one negative asteroid can destroy multiple positives
- Three collision outcomes: bigger wins, smaller explodes, equal both explode
- The stack naturally models "what's still moving right" waiting to be hit
- Fun, visual problem that tests careful case handling
