export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export function oddEvenList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return head;

    let odd: ListNode = head;
    let even: ListNode | null = head.next;
    const evenHead: ListNode = even;

    while (even !== null && even.next !== null) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;
    return head;
}
