import { MinStack } from './solution';

describe('155. Min Stack', () => {
    test('LeetCode example', () => {
        const minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        expect(minStack.getMin()).toBe(-3);
        minStack.pop();
        expect(minStack.top()).toBe(0);
        expect(minStack.getMin()).toBe(-2);
    });

    test('Single element', () => {
        const minStack = new MinStack();
        minStack.push(5);
        expect(minStack.top()).toBe(5);
        expect(minStack.getMin()).toBe(5);
    });

    test('Ascending order', () => {
        const minStack = new MinStack();
        minStack.push(1);
        minStack.push(2);
        minStack.push(3);
        expect(minStack.getMin()).toBe(1);
        minStack.pop();
        expect(minStack.getMin()).toBe(1);
    });

    test('Descending order', () => {
        const minStack = new MinStack();
        minStack.push(3);
        minStack.push(2);
        minStack.push(1);
        expect(minStack.getMin()).toBe(1);
        minStack.pop();
        expect(minStack.getMin()).toBe(2);
        minStack.pop();
        expect(minStack.getMin()).toBe(3);
    });

    test('Duplicate minimums', () => {
        const minStack = new MinStack();
        minStack.push(1);
        minStack.push(1);
        expect(minStack.getMin()).toBe(1);
        minStack.pop();
        expect(minStack.getMin()).toBe(1);
    });

    test('Min in the middle', () => {
        const minStack = new MinStack();
        minStack.push(5);
        minStack.push(1);
        minStack.push(10);
        expect(minStack.getMin()).toBe(1);
        expect(minStack.top()).toBe(10);
    });

    test('Negative numbers', () => {
        const minStack = new MinStack();
        minStack.push(-1);
        minStack.push(-5);
        minStack.push(-3);
        expect(minStack.getMin()).toBe(-5);
        minStack.pop();
        expect(minStack.getMin()).toBe(-5);
        minStack.pop();
        expect(minStack.getMin()).toBe(-1);
    });
});
