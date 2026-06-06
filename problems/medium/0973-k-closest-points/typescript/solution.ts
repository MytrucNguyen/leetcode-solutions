class MaxHeap {
    private heap: [number, number[]][] = [];

    get size(): number {
        return this.heap.length;
    }

    peek(): [number, number[]] {
        return this.heap[0];
    }

    push(dist: number, point: number[]): void {
        this.heap.push([dist, point]);
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): [number, number[]] {
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
            if (this.heap[parent][0] >= this.heap[i][0]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    private bubbleDown(i: number): void {
        while (true) {
            let largest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;
            if (left < this.heap.length && this.heap[left][0] > this.heap[largest][0])
                largest = left;
            if (right < this.heap.length && this.heap[right][0] > this.heap[largest][0])
                largest = right;
            if (largest === i) break;
            [this.heap[largest], this.heap[i]] = [this.heap[i], this.heap[largest]];
            i = largest;
        }
    }

    getAll(): number[][] {
        return this.heap.map(([_, point]) => point);
    }
}

export function kClosestHeap(points: number[][], k: number): number[][] {
    const heap = new MaxHeap();

    for (const point of points) {
        const dist = point[0] * point[0] + point[1] * point[1];

        if (heap.size < k) {
            heap.push(dist, point);
        } else if (dist < heap.peek()[0]) {
            heap.pop();
            heap.push(dist, point);
        }
    }

    return heap.getAll();
}

export function kClosest(points: number[][], k: number): number[][] {
    points.sort((a, b) => a[0] * a[0] + a[1] * a[1] - (b[0] * b[0] + b[1] * b[1]));
    return points.slice(0, k);
}
