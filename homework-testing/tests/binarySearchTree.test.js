const BinarySearchTree = require('../src/binary-search-tree');
const valuesArray = require('./values');
const sortedArray = require('../helpers/sortedArray');

describe('Binary Search Tree', () => {
  let bst;
  beforeEach(() => {
    bst = new BinarySearchTree();
    valuesArray.forEach(element => {
      bst.insert(element.key, element.value);
    });
  });

  describe('#roots', () => {
    it('should return root of the tree', () => {
      const newBst = new BinarySearchTree();
      const key = 10;
      const value = '10';
      newBst.insert(key, value);
      const result = newBst.roots();
      expect(result).toEqual(value);
    });

    it('should return null if tree is empty', () => {
      const newBst = new BinarySearchTree();
      const result = newBst.roots();
      expect(result).toEqual(null);
    });
  });

  describe('#insert', () => {
    it('should fill the root if tree is empty', () => {
      const newBst = new BinarySearchTree();
      const key = 10;
      const value = '10';
      newBst.insert(key, value);
      const result = newBst.roots();
      expect(result).toEqual(value);
    });

    it('should fills deep', () => {
      const sortedArr = bst.traverse(true);
      const firstValue = sortedArr[0];
      const lastValue = sortedArr[sortedArr.length - 1];
      expect(firstValue).toEqual('15');
      expect(lastValue).toEqual('100');
    });

    it('should replace value if key that is being added is already there', () => {
      const newBst = new BinarySearchTree();
      newBst.insert(10, 'value1 10');
      newBst.insert(10, 'value2 10');
      expect(newBst.root.value).toEqual('value2 10');
    });
  });

  describe('#search', () => {
    it('should return the key root by which we are looking for', () => {
      const result = bst.search(27);
      const searchKeyRoot = bst.root.left.right;
      expect(result).toEqual(searchKeyRoot);
    });

    it('should return null when we try search key who is not in the tree', () => {
      const newBst = new BinarySearchTree();
      expect(newBst.search(27)).toEqual(null);
    });

    it('Search in Binary Search Tree when tree has no this key', () => {
      const result = bst.search(5);
      expect(result).toEqual(undefined);
    });
  });

  describe('#contains', () => {
    it('in Binary Search Tree should show contains value true', () => {
      const result = bst.contains('27');
      expect(result).toEqual(true);
    });

    it('in Binary Search Tree should show false if not value', () => {
      const result = bst.contains('200');
      expect(result).toEqual(false);
    });
  });

  describe('#traverse', () => {
    it('with true agrument should return array with value from smaller to larger', () => {
      const traverseArray = bst.traverse(true);
      const resultArray = sortedArray(valuesArray, true);
      expect(traverseArray).toEqual(resultArray);
    });

    it('with false agrument should return array with value from larger to smaller', () => {
      const traverseArray = bst.traverse(false);
      const resultArray = sortedArray(valuesArray, false);
      expect(traverseArray).toEqual(resultArray);
    });
  });

  describe('#verify', () => {
    it('should return true when tree  built properly', () => {
      const result = bst.verify();
      expect(result).toEqual(true);
    });

    it('should return false when tree with mistake', () => {
      bst.root.right.right.key = 59;
      bst.root.right.right.value = '59';
      const result = bst.verify();
      expect(result).toEqual(false);
    });
  });

  describe('#delete', () => {
    it('when this node has no children method should delete this node', () => {
      bst.delete(27);
      expect(bst.search(27)).toEqual(undefined);
    });

    it.only('when this node has one children method should delete this node and replace with child node', () => {
      bst.delete(27);
      bst.delete(25);
      const deletedNode = bst.root.left;
      const replacedNode = {
        key: 15,
        value: '15',
        left: null,
        right: null
      };
      expect(deletedNode).toEqual(replacedNode);
    });

    it('when this node has two children example 1', () => {
      bst.insert(45, '45');
      bst.insert(55, '55');
      bst.delete(60);
      const deletedNode = bst.root.right;
      const resultBst = new BinarySearchTree();
      const isValidTree = bst.verify();
      const resultTreeValue = [
        {
          key: 30,
          value: '30'
        },
        {
          key: 25,
          value: '25'
        },
        {
          key: 15,
          value: '15'
        },
        {
          key: 27,
          value: '27'
        },
        {
          key: 100,
          value: '100'
        },
        {
          key: 50,
          value: '50'
        },
        {
          key: 45,
          value: '45'
        },
        {
          key: 55,
          value: '55'
        }
      ];
      resultTreeValue.forEach(element => {
        resultBst.insert(element.key, element.value);
      });
      expect(bst).toEqual(resultBst);
      expect(isValidTree).toEqual(true);
      expect(deletedNode.key).toEqual(100);
      expect(deletedNode.value).toEqual('100');
    });

    it('when this node has two children example 2', () => {
      bst.delete(25);
      const deletedNode = bst.root.left;
      const resultBst = new BinarySearchTree();
      const isValidTree = bst.verify();
      const resultTreeValue = [
        {
          key: 30,
          value: '30'
        },
        {
          key: 60,
          value: '60'
        },
        {
          key: 50,
          value: '50'
        },
        {
          key: 100,
          value: '100'
        },
        {
          key: 27,
          value: '27'
        },
        {
          key: 15,
          value: '15'
        }
      ];
      resultTreeValue.forEach(element => {
        resultBst.insert(element.key, element.value);
      });
      expect(bst).toEqual(resultBst);
      expect(isValidTree).toEqual(true);
      expect(deletedNode.key).toEqual(27);
      expect(deletedNode.value).toEqual('27');
    });
  });
});
