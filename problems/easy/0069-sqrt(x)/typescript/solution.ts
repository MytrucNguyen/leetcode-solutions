export function mySqrt(x: number): number {
  // Edge cases
  if (x === 0 || x === 1) return x;

  let left = 0;
  let right = x;
  let result = 0;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    // Check if mid is the square root
    if (mid === x / mid) {
      return mid;
    }

    if (mid < x / mid) {
      result = mid;
      left = mid + 1; 
    } else {
      right = mid - 1;
    }
  }

  return result;
}
