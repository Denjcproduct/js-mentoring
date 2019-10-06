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
    console.log(this.root);
    return this.root;
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

  findMinimumNode(node) {
    if (node.left === null) {
      return node;
    }
    return this.findMinimumNode(node.left);
  }

  contains(key) {
    const result = this.containsHelper(this.root, key);
    return result;
  }

  containsHelper(node, key) {
    if (node.key === key) {
      return true;
    }
    if (key < node.key && key !== node.key) {
      if (node.left !== null) {
        return this.containsHelper(node.left, key);
      }
    } else if (key > node.key && key !== node.key) {
      if (node.right !== null) {
        return this.containsHelper(node.right, key);
      }
    }
    return false;
  }

  search(key) {
    if (!Number.isInteger(key)) {
    } else {
      const result = this.searchHelper(this.root, key);
      return result;
    }
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

  traverse(callback) {
    if (typeof callback === undefined) {
      callback = function (key, value) {
        console.log(`${key} : ${value}`);
      };
    }
    return traverseHelper(root, callback);
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
  console.log(bst);
  console.log(bst.contains(12));
};
