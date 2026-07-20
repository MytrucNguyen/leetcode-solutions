import { _Node, connect } from './solution';

function buildPerfectTree(arr: (number | null)[]): _Node | null {
    if (arr.length === 0 || arr[0] === null) return null;

    const root = new _Node(arr[0]);
    const queue: _Node[] = [root];
    let i = 1;

    while (i < arr.length) {
        const node = queue.shift()!;

        if (i < arr.length && arr[i] !== null) {
            node.left = new _Node(arr[i] as number);
            queue.push(node.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            node.right = new _Node(arr[i] as number);
            queue.push(node.right);
        }
        i++;
    }

    return root;
}

function getNextValues(root: _Node | null): number[][] {
    const levels: number[][] = [];
    let leftmost = root;

    while (leftmost !== null) {
        const level: number[] = [];
        let node: _Node | null = leftmost;

        while (node !== null) {
            level.push(node.val);
            node = node.next;
        }

        levels.push(level);
        leftmost = leftmost.left;
    }

    return levels;
}

describe('116. Populating Next Right Pointers in Each Node', () => {
    test('Example 1: [1,2,3,4,5,6,7]', () => {
        const root = buildPerfectTree([1, 2, 3, 4, 5, 6, 7]);
        connect(root);
        expect(getNextValues(root!)).toEqual([[1], [2, 3], [4, 5, 6, 7]]);
    });

    test('Empty tree', () => {
        expect(connect(null)).toBeNull();
    });

    test('Single node', () => {
        const root = new _Node(1);
        connect(root);
        expect(root.next).toBeNull();
    });

    test('Two levels', () => {
        const root = buildPerfectTree([1, 2, 3]);
        connect(root);
        expect(getNextValues(root!)).toEqual([[1], [2, 3]]);
    });

    test('Four levels', () => {
        const root = buildPerfectTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
        connect(root);
        expect(getNextValues(root!)).toEqual([
            [1],
            [2, 3],
            [4, 5, 6, 7],
            [8, 9, 10, 11, 12, 13, 14, 15],
        ]);
    });

    test('Next pointers are null at end of each level', () => {
        const root = buildPerfectTree([1, 2, 3, 4, 5, 6, 7]);
        connect(root);
        expect(root!.next).toBeNull();
        expect(root!.right!.next).toBeNull();
        expect(root!.right!.right!.next).toBeNull();
    });

    test('Cross-parent connection works', () => {
        const root = buildPerfectTree([1, 2, 3, 4, 5, 6, 7]);
        connect(root);
        expect(root!.left!.right!.next!.val).toBe(6);
    });
});
