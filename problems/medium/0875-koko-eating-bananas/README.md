# 875. Koko Eating Bananas

**Difficulty:** Medium  
**Topics:** Array, Binary Search  
**Link:** [LeetCode Problem](https://leetcode.com/problems/koko-eating-bananas/)

## Problem Description

Koko loves to eat bananas. There are `n` piles of bananas, the `ith` pile has `piles[i]` bananas. The guards have gone and will come back in `h` hours.

Koko can decide her bananas-per-hour eating speed of `k`. Each hour, she chooses some pile and eats `k` bananas from it. If the pile has fewer than `k` bananas, she eats all of them and doesn't eat any more during that hour.

Return the minimum integer `k` such that she can eat all the bananas within `h` hours.

### Examples

**Example 1:**

    Input: piles = [3,6,7,11], h = 8
    Output: 4

**Example 2:**

    Input: piles = [30,11,23,4,20], h = 5
    Output: 30
    Explanation: h equals number of piles, must eat each pile in one hour.

**Example 3:**

    Input: piles = [30,11,23,4,20], h = 6
    Output: 23

### Constraints

- `1 <= piles.length <= 10^4`
- `piles.length <= h <= 10^9`
- `1 <= piles[i] <= 10^9`

## Approach

### Binary Search on the Answer Space

Instead of searching an array, binary search on the possible eating speeds (1 to max pile size). For each speed, check if Koko can finish in time.

**Key Insight:** The answer (eating speed) has a monotonic property: if speed `k` works, any speed > `k` also works. If speed `k` doesn't work, any speed < `k` also doesn't. This is exactly what binary search needs — a sorted search space with a clear boundary.

**New binary search pattern:**

- Standard (#704): Search for a value IN an array
- Rotated (#33): Search in a modified array
- Peak (#162): Search based on neighbor comparison
- Answer space (#875): Search for the minimum valid answer in a range

**Algorithm:**

1. Set `left = 1`, `right = max(piles)`
2. Binary search:
    - Calculate `mid` (candidate speed)
    - Calculate total hours at speed `mid`: sum of `ceil(pile / mid)` for each pile
    - If hours ≤ h → speed works, try slower: `right = mid`
    - If hours > h → too slow, go faster: `left = mid + 1`
3. Return `left`

**How to calculate hours for a speed:**

    For each pile: hours = ceil(pile / speed)

    ceil(pile / speed) = Math.ceil(pile / speed)
    Or without floating point: (pile + speed - 1) / speed (integer math)

**Walkthrough:**

    piles = [3, 6, 7, 11], h = 8
    left = 1, right = 11

    mid = 6: ceil(3/6)+ceil(6/6)+ceil(7/6)+ceil(11/6) = 1+1+2+2 = 6 ≤ 8
      Works! Try slower: right = 6

    mid = 3: ceil(3/3)+ceil(6/3)+ceil(7/3)+ceil(11/3) = 1+2+3+4 = 10 > 8
      Too slow! Go faster: left = 4

    mid = 5: ceil(3/5)+ceil(6/5)+ceil(7/5)+ceil(11/5) = 1+2+2+3 = 8 ≤ 8
      Works! Try slower: right = 5

    mid = 4: ceil(3/4)+ceil(6/4)+ceil(7/4)+ceil(11/4) = 1+2+2+3 = 8 ≤ 8
      Works! Try slower: right = 4

    left = 4 === right = 4 → return 4 ✓

**Time Complexity:** O(n × log(max pile)) — binary search O(log max) × check O(n)  
**Space Complexity:** O(1) — only variables

## Solutions

- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Binary search on the ANSWER, not on an array — a powerful new pattern
- The answer space has a monotonic property: faster always works if slower works
- Use `left < right` with `right = mid` pattern (same as Find Peak #162)
- ceil division without floating point: `(pile + speed - 1) / speed`
- This pattern applies to many "find minimum X that satisfies condition" problems
