export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export function deleteMiddle(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return null;

    const dummy = new ListNode(0, head);
    let slow: ListNode = dummy;
    let fast: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next!;
        fast = fast.next.next;
    }

    slow.next = slow.next!.next;

    return dummy.next;
}
