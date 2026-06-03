class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        end_of_nums1 = m - 1
        end_of_nums2 = n - 1
        last_position_of_num1 = m + n -1

        while end_of_nums1 >= 0 and end_of_nums2 >= 0:
            if(nums1[end_of_nums1] > nums2[end_of_nums2]):
                nums1[last_position_of_num1] = nums1[end_of_nums1]
                end_of_nums1 -= 1

            else:
                nums1[last_position_of_num1] = nums2[end_of_nums2]
                end_of_nums2 -= 1

            last_position_of_num1 -= 1


        while(end_of_nums2 >= 0):
            nums1[last_position_of_num1] = nums2[end_of_nums2]
            end_of_nums2 -= 1
            last_position_of_num1 -= 1