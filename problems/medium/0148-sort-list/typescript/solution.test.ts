import { ListNode, sortList } from './solution';

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

describe('148. Sort List', () => {
    test('Example 1: [4,2,1,3]', () => {
        expect(toArray(sortList(buildList([4, 2, 1, 3])))).toEqual([1, 2, 3, 4]);
    });

    test('Example 2: [-1,5,3,4,0]', () => {
        expect(toArray(sortList(buildList([-1, 5, 3, 4, 0])))).toEqual([-1, 0, 3, 4, 5]);
    });

    test('Example 3: empty list', () => {
        expect(sortList(null)).toBeNull();
    });

    test('Single node', () => {
        expect(toArray(sortList(buildList([1])))).toEqual([1]);
    });

    test('Two nodes', () => {
        expect(toArray(sortList(buildList([2, 1])))).toEqual([1, 2]);
    });

    test('Already sorted', () => {
        expect(toArray(sortList(buildList([1, 2, 3, 4])))).toEqual([1, 2, 3, 4]);
    });

    test('Reverse sorted', () => {
        expect(toArray(sortList(buildList([5, 4, 3, 2, 1])))).toEqual([1, 2, 3, 4, 5]);
    });

    test('Duplicates', () => {
        expect(toArray(sortList(buildList([3, 1, 2, 3, 1])))).toEqual([1, 1, 2, 3, 3]);
    });

    test('All same', () => {
        expect(toArray(sortList(buildList([5, 5, 5])))).toEqual([5, 5, 5]);
    });
});
