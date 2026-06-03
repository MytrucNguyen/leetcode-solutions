import { GraphNode, cloneGraph } from './solution';

function buildGraph(adjList: number[][]): GraphNode | null {
    if (adjList.length === 0) return null;

    const nodes: GraphNode[] = [];
    for (let i = 0; i < adjList.length; i++) {
        nodes.push(new GraphNode(i + 1));
    }

    for (let i = 0; i < adjList.length; i++) {
        for (const neighborVal of adjList[i]) {
            nodes[i].neighbors.push(nodes[neighborVal - 1]);
        }
    }

    return nodes[0];
}

function graphToAdjList(node: GraphNode | null): number[][] {
    if (node === null) return [];

    const result: number[][] = [];
    const visited = new Map<number, number[]>();
    const queue: GraphNode[] = [node];

    while (queue.length > 0) {
        const current = queue.shift()!;
        if (visited.has(current.val)) continue;

        const neighbors = current.neighbors.map((n) => n.val).sort((a, b) => a - b);
        visited.set(current.val, neighbors);

        for (const neighbor of current.neighbors) {
            if (!visited.has(neighbor.val)) {
                queue.push(neighbor);
            }
        }
    }

    for (let i = 1; i <= visited.size; i++) {
        result.push(visited.get(i)!);
    }

    return result;
}

describe('133. Clone Graph', () => {
    test('Example 1: 4-node cycle', () => {
        const original = buildGraph([
            [2, 4],
            [1, 3],
            [2, 4],
            [1, 3],
        ]);
        const copy = cloneGraph(original);
        expect(graphToAdjList(copy)).toEqual([
            [2, 4],
            [1, 3],
            [2, 4],
            [1, 3],
        ]);
        expect(copy).not.toBe(original);
    });

    test('Example 2: single node', () => {
        const original = new GraphNode(1);
        const copy = cloneGraph(original);
        expect(copy!.val).toBe(1);
        expect(copy!.neighbors).toEqual([]);
        expect(copy).not.toBe(original);
    });

    test('Example 3: null graph', () => {
        expect(cloneGraph(null)).toBeNull();
    });

    test('Two connected nodes', () => {
        const original = buildGraph([[2], [1]]);
        const copy = cloneGraph(original);
        expect(graphToAdjList(copy)).toEqual([[2], [1]]);
        expect(copy).not.toBe(original);
    });

    test('Deep copy — no shared nodes', () => {
        const original = buildGraph([
            [2, 4],
            [1, 3],
            [2, 4],
            [1, 3],
        ]);
        const copy = cloneGraph(original);

        const origNodes = new Set<GraphNode>();
        const copyNodes = new Set<GraphNode>();

        function collectOrig(n: GraphNode) {
            if (origNodes.has(n)) return;
            origNodes.add(n);
            n.neighbors.forEach(collectOrig);
        }
        function collectCopy(n: GraphNode) {
            if (copyNodes.has(n)) return;
            copyNodes.add(n);
            n.neighbors.forEach(collectCopy);
        }

        collectOrig(original!);
        collectCopy(copy!);

        for (const cn of copyNodes) {
            expect(origNodes.has(cn)).toBe(false);
        }
    });

    test('Linear graph', () => {
        const original = buildGraph([[2], [1, 3], [2]]);
        const copy = cloneGraph(original);
        expect(graphToAdjList(copy)).toEqual([[2], [1, 3], [2]]);
    });
});
