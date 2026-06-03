import { isValid } from "./solution";

describe('Valid Parentheses', () => {
    test("Example 1: ()", () => {
        expect(isValid("()")).toEqual(true);
    });
    test("Example 2: ()[]{}", () => {
        expect(isValid("()[]{}")).toEqual(true);
    });
    test("Example 3: (]", () => {
        expect(isValid("(]")).toEqual(false);
    });
    test("Example 4: ([])", () => {
        expect(isValid("([])")).toEqual(true);
    });
    test("Example 5: ([)]", () => {
        expect(isValid("([)]")).toEqual(false);
    });
});