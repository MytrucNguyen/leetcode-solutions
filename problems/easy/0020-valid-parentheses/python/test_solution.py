import unittest
from solution import Solution

class TestValidParentheses(unittest.TestCase):
    def setUp(self):
        self.solution = Solution()
    
    def test_example_1(self):
        result = self.solution.isValid("()")
        print(f"Test 1 - Input: '()' -> Output: {result}, Expected: True")
        self.assertEqual(result, True)
    
    def test_example_2(self):
        result = self.solution.isValid("()[]{}")
        print(f"Test 2 - Input: '()[]{{}}' -> Output: {result}, Expected: True")
        self.assertEqual(result, True)
    
    def test_example_3(self):
        result = self.solution.isValid("(]")
        print(f"Test 3 - Input: '(]' -> Output: {result}, Expected: False")
        self.assertEqual(result, False)
    
    def test_example_4(self):
        result = self.solution.isValid("([])")
        print(f"Test 4 - Input: '([])' -> Output: {result}, Expected: True")
        self.assertEqual(result, True)
    
    def test_example_5(self):
        result = self.solution.isValid("([)]")
        print(f"Test 5 - Input: '([)]' -> Output: {result}, Expected: False")
        self.assertEqual(result, False)

if __name__ == '__main__':
    unittest.main()