import { asteroidCollision } from './solution';

describe('735. Asteroid Collision', () => {
    test('Example 1: [5, 10, -5]', () => {
        expect(asteroidCollision([5, 10, -5])).toEqual([5, 10]);
    });

    test('Example 2: [8, -8]', () => {
        expect(asteroidCollision([8, -8])).toEqual([]);
    });

    test('Example 3: [-2, -1, 1, 2]', () => {
        expect(asteroidCollision([-2, -1, 1, 2])).toEqual([-2, -1, 1, 2]);
    });

    test('Negative destroys multiple positives', () => {
        expect(asteroidCollision([1, 2, 3, -4])).toEqual([-4]);
    });

    test('All same direction positive', () => {
        expect(asteroidCollision([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('All same direction negative', () => {
        expect(asteroidCollision([-1, -2, -3])).toEqual([-1, -2, -3]);
    });

    test('Multiple collisions', () => {
        expect(asteroidCollision([10, 2, -5])).toEqual([10]);
    });

    test('Chain of equal explosions', () => {
        expect(asteroidCollision([1, -1, 2, -2])).toEqual([]);
    });

    test('Negative first never collides', () => {
        expect(asteroidCollision([-5, 5])).toEqual([-5, 5]);
    });

    test('Large negative survives all', () => {
        expect(asteroidCollision([5, 3, 2, -10])).toEqual([-10]);
    });
});
