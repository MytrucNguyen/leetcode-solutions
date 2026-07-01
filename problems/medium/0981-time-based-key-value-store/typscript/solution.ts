export class TimeMap {
    private map: Map<string, [number, string][]>;

    constructor() {
        this.map = new Map();
    }

    set(key: string, value: string, timestamp: number): void {
        if (!this.map.has(key)) {
            this.map.set(key, []);
        }
        this.map.get(key)!.push([timestamp, value]);
    }

    get(key: string, timestamp: number): string {
        if (!this.map.has(key)) return '';

        const entries = this.map.get(key)!;
        let left = 0;
        let right = entries.length - 1;
        let result = '';

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (entries[mid][0] <= timestamp) {
                result = entries[mid][1];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}
