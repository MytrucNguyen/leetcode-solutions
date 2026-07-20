export class _Node {
    val: number;
    left: _Node | null;
    right: _Node | null;
    next: _Node | null;
    constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
        this.next = next === undefined ? null : next;
    }
}

export function connect(root: _Node | null): _Node | null {
    if (root === null) return null;

    let leftmost: _Node | null = root;

    while (leftmost.left !== null) {
        let node: _Node | null = leftmost;

        while (node !== null) {
            node.left!.next = node.right;

            if (node.next !== null) {
                node.right!.next = node.next.left;
            }

            node = node.next;
        }

        leftmost = leftmost.left;
    }

    return root;
}
