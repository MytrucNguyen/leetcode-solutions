import math

class Solution(object):
    def mySqrt(self, x):
        """
        :type x: int
        :rtype: int
        """
        # Base cases
        if x == 0 or x == 1: 
            return x
        
        # Set up binary search boundaries
        left = 0
        right = x
        result = 0

        # Keep searching while there's a valid range
        while left <= right:
            mid = left + (right - left) / 2

            # Check if mid is the exact square root
            if(mid == (x / mid)):
                return mid
            
            # Check if mid's square is smaller than x
            if(mid < x / mid):
                result = mid
                left = mid + 1

            # mid's square is too big
            else:
                right = mid - 1

        return result