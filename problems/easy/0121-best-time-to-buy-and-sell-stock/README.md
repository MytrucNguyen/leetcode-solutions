# 121. Best Time to Buy and Sell Stock

**Difficulty:** Easy  
**Topics:** Array, Dynamic Programming  
**Link:** [LeetCode Problem](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

## Problem Description

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return the **maximum profit** you can achieve from this transaction. If you cannot achieve any profit, return `0`.

### Examples

**Example 1:**
```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

**Example 2:**
```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

### Constraints

- `1 <= prices.length <= 10^5`
- `0 <= prices[i] <= 10^4`

## Approach

### One Pass Solution

Track two values as you iterate through the prices:
1. The **minimum price seen so far** (the best day to buy)
2. The **maximum profit seen so far** (the best profit found)

For each day, check if today's price is lower than the minimum (better day to buy), then calculate what the profit would be if you sold today. Keep the maximum profit found throughout the iteration.

**Time Complexity:** O(n) - Single pass through the array  
**Space Complexity:** O(1) - Only using two variables

## Solutions

- [C# Solution](./csharp/Solution.cs)
- [Python Solution](./python/solution.py)
- [TypeScript Solution](./typescript/solution.ts)

## Key Takeaways

- Greedy approach: Track minimum price and maximum profit as you iterate
- You must buy before you sell - order matters, so you can't just use `Math.max(prices) - Math.min(prices)`
- Single pass solution with constant space - no need for nested loops
- Classic example of tracking state while iterating (minimum seen so far)