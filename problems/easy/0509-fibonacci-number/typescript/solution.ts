export function fib(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev2 = 0; // Tracks F(n-2), starts at F(0)
  let prev1 = 1; // Tracks F(n-1), starts at F(1)

  // Build up from F(2) to F(n)
  for (let i = 2; i <= n; i++) {
    let current = prev2 + prev1; 
    prev2 = prev1; 
    prev1 = current; 
  }

  return prev1;
}
