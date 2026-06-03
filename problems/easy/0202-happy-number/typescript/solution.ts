export function isHappy(n: number): boolean {
  const seen = new Set<number>();

  while (n !== 1) {
    if (seen.has(n)) {
      return false;
    }

    seen.add(n);

    n = getSumOfSquares(n);
  }

  return true;
}

// Helper function: Calculate sum of squares of digits
function getSumOfSquares(n: number): number {
  let sum = 0;

  while (n > 0) {
    const digit = n % 10; // Get last digit
    sum += digit * digit; // Square it and add to sum
    n = Math.floor(n / 10); // Remove last digit
  }

  return sum;
}
