import { ListNode, removeElements } from './solution';

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

describe('203. Remove Linked List Elements', () => {
    test('Example 1: remove 6 from [1,2,6,3,4,5,6]', () => {
        expect(toArray(removeElements(buildList([1, 2, 6, 3, 4, 5, 6]), 6))).toEqual([
            1, 2, 3, 4, 5,
        ]);
    });

    test('Example 2: empty list', () => {
        expect(toArray(removeElements(null, 1))).toEqual([]);
    });

    test('Example 3: remove all [7,7,7,7]', () => {
        expect(toArray(removeElements(buildList([7, 7, 7, 7]), 7))).toEqual([]);
    });

    test('Remove head', () => {
        expect(toArray(removeElements(buildList([1, 2, 3]), 1))).toEqual([2, 3]);
    });

    test('Remove tail', () => {
        expect(toArray(removeElements(buildList([1, 2, 3]), 3))).toEqual([1, 2]);
    });

    test('No matches', () => {
        expect(toArray(removeElements(buildList([1, 2, 3]), 4))).toEqual([1, 2, 3]);
    });

    test('Single node removed', () => {
        expect(toArray(removeElements(buildList([1]), 1))).toEqual([]);
    });

    test('Single node kept', () => {
        expect(toArray(removeElements(buildList([1]), 2))).toEqual([1]);
    });

    test('Consecutive removals', () => {
        expect(toArray(removeElements(buildList([1, 2, 2, 2, 3]), 2))).toEqual([1, 3]);
    });
});
