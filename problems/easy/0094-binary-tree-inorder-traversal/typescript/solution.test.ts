import { TreeNode, inorderTraversal } from "./solution";

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

describe("94. Binary Tree Inorder Traversal", () => {
  test("Example 1: [1,null,2,3]", () => {
    const root = buildTree([1, null, 2, 3]);
    expect(inorderTraversal(root)).toEqual([1, 3, 2]);
  });

  test("Example 2: empty tree", () => {
    expect(inorderTraversal(null)).toEqual([]);
  });

  test("Example 3: single node [1]", () => {
    const root = buildTree([1]);
    expect(inorderTraversal(root)).toEqual([1]);
  });

  test("Full tree produces sorted order", () => {
    const root = buildTree([4, 2, 6, 1, 3, 5, 7]);
    expect(inorderTraversal(root)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test("Left-skewed tree", () => {
    const root = buildTree([3, 2, null, 1]);
    expect(inorderTraversal(root)).toEqual([1, 2, 3]);
  });
});
