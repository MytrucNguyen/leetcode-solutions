import { TreeNode, diameterOfBinaryTree } from "./solution";

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

describe("543. Diameter of Binary Tree", () => {
  test("Example 1: [1,2,3,4,5]", () => {
    const root = buildTree([1, 2, 3, 4, 5]);
    expect(diameterOfBinaryTree(root)).toBe(3);
  });

  test("Example 2: [1,2]", () => {
    const root = buildTree([1, 2]);
    expect(diameterOfBinaryTree(root)).toBe(1);
  });

  test("Single node", () => {
    const root = buildTree([1]);
    expect(diameterOfBinaryTree(root)).toBe(0);
  });

  test("Left-skewed tree", () => {
    const root = buildTree([1, 2, null, 3, null, 4]);
    expect(diameterOfBinaryTree(root)).toBe(3);
  });

  test("Diameter not through root", () => {
    const root = buildTree([1, 2, null, 3, 4, 5, null, null, 6]);
    expect(diameterOfBinaryTree(root)).toBe(4);
  });

  test("Balanced tree", () => {
    const root = buildTree([1, 2, 3, 4, 5, 6, 7]);
    expect(diameterOfBinaryTree(root)).toBe(4);
  });
});
