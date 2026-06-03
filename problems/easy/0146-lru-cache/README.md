# 146. LRU Cache

**Difficulty:** Medium  
**Topics:** Hash Table, Linked List, Design, Doubly-Linked List  
**Link:** [LeetCode Problem](https://leetcode.com/problems/lru-cache/)

## Problem Description

Design a data structure that follows the constraints of a **Least Recently Used (LRU) cache**.

Implement the `LRUCache` class:

- `LRUCache(int capacity)` Initialize the LRU cache with **positive** size `capacity`.
- `int get(int key)` Return the value of the `key` if the key exists, otherwise return `-1`.
- `void put(int key, int value)` Update the value of the `key` if the `key` exists. Otherwise, add the `key-value` pair to the cache. If the number of keys exceeds the `capacity` from this operation, **evict** the least recently used key.

The functions `get` and `put` must each run in **O(1)** average time complexity.

### Examples

**Example 1:**
```
Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]

Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
```

### Constraints

- `1 <= capacity <= 3000`
- `0 <= key <= 10^4`
- `0 <= value <= 10^5`
- At most `2 * 10^5` calls will be made to `get` and `put`.

## Understanding LRU (Least Recently Used)

**LRU** keeps track of what was used when. When the cache is full, we remove the item that **hasn't been used for the longest time**.

### Real-World Example: Browser History (Capacity: 3)
```
Visit google.com    → Cache: [google]
Visit youtube.com   → Cache: [google, youtube]
Visit twitter.com   → Cache: [google, youtube, twitter]  (FULL)

Visit facebook.com  → Cache full! Evict least recent (google)
                    → Cache: [youtube, twitter, facebook]

Visit youtube.com   → Already exists! Move to most recent
                    → Cache: [twitter, facebook, youtube]

Visit reddit.com    → Cache full! Evict least recent (twitter)
                    → Cache: [facebook, youtube, reddit]
```

**Key Points:**
- Most recently used = Front of list (head)
- Least recently used = Back of list (tail)
- Accessing an item makes it "most recent"
- When full, remove the "least recent" (tail)

## Common Data Structures Overview

### 1. Array / List
```
[1, 2, 3, 4, 5]
```
- **Good for:** Random access by index (O(1))
- **Bad for:** Inserting/deleting in middle (O(n))

### 2. Hash Table / Hash Map / Object
```
{ "name": "John", "age": 30 }
```
- **Good for:** Fast lookups by key (O(1))
- **Bad for:** No ordering, can't track "oldest" or "newest"

### 3. Stack (LIFO - Last In, First Out)
```
Push → [1, 2, 3] ← Top
Pop ← removes 3
```
- **Good for:** Adding/removing from one end
- **Bad for:** Accessing middle or other end

### 4. Queue (FIFO - First In, First Out)
```
[1, 2, 3] ← Enqueue here
↑
Dequeue here
```
- **Good for:** Processing in order
- **Bad for:** Random access

### 5. Linked List (Singly)
```
1 → 2 → 3 → 4 → null
```
- **Good for:** Inserting/deleting anywhere (O(1) if you have the node)
- **Bad for:** Finding an element (O(n), must traverse)

### 6. Doubly Linked List
```
null ← 1 ⇄ 2 ⇄ 3 ⇄ 4 → null
```
- Like a linked list, but each node has **both** `next` AND `prev` pointers
- **Good for:** Moving in both directions, removing nodes easily
- **Bad for:** More memory (two pointers per node)

### 7. Set
```
{1, 2, 3, 4, 5}  // No duplicates
```
- **Good for:** Checking if something exists (O(1))
- **Bad for:** No ordering (usually)

### 8. Tree (Binary Tree, BST)
```
      4
     / \
    2   6
   / \ / \
  1  3 5  7
```
- **Good for:** Hierarchical data, fast search in BST (O(log n))
- **Bad for:** More complex to implement

### 9. Heap (Priority Queue)
```
Min Heap:     Max Heap:
    1             9
   / \           / \
  3   2         7   6
```
- **Good for:** Always getting min/max element (O(1)), insertions (O(log n))
- **Bad for:** Finding arbitrary elements

## Understanding Doubly Linked List

Unlike a singly linked list (only `next` pointer), a doubly linked list has both `next` AND `prev` pointers:
```
Singly Linked List:
1 → 2 → 3 → 4 → null

Doubly Linked List:
null ← 1 ⇄ 2 ⇄ 3 ⇄ 4 → null
```

**Why use doubly linked list?**
- Can traverse both directions
- Can remove a node in O(1) if you have reference to it
- Can move nodes to front/back easily

## Approach

### Hash Map + Doubly Linked List

To achieve O(1) for both `get` and `put`, we need to combine two data structures:

**1. Hash Map (for O(1) lookup)**
- Maps key → node in linked list
- Allows fast access to any cache entry

**2. Doubly Linked List (for O(1) reordering)**
- Maintains order by recency
- Most recent at head, least recent at tail
- Can quickly move nodes and remove from tail

### Structure
```
Hash Map:
key → node

Doubly Linked List:
HEAD ⇄ [most recent] ⇄ [older] ⇄ [oldest] ⇄ TAIL
```

### Algorithm

**get(key):**
1. If key not in hash map → return -1
2. If key exists:
   - Get the node from hash map
   - Move node to head (most recent)
   - Return node's value

**put(key, value):**
1. If key already exists:
   - Update the value
   - Move node to head (most recent)
2. If key doesn't exist:
   - Create new node
   - Add to head (most recent)
   - Add to hash map
   - If cache size > capacity:
     - Remove tail node (least recent)
     - Remove from hash map

**Helper operations needed:**
- `moveToHead(node)` - Remove node from current position, add to head
- `removeTail()` - Remove and return the tail node
- `addToHead(node)` - Add node right after dummy head
- `removeNode(node)` - Remove node from its current position

**Time Complexity:** O(1) for both get and put  
**Space Complexity:** O(capacity) - Store up to capacity items

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- LRU Cache requires combining multiple data structures (hash map + doubly linked list)
- Hash map provides O(1) lookup by key
- Doubly linked list maintains order and allows O(1) insertions/deletions
- Using dummy head and tail nodes simplifies edge cases
- This is a common system design pattern used in real caches (Redis, CDNs, browser caches)
- The challenge is implementing the doubly linked list operations correctly