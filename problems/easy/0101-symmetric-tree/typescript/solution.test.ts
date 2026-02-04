import { isSymmetric, TreeNode } from "./solution";

describe("Symmetric Tree", () => {
  test("Example 1: Symmetric tree [1,2,2,3,4,4,3]", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(2, new TreeNode(4), new TreeNode(3)),
    );

    const result = isSymmetric(root);

    console.log(`Test 1 - Symmetric tree → Output: ${result}, Expected: true`);

    expect(result).toBe(true);
  });

  test("Example 2: Not symmetric [1,2,2,null,3,null,3]", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(3)),
      new TreeNode(2, null, new TreeNode(3)),
    );

    const result = isSymmetric(root);

    console.log(`Test 2 - Not symmetric → Output: ${result}, Expected: false`);

    expect(result).toBe(false);
  });

  test("Single node tree", () => {
    const root = new TreeNode(1);

    const result = isSymmetric(root);

    console.log(`Test 3 - Single node → Output: ${result}, Expected: true`);

    expect(result).toBe(true);
  });

  test("Empty tree", () => {
    const root = null;

    const result = isSymmetric(root);

    console.log(`Test 4 - Empty tree → Output: ${result}, Expected: true`);

    expect(result).toBe(true);
  });

  test("Two nodes, symmetric", () => {
    const root = new TreeNode(1, new TreeNode(2), new TreeNode(2));

    const result = isSymmetric(root);

    console.log(
      `Test 5 - Two nodes symmetric → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });

  test("Two nodes, not symmetric (different values)", () => {
    const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));

    const result = isSymmetric(root);

    console.log(
      `Test 6 - Two nodes different values → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });

  test("Not symmetric (different structure)", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), null),
      new TreeNode(2, new TreeNode(3), null),
    );

    const result = isSymmetric(root);

    console.log(
      `Test 7 - Different structure → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });

  test("Deep symmetric tree", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(2, new TreeNode(4), new TreeNode(3)),
    );

    const result = isSymmetric(root);

    console.log(
      `Test 8 - Deep symmetric tree → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });

  test("Left subtree only", () => {
    const root = new TreeNode(1, new TreeNode(2), null);

    const result = isSymmetric(root);

    console.log(
      `Test 9 - Left subtree only → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });

  test("Right subtree only", () => {
    const root = new TreeNode(1, null, new TreeNode(2));

    const result = isSymmetric(root);

    console.log(
      `Test 10 - Right subtree only → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });
});
