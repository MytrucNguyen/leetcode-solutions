export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function isPalindrome(head: ListNode | null): boolean {
  // Find the middle using fast/slow pointers
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Reverse the second half
  let prev: ListNode | null = null;
  let current = slow;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  // Compare both halves
  let left = head;
  let right = prev;

  while (right !== null) {
    if (left!.val !== right.val) {
      return false;
    }
    left = left!.next;
    right = right.next;
  }

  return true;
}
