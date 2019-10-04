const Node = require('./node');

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

  delete(key) {
    if (!Number.isInteger(key)) {
      return;
    }
    this.root = this.deleteNode(this.root, key);
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

  find(node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      return this.find(node.left, key);
    }
    if (key > node.key) {
      return this.find(node.right, key);
    }
    return node;
  }

  contains(key) {
    let current = this.root;
    while (current) {
      console.log(current);
      if (key === current.key) {
        return true;
      }
      if (key < current.key) {
        current = current.left;
      }
      if (key > current.key) {
        current = current.right;
      }
    }
    return false;
  }
}

module.exports = BinarySearchTree;
