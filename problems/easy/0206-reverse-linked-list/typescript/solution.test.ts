import { reverseList, ListNode } from "./solution";

// Helper function to create a linked list from an array
function createList(values: number[]): ListNode | null {
  if (values.length === 0) return null;

  const head = new ListNode(values[0]);
  let current = head;

  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }

  return head;
}

// Helper function to convert linked list to array
function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

describe("Reverse Linked List", () => {
  test("Example 1: [1,2,3,4,5]", () => {
    const head = createList([1, 2, 3, 4, 5]);
    const result = reverseList(head);
    const output = listToArray(result);
    const expected = [5, 4, 3, 2, 1];

    console.log(
      `Test 1 - Input: [1,2,3,4,5] → Output: [${output}], Expected: [${expected}]`
    );

    expect(output).toEqual(expected);
  });

  test("Example 2: [1,2]", () => {
    const head = createList([1, 2]);
    const result = reverseList(head);
    const output = listToArray(result);
    const expected = [2, 1];

    console.log(
      `Test 2 - Input: [1,2] → Output: [${output}], Expected: [${expected}]`
    );

    expect(output).toEqual(expected);
  });

  test("Example 3: []", () => {
    const head = createList([]);
    const result = reverseList(head);
    const output = listToArray(result);
    const expected: number[] = [];

    console.log(
      `Test 3 - Input: [] → Output: [${output}], Expected: [${expected}]`
    );

    expect(output).toEqual(expected);
  });

  test("Single node: [1]", () => {
    const head = createList([1]);
    const result = reverseList(head);
    const output = listToArray(result);
    const expected = [1];

    console.log(
      `Test 4 - Input: [1] → Output: [${output}], Expected: [${expected}]`
    );

    expect(output).toEqual(expected);
  });

  test("Three nodes: [1,2,3]", () => {
    const head = createList([1, 2, 3]);
    const result = reverseList(head);
    const output = listToArray(result);
    const expected = [3, 2, 1];

    console.log(
      `Test 5 - Input: [1,2,3] → Output: [${output}], Expected: [${expected}]`
    );

    expect(output).toEqual(expected);
  });

  test("Longer list: [1,2,3,4,5,6,7,8,9,10]", () => {
    const head = createList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const result = reverseList(head);
    const output = listToArray(result);
    const expected = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

    console.log(
      `Test 6 - Input: [1,2,3,4,5,6,7,8,9,10] → Output: [${output}], Expected: [${expected}]`
    );

    expect(output).toEqual(expected);
  });
});
