export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph: number[][] = Array.from({ length: numCourses }, () => []);

    for (const [course, prereq] of prerequisites) {
        graph[prereq].push(course);
    }

    const state = new Array(numCourses).fill(0);

    function hasCycle(course: number): boolean {
        if (state[course] === 1) return true;
        if (state[course] === 2) return false;

        state[course] = 1;

        for (const neighbor of graph[course]) {
            if (hasCycle(neighbor)) return true;
        }

        state[course] = 2;
        return false;
    }

    for (let i = 0; i < numCourses; i++) {
        if (hasCycle(i)) return false;
    }

    return true;
}
