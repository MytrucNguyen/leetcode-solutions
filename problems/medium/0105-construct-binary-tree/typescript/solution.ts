export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const inorderMap = new Map<number, number>();

    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    let preIndex = 0;

    function build(inStart: number, inEnd: number): TreeNode | null {
        if (inStart > inEnd) return null;

        const rootVal = preorder[preIndex];
        preIndex++;
        const node = new TreeNode(rootVal);

        const rootIndex = inorderMap.get(rootVal)!;

        node.left = build(inStart, rootIndex - 1);
        node.right = build(rootIndex + 1, inEnd);

        return node;
    }

    return build(0, inorder.length - 1);
}
