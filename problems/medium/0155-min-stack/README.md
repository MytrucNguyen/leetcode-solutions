# 155. Min Stack

**Difficulty:** Medium  
**Topics:** Stack, Design  
**Link:** [LeetCode Problem](https://leetcode.com/problems/min-stack/)

## Problem Description

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the `MinStack` class:

- `MinStack()` initializes the stack object
- `void push(int val)` pushes the element val onto the stack
- `void pop()` removes the element on the top of the stack
- `int top()` gets the top element of the stack
- `int getMin()` retrieves the minimum element in the stack

You must implement a solution with **O(1)** time complexity for each function.

### Examples

**Example 1:**

    Input:
    ["MinStack","push","push","push","getMin","pop","top","getMin"]
    [[],[-2],[0],[-3],[],[],[],[]]

    Output: [null,null,null,null,-3,null,0,-2]

    Explanation:
    MinStack minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.getMin(); // return -3
    minStack.pop();
    minStack.top();    // return 0
    minStack.getMin(); // return -2

### Constraints

- `-2^31 <= val <= 2^31 - 1`
- Methods `pop`, `top` and `getMin` will always be called on non-empty stacks
- At most `3 * 10^4` calls will be made to `push`, `pop`, `top`, and `getMin`

## Approach

### Two Stacks — Main Stack + Min Stack

Use two stacks: one for the actual values, and one that tracks the minimum at each level. Both stacks stay in sync — push and pop from both at the same time.

**Key Insight:** The minimum can change when we push or pop. If we just track a single min variable, popping the min element means we don't know the next minimum without scanning the whole stack. The solution: a second stack where each entry is the minimum at that point in the stack's history.

**Algorithm:**
- **push(val):** Push to main stack. Push `min(val, current min)` to min stack.
- **pop():** Pop from both stacks.
- **top():** Peek at main stack.
- **getMin():** Peek at min stack.

**Walkthrough:**

    push(-2):
      stack:    [-2]
      minStack: [-2]     ← min is -2

    push(0):
      stack:    [-2, 0]
      minStack: [-2, -2]  ← min is still -2

    push(-3):
      stack:    [-2, 0, -3]
      minStack: [-2, -2, -3]  ← new min is -3

    getMin() → minStack top = -3 ✓

    pop():
      stack:    [-2, 0]
      minStack: [-2, -2]  ← -3 is gone, min reverts to -2

    top() → stack top = 0 ✓

    getMin() → minStack top = -2 ✓

**Why this works:** The min stack mirrors the main stack's history. At any point, the top of the min stack is the minimum of all elements currently in the main stack. When we pop, the min stack also pops, automatically reverting to the previous minimum.

**Comparison with other design problems:**
- Queue using Stacks (#232): Two stacks simulate FIFO
- Stack using Queues (#225): Queue rotation simulates LIFO
- LRU Cache (#146): Hash map + doubly linked list
- Min Stack (#155): Two stacks — one for values, one for minimums

**Time Complexity:** O(1) for all operations  
**Space Complexity:** O(n) — two stacks storing n elements

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- A second stack tracking minimums gives O(1) getMin without scanning
- Both stacks stay in sync — push/pop from both together
- The min stack stores `min(new value, current min)` at each level
- This "auxiliary data structure" pattern is common in design problems
- Simple but clever — interviewers love seeing clean O(1) solutions