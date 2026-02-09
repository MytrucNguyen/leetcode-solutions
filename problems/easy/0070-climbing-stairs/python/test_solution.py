from solution import Solution

def run_tests():
    solution = Solution()
    
    print("=" * 60)
    print("Testing climbStairs - Dynamic Programming")
    print("=" * 60)
    
    # Test 1
    print("\nTest 1: n = 1")
    result = solution.climbStairs(1)
    expected = 1
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: Only one way: 1 step")
    assert result == expected
    print("  ✓ Passed")
    
    # Test 2
    print("\nTest 2: n = 2")
    result = solution.climbStairs(2)
    expected = 2
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: Two ways: 1+1 or 2")
    assert result == expected
    print("  ✓ Passed")
    
    # Test 3
    print("\nTest 3: n = 3")
    result = solution.climbStairs(3)
    expected = 3
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: Three ways: 1+1+1 or 1+2 or 2+1")
    assert result == expected
    print("  ✓ Passed")
    
    # Test 4
    print("\nTest 4: n = 4")
    result = solution.climbStairs(4)
    expected = 5
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: Five ways to climb 4 stairs")
    assert result == expected
    print("  ✓ Passed")
    
    # Test 5
    print("\nTest 5: n = 5")
    result = solution.climbStairs(5)
    expected = 8
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: Eight ways to climb 5 stairs")
    assert result == expected
    print("  ✓ Passed")
    
    # Test 6
    print("\nTest 6: n = 10")
    result = solution.climbStairs(10)
    expected = 89
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: Fibonacci pattern continues")
    assert result == expected
    print("  ✓ Passed")
    
    # Test 7
    print("\nTest 7: n = 20")
    result = solution.climbStairs(20)
    expected = 10946
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: Large n test")
    assert result == expected
    print("  ✓ Passed")
    
    # Test 8
    print("\nTest 8: n = 30")
    result = solution.climbStairs(30)
    expected = 1346269
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: Testing with constraint boundary")
    assert result == expected
    print("  ✓ Passed")
    
    # Test 9
    print("\nTest 9: n = 6")
    result = solution.climbStairs(6)
    expected = 13
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: Pattern: 1,2,3,5,8,13")
    assert result == expected
    print("  ✓ Passed")
    
    # Test 10
    print("\nTest 10: n = 7")
    result = solution.climbStairs(7)
    expected = 21
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: Pattern continues: 21")
    assert result == expected
    print("  ✓ Passed")
    
    print("\n" + "=" * 60)
    print("ALL TESTS PASSED! ✓")
    print("=" * 60)

if __name__ == "__main__":
    run_tests()