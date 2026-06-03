import { TreeNode, kthSmallest } from './solution';

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

describe('230. Kth Smallest Element in a BST', () => {
    test('Example 1: k=1', () => {
        const root = buildTree([3, 1, 4, null, 2]);
        expect(kthSmallest(root, 1)).toBe(1);
    });

    test('Example 2: k=3', () => {
        const root = buildTree([5, 3, 6, 2, 4, null, null, 1]);
        expect(kthSmallest(root, 3)).toBe(3);
    });

    test('Single node, k=1', () => {
        expect(kthSmallest(new TreeNode(5), 1)).toBe(5);
    });

    test('k equals total nodes (largest)', () => {
        const root = buildTree([3, 1, 4, null, 2]);
        expect(kthSmallest(root, 4)).toBe(4);
    });

    test('Left skewed BST', () => {
        const root = buildTree([3, 2, null, 1]);
        expect(kthSmallest(root, 2)).toBe(2);
    });

    test('Right skewed BST', () => {
        const root = buildTree([1, null, 2, null, 3]);
        expect(kthSmallest(root, 3)).toBe(3);
    });

    test('Balanced BST, middle element', () => {
        const root = buildTree([4, 2, 6, 1, 3, 5, 7]);
        expect(kthSmallest(root, 4)).toBe(4);
    });
});
