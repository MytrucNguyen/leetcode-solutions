import { ListNode, detectCycle } from './solution';

function buildCycleList(arr: number[], pos: number): ListNode | null {
    if (arr.length === 0) return null;

    const nodes: ListNode[] = arr.map((val) => new ListNode(val));
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }

    if (pos >= 0) {
        nodes[nodes.length - 1].next = nodes[pos];
    }

    return nodes[0];
}

describe('142. Linked List Cycle II', () => {
    test('Example 1: cycle at index 1', () => {
        const head = buildCycleList([3, 2, 0, -4], 1);
        const result = detectCycle(head);
        expect(result!.val).toBe(2);
    });

    test('Example 2: cycle at index 0', () => {
        const head = buildCycleList([1, 2], 0);
        const result = detectCycle(head);
        expect(result!.val).toBe(1);
    });

    test('Example 3: no cycle', () => {
        const head = buildCycleList([1], -1);
        expect(detectCycle(head)).toBeNull();
    });

    test('Empty list', () => {
        expect(detectCycle(null)).toBeNull();
    });

    test('Single node cycle', () => {
        const head = buildCycleList([1], 0);
        const result = detectCycle(head);
        expect(result!.val).toBe(1);
    });

    test('Cycle at last node', () => {
        const head = buildCycleList([1, 2, 3], 2);
        const result = detectCycle(head);
        expect(result!.val).toBe(3);
    });

    test('Long list no cycle', () => {
        const head = buildCycleList([1, 2, 3, 4, 5], -1);
        expect(detectCycle(head)).toBeNull();
    });

    test('Cycle in the middle', () => {
        const head = buildCycleList([1, 2, 3, 4, 5], 2);
        const result = detectCycle(head);
        expect(result!.val).toBe(3);
    });
});
