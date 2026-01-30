/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // Base case 1: Both trees are empty
  if (p === null && q === null) {
    return true;
  }

  // Base case 2: One tree is empty, the other is not
  if (p === null || q === null) {
    return false;
  }

  // Recursive case: Check current values and recurse on children
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
}
