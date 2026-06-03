from solution import Solution

def run_tests():
    solution = Solution()

    # Test 1
    print("Test 1: [1,2,3]")
    result = solution.plusOne([1, 2, 3])
    expected = [1, 2, 4]
    print(f"  Output: {result}, Expected: {expected}")
    assert result == expected
    print("  ✓ Passed\n")

    # Test 2
    print("Test 2: [4,3,2,1]")
    result = solution.plusOne([4, 3, 2, 1])
    expected = [4, 3, 2, 2]
    print(f"  Output: {result}, Expected: {expected}")
    assert result == expected
    print("  ✓ Passed\n")

    # Test 3
    print("Test 3: [9]")
    result = solution.plusOne([9])
    expected = [1, 0]
    print(f"  Output: {result}, Expected: {expected}")
    assert result == expected
    print("  ✓ Passed\n")

    # Test 4
    print("Test 4: [1,2,9] - carry once")
    result = solution.plusOne([1, 2, 9])
    expected = [1, 3, 0]
    print(f"  Output: {result}, Expected: {expected}")
    assert result == expected
    print("  ✓ Passed\n")

    # Test 5
    print("Test 5: [9,9,9] - all 9s")
    result = solution.plusOne([9, 9, 9])
    expected = [1, 0, 0, 0]
    print(f"  Output: {result}, Expected: {expected}")
    assert result == expected
    print("  ✓ Passed\n")

    # Test 6
    print("Test 6: [1,9,9] - multiple carries")
    result = solution.plusOne([1, 9, 9])
    expected = [2, 0, 0]
    print(f"  Output: {result}, Expected: {expected}")
    assert result == expected
    print("  ✓ Passed\n")

    # Test 7
    print("Test 7: [0] - zero")
    result = solution.plusOne([0])
    expected = [1]
    print(f"  Output: {result}, Expected: {expected}")
    assert result == expected
    print("  ✓ Passed\n")

    # Test 8
    print("Test 8: [8,9,9,9] - leading non-9 with trailing 9s")
    result = solution.plusOne([8, 9, 9, 9])
    expected = [9, 0, 0, 0]
    print(f"  Output: {result}, Expected: {expected}")
    assert result == expected
    print("  ✓ Passed\n")

    print("=" * 50)
    print("ALL TESTS PASSED! ✓")
    print("=" * 50)

if __name__ == "__main__":
    run_tests()