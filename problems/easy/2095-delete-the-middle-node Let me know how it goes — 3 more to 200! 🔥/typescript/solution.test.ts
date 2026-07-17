import { ListNode, deleteMiddle } from './solution';

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

describe('2095. Delete the Middle Node of a Linked List', () => {
    test('Example 1: [1,3,4,7,1,2,6]', () => {
        expect(toArray(deleteMiddle(buildList([1, 3, 4, 7, 1, 2, 6])))).toEqual([1, 3, 4, 1, 2, 6]);
    });

    test('Example 2: [1,2,3,4]', () => {
        expect(toArray(deleteMiddle(buildList([1, 2, 3, 4])))).toEqual([1, 2, 4]);
    });

    test('Example 3: [2,1]', () => {
        expect(toArray(deleteMiddle(buildList([2, 1])))).toEqual([2]);
    });

    test('Single node', () => {
        expect(deleteMiddle(buildList([1]))).toBeNull();
    });

    test('Three nodes', () => {
        expect(toArray(deleteMiddle(buildList([1, 2, 3])))).toEqual([1, 3]);
    });

    test('Five nodes', () => {
        expect(toArray(deleteMiddle(buildList([1, 2, 3, 4, 5])))).toEqual([1, 2, 4, 5]);
    });

    test('Six nodes', () => {
        expect(toArray(deleteMiddle(buildList([1, 2, 3, 4, 5, 6])))).toEqual([1, 2, 3, 5, 6]);
    });
});
