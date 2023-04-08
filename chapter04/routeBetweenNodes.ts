class TNode<T> {
    value: any;
    children: TNode<T>[];
    visited: boolean;

    constructor(value: any) {
        this.value = value;
        this.children = [];
        this.visited = false;
    }

    addChild(node: TNode<T>) {
        this.children.push(node);
    }
}

class TGraph<T> {
    nodes: TNode<T>[];

    constructor(nodes: TNode<T>[]) {
        this.nodes = nodes;
    }

    resetVisited() {
        this.nodes.forEach(node => node.visited = false);
    }

    hasRoute(start: TNode<T>, end: TNode<T>): boolean {
        this.resetVisited();
        const queue = [start];

        while (queue.length) {
            const node = queue.shift();

            if (node) {
                if (node === end) {
                    return true;
                }

                node.visited = true;
                node.children.forEach(child => {
                    if (!child.visited) {
                        queue.push(child);
                    }
                });
            }
        }

        return false;
    }
}

const a = new TNode<string>('a');
const b = new TNode<string>('b');
const c = new TNode<string>('c');
const d = new TNode<string>('d');
const e = new TNode<string>('e');
const f = new TNode<string>('f');

a.addChild(b);
a.addChild(c);
b.addChild(d);
b.addChild(e);
c.addChild(e);
e.addChild(f);

const nodes = [a, b, c, d, e, f];

const Graph = new TGraph<string>(nodes);

console.log(Graph.hasRoute(a, f)); // true
console.log(Graph.hasRoute(b, c)); // false
