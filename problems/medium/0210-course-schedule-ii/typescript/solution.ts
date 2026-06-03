export function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const graph: number[][] = Array.from({ length: numCourses }, () => []);

    for (const [course, prereq] of prerequisites) {
        graph[prereq].push(course);
    }

    const state = new Array(numCourses).fill(0);
    const result: number[] = [];

    function dfs(course: number): boolean {
        if (state[course] === 1) return false;
        if (state[course] === 2) return true;

        state[course] = 1;

        for (const neighbor of graph[course]) {
            if (!dfs(neighbor)) return false;
        }

        state[course] = 2;
        result.push(course);
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return [];
    }

    return result.reverse();
}
