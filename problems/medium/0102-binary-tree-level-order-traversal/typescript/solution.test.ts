import { TreeNode, levelOrder } from './solution';

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

describe('102. Binary Tree Level Order Traversal', () => {
    test('Example 1: [3,9,20,null,null,15,7]', () => {
        const root = buildTree([3, 9, 20, null, null, 15, 7]);
        expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
    });

    test('Example 2: [1]', () => {
        const root = buildTree([1]);
        expect(levelOrder(root)).toEqual([[1]]);
    });

    test('Example 3: empty tree', () => {
        expect(levelOrder(null)).toEqual([]);
    });

    test('Left skewed', () => {
        const root = buildTree([1, 2, null, 3]);
        expect(levelOrder(root)).toEqual([[1], [2], [3]]);
    });

    test('Right skewed', () => {
        const root = buildTree([1, null, 2, null, 3]);
        expect(levelOrder(root)).toEqual([[1], [2], [3]]);
    });

    test('Complete binary tree', () => {
        const root = buildTree([1, 2, 3, 4, 5, 6, 7]);
        expect(levelOrder(root)).toEqual([[1], [2, 3], [4, 5, 6, 7]]);
    });

    test('Negative values', () => {
        const root = buildTree([-10, 9, 20]);
        expect(levelOrder(root)).toEqual([[-10], [9, 20]]);
    });
});
