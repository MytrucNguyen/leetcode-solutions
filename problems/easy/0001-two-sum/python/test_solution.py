import unittest
from solution import Solution

class TestTwoSum(unittest.TestCase):
    
    def setUp(self):
        self.solution = Solution()
    
    def test_example_1(self):
        """Test basic case: [2,7,11,15], target 9"""
        nums, target = [2, 7, 11, 15], 9
        result = self.solution.twoSum(nums, target)
        expected = [0, 1]
        print(f"\n✓ Test 1: nums={nums}, target={target}")
        print(f"  Result: {result}, Expected: {expected}")
        self.assertEqual(result, expected)
    
    def test_example_2(self):
        """Test case: [3,2,4], target 6"""
        nums, target = [3, 2, 4], 6
        result = self.solution.twoSum(nums, target)
        expected = [1, 2]
        print(f"\n✓ Test 2: nums={nums}, target={target}")
        print(f"  Result: {result}, Expected: {expected}")
        self.assertEqual(result, expected)
    
    def test_same_numbers(self):
        """Test with duplicate numbers"""
        nums, target = [3, 3], 6
        result = self.solution.twoSum(nums, target)
        expected = [0, 1]
        print(f"\n✓ Test 3: nums={nums}, target={target}")
        print(f"  Result: {result}, Expected: {expected}")
        self.assertEqual(result, expected)
    
    def test_no_solution(self):
        """Test when no solution exists"""
        nums, target = [1, 2, 3], 10
        result = self.solution.twoSum(nums, target)
        expected = []
        print(f"\n✓ Test 4: nums={nums}, target={target}")
        print(f"  Result: {result}, Expected: {expected}")
        self.assertEqual(result, expected)
    
    def test_negative_numbers(self):
        """Test with negative numbers"""
        nums, target = [-1, -2, -3, -4, -5], -8
        result = self.solution.twoSum(nums, target)
        expected = [2, 4]
        print(f"\n✓ Test 5: nums={nums}, target={target}")
        print(f"  Result: {result}, Expected: {expected}")
        self.assertEqual(result, expected)

if __name__ == '__main__':
    unittest.main(verbosity=2)