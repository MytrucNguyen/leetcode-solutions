describe('374. Guess Number Higher or Lower', () => {
    let _pick: number;

    function guess(num: number): number {
        if (num === _pick) return 0;
        if (num > _pick) return -1;
        return 1;
    }

    function guessNumber(n: number): number {
        let left = 1;
        let right = n;

        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            const result = guess(mid);

            if (result === 0) return mid;
            else if (result === -1) right = mid - 1;
            else left = mid + 1;
        }

        return -1;
    }

    test('Example 1: n=10, pick=6', () => {
        _pick = 6;
        expect(guessNumber(10)).toBe(6);
    });

    test('Example 2: n=1, pick=1', () => {
        _pick = 1;
        expect(guessNumber(1)).toBe(1);
    });

    test('Example 3: n=2, pick=1', () => {
        _pick = 1;
        expect(guessNumber(2)).toBe(1);
    });

    test('Pick is n', () => {
        _pick = 10;
        expect(guessNumber(10)).toBe(10);
    });

    test('Pick is 1', () => {
        _pick = 1;
        expect(guessNumber(100)).toBe(1);
    });

    test('Large n', () => {
        _pick = 500000;
        expect(guessNumber(1000000)).toBe(500000);
    });

    test('Pick in middle', () => {
        _pick = 5;
        expect(guessNumber(10)).toBe(5);
    });

    test('n=2, pick=2', () => {
        _pick = 2;
        expect(guessNumber(2)).toBe(2);
    });
});
