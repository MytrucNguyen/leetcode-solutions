import { TreeNode, isValidBST } from './solution';

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

describe('98. Validate Binary Search Tree', () => {
    test('Example 1: [2,1,3] valid', () => {
        expect(isValidBST(buildTree([2, 1, 3]))).toBe(true);
    });

    test('Example 2: [5,1,4,null,null,3,6] invalid', () => {
        expect(isValidBST(buildTree([5, 1, 4, null, null, 3, 6]))).toBe(false);
    });

    test('Single node', () => {
        expect(isValidBST(buildTree([1]))).toBe(true);
    });

    test('Left child equals parent', () => {
        expect(isValidBST(buildTree([2, 2, 3]))).toBe(false);
    });

    test('Right child equals parent', () => {
        expect(isValidBST(buildTree([2, 1, 2]))).toBe(false);
    });

    test('Valid larger tree', () => {
        expect(isValidBST(buildTree([4, 2, 6, 1, 3, 5, 7]))).toBe(true);
    });

    test('Invalid deep node: grandchild violates root', () => {
        // 5 -> right 6 -> left 3 (3 < 5, invalid in right subtree)
        const root = new TreeNode(5);
        root.left = new TreeNode(1);
        root.right = new TreeNode(6);
        root.right.left = new TreeNode(3);
        root.right.right = new TreeNode(7);
        expect(isValidBST(root)).toBe(false);
    });

    test('Left skewed valid', () => {
        expect(isValidBST(buildTree([3, 2, null, 1]))).toBe(true);
    });

    test('Right skewed valid', () => {
        expect(isValidBST(buildTree([1, null, 2, null, 3]))).toBe(true);
    });
});
