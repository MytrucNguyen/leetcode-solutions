# 26. Remove Duplicates from Sorted Array

**Difficulty:** Easy  
**Topics:** Array, Two Pointers  
**Link:** [LeetCode Problem](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

## Problem Description

Given an integer array `nums` sorted in **non-decreasing order**, remove the duplicates **in-place** such that each unique element appears only once. The **relative order** of the elements should be kept the **same**. Then return the number of unique elements in `nums`.

Consider the number of unique elements of `nums` to be `k`, to get accepted, you need to do the following things:

- Change the array `nums` such that the first `k` elements of `nums` contain the unique elements in the order they were present in `nums` initially. The remaining elements of `nums` are not important as well as the size of `nums`.
- Return `k`.

**Custom Judge:**

The judge will test your solution with the following code:
```
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be **accepted**.

### Examples

**Example 1:**
```
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

**Example 2:**
```
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

### Constraints

- `1 <= nums.length <= 3 * 10^4`
- `-100 <= nums[i] <= 100`
- `nums` is sorted in **non-decreasing order**

## Understanding the Problem

We need to remove duplicates **in-place** with **O(1) extra space**.

**Key insights:**
- We can't create new arrays (would be O(n) space)
- We don't actually "remove" - we **overwrite** the front of the array
- We only care about the first `k` elements (the rest can be anything)
- The array is **sorted**, so duplicates are adjacent!

**What "in-place" means:**
```
Input:  [1, 1, 2, 3, 3, 3, 4]

We build the result IN THE SAME ARRAY:
[1, 2, 3, 4, 3, 3, 4]
 ↑---------↑
First 4 elements are unique
Return k = 4

We overwrote duplicates with unique values!
```

**We don't care what's after position k!**

## Approach

### Two Pointers - Build Unique Array at Front

Since the array is sorted, all duplicates are next to each other. We can use two pointers:

- **Pointer `i`:** Tracks where to place the next unique element
- **Pointer `j`:** Scans through the array looking for unique elements

**Key insight:** If `nums[j] != nums[j-1]`, we found a new unique value!

**Algorithm:**

1. Handle edge case: if array is empty, return 0
2. Start with `i = 1` (position for next unique element)
3. Loop through array with `j` from 1 to end:
   - If `nums[j] != nums[j-1]`: Found a new unique value!
     - Place it at position `i`: `nums[i] = nums[j]`
     - Move `i` forward: `i++`
4. Return `i` (number of unique elements)

**Why start i at 1?**

The first element is always unique (nothing before it to compare), so we start building from position 1.

### **Step-by-Step for [0,0,1,1,1,2,2,3,3,4]:**
```
Initial: i = 1

[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
 ↑  ↑
 i  j

---

j=1: nums[1]=0, nums[0]=0
     0 == 0? YES (duplicate, skip)
     
State: i=1

---

[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
 ↑     ↑
 i     j

j=2: nums[2]=1, nums[1]=0
     1 != 0? YES (new value!)
     nums[i] = nums[j]
     nums[1] = 1
     i++

[0, 1, 1, 1, 1, 2, 2, 3, 3, 4]
    ↑  ↑
    i  j

State: i=2

---

j=3: nums[3]=1, nums[2]=1
     1 == 1? YES (duplicate, skip)

j=4: nums[4]=1, nums[3]=1
     1 == 1? YES (duplicate, skip)

State: i=2

---

[0, 1, 1, 1, 1, 2, 2, 3, 3, 4]
    ↑           ↑
    i           j

j=5: nums[5]=2, nums[4]=1
     2 != 1? YES (new value!)
     nums[i] = nums[j]
     nums[2] = 2
     i++

[0, 1, 2, 1, 1, 2, 2, 3, 3, 4]
       ↑        ↑
       i        j

State: i=3

---

j=6: nums[6]=2, nums[5]=2
     2 == 2? YES (duplicate, skip)

State: i=3

---

[0, 1, 2, 1, 1, 2, 2, 3, 3, 4]
       ↑              ↑
       i              j

j=7: nums[7]=3, nums[6]=2
     3 != 2? YES (new value!)
     nums[i] = nums[j]
     nums[3] = 3
     i++

[0, 1, 2, 3, 1, 2, 2, 3, 3, 4]
          ↑           ↑
          i           j

State: i=4

---

j=8: nums[8]=3, nums[7]=3
     3 == 3? YES (duplicate, skip)

State: i=4

---

[0, 1, 2, 3, 1, 2, 2, 3, 3, 4]
          ↑                 ↑
          i                 j

j=9: nums[9]=4, nums[8]=3
     4 != 3? YES (new value!)
     nums[i] = nums[j]
     nums[4] = 4
     i++

[0, 1, 2, 3, 4, 2, 2, 3, 3, 4]
             ↑              ↑
             i              j

State: i=5

---

Loop ends

Return i = 5

Result: First 5 elements are [0, 1, 2, 3, 4] ✓
```

**The judge only checks the first 5 elements!**

### **Visual of the Process:**
```
Original:
[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

After processing:
[0, 1, 2, 3, 4, _, _, _, _, _]
 ↑-----------↑
 First 5 unique values

We overwrote the duplicates!
```

### **Why This Works:**

1. **Sorted array:** Duplicates are always adjacent
2. **Compare neighbors:** `nums[j] != nums[j-1]` finds new values
3. **Overwrite in-place:** Build unique array at the front
4. **Two pointers:** `i` builds result, `j` scans for unique values
5. **O(1) space:** Only use two integer variables

**Time Complexity:** O(n) - Single pass through array  
**Space Complexity:** O(1) - Only two pointer variables

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- "In-place" means modify the original array without creating new ones
- Two pointers can build a result while scanning
- Sorted arrays make duplicate detection easy (just compare neighbors)
- We only care about the first `k` elements (rest can be garbage)
- Compare `nums[j]` with `nums[j-1]` to detect new unique values
- Start `i` at 1 because the first element is always unique
- Classic two-pointer technique for array manipulation
- Foundation for many "remove/modify in-place" problems