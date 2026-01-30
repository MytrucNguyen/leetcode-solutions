class Solution:
    def isPalindrome(self, x: int) -> bool:
        """
        Main solution - Half Reversal (Optimal)
        Time: O(log n), Space: O(1)
        """
        # Negative numbers are not palindromes
        if x < 0 or (x != 0 and x % 10 == 0):
            return False
        
        reversed_half = 0
        
        # Reverse half the number
        while x > reversed_half:
            reversed_half = reversed_half * 10 + x % 10
            x //= 10
        
        # For even length: x == reversed_half
        # For odd length: x == reversed_half // 10
        return x == reversed_half or x == reversed_half // 10
    
    def isPalindromeString(self, x: int) -> bool:
        """
        Approach 1: String Conversion
        Time: O(n), Space: O(n)
        """
        s = str(x)
        return s == s[::-1]
    
    def isPalindromeMath(self, x: int) -> bool:
        """
        Approach 2: Full Mathematical Reversal
        Time: O(log n), Space: O(1)
        """
        # Negative numbers are not palindromes
        if x < 0:
            return False
        
        # Numbers ending in 0 (except 0 itself) are not palindromes
        if x != 0 and x % 10 == 0:
            return False
        
        # Reverse the entire number
        original = x
        reversed_num = 0
        
        while x > 0:
            digit = x % 10
            reversed_num = reversed_num * 10 + digit
            x //= 10
        
        return original == reversed_num