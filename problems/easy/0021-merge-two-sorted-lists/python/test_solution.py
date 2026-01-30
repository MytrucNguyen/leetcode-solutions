import pytest
from solution import Solution, ListNode

def list_to_array(head):
    """Helper function to convert linked list to array for testing"""
    result = []
    current = head
    while current:
        result.append(current.val)
        current = current.next
    return result

def array_to_list(arr):
    """Helper function to convert array to linked list"""
    if not arr:
        return None
    
    head = ListNode(arr[0])
    current = head
    for val in arr[1:]:
        current.next = ListNode(val)
        current = current.next
    return head

class TestMergeTwoLists:
    def test_example_1(self):
        """Test: [1,2,4] and [1,3,4]"""
        solution = Solution()
        list1 = array_to_list([1, 2, 4])
        list2 = array_to_list([1, 3, 4])
        
        result = solution.mergeTwoLists(list1, list2)
        result_array = list_to_array(result)
        expected = [1, 1, 2, 3, 4, 4]
        
        print(f"Test 1 - Output: {result_array}, Expected: {expected}")
        assert result_array == expected

    def test_example_2_both_empty(self):
        """Test: [] and []"""
        solution = Solution()
        list1 = array_to_list([])
        list2 = array_to_list([])
        
        result = solution.mergeTwoLists(list1, list2)
        result_array = list_to_array(result)
        expected = []
        
        print(f"Test 2 - Output: {result_array}, Expected: {expected}")
        assert result_array == expected

    def test_example_3_one_empty(self):
        """Test: [] and [0]"""
        solution = Solution()
        list1 = array_to_list([])
        list2 = array_to_list([0])
        
        result = solution.mergeTwoLists(list1, list2)
        result_array = list_to_array(result)
        expected = [0]
        
        print(f"Test 3 - Output: {result_array}, Expected: {expected}")
        assert result_array == expected

    def test_first_list_empty(self):
        """Test: [] and [1,2,3]"""
        solution = Solution()
        list1 = array_to_list([])
        list2 = array_to_list([1, 2, 3])
        
        result = solution.mergeTwoLists(list1, list2)
        result_array = list_to_array(result)
        expected = [1, 2, 3]
        
        print(f"Test 4 - Output: {result_array}, Expected: {expected}")
        assert result_array == expected

    def test_second_list_empty(self):
        """Test: [1,2,3] and []"""
        solution = Solution()
        list1 = array_to_list([1, 2, 3])
        list2 = array_to_list([])
        
        result = solution.mergeTwoLists(list1, list2)
        result_array = list_to_array(result)
        expected = [1, 2, 3]
        
        print(f"Test 5 - Output: {result_array}, Expected: {expected}")
        assert result_array == expected

    def test_different_lengths(self):
        """Test: [1,3,5] and [2,4,6,7,8]"""
        solution = Solution()
        list1 = array_to_list([1, 3, 5])
        list2 = array_to_list([2, 4, 6, 7, 8])
        
        result = solution.mergeTwoLists(list1, list2)
        result_array = list_to_array(result)
        expected = [1, 2, 3, 4, 5, 6, 7, 8]
        
        print(f"Test 6 - Output: {result_array}, Expected: {expected}")
        assert result_array == expected

    def test_all_first_smaller(self):
        """Test: [1,2,3] and [4,5,6]"""
        solution = Solution()
        list1 = array_to_list([1, 2, 3])
        list2 = array_to_list([4, 5, 6])
        
        result = solution.mergeTwoLists(list1, list2)
        result_array = list_to_array(result)
        expected = [1, 2, 3, 4, 5, 6]
        
        print(f"Test 7 - Output: {result_array}, Expected: {expected}")
        assert result_array == expected

    def test_all_second_smaller(self):
        """Test: [4,5,6] and [1,2,3]"""
        solution = Solution()
        list1 = array_to_list([4, 5, 6])
        list2 = array_to_list([1, 2, 3])
        
        result = solution.mergeTwoLists(list1, list2)
        result_array = list_to_array(result)
        expected = [1, 2, 3, 4, 5, 6]
        
        print(f"Test 8 - Output: {result_array}, Expected: {expected}")
        assert result_array == expected

    def test_single_nodes(self):
        """Test: [1] and [2]"""
        solution = Solution()
        list1 = array_to_list([1])
        list2 = array_to_list([2])
        
        result = solution.mergeTwoLists(list1, list2)
        result_array = list_to_array(result)
        expected = [1, 2]
        
        print(f"Test 9 - Output: {result_array}, Expected: {expected}")
        assert result_array == expected

    def test_negative_numbers(self):
        """Test: [-2,0,3] and [-1,1,2]"""
        solution = Solution()
        list1 = array_to_list([-2, 0, 3])
        list2 = array_to_list([-1, 1, 2])
        
        result = solution.mergeTwoLists(list1, list2)
        result_array = list_to_array(result)
        expected = [-2, -1, 0, 1, 2, 3]
        
        print(f"Test 10 - Output: {result_array}, Expected: {expected}")
        assert result_array == expected