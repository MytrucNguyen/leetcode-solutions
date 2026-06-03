class MinHeap {
    private heap: number[] = [];

    get size(): number {
        return this.heap.length;
    }

    peek(): number {
        return this.heap[0];
    }

    push(val: number): void {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): number {
        const top = this.heap[0];
        const last = this.heap.pop()!;
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        return top;
    }

    private bubbleUp(i: number): void {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] <= this.heap[i]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    private bubbleDown(i: number): void {
        while (true) {
            let smallest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;
            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;
            if (smallest === i) break;
            [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
            i = smallest;
        }
    }
}

export function findKthLargest(nums: number[], k: number): number {
    const heap = new MinHeap();

    for (const num of nums) {
        if (heap.size < k) {
            heap.push(num);
        } else if (num > heap.peek()) {
            heap.pop();
            heap.push(num);
        }
    }

    return heap.peek();
}