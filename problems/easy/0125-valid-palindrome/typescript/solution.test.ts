import { isPalindrome } from "./solution";

describe("Valid Palindrome", () => {
    test("Example 1: A man, a plan, a canal: Panama", () => {
        const s = "A man, a plan, a canal: Panama";
        const result = isPalindrome(s);
        const expected = true;
        
        console.log(`Test 1 - Input: "${s}" → Output: ${result}, Expected: ${expected}`);
        
        expect(result).toBe(expected);
    });

    test("Example 2: race a car", () => {
        const s = "race a car";
        const result = isPalindrome(s);
        const expected = false;
        
        console.log(`Test 2 - Input: "${s}" → Output: ${result}, Expected: ${expected}`);
        
        expect(result).toBe(expected);
    });

    test("Example 3: empty string", () => {
        const s = " ";
        const result = isPalindrome(s);
        const expected = true;
        
        console.log(`Test 3 - Input: "${s}" → Output: ${result}, Expected: ${expected}`);
        
        expect(result).toBe(expected);
    });

    test("Single character", () => {
        const s = "a";
        const result = isPalindrome(s);
        const expected = true;
        
        console.log(`Test 4 - Input: "${s}" → Output: ${result}, Expected: ${expected}`);
        
        expect(result).toBe(expected);
    });

    test("All non-alphanumeric", () => {
        const s = ".,!@#";
        const result = isPalindrome(s);
        const expected = true;
        
        console.log(`Test 5 - Input: "${s}" → Output: ${result}, Expected: ${expected}`);
        
        expect(result).toBe(expected);
    });

    test("Simple palindrome", () => {
        const s = "racecar";
        const result = isPalindrome(s);
        const expected = true;
        
        console.log(`Test 6 - Input: "${s}" → Output: ${result}, Expected: ${expected}`);
        
        expect(result).toBe(expected);
    });

    test("Not a palindrome", () => {
        const s = "hello";
        const result = isPalindrome(s);
        const expected = false;
        
        console.log(`Test 7 - Input: "${s}" → Output: ${result}, Expected: ${expected}`);
        
        expect(result).toBe(expected);
    });
});