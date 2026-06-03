import { addTwoNumbers, ListNode } from "./solution";

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

describe("Add Two Numbers", () => {
  test("Example 1: [2,4,3] + [5,6,4] = [7,0,8]", () => {
    const l1 = createList([2, 4, 3]);
    const l2 = createList([5, 6, 4]);
    const result = addTwoNumbers(l1, l2);
    const output = listToArray(result);
    const expected = [7, 0, 8];

    console.log(
      `Test 1 - Input: [2,4,3] + [5,6,4] → Output: [${output}], Expected: [${expected}]`
    );

    expect(output).toEqual(expected);
  });

  test("Example 2: [0] + [0] = [0]", () => {
    const l1 = createList([0]);
    const l2 = createList([0]);
    const result = addTwoNumbers(l1, l2);
    const output = listToArray(result);
    const expected = [0];

    console.log(
      `Test 2 - Input: [0] + [0] → Output: [${output}], Expected: [${expected}]`
    );

    expect(output).toEqual(expected);
  });

  test("Example 3: [9,9,9,9,9,9,9] + [9,9,9,9] = [8,9,9,9,0,0,0,1]", () => {
    const l1 = createList([9, 9, 9, 9, 9, 9, 9]);
    const l2 = createList([9, 9, 9, 9]);
    const result = addTwoNumbers(l1, l2);
    const output = listToArray(result);
    const expected = [8, 9, 9, 9, 0, 0, 0, 1];

    console.log(
      `Test 3 - Input: [9,9,9,9,9,9,9] + [9,9,9,9] → Output: [${output}], Expected: [${expected}]`
    );

    expect(output).toEqual(expected);
  });

  test("Different lengths: [9,9] + [1] = [0,0,1]", () => {
    const l1 = createList([9, 9]);
    const l2 = createList([1]);
    const result = addTwoNumbers(l1, l2);
    const output = listToArray(result);
    const expected = [0, 0, 1];

    console.log(
      `Test 4 - Input: [9,9] + [1] → Output: [${output}], Expected: [${expected}]`
    );

    expect(output).toEqual(expected);
  });

  test("Single digits with carry: [5] + [5] = [0,1]", () => {
    const l1 = createList([5]);
    const l2 = createList([5]);
    const result = addTwoNumbers(l1, l2);
    const output = listToArray(result);
    const expected = [0, 1];

    console.log(
      `Test 5 - Input: [5] + [5] → Output: [${output}], Expected: [${expected}]`
    );

    expect(output).toEqual(expected);
  });

  test("No carry: [2,4,3] + [5,6,3] = [7,0,7]", () => {
    const l1 = createList([2, 4, 3]);
    const l2 = createList([5, 6, 3]);
    const result = addTwoNumbers(l1, l2);
    const output = listToArray(result);
    const expected = [7, 0, 7];

    console.log(
      `Test 6 - Input: [2,4,3] + [5,6,3] → Output: [${output}], Expected: [${expected}]`
    );

    expect(output).toEqual(expected);
  });
});
