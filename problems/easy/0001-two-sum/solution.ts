export function twoSum(nums: number[], target: number): number[] {
    let numberToIndex = new Map<number, number>();

    for(let i = 0; i < nums.length; i++){
        let currentNum = nums[i];

        let complement = target - currentNum;
        
        if(numberToIndex.has(complement)){
            return [numberToIndex.get(complement)!, i]
        }
        numberToIndex.set(currentNum, i);
    }

    return [];
};