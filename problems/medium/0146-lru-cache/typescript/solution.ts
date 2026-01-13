export class DListNode {
  key: number;
  value: number;
  prev: DListNode | null;
  next: DListNode | null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class LRUCache {
  private capacity: number;
  private cache: Map<number, DListNode>;
  private head: DListNode;
  private tail: DListNode;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map<number, DListNode>();
    this.head = new DListNode(0, 0);
    this.tail = new DListNode(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  private removeNode(node: DListNode): void {
    const prevNode = node.prev;
    const nextNode = node.next;

    if (prevNode) prevNode.next = nextNode;
    if (nextNode) nextNode.prev = prevNode;
  }

  private addToHead(node: DListNode): void {
    node.prev = this.head;
    node.next = this.head.next;

    if (this.head.next) {
      this.head.next.prev = node;
    }
    this.head.next = node;
  }

  private moveToHead(node: DListNode): void {
    this.removeNode(node);
    this.addToHead(node);
  }

  private removeTail(): DListNode | null {
    const node = this.tail.prev;
    if (node && node !== this.head) {
      this.removeNode(node);
      return node;
    }
    return null;
  }

  get(key: number): number {
    const node = this.cache.get(key);

    if (!node) {
      return -1;
    }

    this.moveToHead(node);
    return node.value;
  }

  put(key: number, value: number): void {
    const node = this.cache.get(key);

    if (node) {
      node.value = value;
      this.moveToHead(node);
    } else {
      const newNode = new DListNode(key, value);
      this.cache.set(key, newNode);
      this.addToHead(newNode);

      if (this.cache.size > this.capacity) {
        const tail = this.removeTail();
        if (tail) {
          this.cache.delete(tail.key);
        }
      }
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
