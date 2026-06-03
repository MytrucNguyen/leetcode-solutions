// Approach 1: String Conversion (Simple)
export function isPalindromeString(x: number): boolean {
  const str = x.toString();
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

// Approach 2: Full Mathematical Reversal
export function isPalindromeMath(x: number): boolean {
  // Negative numbers are not palindromes
  if (x < 0) return false;

  // Numbers ending in 0 are not palindromes (except 0 itself)
  if (x !== 0 && x % 10 === 0) return false;

  // Reverse the number
  const original = x;
  let reversed = 0;
  let temp = x;

  while (temp > 0) {
    const digit = temp % 10;
    reversed = reversed * 10 + digit;
    temp = Math.floor(temp / 10);
  }

  return original === reversed;
}

// Approach 3: Half Reversal (Optimal)
export function isPalindrome(x: number): boolean {
  // Negative numbers are not palindromes
  // Numbers ending in 0 are not palindromes (except 0 itself)
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false;

  let reversed = 0;

  // Reverse only half the number
  while (x > reversed) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // For even length: x === reversed
  // For odd length: x === Math.floor(reversed / 10)
  return x === reversed || x === Math.floor(reversed / 10);
}
