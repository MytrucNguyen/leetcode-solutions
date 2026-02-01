class Solution:
    def plusOne(self, digits: list[int]) -> list[int]:
        # Loop from right to left
        for i in range(len(digits) - 1, -1, -1):
            digits[i] += 1

            # If no carry needed, we're done
            if digits[i] < 10:
                return digits
            
            # Carry needed: set to 0 and continue
            digits[i] = 0

            # If we get here, all digits were 9
        return [1] + digits
