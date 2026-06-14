import { leastInterval } from './solution';

describe('621. Task Scheduler', () => {
    test('Example 1: ["A","A","A","B","B","B"], n=2', () => {
        expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2)).toBe(8);
    });

    test('Example 2: many tasks, n=2', () => {
        expect(leastInterval(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2)).toBe(
            16,
        );
    });

    test('Example 3: n=0, no cooldown', () => {
        expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 0)).toBe(6);
    });

    test('Single task', () => {
        expect(leastInterval(['A'], 2)).toBe(1);
    });

    test('One task type repeated', () => {
        expect(leastInterval(['A', 'A', 'A'], 2)).toBe(7);
    });

    test('All different tasks', () => {
        expect(leastInterval(['A', 'B', 'C', 'D'], 3)).toBe(4);
    });

    test('Enough tasks to fill all gaps', () => {
        expect(leastInterval(['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'], 2)).toBe(8);
    });

    test('Multiple max frequency tasks', () => {
        expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C'], 2)).toBe(9);
    });

    test('Large cooldown', () => {
        expect(leastInterval(['A', 'A', 'B'], 10)).toBe(12);
    });
});
