import unittest
from solution import Solution


class TestContainsDuplicate(unittest.TestCase):

    def setUp(self):
        self.solution = Solution()

    def test_example_1(self):
        """Test with duplicate: [1,2,3,1]"""
        nums = [1, 2, 3, 1]
        result = self.solution.containsDuplicate(nums)
        print(f"\n✓ Test 1: nums={nums}")
        print(f"  Result: {result}, Expected: True")
        self.assertEqual(result, True)

    def test_example_2(self):
        """Test no duplicate: [1,2,3,4]"""
        nums = [1, 2, 3, 4]
        result = self.solution.containsDuplicate(nums)
        print(f"\n✓ Test 2: nums={nums}")
        print(f"  Result: {result}, Expected: False")
        self.assertEqual(result, False)

    def test_example_3(self):
        """Test multiple duplicates: [1,1,1,3,3,4,3,2,4,2]"""
        nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
        result = self.solution.containsDuplicate(nums)
        print(f"\n✓ Test 3: nums={nums}")
        print(f"  Result: {result}, Expected: True")
        self.assertEqual(result, True)

    def test_single_element(self):
        """Test single element"""
        nums = [1]
        result = self.solution.containsDuplicate(nums)
        print(f"\n✓ Test 4: nums={nums}")
        print(f"  Result: {result}, Expected: False")
        self.assertEqual(result, False)

    def test_negative_numbers(self):
        """Test with negative duplicates"""
        nums = [-1, -2, -3, -1]
        result = self.solution.containsDuplicate(nums)
        print(f"\n✓ Test 5: nums={nums}")
        print(f"  Result: {result}, Expected: True")
        self.assertEqual(result, True)

    def test_all_same(self):
        """Test all same numbers"""
        nums = [5, 5, 5, 5]
        result = self.solution.containsDuplicate(nums)
        print(f"\n✓ Test 6: nums={nums}")
        print(f"  Result: {result}, Expected: True")
        self.assertEqual(result, True)


if __name__ == "__main__":
    unittest.main(verbosity=2)
