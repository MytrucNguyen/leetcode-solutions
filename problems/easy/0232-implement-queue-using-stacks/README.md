# 232. Implement Queue using Stacks

**Difficulty:** Easy  
**Topics:** Stack, Queue, Design  
**Link:** [LeetCode Problem](https://leetcode.com/problems/implement-queue-using-stacks/)

## Problem Description

Implement a first-in-first-out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (`push`, `peek`, `pop`, and `empty`).

Implement the `MyQueue` class:

- `void push(int x)` Pushes element x to the back of the queue.
- `int pop()` Removes the element from the front of the queue and returns it.
- `int peek()` Returns the element at the front of the queue.
- `boolean empty()` Returns `true` if the queue is empty, `false` otherwise.

**Notes:**
- You must use **only** standard operations of a stack, which means only `push to top`, `peek/pop from top`, `size`, and `is empty` operations are valid.

### Examples

**Example 1:**
```
Input:
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]

Output:
[null, null, null, 1, 1, false]

Explanation:
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2]
myQueue.peek();  // return 1
myQueue.pop();   // return 1, queue is: [2]
myQueue.empty(); // return false
```

### Constraints

- `1 <= x <= 9`
- At most `100` calls will be made to `push`, `pop`, `peek`, and `empty`.
- All the calls to `pop` and `peek` are valid.

## Approach

### Two Stack Strategy
Use two stacks (`inStack` and `outStack`) to reverse the order of elements, converting LIFO (stack) behavior into FIFO (queue) behavior.

**Key Insight:** Transferring all elements from one stack to another reverses their order — which is exactly what we need to turn a stack into a queue.

**Algorithm:**
1. **push(x)** — Always push to `inStack`
2. **pop()** — If `outStack` is empty, transfer all elements from `inStack` to `outStack`. Then pop from `outStack`
3. **peek()** — Same as pop, but just look at the top of `outStack` without removing
4. **empty()** — Return `true` only if both `inStack` and `outStack` are empty

**The golden rule:** Only transfer from `inStack` to `outStack` when `outStack` is empty. If `outStack` still has elements, they're already in the correct order.

**Walkthrough:**
```
push(1), push(2), push(3):
  inStack:  [1, 2, 3]   outStack: []

pop() → need to return 1, but it's at the bottom!
  Transfer: inStack → outStack
  inStack:  []           outStack: [3, 2, 1]  ← 1 is on top!
  Pop from outStack → returns 1

push(4):
  inStack:  [4]          outStack: [3, 2]  ← don't transfer, outStack not empty

pop() → returns 2 (from outStack, no transfer needed)
  inStack:  [4]          outStack: [3]

pop() → returns 3 (from outStack, no transfer needed)
  inStack:  [4]          outStack: []

pop() → outStack is empty, so transfer first
  inStack:  []           outStack: [4]
  Pop from outStack → returns 4
```

**Time Complexity:** O(1) amortized for all operations — each element is transferred at most once  
**Space Complexity:** O(n) — storing all elements across both stacks

## Solutions

- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Transferring between two stacks reverses the order, converting LIFO to FIFO
- Only transfer when `outStack` is empty — this is what makes it efficient
- The "lazy transfer" approach gives O(1) amortized time because each element moves at most once
- This pattern of using two data structures to simulate another is a common design technique