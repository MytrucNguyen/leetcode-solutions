import { groupAnagrams } from "./solution";

describe("Group Anagrams", () => {
  test("Example 1: ['eat','tea','tan','ate','nat','bat']", () => {
    const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const result = groupAnagrams(strs);

    // Sort each group and sort the groups for consistent comparison
    const sortedResult = result.map((group) => group.sort()).sort();
    const expected = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
      .map((group) => group.sort())
      .sort();

    console.log(`Test 1 - Input: ${JSON.stringify(strs)}`);
    console.log(`Output: ${JSON.stringify(result)}`);

    expect(sortedResult).toEqual(expected);
  });

  test("Example 2: ['']", () => {
    const strs = [""];
    const result = groupAnagrams(strs);
    const expected = [[""]];

    console.log(
      `Test 2 - Input: ${JSON.stringify(strs)} → Output: ${JSON.stringify(result)}, Expected: ${JSON.stringify(expected)}`,
    );

    expect(result).toEqual(expected);
  });

  test("Example 3: ['a']", () => {
    const strs = ["a"];
    const result = groupAnagrams(strs);
    const expected = [["a"]];

    console.log(
      `Test 3 - Input: ${JSON.stringify(strs)} → Output: ${JSON.stringify(result)}, Expected: ${JSON.stringify(expected)}`,
    );

    expect(result).toEqual(expected);
  });

  test("No anagrams", () => {
    const strs = ["abc", "def", "ghi"];
    const result = groupAnagrams(strs);
    const sortedResult = result.map((group) => group.sort()).sort();
    const expected = [["abc"], ["def"], ["ghi"]]
      .map((group) => group.sort())
      .sort();

    console.log(
      `Test 4 - Input: ${JSON.stringify(strs)} → Output: ${JSON.stringify(result)}`,
    );

    expect(sortedResult).toEqual(expected);
  });

  test("All anagrams", () => {
    const strs = ["abc", "bca", "cab"];
    const result = groupAnagrams(strs);

    console.log(
      `Test 5 - Input: ${JSON.stringify(strs)} → Output: ${JSON.stringify(result)}`,
    );

    expect(result.length).toBe(1);
    expect(result[0].sort()).toEqual(["abc", "bca", "cab"].sort());
  });

  test("Mixed lengths", () => {
    const strs = ["a", "b", "ba", "ab", "c"];
    const result = groupAnagrams(strs);
    const sortedResult = result.map((group) => group.sort()).sort();
    const expected = [["a"], ["b"], ["ab", "ba"], ["c"]]
      .map((group) => group.sort())
      .sort();

    console.log(
      `Test 6 - Input: ${JSON.stringify(strs)} → Output: ${JSON.stringify(result)}`,
    );

    expect(sortedResult).toEqual(expected);
  });

  test("Duplicate words", () => {
    const strs = ["abc", "abc", "abc"];
    const result = groupAnagrams(strs);

    console.log(
      `Test 7 - Input: ${JSON.stringify(strs)} → Output: ${JSON.stringify(result)}`,
    );

    expect(result.length).toBe(1);
    expect(result[0]).toEqual(["abc", "abc", "abc"]);
  });
});
