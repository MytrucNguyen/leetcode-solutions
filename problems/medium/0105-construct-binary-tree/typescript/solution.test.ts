import { TreeNode, buildTree } from './solution';

function treeToArray(root: TreeNode | null): (number | null)[] {
    if (!root) return [];
    const result: (number | null)[] = [];
    const queue: (TreeNode | null)[] = [root];

    while (queue.length > 0) {
        const node = queue.shift()!;
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }

    while (result[result.length - 1] === null) result.pop();
    return result;
}

function inorderValues(node: TreeNode | null): number[] {
    if (!node) return [];
    return [...inorderValues(node.left), node.val, ...inorderValues(node.right)];
}

function preorderValues(node: TreeNode | null): number[] {
    if (!node) return [];
    return [node.val, ...preorderValues(node.left), ...preorderValues(node.right)];
}

describe('105. Construct Binary Tree from Preorder and Inorder Traversal', () => {
    test('Example 1: [3,9,20,15,7]', () => {
        const root = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
        expect(preorderValues(root)).toEqual([3, 9, 20, 15, 7]);
        expect(inorderValues(root)).toEqual([9, 3, 15, 20, 7]);
    });

    test('Example 2: single node', () => {
        const root = buildTree([-1], [-1]);
        expect(root!.val).toBe(-1);
        expect(root!.left).toBeNull();
        expect(root!.right).toBeNull();
    });

    test('Left skewed', () => {
        const root = buildTree([3, 2, 1], [1, 2, 3]);
        expect(preorderValues(root)).toEqual([3, 2, 1]);
        expect(inorderValues(root)).toEqual([1, 2, 3]);
    });

    test('Right skewed', () => {
        const root = buildTree([1, 2, 3], [1, 2, 3]);
        expect(preorderValues(root)).toEqual([1, 2, 3]);
        expect(inorderValues(root)).toEqual([1, 2, 3]);
    });

    test('Balanced tree', () => {
        const root = buildTree([1, 2, 4, 5, 3, 6, 7], [4, 2, 5, 1, 6, 3, 7]);
        expect(preorderValues(root)).toEqual([1, 2, 4, 5, 3, 6, 7]);
        expect(inorderValues(root)).toEqual([4, 2, 5, 1, 6, 3, 7]);
    });

    test('Two nodes left child', () => {
        const root = buildTree([2, 1], [1, 2]);
        expect(root!.val).toBe(2);
        expect(root!.left!.val).toBe(1);
        expect(root!.right).toBeNull();
    });

    test('Two nodes right child', () => {
        const root = buildTree([1, 2], [1, 2]);
        expect(root!.val).toBe(1);
        expect(root!.left).toBeNull();
        expect(root!.right!.val).toBe(2);
    });
});
