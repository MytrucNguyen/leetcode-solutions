import { ListNode, oddEvenList } from './solution';

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

describe('328. Odd Even Linked List', () => {
    test('Example 1: [1,2,3,4,5]', () => {
        expect(toArray(oddEvenList(buildList([1, 2, 3, 4, 5])))).toEqual([1, 3, 5, 2, 4]);
    });

    test('Example 2: [2,1,3,5,6,4,7]', () => {
        expect(toArray(oddEvenList(buildList([2, 1, 3, 5, 6, 4, 7])))).toEqual([
            2, 3, 6, 7, 1, 5, 4,
        ]);
    });

    test('Empty list', () => {
        expect(oddEvenList(null)).toBeNull();
    });

    test('Single node', () => {
        expect(toArray(oddEvenList(buildList([1])))).toEqual([1]);
    });

    test('Two nodes', () => {
        expect(toArray(oddEvenList(buildList([1, 2])))).toEqual([1, 2]);
    });

    test('Three nodes', () => {
        expect(toArray(oddEvenList(buildList([1, 2, 3])))).toEqual([1, 3, 2]);
    });

    test('Four nodes', () => {
        expect(toArray(oddEvenList(buildList([1, 2, 3, 4])))).toEqual([1, 3, 2, 4]);
    });

    test('Negative values', () => {
        expect(toArray(oddEvenList(buildList([-1, 2, -3, 4, -5])))).toEqual([-1, -3, -5, 2, 4]);
    });
});
