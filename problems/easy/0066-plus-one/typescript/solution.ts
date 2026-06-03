export function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    // Add 1 to current digit
    digits[i]++;

    // If no carry needed, we're done
    if (digits[i] < 10) {
      return digits;
    }

    // Carry needed: set to 0 and continue
    digits[i] = 0;
  }

  // If we get here, all digits were 9
  // Create new array with 1 at front, followed by all 0s
  return [1, ...digits];
}
