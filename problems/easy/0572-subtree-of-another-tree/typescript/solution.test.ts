import { TreeNode, isSubtree } from "./solution";

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

describe("572. Subtree of Another Tree", () => {
  test("Example 1: subtree exists", () => {
    const root = buildTree([3, 4, 5, 1, 2]);
    const subRoot = buildTree([4, 1, 2]);
    expect(isSubtree(root, subRoot)).toBe(true);
  });

  test("Example 2: extra node makes it different", () => {
    const root = buildTree([3, 4, 5, 1, 2, null, null, null, null, 0]);
    const subRoot = buildTree([4, 1, 2]);
    expect(isSubtree(root, subRoot)).toBe(false);
  });

  test("Subtree is the root itself", () => {
    const root = buildTree([1, 2, 3]);
    const subRoot = buildTree([1, 2, 3]);
    expect(isSubtree(root, subRoot)).toBe(true);
  });

  test("Single node match", () => {
    const root = buildTree([1, 2, 3]);
    const subRoot = buildTree([2]);
    expect(isSubtree(root, subRoot)).toBe(true);
  });

  test("Single node no match", () => {
    const root = buildTree([1, 2, 3]);
    const subRoot = buildTree([4]);
    expect(isSubtree(root, subRoot)).toBe(false);
  });

  test("Subtree in right side", () => {
    const root = buildTree([1, 2, 3, null, null, 4, 5]);
    const subRoot = buildTree([3, 4, 5]);
    expect(isSubtree(root, subRoot)).toBe(true);
  });

  test("Same values but different structure", () => {
    const root = buildTree([1, 2, null]);
    const subRoot = buildTree([1, null, 2]);
    expect(isSubtree(root, subRoot)).toBe(false);
  });
});
