import { ListNode, getIntersectionNode } from "./solution";

function buildIntersectingLists(
  arrA: number[],
  arrB: number[],
  intersectAt: number,
): { headA: ListNode | null; headB: ListNode | null } {
  if (intersectAt === -1) {
    return {
      headA: buildList(arrA),
      headB: buildList(arrB),
    };
  }

  // Build the shared tail
  const shared = buildList(arrA.slice(intersectAt));

  // Build list A's unique part and connect to shared
  let headA = shared;
  if (intersectAt > 0) {
    headA = buildList(arrA.slice(0, intersectAt));
    let current = headA!;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = shared;
  }

  // Build list B's unique part and connect to shared
  const bUniqueLength = arrB.length - (arrA.length - intersectAt);
  let headB = shared;
  if (bUniqueLength > 0) {
    headB = buildList(arrB.slice(0, bUniqueLength));
    let current = headB!;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = shared;
  }

  return { headA, headB };
}

function buildList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

describe("160. Intersection of Two Linked Lists", () => {
  test("Example 1: intersection at 8", () => {
    const { headA, headB } = buildIntersectingLists(
      [4, 1, 8, 4, 5],
      [5, 6, 1, 8, 4, 5],
      2,
    );
    const result = getIntersectionNode(headA, headB);
    expect(result).not.toBeNull();
    expect(result!.val).toBe(8);
  });

  test("No intersection", () => {
    const { headA, headB } = buildIntersectingLists([2, 6, 4], [1, 5], -1);
    expect(getIntersectionNode(headA, headB)).toBeNull();
  });

  test("Intersection at first node of A", () => {
    const { headA, headB } = buildIntersectingLists([1, 2, 3], [9, 1, 2, 3], 0);
    const result = getIntersectionNode(headA, headB);
    expect(result).not.toBeNull();
    expect(result!.val).toBe(1);
  });

  test("Same length lists with intersection", () => {
    const { headA, headB } = buildIntersectingLists([1, 3, 5], [2, 3, 5], 1);
    const result = getIntersectionNode(headA, headB);
    expect(result).not.toBeNull();
    expect(result!.val).toBe(3);
  });

  test("Single node intersection", () => {
    const { headA, headB } = buildIntersectingLists([1, 2, 3], [4, 5, 3], 2);
    const result = getIntersectionNode(headA, headB);
    expect(result).not.toBeNull();
    expect(result!.val).toBe(3);
  });
});
