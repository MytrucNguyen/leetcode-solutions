import { checkValidString } from './solution';

describe('678. Valid Parenthesis String', () => {
    test('Example 1: "()"', () => {
        expect(checkValidString('()')).toBe(true);
    });

    test('Example 2: "(*)"', () => {
        expect(checkValidString('(*)')).toBe(true);
    });

    test('Example 3: "(*))"', () => {
        expect(checkValidString('(*))')).toBe(true);
    });

    test('Single star', () => {
        expect(checkValidString('*')).toBe(true);
    });

    test('Star as open', () => {
        expect(checkValidString('*)')).toBe(true);
    });

    test('Star as close', () => {
        expect(checkValidString('(*')).toBe(true);
    });

    test('Too many closes', () => {
        expect(checkValidString(')*(')).toBe(false);
    });

    test('Too many opens', () => {
        expect(checkValidString('(((*))')).toBe(false);
    });

    test('All stars', () => {
        expect(checkValidString('***')).toBe(true);
    });

    test('Complex valid', () => {
        expect(checkValidString('(((***)))')).toBe(true);
    });

    test('Empty-like with star', () => {
        expect(checkValidString('(*())')).toBe(true);
    });

    test('Close before open no star can fix', () => {
        expect(checkValidString(')(')).toBe(false);
    });
});
