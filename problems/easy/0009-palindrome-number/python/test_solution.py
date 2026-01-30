from solution import Solution

def run_tests():
    solution = Solution()
    
    print("=" * 60)
    print("Testing isPalindrome (Half Reversal - Main Solution)")
    print("=" * 60)
    
    # Test 1
    print("\nTest 1: x = 121")
    result = solution.isPalindrome(121)
    print(f"  Output: {result}, Expected: True")
    assert result == True
    print("  ✓ Passed")
    
    # Test 2
    print("\nTest 2: x = -121")
    result = solution.isPalindrome(-121)
    print(f"  Output: {result}, Expected: False")
    assert result == False
    print("  ✓ Passed")
    
    # Test 3
    print("\nTest 3: x = 10")
    result = solution.isPalindrome(10)
    print(f"  Output: {result}, Expected: False")
    assert result == False
    print("  ✓ Passed")
    
    # Test 4
    print("\nTest 4: x = 0")
    result = solution.isPalindrome(0)
    print(f"  Output: {result}, Expected: True")
    assert result == True
    print("  ✓ Passed")
    
    # Test 5
    print("\nTest 5: x = 12321")
    result = solution.isPalindrome(12321)
    print(f"  Output: {result}, Expected: True")
    assert result == True
    print("  ✓ Passed")
    
    print("\n" + "=" * 60)
    print("Testing isPalindromeString (String Approach)")
    print("=" * 60)
    
    # Test 6
    print("\nTest 6: x = 121")
    result = solution.isPalindromeString(121)
    print(f"  Output: {result}, Expected: True")
    assert result == True
    print("  ✓ Passed")
    
    # Test 7
    print("\nTest 7: x = -121")
    result = solution.isPalindromeString(-121)
    print(f"  Output: {result}, Expected: False")
    assert result == False
    print("  ✓ Passed")
    
    print("\n" + "=" * 60)
    print("Testing isPalindromeMath (Full Reversal)")
    print("=" * 60)
    
    # Test 8
    print("\nTest 8: x = 1221")
    result = solution.isPalindromeMath(1221)
    print(f"  Output: {result}, Expected: True")
    assert result == True
    print("  ✓ Passed")
    
    # Test 9
    print("\nTest 9: x = 123")
    result = solution.isPalindromeMath(123)
    print(f"  Output: {result}, Expected: False")
    assert result == False
    print("  ✓ Passed")
    
    print("\n" + "=" * 60)
    print("ALL TESTS PASSED! ✓")
    print("=" * 60)

if __name__ == "__main__":
    run_tests()