class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function createBST<T>(array: T[]): TreeNode<T> | null {
    if (array.length === 0) {
        return null;
    }

    const mid = Math.floor(array.length / 2);

    const node = new TreeNode(array[mid]);
    node.left = createBST(array.slice(0, mid));
    node.right = createBST(array.slice(mid + 1));

    return node;
}

const array = [1, 2, 3, 4, 5];
console.log(createBST(array));

const array2 = [1, 2, 3, 4, 5, 6, 7];
console.log(createBST(array2));
