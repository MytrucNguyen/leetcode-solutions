class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        has_seen_number = set()

        for num in nums:
            if num in has_seen_number:
                return True
            else:
                has_seen_number.add(num)

        return False
        