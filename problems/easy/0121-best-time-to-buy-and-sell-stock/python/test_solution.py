from solution import Solution


def run_tests():
    solution = Solution()

    print("=" * 60)
    print("Testing maxProfit - Best Time to Buy and Sell Stock")
    print("=" * 60)

    # Test 1
    print("\nTest 1: prices = [7,1,5,3,6,4]")
    prices = [7, 1, 5, 3, 6, 4]
    result = solution.maxProfit(prices)
    expected = 5
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: Buy at 1, sell at 6, profit = 5")
    assert result == expected
    print("  ✓ Passed")

    # Test 2
    print("\nTest 2: prices = [7,6,4,3,1]")
    prices = [7, 6, 4, 3, 1]
    result = solution.maxProfit(prices)
    expected = 0
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: Prices only decrease, no profit possible")
    assert result == expected
    print("  ✓ Passed")

    # Test 3
    print("\nTest 3: prices = [1,2]")
    prices = [1, 2]
    result = solution.maxProfit(prices)
    expected = 1
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: Buy at 1, sell at 2, profit = 1")
    assert result == expected
    print("  ✓ Passed")

    # Test 4
    print("\nTest 4: prices = [2,1,2,1,0,1,2]")
    prices = [2, 1, 2, 1, 0, 1, 2]
    result = solution.maxProfit(prices)
    expected = 2
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: Buy at 0, sell at 2, profit = 2")
    assert result == expected
    print("  ✓ Passed")

    # Test 5
    print("\nTest 5: prices = [3,2,6,5,0,3]")
    prices = [3, 2, 6, 5, 0, 3]
    result = solution.maxProfit(prices)
    expected = 4
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: Buy at 2, sell at 6, profit = 4")
    assert result == expected
    print("  ✓ Passed")

    # Test 6
    print("\nTest 6: prices = [1,2,3,4,5]")
    prices = [1, 2, 3, 4, 5]
    result = solution.maxProfit(prices)
    expected = 4
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: Buy at 1, sell at 5, profit = 4")
    assert result == expected
    print("  ✓ Passed")

    # Test 7
    print("\nTest 7: prices = [5,4,3,2,1]")
    prices = [5, 4, 3, 2, 1]
    result = solution.maxProfit(prices)
    expected = 0
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: Prices decrease, no profit")
    assert result == expected
    print("  ✓ Passed")

    # Test 8
    print("\nTest 8: prices = [2,4,1]")
    prices = [2, 4, 1]
    result = solution.maxProfit(prices)
    expected = 2
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: Buy at 2, sell at 4, profit = 2")
    assert result == expected
    print("  ✓ Passed")

    # Test 9
    print("\nTest 9: prices = [3,3,5,0,0,3,1,4]")
    prices = [3, 3, 5, 0, 0, 3, 1, 4]
    result = solution.maxProfit(prices)
    expected = 4
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: Buy at 0, sell at 4, profit = 4")
    assert result == expected
    print("  ✓ Passed")

    # Test 10
    print("\nTest 10: prices = [1,4,2,4]")
    prices = [1, 4, 2, 4]
    result = solution.maxProfit(prices)
    expected = 3
    print(f"  Output: {result}, Expected: {expected}")
    print(f"  Explanation: Buy at 1, sell at 4, profit = 3")
    assert result == expected
    print("  ✓ Passed")

    print("\n" + "=" * 60)
    print("ALL TESTS PASSED! ✓")
    print("=" * 60)


if __name__ == "__main__":
    run_tests()
