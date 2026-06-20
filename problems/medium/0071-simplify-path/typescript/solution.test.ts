import { simplifyPath } from './solution';

describe('71. Simplify Path', () => {
    test('Example 1: "/home/"', () => {
        expect(simplifyPath('/home/')).toBe('/home');
    });

    test('Example 2: "/home//foo/"', () => {
        expect(simplifyPath('/home//foo/')).toBe('/home/foo');
    });

    test('Example 3: Documents to Pictures', () => {
        expect(simplifyPath('/home/user/Documents/../Pictures')).toBe('/home/user/Pictures');
    });

    test('Example 4: go above root', () => {
        expect(simplifyPath('/../')).toBe('/');
    });

    test('Example 5: triple dots valid name', () => {
        expect(simplifyPath('/.../a/../b/c/../d/./')).toBe('/.../b/d');
    });

    test('Root only', () => {
        expect(simplifyPath('/')).toBe('/');
    });

    test('Current directory dots', () => {
        expect(simplifyPath('/a/./b/./c')).toBe('/a/b/c');
    });

    test('Multiple parent dirs', () => {
        expect(simplifyPath('/a/b/c/../../d')).toBe('/a/d');
    });

    test('Multiple slashes', () => {
        expect(simplifyPath('///a///b///')).toBe('/a/b');
    });

    test('All the way up and back down', () => {
        expect(simplifyPath('/a/b/../../c/d')).toBe('/c/d');
    });
});
