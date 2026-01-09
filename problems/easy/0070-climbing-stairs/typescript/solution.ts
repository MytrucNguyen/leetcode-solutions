export function climbStairs(n: number): number {
  let prev2 = 1;
  let prev1 = 2;

  if (n <= 2) {
    return n;
  }

  for (let i = 3; i <= n; i++) {
    let current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  
  return prev1;
}
