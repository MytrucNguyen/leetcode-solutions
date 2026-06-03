import { TreeNode, isBalanced } from './solution';

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

describe('110. Balanced Binary Tree', () => {
    test('Example 1: balanced', () => {
        const root = buildTree([3, 9, 20, null, null, 15, 7]);
        expect(isBalanced(root)).toBe(true);
    });

    test('Example 2: not balanced', () => {
        const root = buildTree([1, 2, 2, 3, 3, null, null, 4, 4]);
        expect(isBalanced(root)).toBe(false);
    });

    test('Example 3: empty tree', () => {
        expect(isBalanced(null)).toBe(true);
    });

    test('Single node', () => {
        expect(isBalanced(new TreeNode(1))).toBe(true);
    });

    test('Perfect tree', () => {
        const root = buildTree([1, 2, 3, 4, 5, 6, 7]);
        expect(isBalanced(root)).toBe(true);
    });

    test('Left skewed', () => {
        const root = buildTree([1, 2, null, 3]);
        expect(isBalanced(root)).toBe(false);
    });

    test('Right skewed', () => {
        const root = buildTree([1, null, 2, null, 3]);
        expect(isBalanced(root)).toBe(false);
    });

    test('Balanced but not perfect', () => {
        const root = buildTree([1, 2, 3, 4]);
        expect(isBalanced(root)).toBe(true);
    });

    test('Imbalanced deep in tree', () => {
        const root = buildTree([1, 2, 3, 4, null, null, null, 5]);
        expect(isBalanced(root)).toBe(false);
    });
});
