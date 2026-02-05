from solution import Solution

def run_tests():
    solution = Solution()
    
    print("=" * 60)
    print("Testing mySqrt - Binary Search for Square Root")
    print("=" * 60)
    
    # Test 1
    print("\nTest 1: x = 4 (perfect square)")
    result = solution.mySqrt(4)
    expected = 2
    print(f"  Output: {result}, Expected: {expected}")
    assert result == expected
    print("  ✓ Passed")
    
    # Test 2
    print("\nTest 2: x = 8 (not perfect square)")
    result = solution.mySqrt(8)
    expected = 2
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: sqrt(8) = 2.828..., rounded down = 2")
    assert result == expected
    print("  ✓ Passed")
    
    # Test 3
    print("\nTest 3: x = 0")
    result = solution.mySqrt(0)
    expected = 0
    print(f"  Output: {result}, Expected: {expected}")
    assert result == expected
    print("  ✓ Passed")
    
    # Test 4
    print("\nTest 4: x = 1")
    result = solution.mySqrt(1)
    expected = 1
    print(f"  Output: {result}, Expected: {expected}")
    assert result == expected
    print("  ✓ Passed")
    
    # Test 5
    print("\nTest 5: x = 2")
    result = solution.mySqrt(2)
    expected = 1
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: sqrt(2) = 1.414..., rounded down = 1")
    assert result == expected
    print("  ✓ Passed")
    
    # Test 6
    print("\nTest 6: x = 16 (perfect square)")
    result = solution.mySqrt(16)
    expected = 4
    print(f"  Output: {result}, Expected: {expected}")
    assert result == expected
    print("  ✓ Passed")
    
    # Test 7
    print("\nTest 7: x = 15")
    result = solution.mySqrt(15)
    expected = 3
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: sqrt(15) = 3.872..., rounded down = 3")
    assert result == expected
    print("  ✓ Passed")
    
    # Test 8
    print("\nTest 8: x = 100 (perfect square)")
    result = solution.mySqrt(100)
    expected = 10
    print(f"  Output: {result}, Expected: {expected}")
    assert result == expected
    print("  ✓ Passed")
    
    # Test 9
    print("\nTest 9: x = 99")
    result = solution.mySqrt(99)
    expected = 9
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: sqrt(99) = 9.949..., rounded down = 9")
    assert result == expected
    print("  ✓ Passed")
    
    # Test 10
    print("\nTest 10: x = 2147483647 (large number)")
    result = solution.mySqrt(2147483647)
    expected = 46340
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: Testing with very large number")
    assert result == expected
    print("  ✓ Passed")
    
    print("\n" + "=" * 60)
    print("ALL TESTS PASSED! ✓")
    print("=" * 60)

if __name__ == "__main__":
    run_tests()