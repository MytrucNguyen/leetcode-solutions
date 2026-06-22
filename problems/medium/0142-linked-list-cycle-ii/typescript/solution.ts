export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export function detectCycle(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow!.next;
        fast = fast.next.next;

        if (slow === fast) break;
    }

    if (fast === null || fast.next === null) return null;

    let ptr = head;
    while (ptr !== slow) {
        ptr = ptr!.next;
        slow = slow!.next;
    }

    return ptr;
}
