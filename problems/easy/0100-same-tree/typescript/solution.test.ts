import { isSameTree, TreeNode } from "./solution";

describe("Same Tree", () => {
  test("Example 1: Both trees [1,2,3]", () => {
    const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));

    const result = isSameTree(p, q);

    console.log(
      `Test 1 - Both trees identical → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });

  test("Example 2: Different structure [1,2] vs [1,null,2]", () => {
    const p = new TreeNode(1, new TreeNode(2), null);
    const q = new TreeNode(1, null, new TreeNode(2));

    const result = isSameTree(p, q);

    console.log(
      `Test 2 - Different structure → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });

  test("Example 3: Different values [1,2,1] vs [1,1,2]", () => {
    const p = new TreeNode(1, new TreeNode(2), new TreeNode(1));
    const q = new TreeNode(1, new TreeNode(1), new TreeNode(2));

    const result = isSameTree(p, q);

    console.log(
      `Test 3 - Different values → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });

  test("Both trees empty", () => {
    const p = null;
    const q = null;

    const result = isSameTree(p, q);

    console.log(`Test 4 - Both empty → Output: ${result}, Expected: true`);

    expect(result).toBe(true);
  });

  test("One tree empty, other not", () => {
    const p = new TreeNode(1);
    const q = null;

    const result = isSameTree(p, q);

    console.log(`Test 5 - One empty → Output: ${result}, Expected: false`);

    expect(result).toBe(false);
  });

  test("Single node, same value", () => {
    const p = new TreeNode(5);
    const q = new TreeNode(5);

    const result = isSameTree(p, q);

    console.log(
      `Test 6 - Single nodes, same value → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });

  test("Single node, different values", () => {
    const p = new TreeNode(5);
    const q = new TreeNode(9);

    const result = isSameTree(p, q);

    console.log(
      `Test 7 - Single nodes, different values → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });

  test("Deep tree, all same", () => {
    const p = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3),
    );
    const q = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3),
    );

    const result = isSameTree(p, q);

    console.log(
      `Test 8 - Deep tree, identical → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });

  test("Deep tree, difference at leaf", () => {
    const p = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3),
    );
    const q = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(6)),
      new TreeNode(3),
    );

    const result = isSameTree(p, q);

    console.log(
      `Test 9 - Deep tree, different leaf → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });

  test("Negative values", () => {
    const p = new TreeNode(-1, new TreeNode(-2), new TreeNode(-3));
    const q = new TreeNode(-1, new TreeNode(-2), new TreeNode(-3));

    const result = isSameTree(p, q);

    console.log(
      `Test 10 - Negative values → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });
});
