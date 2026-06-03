import { ListNode, isPalindrome } from "./solution";

function buildList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

describe("234. Palindrome Linked List", () => {
  test("Example 1: [1,2,2,1]", () => {
    expect(isPalindrome(buildList([1, 2, 2, 1]))).toBe(true);
  });

  test("Example 2: [1,2]", () => {
    expect(isPalindrome(buildList([1, 2]))).toBe(false);
  });

  test("Single node", () => {
    expect(isPalindrome(buildList([1]))).toBe(true);
  });

  test("Odd length palindrome [1,2,1]", () => {
    expect(isPalindrome(buildList([1, 2, 1]))).toBe(true);
  });

  test("Odd length not palindrome [1,2,3]", () => {
    expect(isPalindrome(buildList([1, 2, 3]))).toBe(false);
  });

  test("All same values [1,1,1,1]", () => {
    expect(isPalindrome(buildList([1, 1, 1, 1]))).toBe(true);
  });

  test("Longer palindrome [1,2,3,2,1]", () => {
    expect(isPalindrome(buildList([1, 2, 3, 2, 1]))).toBe(true);
  });
});
