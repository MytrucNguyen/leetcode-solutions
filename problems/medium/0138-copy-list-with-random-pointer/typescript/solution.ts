export class Node {
    val: number;
    next: Node | null;
    random: Node | null;
    constructor(val?: number, next?: Node | null, random?: Node | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
        this.random = random === undefined ? null : random;
    }
}

export function copyRandomList(head: Node | null): Node | null {
    if (head === null) return null;

    const map = new Map<Node, Node>();

    let current: Node | null = head;
    while (current !== null) {
        map.set(current, new Node(current.val));
        current = current.next;
    }

    current = head;
    while (current !== null) {
        const copy = map.get(current)!;
        copy.next = current.next ? map.get(current.next)! : null;
        copy.random = current.random ? map.get(current.random)! : null;
        current = current.next;
    }

    return map.get(head)!;
}
