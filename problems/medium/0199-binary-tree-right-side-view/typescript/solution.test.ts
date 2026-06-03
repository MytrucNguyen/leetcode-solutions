import { TreeNode, rightSideView } from './solution';

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

describe('199. Binary Tree Right Side View', () => {
    test('Example 1: [1,2,3,null,5,null,4]', () => {
        const root = buildTree([1, 2, 3, null, 5, null, 4]);
        expect(rightSideView(root)).toEqual([1, 3, 4]);
    });

    test('Example 2: [1,null,3]', () => {
        const root = buildTree([1, null, 3]);
        expect(rightSideView(root)).toEqual([1, 3]);
    });

    test('Example 3: empty tree', () => {
        expect(rightSideView(null)).toEqual([]);
    });

    test('Single node', () => {
        expect(rightSideView(new TreeNode(1))).toEqual([1]);
    });

    test('Left side visible from right', () => {
        const root = buildTree([1, 2, null, 3]);
        expect(rightSideView(root)).toEqual([1, 2, 3]);
    });

    test('Complete tree', () => {
        const root = buildTree([1, 2, 3, 4, 5, 6, 7]);
        expect(rightSideView(root)).toEqual([1, 3, 7]);
    });

    test('Left skewed', () => {
        const root = buildTree([1, 2, null, 3, null, 4]);
        expect(rightSideView(root)).toEqual([1, 2, 3, 4]);
    });

    test('Right skewed', () => {
        const root = buildTree([1, null, 2, null, 3]);
        expect(rightSideView(root)).toEqual([1, 2, 3]);
    });
});
