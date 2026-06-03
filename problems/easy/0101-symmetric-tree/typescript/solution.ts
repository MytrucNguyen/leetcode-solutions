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

export function isSymmetric(root: TreeNode | null): boolean {
  // Empty tree is symmetric
  if (root === null) return true;

  // Check if left and right subtrees are mirrors
  return isMirror(root.left, root.right);
}

function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
  // Base case 1: Both are null
  if (left === null && right === null) {
    return true;
  }

  // Base case 2: One is null, other is not 
  if (left === null || right === null) {
    return false;
  }

  // Recursive case: Check values and opposite children
  return (
    left.val === right.val &&
    isMirror(left.left, right.right) && 
    isMirror(left.right, right.left)
  ); 
}
