import { TreeNode, sortedArrayToBST } from "./solution";

function isBalanced(node: TreeNode | null): boolean {
  if (node === null) return true;

  function height(n: TreeNode | null): number {
    if (n === null) return 0;
    return 1 + Math.max(height(n.left), height(n.right));
  }

  const diff = Math.abs(height(node.left) - height(node.right));
  return diff <= 1 && isBalanced(node.left) && isBalanced(node.right);
}

function isBST(
  node: TreeNode | null,
  min = -Infinity,
  max = Infinity,
): boolean {
  if (node === null) return true;
  if (node.val <= min || node.val >= max) return false;
  return isBST(node.left, min, node.val) && isBST(node.right, node.val, max);
}

function inorderValues(node: TreeNode | null): number[] {
  if (node === null) return [];
  return [...inorderValues(node.left), node.val, ...inorderValues(node.right)];
}

describe("108. Convert Sorted Array to BST", () => {
  test("Example 1: [-10,-3,0,5,9]", () => {
    const result = sortedArrayToBST([-10, -3, 0, 5, 9]);
    expect(isBalanced(result)).toBe(true);
    expect(isBST(result)).toBe(true);
    expect(inorderValues(result)).toEqual([-10, -3, 0, 5, 9]);
  });

  test("Example 2: [1,3]", () => {
    const result = sortedArrayToBST([1, 3]);
    expect(isBalanced(result)).toBe(true);
    expect(isBST(result)).toBe(true);
    expect(inorderValues(result)).toEqual([1, 3]);
  });

  test("Single element", () => {
    const result = sortedArrayToBST([1]);
    expect(result!.val).toBe(1);
    expect(result!.left).toBeNull();
    expect(result!.right).toBeNull();
  });

  test("Three elements", () => {
    const result = sortedArrayToBST([1, 2, 3]);
    expect(isBalanced(result)).toBe(true);
    expect(isBST(result)).toBe(true);
    expect(inorderValues(result)).toEqual([1, 2, 3]);
  });

  test("Seven elements (perfect tree)", () => {
    const result = sortedArrayToBST([1, 2, 3, 4, 5, 6, 7]);
    expect(isBalanced(result)).toBe(true);
    expect(isBST(result)).toBe(true);
    expect(inorderValues(result)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test("Negative numbers", () => {
    const result = sortedArrayToBST([-5, -3, -1]);
    expect(isBalanced(result)).toBe(true);
    expect(isBST(result)).toBe(true);
    expect(inorderValues(result)).toEqual([-5, -3, -1]);
  });
});
