export function maxProfit(prices: number[]): number {
  let minPrice: number = prices[0];
  let maxProfit: number = 0;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);

    const profit = prices[i] - minPrice;

    maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
}
