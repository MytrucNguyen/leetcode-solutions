import { ListNode, removeNthFromEnd } from './solution';

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

describe('19. Remove Nth Node From End of List', () => {
    test('Example 1: [1,2,3,4,5], n=2', () => {
        const result = removeNthFromEnd(buildList([1, 2, 3, 4, 5]), 2);
        expect(toArray(result)).toEqual([1, 2, 3, 5]);
    });

    test('Example 2: [1], n=1', () => {
        const result = removeNthFromEnd(buildList([1]), 1);
        expect(toArray(result)).toEqual([]);
    });

    test('Example 3: [1,2], n=1', () => {
        const result = removeNthFromEnd(buildList([1, 2]), 1);
        expect(toArray(result)).toEqual([1]);
    });

    test('Remove head: [1,2], n=2', () => {
        const result = removeNthFromEnd(buildList([1, 2]), 2);
        expect(toArray(result)).toEqual([2]);
    });

    test('Remove middle: [1,2,3], n=2', () => {
        const result = removeNthFromEnd(buildList([1, 2, 3]), 2);
        expect(toArray(result)).toEqual([1, 3]);
    });

    test('Remove last: [1,2,3], n=1', () => {
        const result = removeNthFromEnd(buildList([1, 2, 3]), 1);
        expect(toArray(result)).toEqual([1, 2]);
    });

    test('Remove head of long list: [1,2,3,4,5], n=5', () => {
        const result = removeNthFromEnd(buildList([1, 2, 3, 4, 5]), 5);
        expect(toArray(result)).toEqual([2, 3, 4, 5]);
    });
});
