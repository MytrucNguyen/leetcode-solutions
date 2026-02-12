from solution import Solution


def run_tests():
    solution = Solution()

    print("=" * 60)
    print("Testing isPalindrome - Valid Palindrome")
    print("=" * 60)

    # Test 1
    print("\nTest 1: s = 'A man, a plan, a canal: Panama'")
    s = "A man, a plan, a canal: Panama"
    result = solution.isPalindrome(s)
    expected = True
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: After cleaning: 'amanaplanacanalpanama' is a palindrome")
    assert result == expected
    print("  ✓ Passed")

    # Test 2
    print("\nTest 2: s = 'race a car'")
    s = "race a car"
    result = solution.isPalindrome(s)
    expected = False
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: After cleaning: 'raceacar' is not a palindrome")
    assert result == expected
    print("  ✓ Passed")

    # Test 3
    print("\nTest 3: s = ' '")
    s = " "
    result = solution.isPalindrome(s)
    expected = True
    print(f"  Output: {result}, Expected: {expected}")
    print(
        f"  Explanation: Empty string after removing non-alphanumeric is a palindrome"
    )
    assert result == expected
    print("  ✓ Passed")

    # Test 4
    print("\nTest 4: s = 'racecar'")
    s = "racecar"
    result = solution.isPalindrome(s)
    expected = True
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: 'racecar' is a palindrome")
    assert result == expected
    print("  ✓ Passed")

    # Test 5
    print("\nTest 5: s = 'hello'")
    s = "hello"
    result = solution.isPalindrome(s)
    expected = False
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: 'hello' is not a palindrome")
    assert result == expected
    print("  ✓ Passed")

    # Test 6
    print("\nTest 6: s = 'a'")
    s = "a"
    result = solution.isPalindrome(s)
    expected = True
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: Single character is always a palindrome")
    assert result == expected
    print("  ✓ Passed")

    # Test 7
    print("\nTest 7: s = 'ab'")
    s = "ab"
    result = solution.isPalindrome(s)
    expected = False
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: 'ab' is not a palindrome")
    assert result == expected
    print("  ✓ Passed")

    # Test 8
    print("\nTest 8: s = 'aba'")
    s = "aba"
    result = solution.isPalindrome(s)
    expected = True
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: 'aba' is a palindrome")
    assert result == expected
    print("  ✓ Passed")

    # Test 9
    print("\nTest 9: s = '0P'")
    s = "0P"
    result = solution.isPalindrome(s)
    expected = False
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: '0p' is not a palindrome")
    assert result == expected
    print("  ✓ Passed")

    # Test 10
    print("\nTest 10: s = 'Madam, I'm Adam'")
    s = "Madam, I'm Adam"
    result = solution.isPalindrome(s)
    expected = True
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: After cleaning: 'madamimadam' is a palindrome")
    assert result == expected
    print("  ✓ Passed")

    # Test 11
    print("\nTest 11: s = 'Was it a car or a cat I saw?'")
    s = "Was it a car or a cat I saw?"
    result = solution.isPalindrome(s)
    expected = True
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: After cleaning: 'wasitacaroracatisaw' is a palindrome")
    assert result == expected
    print("  ✓ Passed")

    # Test 12
    print("\nTest 12: s = '.,;'")
    s = ".,;"
    result = solution.isPalindrome(s)
    expected = True
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: Only punctuation, empty after cleaning")
    assert result == expected
    print("  ✓ Passed")

    print("\n" + "=" * 60)
    print("ALL TESTS PASSED! ✓")
    print("=" * 60)


if __name__ == "__main__":
    run_tests()
