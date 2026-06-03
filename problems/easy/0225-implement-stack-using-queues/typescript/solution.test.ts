import { MyStack } from "./solution";

describe("225. Implement Stack using Queues", () => {
  test("Example 1: basic push, top, pop, empty", () => {
    const stack = new MyStack();
    stack.push(1);
    stack.push(2);
    expect(stack.top()).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.empty()).toBe(false);
  });

  test("Single element", () => {
    const stack = new MyStack();
    stack.push(1);
    expect(stack.top()).toBe(1);
    expect(stack.pop()).toBe(1);
    expect(stack.empty()).toBe(true);
  });

  test("LIFO order with multiple elements", () => {
    const stack = new MyStack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  test("Interleaved push and pop", () => {
    const stack = new MyStack();
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(1);
  });

  test("Top does not remove element", () => {
    const stack = new MyStack();
    stack.push(5);
    expect(stack.top()).toBe(5);
    expect(stack.top()).toBe(5);
    expect(stack.empty()).toBe(false);
  });

  test("Empty after all pops", () => {
    const stack = new MyStack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.empty()).toBe(true);
  });
});
