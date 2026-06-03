using Xunit;
using TwoSum;

namespace TwoSum.Tests
{
    public class SolutionTests
    {
        private readonly Solution _solution;

        public SolutionTests()
        {
            _solution = new Solution();
        }

        [Fact]
        public void Test_Example1_BasicCase()
        {
            // Arrange
            int[] nums = { 2, 7, 11, 15 };
            int target = 9;
            int[] expected = { 0, 1 };

            // Act
            int[] result = _solution.TwoSum(nums, target);

            // Assert
            Assert.Equal(expected, result);
        }

        [Fact]
        public void Test_Example2_ThreeElements()
        {
            // Arrange
            int[] nums = { 3, 2, 4 };
            int target = 6;
            int[] expected = { 1, 2 };

            // Act
            int[] result = _solution.TwoSum(nums, target);

            // Assert
            Assert.Equal(expected, result);
        }

        [Fact]
        public void Test_DuplicateNumbers()
        {
            // Arrange
            int[] nums = { 3, 3 };
            int target = 6;
            int[] expected = { 0, 1 };

            // Act
            int[] result = _solution.TwoSum(nums, target);

            // Assert
            Assert.Equal(expected, result);
        }

        [Fact]
        public void Test_NoSolution()
        {
            // Arrange
            int[] nums = { 1, 2, 3 };
            int target = 10;
            int[] expected = { };

            // Act
            int[] result = _solution.TwoSum(nums, target);

            // Assert
            Assert.Equal(expected, result);
        }

        [Fact]
        public void Test_NegativeNumbers()
        {
            // Arrange
            int[] nums = { -1, -2, -3, -4, -5 };
            int target = -8;
            int[] expected = { 2, 4 };

            // Act
            int[] result = _solution.TwoSum(nums, target);

            // Assert
            Assert.Equal(expected, result);
        }
    }
}