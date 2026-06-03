import { ListNode, middleNode } from './solution';

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

function toArray(head: ListNode | null): number[] {
    const result: number[] = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

describe('876. Middle of the Linked List', () => {
    test('Example 1: [1,2,3,4,5]', () => {
        const result = middleNode(buildList([1, 2, 3, 4, 5]));
        expect(toArray(result)).toEqual([3, 4, 5]);
    });

    test('Example 2: [1,2,3,4,5,6]', () => {
        const result = middleNode(buildList([1, 2, 3, 4, 5, 6]));
        expect(toArray(result)).toEqual([4, 5, 6]);
    });

    test('Single node', () => {
        const result = middleNode(buildList([1]));
        expect(result!.val).toBe(1);
    });

    test('Two nodes', () => {
        const result = middleNode(buildList([1, 2]));
        expect(result!.val).toBe(2);
    });

    test('Three nodes', () => {
        const result = middleNode(buildList([1, 2, 3]));
        expect(result!.val).toBe(2);
    });

    test('Four nodes', () => {
        const result = middleNode(buildList([1, 2, 3, 4]));
        expect(result!.val).toBe(3);
    });
});
