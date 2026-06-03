export class RandomizedSet {
    private nums: number[];
    private indexMap: Map<number, number>;

    constructor() {
        this.nums = [];
        this.indexMap = new Map();
    }

    insert(val: number): boolean {
        if (this.indexMap.has(val)) return false;

        this.nums.push(val);
        this.indexMap.set(val, this.nums.length - 1);
        return true;
    }

    remove(val: number): boolean {
        if (!this.indexMap.has(val)) return false;

        const index = this.indexMap.get(val)!;
        const lastVal = this.nums[this.nums.length - 1];

        this.nums[index] = lastVal;
        this.indexMap.set(lastVal, index);

        this.nums.pop();
        this.indexMap.delete(val);

        return true;
    }

    getRandom(): number {
        const randomIndex = Math.floor(Math.random() * this.nums.length);
        return this.nums[randomIndex];
    }
}
