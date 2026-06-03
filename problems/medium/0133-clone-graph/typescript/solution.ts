export class GraphNode {
    val: number;
    neighbors: GraphNode[];
    constructor(val?: number, neighbors?: GraphNode[]) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}

export function cloneGraph(node: GraphNode | null): GraphNode | null {
    if (node === null) return null;

    const map = new Map<GraphNode, GraphNode>();

    function dfs(original: GraphNode): GraphNode {
        if (map.has(original)) {
            return map.get(original)!;
        }

        const copy = new GraphNode(original.val);
        map.set(original, copy);

        for (const neighbor of original.neighbors) {
            copy.neighbors.push(dfs(neighbor));
        }

        return copy;
    }

    return dfs(node);
}
