import { TreeNode, lowestCommonAncestor } from './solution';

describe('236. Lowest Common Ancestor of a Binary Tree', () => {
    // Build the main test tree
    //         3
    //        / \
    //       5    1
    //      / \  / \
    //     6   2 0   8
    //        / \
    //       7   4
    function buildMainTree(): { root: TreeNode; nodes: Map<number, TreeNode> } {
        const nodes = new Map<number, TreeNode>();
        const n = (val: number) => {
            const node = new TreeNode(val);
            nodes.set(val, node);
            return node;
        };

        const root = n(3);
        root.left = n(5);
        root.right = n(1);
        root.left.left = n(6);
        root.left.right = n(2);
        root.right.left = n(0);
        root.right.right = n(8);
        root.left.right.left = n(7);
        root.left.right.right = n(4);

        return { root, nodes };
    }

    test('Example 1: LCA(5, 1) = 3', () => {
        const { root, nodes } = buildMainTree();
        const result = lowestCommonAncestor(root, nodes.get(5)!, nodes.get(1)!);
        expect(result!.val).toBe(3);
    });

    test('Example 2: LCA(5, 4) = 5', () => {
        const { root, nodes } = buildMainTree();
        const result = lowestCommonAncestor(root, nodes.get(5)!, nodes.get(4)!);
        expect(result!.val).toBe(5);
    });

    test('Example 3: LCA(1, 2) = 1', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        const result = lowestCommonAncestor(root, root, root.left!);
        expect(result!.val).toBe(1);
    });

    test('LCA of siblings', () => {
        const { root, nodes } = buildMainTree();
        const result = lowestCommonAncestor(root, nodes.get(6)!, nodes.get(2)!);
        expect(result!.val).toBe(5);
    });

    test('LCA of deep nodes', () => {
        const { root, nodes } = buildMainTree();
        const result = lowestCommonAncestor(root, nodes.get(7)!, nodes.get(8)!);
        expect(result!.val).toBe(3);
    });

    test('LCA of adjacent nodes', () => {
        const { root, nodes } = buildMainTree();
        const result = lowestCommonAncestor(root, nodes.get(2)!, nodes.get(7)!);
        expect(result!.val).toBe(2);
    });

    test('LCA of nodes on same side', () => {
        const { root, nodes } = buildMainTree();
        const result = lowestCommonAncestor(root, nodes.get(6)!, nodes.get(4)!);
        expect(result!.val).toBe(5);
    });
});
