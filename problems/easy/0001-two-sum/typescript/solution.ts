export function twoSum(nums: number[], target: number): number[] {
    // Hash map to store numbers we've seen and their indices
    // Key: number value, Value: index in array
    let numberToIndex = new Map<number, number>();

    // Iterate through each number in the array
    for(let i = 0; i < nums.length; i++){
        let currentNum = nums[i];

        // Calculate what number we need to reach the target
        let complement = target - currentNum;
        
        // Check if we've seen the complement before
        if(numberToIndex.has(complement)){
            // Found it! Return the index of complement and current index
            return [numberToIndex.get(complement)!, i]
        }
        
        // Haven't found the pair yet, store this number for later
        numberToIndex.set(currentNum, i);
    }

    // No solution found (shouldn't happen based on problem constraints)
    return [];
};