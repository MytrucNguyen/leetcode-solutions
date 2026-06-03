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

export function rightSideView(root: TreeNode | null): number[] {
    if (root === null) return [];

    const result: number[] = [];
    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        let lastVal = 0;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;
            lastVal = node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(lastVal);
    }

    return result;
}
