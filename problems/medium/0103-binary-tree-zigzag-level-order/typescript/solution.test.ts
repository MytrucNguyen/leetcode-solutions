import { TreeNode, zigzagLevelOrder } from './solution';

function buildTree(arr: (number | null)[]): TreeNode | null {
    if (arr.length === 0 || arr[0] === null) return null;

    const root = new TreeNode(arr[0]);
    const queue: TreeNode[] = [root];
    let i = 1;

    while (i < arr.length) {
        const node = queue.shift()!;

        if (i < arr.length && arr[i] !== null) {
            node.left = new TreeNode(arr[i] as number);
            queue.push(node.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i] as number);
            queue.push(node.right);
        }
        i++;
    }

    return root;
}

describe('103. Binary Tree Zigzag Level Order Traversal', () => {
    test('Example 1: [3,9,20,null,null,15,7]', () => {
        const root = buildTree([3, 9, 20, null, null, 15, 7]);
        expect(zigzagLevelOrder(root)).toEqual([[3], [20, 9], [15, 7]]);
    });

    test('Example 2: [1]', () => {
        expect(zigzagLevelOrder(new TreeNode(1))).toEqual([[1]]);
    });

    test('Example 3: empty', () => {
        expect(zigzagLevelOrder(null)).toEqual([]);
    });

    test('Complete tree', () => {
        const root = buildTree([1, 2, 3, 4, 5, 6, 7]);
        expect(zigzagLevelOrder(root)).toEqual([[1], [3, 2], [4, 5, 6, 7]]);
    });

    test('Left skewed', () => {
        const root = buildTree([1, 2, null, 3]);
        expect(zigzagLevelOrder(root)).toEqual([[1], [2], [3]]);
    });

    test('Right skewed', () => {
        const root = buildTree([1, null, 2, null, 3]);
        expect(zigzagLevelOrder(root)).toEqual([[1], [2], [3]]);
    });

    test('Four levels', () => {
        const root = buildTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
        expect(zigzagLevelOrder(root)).toEqual([
            [1],
            [3, 2],
            [4, 5, 6, 7],
            [15, 14, 13, 12, 11, 10, 9, 8],
        ]);
    });
});
