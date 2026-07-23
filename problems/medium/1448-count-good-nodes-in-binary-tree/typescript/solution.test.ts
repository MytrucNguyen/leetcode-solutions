import { TreeNode, goodNodes } from './solution';

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

describe('1448. Count Good Nodes in Binary Tree', () => {
    test('Example 1: [3,1,4,3,null,1,5]', () => {
        expect(goodNodes(buildTree([3, 1, 4, 3, null, 1, 5]))).toBe(4);
    });

    test('Example 2: [3,3,null]', () => {
        expect(goodNodes(buildTree([3, 3, null]))).toBe(2);
    });

    test('Example 3: single node', () => {
        expect(goodNodes(new TreeNode(1))).toBe(1);
    });

    test('All same values', () => {
        expect(goodNodes(buildTree([5, 5, 5, 5, 5]))).toBe(5);
    });

    test('Strictly increasing down', () => {
        expect(goodNodes(buildTree([1, 2, 3]))).toBe(3);
    });

    test('Strictly decreasing down', () => {
        expect(goodNodes(buildTree([3, 2, 1]))).toBe(1);
    });

    test('Negative values', () => {
        expect(goodNodes(buildTree([-1, -2, -3]))).toBe(1);
    });

    test('Mix of positive and negative', () => {
        expect(goodNodes(buildTree([2, -1, 3]))).toBe(2);
    });

    test('Deep left path all good', () => {
        expect(goodNodes(buildTree([1, 2, null, 3, null, 4]))).toBe(4);
    });
});
