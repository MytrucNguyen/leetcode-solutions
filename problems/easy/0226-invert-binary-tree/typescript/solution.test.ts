import { invertTree, TreeNode } from "./solution";

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

// Helper function to convert tree to array (level-order)
function treeToArray(root: TreeNode | null): (number | null)[] {
  if (!root) return [];

  const result: (number | null)[] = [];
  const queue: (TreeNode | null)[] = [root];

  while (queue.length > 0) {
    const node = queue.shift()!;

    if (node === null) {
      result.push(null);
    } else {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  // Remove trailing nulls
  while (result.length > 0 && result[result.length - 1] === null) {
    result.pop();
  }

  return result;
}

describe("Invert Binary Tree", () => {
  test("Example 1: [4,2,7,1,3,6,9]", () => {
    const root = createTree([4, 2, 7, 1, 3, 6, 9]);
    const result = invertTree(root);
    const output = treeToArray(result);
    const expected = [4, 7, 2, 9, 6, 3, 1];

    console.log(
      `Test 1 - Input: [4,2,7,1,3,6,9] → Output: [${output}], Expected: [${expected}]`
    );

    expect(output).toEqual(expected);
  });

  test("Example 2: [2,1,3]", () => {
    const root = createTree([2, 1, 3]);
    const result = invertTree(root);
    const output = treeToArray(result);
    const expected = [2, 3, 1];

    console.log(
      `Test 2 - Input: [2,1,3] → Output: [${output}], Expected: [${expected}]`
    );

    expect(output).toEqual(expected);
  });

  test("Example 3: []", () => {
    const root = createTree([]);
    const result = invertTree(root);
    const output = treeToArray(result);
    const expected: number[] = [];

    console.log(
      `Test 3 - Input: [] → Output: [${output}], Expected: [${expected}]`
    );

    expect(output).toEqual(expected);
  });

  test("Single node", () => {
    const root = createTree([1]);
    const result = invertTree(root);
    const output = treeToArray(result);
    const expected = [1];

    console.log(
      `Test 4 - Input: [1] → Output: [${output}], Expected: [${expected}]`
    );

    expect(output).toEqual(expected);
  });

  test("Two nodes", () => {
    const root = createTree([1, 2]);
    const result = invertTree(root);
    const output = treeToArray(result);
    const expected = [1, null, 2];

    console.log(
      `Test 5 - Input: [1,2] → Output: [${output}], Expected: [${expected}]`
    );

    expect(output).toEqual(expected);
  });
});
