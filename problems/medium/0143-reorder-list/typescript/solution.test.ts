import { ListNode, reorderList } from './solution';

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

describe('143. Reorder List', () => {
    test('Example 1: [1,2,3,4]', () => {
        const head = buildList([1, 2, 3, 4]);
        reorderList(head);
        expect(toArray(head)).toEqual([1, 4, 2, 3]);
    });

    test('Example 2: [1,2,3,4,5]', () => {
        const head = buildList([1, 2, 3, 4, 5]);
        reorderList(head);
        expect(toArray(head)).toEqual([1, 5, 2, 4, 3]);
    });

    test('Single node', () => {
        const head = buildList([1]);
        reorderList(head);
        expect(toArray(head)).toEqual([1]);
    });

    test('Two nodes', () => {
        const head = buildList([1, 2]);
        reorderList(head);
        expect(toArray(head)).toEqual([1, 2]);
    });

    test('Three nodes', () => {
        const head = buildList([1, 2, 3]);
        reorderList(head);
        expect(toArray(head)).toEqual([1, 3, 2]);
    });

    test('Six nodes', () => {
        const head = buildList([1, 2, 3, 4, 5, 6]);
        reorderList(head);
        expect(toArray(head)).toEqual([1, 6, 2, 5, 3, 4]);
    });

    test('Seven nodes', () => {
        const head = buildList([1, 2, 3, 4, 5, 6, 7]);
        reorderList(head);
        expect(toArray(head)).toEqual([1, 7, 2, 6, 3, 5, 4]);
    });
});
