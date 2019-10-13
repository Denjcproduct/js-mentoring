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

  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }

  search(key) {
    if (!Number.isInteger(key)) {
      return false;
    }
    const result = this.searchHelper(this.root, key);
    return result;
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

  deleteNode(root, key) {
    if (root !== null) {
      let current = root;
      const stack = [];
      while (current) {
        stack.push(current);
        if (current.key === key) {
          stack.pop();
          const parent = stack.pop();
          if (!current.left && !current.right) {
            if (parent && parent.left && parent.left.key === current.key) {
              parent.left = null;
            } else if (parent) {
              parent.right = null;
            } else {
              root = [];
            }
          } else if (current.left && !current.right) {
            if (parent && parent.left && parent.left.key === current.key) {
              parent.left = current.left;
            } else if (parent) {
              parent.right = current.left;
            } else {
              root = current.left;
            }
          } else if (current.right && !current.left) {
            if (parent && parent.left && parent.left.key === current.key) {
              parent.left = current.right;
            } else if (parent) {
              parent.right = current.right;
            } else {
              root = current.right;
            }
          } else {
            const minNode = current.right;
            while (minNode) {
              if (minNode.left) {
                monNode = minNode.left;
              } else {
                break;
              }
            }
            current = this.deleteNode(current, minNode.key);
            current.key = minNode.key;
            current.value = minNode.value;
          }
          break;
        } else if (key < current.key) {
          current = current.left;
        } else if (key > current.key) {
          current = current.right;
        }
      }
    }
    return root;
  }

  searchHelper(node, key) {
    if (node === null) {
      return null;
    }
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

  findMinimumNode(node) {
    if (node.left === null) {
      return node;
    }
    return this.findMinimumNode(node.left);
  }

  verifyHelper(node) {
    if (!node) {
      return true;
    }
    if (node.left !== null && node.left.key > node.key) {
      return false;
    }
    if (node.right !== null && node.right.key < node.key) {
      return false;
    }
    if (!this.verifyHelper(node.left) || !this.verifyHelper(node.right)) {
      return false;
    }
    return true;
  }
}

module.exports = BinarySearchTree;
