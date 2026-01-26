import { isPalindrome, isPalindromeString, isPalindromeMath } from "./solution";

describe("Palindrome Number - Half Reversal (Main Solution)", () => {
  test("Example 1: 121", () => {
    const x = 121;
    const result = isPalindrome(x);

    console.log(
      `Test 1 (Half Reversal) - Input: ${x} → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });

  test("Example 2: -121", () => {
    const x = -121;
    const result = isPalindrome(x);

    console.log(
      `Test 2 (Half Reversal) - Input: ${x} → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });

  test("Example 3: 10", () => {
    const x = 10;
    const result = isPalindrome(x);

    console.log(
      `Test 3 (Half Reversal) - Input: ${x} → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });

  test("Single digit: 7", () => {
    const x = 7;
    const result = isPalindrome(x);

    console.log(
      `Test 4 (Half Reversal) - Input: ${x} → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });

  test("Zero", () => {
    const x = 0;
    const result = isPalindrome(x);

    console.log(
      `Test 5 (Half Reversal) - Input: ${x} → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });

  test("Even length palindrome: 1221", () => {
    const x = 1221;
    const result = isPalindrome(x);

    console.log(
      `Test 6 (Half Reversal) - Input: ${x} → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });

  test("Odd length palindrome: 12321", () => {
    const x = 12321;
    const result = isPalindrome(x);

    console.log(
      `Test 7 (Half Reversal) - Input: ${x} → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });

  test("Not palindrome: 123", () => {
    const x = 123;
    const result = isPalindrome(x);

    console.log(
      `Test 8 (Half Reversal) - Input: ${x} → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });

  test("Ends in zero: 100", () => {
    const x = 100;
    const result = isPalindrome(x);

    console.log(
      `Test 9 (Half Reversal) - Input: ${x} → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });
});

describe("Palindrome Number - String Approach", () => {
  test("Example 1: 121", () => {
    const x = 121;
    const result = isPalindromeString(x);

    console.log(
      `Test 1 (String) - Input: ${x} → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });

  test("Example 2: -121", () => {
    const x = -121;
    const result = isPalindromeString(x);

    console.log(
      `Test 2 (String) - Input: ${x} → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });

  test("Example 3: 10", () => {
    const x = 10;
    const result = isPalindromeString(x);

    console.log(
      `Test 3 (String) - Input: ${x} → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });

  test("Large palindrome: 123454321", () => {
    const x = 123454321;
    const result = isPalindromeString(x);

    console.log(
      `Test 4 (String) - Input: ${x} → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });
});

describe("Palindrome Number - Full Math Reversal", () => {
  test("Example 1: 121", () => {
    const x = 121;
    const result = isPalindromeMath(x);

    console.log(
      `Test 1 (Math) - Input: ${x} → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });

  test("Example 2: -121", () => {
    const x = -121;
    const result = isPalindromeMath(x);

    console.log(
      `Test 2 (Math) - Input: ${x} → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });

  test("Example 3: 10", () => {
    const x = 10;
    const result = isPalindromeMath(x);

    console.log(
      `Test 3 (Math) - Input: ${x} → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });

  test("Even length: 1221", () => {
    const x = 1221;
    const result = isPalindromeMath(x);

    console.log(
      `Test 4 (Math) - Input: ${x} → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });

  test("Odd length: 12321", () => {
    const x = 12321;
    const result = isPalindromeMath(x);

    console.log(
      `Test 5 (Math) - Input: ${x} → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });
});
