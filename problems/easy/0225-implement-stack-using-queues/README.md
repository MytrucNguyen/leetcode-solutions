# 225. Implement Stack using Queues

**Difficulty:** Easy  
**Topics:** Stack, Queue, Design  
**Link:** [LeetCode Problem](https://leetcode.com/problems/implement-stack-using-queues/)

## Problem Description

Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (`push`, `top`, `pop`, and `empty`).

Implement the `MyStack` class:

- `void push(int x)` Pushes element x to the top of the stack.
- `int pop()` Removes the element on the top of the stack and returns it.
- `int top()` Returns the element on the top of the stack.
- `boolean empty()` Returns `true` if the stack is empty, `false` otherwise.

**Notes:**
- You must use **only** standard operations of a queue, which means only `push to back`, `peek/pop from front`, `size`, and `is empty` operations are valid.

### Examples

**Example 1:**
```
Input:
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]

Output:
[null, null, null, 2, 2, false]

Explanation:
MyStack myStack = new MyStack();
myStack.push(1); // stack is: [1]
myStack.push(2); // stack is: [1, 2]
myStack.top();   // return 2
myStack.pop();   // return 2, stack is: [1]
myStack.empty(); // return false
```

### Constraints

- `1 <= x <= 9`
- At most `100` calls will be made to `push`, `pop`, `top`, and `empty`.
- All the calls to `pop` and `top` are valid.

## Approach

### Single Queue with Rotation

Instead of using two queues, we can use one queue and rotate elements on each push to maintain stack order.

**Key Insight:** After pushing a new element to the back of the queue, rotate all previous elements behind it by popping from the front and pushing to the back. This puts the newest element at the front, giving us LIFO order.

**Algorithm:**
1. **push(x)** — Push x to the back of the queue, then rotate: pop from front and push to back `size - 1` times
2. **pop()** — Simply pop from the front of the queue (newest element is already there)
3. **top()** — Peek at the front of the queue
4. **empty()** — Check if the queue is empty

**Walkthrough:**
```
push(1):
  queue: [1]
  rotate 0 times (size - 1 = 0)
  queue: [1] ← 1 is at front

push(2):
  queue: [1, 2]
  rotate 1 time (size - 1 = 1):
    pop 1, push 1: [2, 1]
  queue: [2, 1] ← 2 is at front

push(3):
  queue: [2, 1, 3]
  rotate 2 times (size - 1 = 2):
    pop 2, push 2: [1, 3, 2]
    pop 1, push 1: [3, 2, 1]
  queue: [3, 2, 1] ← 3 is at front

pop() → returns 3
  queue: [2, 1]

pop() → returns 2
  queue: [1]

top() → returns 1
  queue: [1]
```

**Comparison with #232 (Queue using Stacks):**
- #232: Lazy transfer — only move elements when needed (amortized O(1))
- #225: Eager rotation — rearrange on every push (O(n) push, O(1) pop/top)

**Time Complexity:** O(n) for push (rotating n-1 elements), O(1) for pop, top, empty  
**Space Complexity:** O(n) - Storing all elements in the queue

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Rotating elements after each push keeps the newest element at the front
- Only one queue is needed instead of two
- The cost shifts to push (O(n)) while pop/top become O(1) — opposite tradeoff from #232
- Understanding how to simulate one data structure with another is a key design skill