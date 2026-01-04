import { mergeTwoLists, ListNode } from "./solution";

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

describe("Merge Two Sorted Lists", () => {
  test("Example 1: [1,2,4] and [1,3,4]", () => {
    const list1 = createList([1, 2, 4]);
    const list2 = createList([1, 3, 4]);
    const result = mergeTwoLists(list1, list2);
    const output = listToArray(result);
    const expected = [1, 1, 2, 3, 4, 4];

    console.log(
      `Test 1 - Input: list1=[1,2,4], list2=[1,3,4] → Output: [${output}], Expected: [${expected}]`
    );

    expect(output).toEqual(expected);
  });

  test("Example 2: [] and []", () => {
    const list1 = createList([]);
    const list2 = createList([]);
    const result = mergeTwoLists(list1, list2);
    const output = listToArray(result);
    const expected: number[] = [];

    console.log(
      `Test 2 - Input: list1=[], list2=[] → Output: [${output}], Expected: [${expected}]`
    );

    expect(output).toEqual(expected);
  });

  test("Example 3: [] and [0]", () => {
    const list1 = createList([]);
    const list2 = createList([0]);
    const result = mergeTwoLists(list1, list2);
    const output = listToArray(result);
    const expected = [0];

    console.log(
      `Test 3 - Input: list1=[], list2=[0] → Output: [${output}], Expected: [${expected}]`
    );

    expect(output).toEqual(expected);
  });

  test("One longer list", () => {
    const list1 = createList([1, 2]);
    const list2 = createList([3, 4, 5, 6]);
    const result = mergeTwoLists(list1, list2);
    const output = listToArray(result);
    const expected = [1, 2, 3, 4, 5, 6];

    console.log(
      `Test 4 - Input: list1=[1,2], list2=[3,4,5,6] → Output: [${output}], Expected: [${expected}]`
    );

    expect(output).toEqual(expected);
  });
});
