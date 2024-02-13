class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function constructBinaryTree(nodes) {
    const root = new TreeNode(parseInt(nodes[0]));
    const queue = [root];
    let i = 1;
    while (i < nodes.length) {
        const current = queue.shift();
        if (nodes[i] !== 'null') {
            current.left = new TreeNode(parseInt(nodes[i]));
            queue.push(current.left);
        }
        i++;
        if (nodes[i] !== 'null') {
            current.right = new TreeNode(parseInt(nodes[i]));
            queue.push(current.right);
        }
        i++;
    }
    return root;
}

function maxDepth(root) {
    if (root === null) {
        return 0;
    } else {
        const leftDepth = maxDepth(root.left);
        const rightDepth = maxDepth(root.right);
        return Math.max(leftDepth, rightDepth) + 1;
    }
}

function calculateMaxDepth() {
    const input = document.getElementById("treeInput").value.trim();
    if (!input) {
        document.getElementById("maxDepthResult").textContent = "Please enter binary tree nodes.";
        return;
    }

    const nodes = input.split(",");
    const root = constructBinaryTree(nodes);

    const depth = maxDepth(root);
    document.getElementById("maxDepthResult").textContent = `Maximum depth of the binary tree: ${depth}`;
}

    console.log('result',calculateMaxDepth = (maxDepthdepth));

    var maxDepth = function(root) {
        if (root === null) {
            return 0;
        }
        
        let leftDepth = maxDepth(root.left);
        let rightDepth = maxDepth(root.right);
        
        return Math.max(leftDepth, rightDepth) + 1;
        
    };