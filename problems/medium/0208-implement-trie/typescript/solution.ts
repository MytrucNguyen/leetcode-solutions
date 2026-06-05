class TrieNode {
    children: Map<string, TrieNode>;
    isEnd: boolean;

    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

export class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let node = this.root;

        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)!;
        }

        node.isEnd = true;
    }

    search(word: string): boolean {
        const node = this.traverse(word);
        return node !== null && node.isEnd;
    }

    startsWith(prefix: string): boolean {
        return this.traverse(prefix) !== null;
    }

    private traverse(word: string): TrieNode | null {
        let node = this.root;

        for (const char of word) {
            if (!node.children.has(char)) {
                return null;
            }
            node = node.children.get(char)!;
        }

        return node;
    }
}
