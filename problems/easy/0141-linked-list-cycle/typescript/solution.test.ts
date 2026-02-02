import { hasCycle, ListNode } from "./solution";

// Helper function to create a linked list with a cycle
function createListWithCycle(values: number[], pos: number): ListNode | null {
  if (values.length === 0) return null;

  const nodes: ListNode[] = [];

  // Create all nodes
  for (const val of values) {
    nodes.push(new ListNode(val));
  }

  // Link them together
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }

  // Create cycle if pos is valid
  if (pos >= 0 && pos < nodes.length) {
    nodes[nodes.length - 1].next = nodes[pos];
  }

  return nodes[0];
}

// Helper function to create a normal linked list (no cycle)
function createList(values: number[]): ListNode | null {
  return createListWithCycle(values, -1);
}

describe("Linked List Cycle", () => {
  test("Example 1: [3,2,0,-4] with cycle at pos 1", () => {
    const head = createListWithCycle([3, 2, 0, -4], 1);
    const result = hasCycle(head);

    console.log(
      `Test 1 - List with cycle at pos 1 → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });

  test("Example 2: [1,2] with cycle at pos 0", () => {
    const head = createListWithCycle([1, 2], 0);
    const result = hasCycle(head);

    console.log(
      `Test 2 - List with cycle at pos 0 → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });

  test("Example 3: [1] with no cycle", () => {
    const head = createList([1]);
    const result = hasCycle(head);

    console.log(
      `Test 3 - Single node, no cycle → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });

  test("Empty list", () => {
    const head = null;
    const result = hasCycle(head);

    console.log(`Test 4 - Empty list → Output: ${result}, Expected: false`);

    expect(result).toBe(false);
  });

  test("Two nodes, no cycle", () => {
    const head = createList([1, 2]);
    const result = hasCycle(head);

    console.log(
      `Test 5 - Two nodes, no cycle → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });

  test("Multiple nodes, no cycle", () => {
    const head = createList([1, 2, 3, 4, 5]);
    const result = hasCycle(head);

    console.log(
      `Test 6 - Multiple nodes, no cycle → Output: ${result}, Expected: false`,
    );

    expect(result).toBe(false);
  });

  test("Cycle at the end", () => {
    const head = createListWithCycle([1, 2, 3, 4], 3);
    const result = hasCycle(head);

    console.log(
      `Test 7 - Cycle at pos 3 (last node) → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });

  test("Self-loop (single node pointing to itself)", () => {
    const head = new ListNode(1);
    head.next = head; // Points to itself
    const result = hasCycle(head);

    console.log(`Test 8 - Self-loop → Output: ${result}, Expected: true`);

    expect(result).toBe(true);
  });

  test("Large cycle", () => {
    const head = createListWithCycle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4);
    const result = hasCycle(head);

    console.log(
      `Test 9 - Large list with cycle → Output: ${result}, Expected: true`,
    );

    expect(result).toBe(true);
  });
});
