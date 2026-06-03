import { ListNode, mergeKLists } from './solution';

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

describe('23. Merge K Sorted Lists', () => {
    test('Example 1: [[1,4,5],[1,3,4],[2,6]]', () => {
        const lists = [buildList([1, 4, 5]), buildList([1, 3, 4]), buildList([2, 6])];
        expect(toArray(mergeKLists(lists))).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
    });

    test('Example 2: empty array', () => {
        expect(mergeKLists([])).toBeNull();
    });

    test('Example 3: array with empty list', () => {
        expect(mergeKLists([null])).toBeNull();
    });

    test('Single list', () => {
        expect(toArray(mergeKLists([buildList([1, 2, 3])]))).toEqual([1, 2, 3]);
    });

    test('Two lists', () => {
        const lists = [buildList([1, 3, 5]), buildList([2, 4, 6])];
        expect(toArray(mergeKLists(lists))).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('Some empty lists', () => {
        const lists = [null, buildList([1, 3]), null, buildList([2, 4])];
        expect(toArray(mergeKLists(lists))).toEqual([1, 2, 3, 4]);
    });

    test('All single nodes', () => {
        const lists = [buildList([5]), buildList([1]), buildList([3])];
        expect(toArray(mergeKLists(lists))).toEqual([1, 3, 5]);
    });

    test('Negative numbers', () => {
        const lists = [buildList([-2, 1]), buildList([-3, 0, 4])];
        expect(toArray(mergeKLists(lists))).toEqual([-3, -2, 0, 1, 4]);
    });

    test('Four lists', () => {
        const lists = [buildList([1, 5]), buildList([2, 6]), buildList([3, 7]), buildList([4, 8])];
        expect(toArray(mergeKLists(lists))).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
});