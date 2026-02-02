# 141. Linked List Cycle

**Difficulty:** Easy  
**Topics:** Hash Table, Linked List, Two Pointers  
**Link:** [LeetCode Problem](https://leetcode.com/problems/linked-list-cycle/)

## Problem Description

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. **Note that `pos` is not passed as a parameter.**

Return `true` if there is a cycle in the linked list. Otherwise, return `false`.

### Examples

**Example 1:**

![alt text](image.png)
```
Input: head = [3,2,0,-4], pos = 1

    3 → 2 → 0 → -4
        ↑__________|

Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
```

**Example 2:**

![alt text](image-1.png)
```
Input: head = [1,2], pos = 0

    1 → 2
    ↑___|

Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
```

**Example 3:**

![alt text](image-2.png)
```
Input: head = [1], pos = -1

    1 → null

Output: false
Explanation: There is no cycle in the linked list.
```

### Constraints

- The number of nodes in the list is in the range `[0, 10^4]`
- `-10^5 <= Node.val <= 10^5`
- `pos` is `-1` or a valid index in the linked list

**Follow up:** Can you solve it using `O(1)` (i.e. constant) memory?

## Understanding the Problem

A **cycle** means the linked list loops back on itself - it never ends!

### **Normal Linked List (NO cycle):**
```
head → [1] → [2] → [3] → null
                           ↑
                      It ends here!
```

If you keep following `.next`, you eventually reach `null` and stop.

### **Linked List WITH a Cycle:**
```
head → [1] → [2] → [3] → [4]
              ↑____________|
              
The last node points BACK to node [2]!
```

If you keep following `.next`:
```
Start at 1 → 2 → 3 → 4 → 2 → 3 → 4 → 2...
INFINITE LOOP! Never reaches null!
```

### **Real-World Analogy**

**No cycle = Dead-end street:**
```
House 1 → House 2 → House 3 → End
You walk and eventually reach the end.
```

**Cycle = Circular running track:**
```
Point A → Point B → Point C → Point D
   ↑___________________________|

You run in circles forever! No finish line!
```

### **Why is this a problem?**
```typescript
// This works for normal lists:
let current = head;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
```

**But if there's a cycle - INFINITE LOOP!**
```
Print 3 → 2 → 0 → -4 → 2 → 0 → -4 → 2...
Never stops! Program hangs!
```

### **The Challenge**

**We can't just check for null because:**
- **No cycle** → eventually reach `null` ✓
- **Has cycle** → NEVER reach `null` (stuck forever!) ✗

**So how do we detect a cycle?**

## Approach

### Floyd's Cycle Detection (Tortoise & Hare Algorithm)

Use **two pointers** moving at different speeds:
- **Slow pointer** (tortoise 🐢): moves 1 step at a time
- **Fast pointer** (hare 🐇): moves 2 steps at a time

**Key insight:**
- If there's **NO cycle**: fast pointer reaches `null` first
- If there's a **cycle**: fast pointer eventually catches up to slow pointer (they meet!)

**Think of a running track:**
- **Linear track (no cycle):** Fast runner finishes first, never meets slow runner
- **Circular track (cycle):** Fast runner laps slow runner, they meet!

### **Algorithm:**

1. Start both pointers at head
2. While fast pointer and fast.next are not null:
   - Move slow pointer 1 step: `slow = slow.next`
   - Move fast pointer 2 steps: `fast = fast.next.next`
   - If slow === fast: They met → cycle exists!
3. If fast reaches null: No cycle

### **Why This Works**

**Without a cycle:**
```
Step 1:
  slow → [1]    fast → [1]

Step 2:
  slow → [2]    fast → [3]

Step 3:
  slow → [3]    fast → null
                        ↑
                  Fast reached null → NO cycle!
```

**With a cycle:**
```
List: [1] → [2] → [3] → [4]
              ↑____________|

Step 1:
  slow → [1]    fast → [1]

Step 2:
  slow → [2]    fast → [3]

Step 3:
  slow → [3]    fast → [2] (looped back!)

Step 4:
  slow → [4]    fast → [4]
         ↑             ↑
      They MEET! → cycle detected!
```

**Mathematical proof:**

If there's a cycle:
- Fast pointer gains 1 step on slow pointer each iteration
- Eventually, fast pointer will be exactly 1 step behind slow
- Next iteration, they meet!

### **Step-by-Step for [3,2,0,-4] with cycle:**
```
List: [3] → [2] → [0] → [-4]
             ↑____________|

Initial:
  slow = [3], fast = [3]

Iteration 1:
  slow = [3].next = [2]
  fast = [3].next.next = [0]
  slow !== fast, continue

Iteration 2:
  slow = [2].next = [0]
  fast = [0].next.next = [2] (looped!)
  slow !== fast, continue

Iteration 3:
  slow = [0].next = [-4]
  fast = [2].next.next = [-4] (through cycle)
  slow === fast → CYCLE DETECTED! ✓
```

### **Step-by-Step for [1,2,3] without cycle:**
```
List: [1] → [2] → [3] → null

Initial:
  slow = [1], fast = [1]

Iteration 1:
  slow = [1].next = [2]
  fast = [1].next.next = [3]
  slow !== fast, continue

Iteration 2:
  slow = [2].next = [3]
  fast = [3].next = null
                      ↑
  fast is null → NO CYCLE! ✓
```

### **Why Check `fast !== null && fast.next !== null`?**
```
We need BOTH checks:

fast !== null:
  Ensures fast pointer exists

fast.next !== null:
  Ensures we can do fast.next.next without error!
  
If either is null → we've reached the end → NO cycle!
```

**Time Complexity:** O(n) - Visit each node at most once (or twice in cycle)  
**Space Complexity:** O(1) - Only two pointers!

## Alternative Approach: Hash Set

Track visited nodes in a Set:
```typescript
let seen = new Set();
let current = head;

while (current !== null) {
    if (seen.has(current)) {
        return true;  // Visited before → cycle!
    }
    seen.add(current);
    current = current.next;
}
return false;  // Reached null → no cycle
```

**Time:** O(n), **Space:** O(n)

The two-pointer approach is better because it uses O(1) space!

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- A cycle means the list loops back on itself (never reaches null)
- Floyd's Cycle Detection (Tortoise & Hare) is the optimal solution
- Use two pointers: slow (1 step) and fast (2 steps)
- If they meet → cycle exists
- If fast reaches null → no cycle
- O(1) space is much better than O(n) hash set approach
- Check `fast !== null && fast.next !== null` to avoid errors
- This algorithm appears in many interview questions
- The pattern of "fast and slow pointers" applies to other problems too
- Think of it like runners on a track - they'll meet if it's circular!