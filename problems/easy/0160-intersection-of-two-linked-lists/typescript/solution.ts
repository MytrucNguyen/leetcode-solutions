export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  let pointerA = headA;
  let pointerB = headB;

  while (pointerA !== pointerB) {
    pointerA = pointerA !== null ? pointerA.next : headB;
    pointerB = pointerB !== null ? pointerB.next : headA;
  }

  return pointerA;
}
