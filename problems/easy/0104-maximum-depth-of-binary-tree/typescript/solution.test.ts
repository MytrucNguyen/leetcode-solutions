import { TreeNode, maxDepth } from "./solution";

// Helper function to create a tree from an array (level-order)
function createTree(values: (number | null)[]): TreeNode | null {
  if (values.length === 0 || values[0] === null) return null;

  const root = new TreeNode(values[0]);
  const queue: TreeNode[] = [root];
  let i = 1;

  while (queue.length > 0 && i < values.length) {
    const node = queue.shift()!;

    if (i < values.length && values[i] !== null) {
      node.left = new TreeNode(values[i]!);
      queue.push(node.left);
    }
    i++;

    if (i < values.length && values[i] !== null) {
      node.right = new TreeNode(values[i]!);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

describe("Maximum Depth of Binary Tree", () => {
  test("Example 1: [3,9,20,null,null,15,7]", () => {
    const root = createTree([3, 9, 20, null, null, 15, 7]);
    const result = maxDepth(root);
    const expected = 3;

    console.log(
      `Test 1 - Input: [3,9,20,null,null,15,7] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Example 2: [1,null,2]", () => {
    const root = createTree([1, null, 2]);
    const result = maxDepth(root);
    const expected = 2;

    console.log(
      `Test 2 - Input: [1,null,2] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Empty tree", () => {
    const root = createTree([]);
    const result = maxDepth(root);
    const expected = 0;

    console.log(
      `Test 3 - Input: [] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Single node", () => {
    const root = createTree([1]);
    const result = maxDepth(root);
    const expected = 1;

    console.log(
      `Test 4 - Input: [1] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Left skewed tree", () => {
    const root = createTree([1, 2, null, 3, null, 4]);
    const result = maxDepth(root);
    const expected = 4;

    console.log(
      `Test 5 - Input: [1,2,null,3,null,4] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });

  test("Right skewed tree", () => {
    const root = createTree([1, null, 2, null, 3, null, 4]);
    const result = maxDepth(root);
    const expected = 4;

    console.log(
      `Test 6 - Input: [1,null,2,null,3,null,4] → Output: ${result}, Expected: ${expected}`
    );

    expect(result).toBe(expected);
  });
});
