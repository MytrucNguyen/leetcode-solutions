export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export function reorderList(head: ListNode | null): void {
    if (head === null || head.next === null) return;

    let slow: ListNode = head;
    let fast: ListNode | null = head;

    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next!;
        fast = fast.next.next;
    }

    let second: ListNode | null = slow.next;
    slow.next = null;

    let prev: ListNode | null = null;
    while (second !== null) {
        const next = second.next;
        second.next = prev;
        prev = second;
        second = next;
    }
    second = prev;

    let first: ListNode | null = head;

    while (second !== null) {
        const firstNext = first!.next;
        const secondNext = second.next;

        first!.next = second;
        second.next = firstNext;

        first = firstNext;
        second = secondNext;
    }
}
