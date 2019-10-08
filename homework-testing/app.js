class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  roots() {
    return this.root.value;
  }

  insert(key, value) {
    if (!Number.isInteger(key)) {
      return;
    }
    const newNode = new Node(key, value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  delete(key) {
    if (!Number.isInteger(key)) {
      return;
    }
    this.root = this.deleteNode(this.root, key);
  }

  search(key) {
    if (!Number.isInteger(key)) {
    } else {
      const result = this.searchHelper(this.root, key);
      return result;
    }
  }

  contains(value) {
    const result = this.fromLeftToRightTraverse(this.root);
    return result.includes(value);
  }

  traverse(order) {
    if (order) {
      return this.fromLeftToRightTraverse(this.root);
    }
    return this.fromRightToLeftTraverse(this.root);
  }

  verify() {
    const result = this.verifyHelper(this.root);
    return result;
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if (newNode.key === node.key) {
      node.value = newNode.value;
    } else if (newNode.key > node.key) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  deleteNode(node, key) {
    if (node === null) return null;
    if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
      return node;
    }
    if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
      return node;
    }
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }

    if (node.left === null) {
      node = node.right;
      return node;
    }
    if (node.right === null) {
      node = node.left;
      return node;
    }

    const aux = this.findMinimumNode(node.right);
    node.key = aux.key;

    node.right = this.deleteNode(node.right, aux.key);
    return node;
  }

  searchHelper(node, key) {
    if (node.key === key) {
      return node;
    }
    if (key < node.key && key !== node.key) {
      if (node.left !== null) {
        return this.searchHelper(node.left, key);
      }
    } else if (key > node.key && key !== node.key) {
      if (node.right !== null) {
        return this.searchHelper(node.right, key);
      }
    }
  }

  fromLeftToRightTraverse(traverseNode) {
    const output = [];

    function inOrder(node) {
      if (node === null) {
        return;
      }
      inOrder(node.left);
      output.push(node.value);
      inOrder(node.right);
    }
    inOrder(traverseNode);

    return output;
  }

  findMinimumNode(node) {
    if (node.left === null) {
      return node;
    }
    return this.findMinimumNode(node.left);
  }

  fromRightToLeftTraverse(traverseNode) {
    const output = [];

    function notInOrder(node) {
      if (node === null) {
        return;
      }
      notInOrder(node.right);
      output.push(node.value);
      notInOrder(node.left);
    }
    notInOrder(traverseNode);

    return output;
  }

  verifyHelper(node, min = null, max = null) {
    if (max !== null && node.key > max) {
      return false;
    }
    if (min !== null && node.key < min) {
      return false;
    }
    if (node.left && !this.verifyHelper(node.left, min, node.key)) {
      return false;
    }
    if (node.tight && !this.verifyHelper(node.right, node.key, max)) {
      return false;
    }
    return true;
  }
}

window.onload = function start() {
  const bst = new BinarySearchTree();
  bst.insert(20, '20');
  bst.insert(30, '30');
  bst.insert(25, '25');
  bst.insert(15, '15');
  bst.insert(10, '10');
  bst.insert(12, '12');
  bst.insert(17, '17');
  console.log(bst.contains('30'));
  console.log(bst.verify());
  console.log(bst);
};
