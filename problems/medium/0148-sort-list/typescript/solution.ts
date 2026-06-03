export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function getMiddle(head: ListNode): ListNode {
    let slow: ListNode = head;
    let fast: ListNode | null = head.next;

    while (fast !== null && fast.next !== null) {
        slow = slow.next!;
        fast = fast.next.next;
    }

    return slow;
}

function merge(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 !== null ? l1 : l2;

    return dummy.next;
}

export function sortList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return head;

    const mid = getMiddle(head);
    const rightHead = mid.next;
    mid.next = null;

    const left = sortList(head);
    const right = sortList(rightHead);

    return merge(left, right);
}
