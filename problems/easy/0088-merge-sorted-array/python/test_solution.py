from solution import Solution

def run_tests():
    solution = Solution()
    
    print("=" * 60)
    print("Testing merge - Merge Sorted Array")
    print("=" * 60)
    
    # Test 1
    print("\nTest 1: nums1=[1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3")
    nums1 = [1, 2, 3, 0, 0, 0]
    m = 3
    nums2 = [2, 5, 6]
    n = 3
    solution.merge(nums1, m, nums2, n)
    expected = [1, 2, 2, 3, 5, 6]
    print(f"  Output: {nums1}")
    print(f"  Expected: {expected}")
    assert nums1 == expected
    print("  ✓ Passed")
    
    # Test 2
    print("\nTest 2: nums1=[1], m=1, nums2=[], n=0")
    nums1 = [1]
    m = 1
    nums2 = []
    n = 0
    solution.merge(nums1, m, nums2, n)
    expected = [1]
    print(f"  Output: {nums1}")
    print(f"  Expected: {expected}")
    assert nums1 == expected
    print("  ✓ Passed")
    
    # Test 3
    print("\nTest 3: nums1=[0], m=0, nums2=[1], n=1")
    nums1 = [0]
    m = 0
    nums2 = [1]
    n = 1
    solution.merge(nums1, m, nums2, n)
    expected = [1]
    print(f"  Output: {nums1}")
    print(f"  Expected: {expected}")
    assert nums1 == expected
    print("  ✓ Passed")
    
    # Test 4
    print("\nTest 4: nums1=[2,0], m=1, nums2=[1], n=1")
    nums1 = [2, 0]
    m = 1
    nums2 = [1]
    n = 1
    solution.merge(nums1, m, nums2, n)
    expected = [1, 2]
    print(f"  Output: {nums1}")
    print(f"  Expected: {expected}")
    assert nums1 == expected
    print("  ✓ Passed")
    
    # Test 5
    print("\nTest 5: nums1=[4,5,6,0,0,0], m=3, nums2=[1,2,3], n=3")
    nums1 = [4, 5, 6, 0, 0, 0]
    m = 3
    nums2 = [1, 2, 3]
    n = 3
    solution.merge(nums1, m, nums2, n)
    expected = [1, 2, 3, 4, 5, 6]
    print(f"  Output: {nums1}")
    print(f"  Expected: {expected}")
    assert nums1 == expected
    print("  ✓ Passed")
    
    # Test 6
    print("\nTest 6: nums1=[1,2,4,5,6,0], m=5, nums2=[3], n=1")
    nums1 = [1, 2, 4, 5, 6, 0]
    m = 5
    nums2 = [3]
    n = 1
    solution.merge(nums1, m, nums2, n)
    expected = [1, 2, 3, 4, 5, 6]
    print(f"  Output: {nums1}")
    print(f"  Expected: {expected}")
    assert nums1 == expected
    print("  ✓ Passed")
    
    # Test 7
    print("\nTest 7: nums1=[1,3,5,0,0,0], m=3, nums2=[2,4,6], n=3")
    nums1 = [1, 3, 5, 0, 0, 0]
    m = 3
    nums2 = [2, 4, 6]
    n = 3
    solution.merge(nums1, m, nums2, n)
    expected = [1, 2, 3, 4, 5, 6]
    print(f"  Output: {nums1}")
    print(f"  Expected: {expected}")
    assert nums1 == expected
    print("  ✓ Passed")
    
    # Test 8
    print("\nTest 8: nums1=[1,2,3,0,0,0], m=3, nums2=[4,5,6], n=3")
    nums1 = [1, 2, 3, 0, 0, 0]
    m = 3
    nums2 = [4, 5, 6]
    n = 3
    solution.merge(nums1, m, nums2, n)
    expected = [1, 2, 3, 4, 5, 6]
    print(f"  Output: {nums1}")
    print(f"  Expected: {expected}")
    assert nums1 == expected
    print("  ✓ Passed")
    
    # Test 9
    print("\nTest 9: nums1=[-1,0,0,3,3,0,0,0], m=5, nums2=[-1,-1,0], n=3")
    nums1 = [-1, 0, 0, 3, 3, 0, 0, 0]
    m = 5
    nums2 = [-1, -1, 0]
    n = 3
    solution.merge(nums1, m, nums2, n)
    expected = [-1, -1, -1, 0, 0, 0, 3, 3]
    print(f"  Output: {nums1}")
    print(f"  Expected: {expected}")
    assert nums1 == expected
    print("  ✓ Passed")
    
    # Test 10
    print("\nTest 10: nums1=[4,0,0,0,0,0], m=1, nums2=[1,2,3,5,6], n=5")
    nums1 = [4, 0, 0, 0, 0, 0]
    m = 1
    nums2 = [1, 2, 3, 5, 6]
    n = 5
    solution.merge(nums1, m, nums2, n)
    expected = [1, 2, 3, 4, 5, 6]
    print(f"  Output: {nums1}")
    print(f"  Expected: {expected}")
    assert nums1 == expected
    print("  ✓ Passed")
    
    print("\n" + "=" * 60)
    print("ALL TESTS PASSED! ✓")
    print("=" * 60)

if __name__ == "__main__":
    run_tests()