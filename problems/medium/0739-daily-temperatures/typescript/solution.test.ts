import { dailyTemperatures } from './solution';

describe('739. Daily Temperatures', () => {
    test('Example 1: [73,74,75,71,69,72,76,73]', () => {
        expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
            .toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
    });

    test('Example 2: [30,40,50,60]', () => {
        expect(dailyTemperatures([30, 40, 50, 60])).toEqual([1, 1, 1, 0]);
    });

    test('Example 3: [30,60,90]', () => {
        expect(dailyTemperatures([30, 60, 90])).toEqual([1, 1, 0]);
    });

    test('Decreasing — no warmer days', () => {
        expect(dailyTemperatures([90, 80, 70, 60])).toEqual([0, 0, 0, 0]);
    });

    test('All same temperature', () => {
        expect(dailyTemperatures([50, 50, 50])).toEqual([0, 0, 0]);
    });

    test('Single day', () => {
        expect(dailyTemperatures([70])).toEqual([0]);
    });

    test('Two days warmer', () => {
        expect(dailyTemperatures([70, 80])).toEqual([1, 0]);
    });

    test('Two days cooler', () => {
        expect(dailyTemperatures([80, 70])).toEqual([0, 0]);
    });

    test('Valley pattern', () => {
        expect(dailyTemperatures([80, 60, 70, 90])).toEqual([3, 1, 1, 0]);
    });
});