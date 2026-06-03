import { TreeNode, maxPathSum } from './solution';

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

describe('124. Binary Tree Maximum Path Sum', () => {
    test('Example 1: [1,2,3]', () => {
        expect(maxPathSum(buildTree([1, 2, 3]))).toBe(6);
    });

    test('Example 2: [-10,9,20,null,null,15,7]', () => {
        expect(maxPathSum(buildTree([-10, 9, 20, null, null, 15, 7]))).toBe(42);
    });

    test('Single node positive', () => {
        expect(maxPathSum(new TreeNode(5))).toBe(5);
    });

    test('Single node negative', () => {
        expect(maxPathSum(new TreeNode(-3))).toBe(-3);
    });

    test('All negative — pick least negative', () => {
        expect(maxPathSum(buildTree([-3, -2, -1]))).toBe(-1);
    });

    test('Skip negative subtree', () => {
        const root = buildTree([5, -10, 3]);
        expect(maxPathSum(root)).toBe(8);
    });

    test('Path not through root', () => {
        const root = buildTree([-100, 2, 3, 4, 5, 6, 7]);
        expect(maxPathSum(root)).toBe(16);
    });

    test('Left skewed all positive', () => {
        expect(maxPathSum(buildTree([1, 2, null, 3]))).toBe(6);
    });

    test('Large values', () => {
        expect(maxPathSum(buildTree([1000, 1000, 1000]))).toBe(3000);
    });

    test('Zigzag path', () => {
        const root = buildTree([2, -1, -2]);
        expect(maxPathSum(root)).toBe(2);
    });
});
