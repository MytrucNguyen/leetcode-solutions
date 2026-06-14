# 621. Task Scheduler

**Difficulty:** Medium  
**Topics:** Array, Hash Table, Greedy, Sorting, Heap, Counting  
**Link:** [LeetCode Problem](https://leetcode.com/problems/task-scheduler/)

## Problem Description

You are given an array of CPU `tasks`, each represented by a letter A to Z, and a cooling interval `n`. Each cycle or interval allows the completion of one task. Tasks can be completed in any order, but there's a constraint: identical tasks must be separated by at least `n` intervals.

Return the minimum number of intervals the CPU will take to finish all the given tasks.

### Examples

**Example 1:**

    Input: tasks = ["A","A","A","B","B","B"], n = 2
    Output: 8
    Explanation: A → B → idle → A → B → idle → A → B

**Example 2:**

    Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
    Output: 16
    Explanation: A → B → C → A → D → E → A → F → G → A → idle → idle → A → idle → idle → A

**Example 3:**

    Input: tasks = ["A","A","A","B","B","B"], n = 0
    Output: 6
    Explanation: No cooldown, just run them all.

### Constraints

- `1 <= tasks.length <= 10^4`
- `tasks[i]` is an uppercase English letter
- `0 <= n <= 100`

## Approach

### Greedy with Math Formula

The most frequent task dictates the minimum time. It creates a "frame" with gaps that other tasks fill. If enough tasks exist to fill all gaps, no idle time needed.

**Key Insight:** Think of the most frequent task creating a frame:

    maxFreq = 3, n = 2
    A _ _ A _ _ A

    The frame has (maxFreq - 1) groups of (n + 1) slots, plus the final group.
    Each group: A + n slots = n + 1 wide.
    Groups: maxFreq - 1 of them.
    Final slot: just the tasks with maxFreq.

**The Formula:**

    idleSlots = (maxFreq - 1) × n

    Fill idle slots with other tasks:
    For each task with frequency f:
      fills min(f, maxFreq - 1) idle slots

    idleSlots = max(0, idleSlots - filledSlots)
    answer = tasks.length + idleSlots

**Simpler formula approach:**

    answer = max(
      tasks.length,
      (maxFreq - 1) × (n + 1) + countOfMaxFreqTasks
    )

The answer is the larger of: just running all tasks (no idle needed), or the frame size.

**Walkthrough:**

    tasks = ["A","A","A","B","B","B"], n = 2
    Frequencies: A=3, B=3
    maxFreq = 3, countOfMaxFreq = 2 (both A and B have freq 3)

    Frame: (3-1) × (2+1) + 2 = 2 × 3 + 2 = 8
    Total tasks: 6
    answer = max(6, 8) = 8

    Frame visual:
    A B _ A B _ A B
    (2 groups of 3) + (2 final tasks) = 8 ✓

    tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
    Frequencies: A=6, B=1, C=1, D=1, E=1, F=1, G=1
    maxFreq = 6, countOfMaxFreq = 1

    Frame: (6-1) × (2+1) + 1 = 5 × 3 + 1 = 16
    Total tasks: 12
    answer = max(12, 16) = 16 ✓

    tasks = ["A","A","A","B","B","B"], n = 0
    maxFreq = 3, countOfMaxFreq = 2

    Frame: (3-1) × (0+1) + 2 = 2 × 1 + 2 = 4
    Total tasks: 6
    answer = max(6, 4) = 6 ✓ (no idle needed)

**When is the answer just tasks.length?** When there are enough different tasks to fill all the idle slots. The frame formula gives a smaller number, so we take tasks.length.

**Time Complexity:** O(n) — count frequencies, find max  
**Space Complexity:** O(1) — at most 26 task types

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- The most frequent task creates the "frame" — everything else fills the gaps
- Formula: max(total tasks, (maxFreq-1) × (n+1) + countOfMaxFreq)
- If enough tasks exist to fill gaps, answer is just tasks.length
- This is a math/greedy problem, not a simulation
- One of the most asked greedy problems at Meta
