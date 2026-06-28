import { TreeNode, flatten } from './solution';

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

function toList(root: TreeNode | null): number[] {
    const result: number[] = [];
    while (root !== null) {
        expect(root.left).toBeNull();
        result.push(root.val);
        root = root.right;
    }
    return result;
}

describe('114. Flatten Binary Tree to Linked List', () => {
    test('Example 1: [1,2,5,3,4,null,6]', () => {
        const root = buildTree([1, 2, 5, 3, 4, null, 6]);
        flatten(root);
        expect(toList(root)).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('Example 2: empty tree', () => {
        flatten(null);
    });

    test('Example 3: single node', () => {
        const root = new TreeNode(0);
        flatten(root);
        expect(toList(root)).toEqual([0]);
    });

    test('Left skewed', () => {
        const root = buildTree([1, 2, null, 3]);
        flatten(root);
        expect(toList(root)).toEqual([1, 2, 3]);
    });

    test('Right skewed — already flat', () => {
        const root = buildTree([1, null, 2, null, 3]);
        flatten(root);
        expect(toList(root)).toEqual([1, 2, 3]);
    });

    test('Only left children', () => {
        const root = buildTree([1, 2, null, 3, null, 4]);
        flatten(root);
        expect(toList(root)).toEqual([1, 2, 3, 4]);
    });

    test('Complete tree', () => {
        const root = buildTree([1, 2, 3, 4, 5, 6, 7]);
        flatten(root);
        expect(toList(root)).toEqual([1, 2, 4, 5, 3, 6, 7]);
    });

    test('Two nodes left', () => {
        const root = buildTree([1, 2]);
        flatten(root);
        expect(toList(root)).toEqual([1, 2]);
    });

    test('Two nodes right', () => {
        const root = buildTree([1, null, 2]);
        flatten(root);
        expect(toList(root)).toEqual([1, 2]);
    });
});
