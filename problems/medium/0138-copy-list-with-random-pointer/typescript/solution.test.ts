import { Node, copyRandomList } from './solution';

function buildList(values: number[], randomIndices: (number | null)[]): Node | null {
    if (values.length === 0) return null;

    const nodes: Node[] = values.map((val) => new Node(val));

    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }

    for (let i = 0; i < nodes.length; i++) {
        nodes[i].random = randomIndices[i] !== null ? nodes[randomIndices[i]!] : null;
    }

    return nodes[0];
}

function toArray(head: Node | null): [number, number | null][] {
    const result: [number, number | null][] = [];
    const nodeIndex = new Map<Node, number>();

    let current = head;
    let i = 0;
    while (current !== null) {
        nodeIndex.set(current, i);
        current = current.next;
        i++;
    }

    current = head;
    while (current !== null) {
        const randomIdx = current.random ? nodeIndex.get(current.random)! : null;
        result.push([current.val, randomIdx]);
        current = current.next;
    }

    return result;
}

describe('138. Copy List with Random Pointer', () => {
    test('Example 1: [7,13,11,10,1]', () => {
        const head = buildList([7, 13, 11, 10, 1], [null, 0, 4, 2, 0]);
        const copy = copyRandomList(head);
        expect(toArray(copy)).toEqual([
            [7, null],
            [13, 0],
            [11, 4],
            [10, 2],
            [1, 0],
        ]);
    });

    test('Example 2: [1,2]', () => {
        const head = buildList([1, 2], [1, 1]);
        const copy = copyRandomList(head);
        expect(toArray(copy)).toEqual([
            [1, 1],
            [2, 1],
        ]);
    });

    test('Example 3: [3,3,3]', () => {
        const head = buildList([3, 3, 3], [null, 0, null]);
        const copy = copyRandomList(head);
        expect(toArray(copy)).toEqual([
            [3, null],
            [3, 0],
            [3, null],
        ]);
    });

    test('Empty list', () => {
        expect(copyRandomList(null)).toBeNull();
    });

    test('Single node, random to self', () => {
        const head = new Node(1);
        head.random = head;
        const copy = copyRandomList(head);
        expect(copy!.val).toBe(1);
        expect(copy!.random).toBe(copy);
        expect(copy).not.toBe(head);
    });

    test('Deep copy — no shared nodes', () => {
        const head = buildList([1, 2, 3], [null, null, null]);
        const copy = copyRandomList(head);

        let orig: Node | null = head;
        let copied: Node | null = copy;
        while (orig !== null && copied !== null) {
            expect(copied).not.toBe(orig);
            expect(copied.val).toBe(orig.val);
            orig = orig.next;
            copied = copied.next;
        }
    });

    test('All randoms point to head', () => {
        const head = buildList([1, 2, 3], [0, 0, 0]);
        const copy = copyRandomList(head);
        expect(toArray(copy)).toEqual([
            [1, 0],
            [2, 0],
            [3, 0],
        ]);
    });
});
