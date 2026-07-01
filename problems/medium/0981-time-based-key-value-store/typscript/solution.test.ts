import { TimeMap } from './solution';

describe('981. Time Based Key-Value Store', () => {
    test('LeetCode example', () => {
        const timeMap = new TimeMap();
        timeMap.set('foo', 'bar', 1);
        expect(timeMap.get('foo', 1)).toBe('bar');
        expect(timeMap.get('foo', 3)).toBe('bar');
        timeMap.set('foo', 'bar2', 4);
        expect(timeMap.get('foo', 4)).toBe('bar2');
        expect(timeMap.get('foo', 5)).toBe('bar2');
    });

    test('Get before any set', () => {
        const timeMap = new TimeMap();
        expect(timeMap.get('foo', 1)).toBe('');
    });

    test('Get with timestamp before first set', () => {
        const timeMap = new TimeMap();
        timeMap.set('foo', 'bar', 5);
        expect(timeMap.get('foo', 3)).toBe('');
    });

    test('Multiple keys', () => {
        const timeMap = new TimeMap();
        timeMap.set('a', 'val1', 1);
        timeMap.set('b', 'val2', 1);
        expect(timeMap.get('a', 1)).toBe('val1');
        expect(timeMap.get('b', 1)).toBe('val2');
    });

    test('Many timestamps same key', () => {
        const timeMap = new TimeMap();
        timeMap.set('key', 'v1', 1);
        timeMap.set('key', 'v2', 5);
        timeMap.set('key', 'v3', 10);
        timeMap.set('key', 'v4', 20);
        expect(timeMap.get('key', 1)).toBe('v1');
        expect(timeMap.get('key', 7)).toBe('v2');
        expect(timeMap.get('key', 10)).toBe('v3');
        expect(timeMap.get('key', 15)).toBe('v3');
        expect(timeMap.get('key', 25)).toBe('v4');
    });

    test('Exact timestamp matches', () => {
        const timeMap = new TimeMap();
        timeMap.set('x', 'a', 2);
        timeMap.set('x', 'b', 4);
        timeMap.set('x', 'c', 6);
        expect(timeMap.get('x', 2)).toBe('a');
        expect(timeMap.get('x', 4)).toBe('b');
        expect(timeMap.get('x', 6)).toBe('c');
    });

    test('Nonexistent key', () => {
        const timeMap = new TimeMap();
        timeMap.set('exists', 'val', 1);
        expect(timeMap.get('missing', 1)).toBe('');
    });
});
