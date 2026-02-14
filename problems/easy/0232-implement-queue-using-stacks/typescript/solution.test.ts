import { MyQueue } from "./solution";

describe("232. Implement Queue using Stacks", () => {
  test("Example 1: basic push, peek, pop, empty", () => {
    const queue = new MyQueue();
    queue.push(1);
    queue.push(2);
    expect(queue.peek()).toBe(1);
    expect(queue.pop()).toBe(1);
    expect(queue.empty()).toBe(false);
  });

  test("Single element", () => {
    const queue = new MyQueue();
    queue.push(1);
    expect(queue.peek()).toBe(1);
    expect(queue.pop()).toBe(1);
    expect(queue.empty()).toBe(true);
  });

  test("FIFO order with multiple elements", () => {
    const queue = new MyQueue();
    queue.push(1);
    queue.push(2);
    queue.push(3);
    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(2);
    expect(queue.pop()).toBe(3);
  });

  test("Interleaved push and pop", () => {
    const queue = new MyQueue();
    queue.push(1);
    queue.push(2);
    expect(queue.pop()).toBe(1);
    queue.push(3);
    expect(queue.pop()).toBe(2);
    expect(queue.pop()).toBe(3);
  });

  test("Peek does not remove element", () => {
    const queue = new MyQueue();
    queue.push(5);
    expect(queue.peek()).toBe(5);
    expect(queue.peek()).toBe(5);
    expect(queue.empty()).toBe(false);
  });

  test("Empty after all pops", () => {
    const queue = new MyQueue();
    queue.push(1);
    queue.push(2);
    queue.pop();
    queue.pop();
    expect(queue.empty()).toBe(true);
  });
});
