const BinarySearchTree = require('../src/binary-search-tree');

const valuesArray = [
  {
    key: 30,
    value: '30',
  },
  {
    key: 25,
    value: '25',
  },
  {
    key: 60,
    value: '60',
  },
  {
    key: 50,
    value: '50',
  },
  {
    key: 100,
    value: '100',
  },
  {
    key: 27,
    value: '27',
  },
  {
    key: 15,
    value: '15',
  },
];
describe('Binary Search Tree', () => {
  let bst;
  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  describe('#roots', () => {
    it('Roots Method should return root of the tree', () => {
      const key = 10;
      const value = '10';
      bst.insert(key, value);
      const result = bst.roots();
      expect(result).toEqual(value);
    });
  });

  describe('#insert', () => {
    it('Insert Method in Binary Search Tree when key is not integer number', () => {
      const key = 10.5;
      const value = 'Value';
      bst.insert(key, value);
      const result = bst.root;
      expect(result).toEqual(null);
    });

    it('Insert Method should fill the root if tree is empty', () => {
      const key = 10;
      const value = '10';
      bst.insert(key, value);
      const result = bst.roots();
      expect(result).toEqual(value);
    });

    it('Insert Method should fills deep', () => {
      valuesArray.forEach((element) => {
        bst.insert(element.key, element.value);
      });
      const sortedArray = bst.traverse(true);
      const firstValue = sortedArray[0];
      const lastValue = sortedArray[sortedArray.length - 1];
      expect(firstValue).toEqual('15');
      expect(lastValue).toEqual('100');
    });
  });

  describe('#search', () => {
    it('Search Method in Binary Search Tree with key is not integer number', () => {
      valuesArray.forEach((element) => {
        bst.insert(element.key, element.value);
      });
      const result = bst.search(27.7);
      expect(result).toEqual(false);
    });

    it('Search Method in Binary Search Tree with key = 27', () => {
      valuesArray.forEach((element) => {
        bst.insert(element.key, element.value);
      });
      const result = bst.search(27);
      const searchKeyRoot = bst.root.left.right;
      expect(result).toEqual(searchKeyRoot);
    });
  });

  describe('#contains', () => {
    it('Contains Method in Binary Search Tree should show contains value true', () => {
      valuesArray.forEach((element) => {
        bst.insert(element.key, element.value);
      });
      const result = bst.contains('27');
      expect(result).toEqual(true);
    });

    it('Contains Method in Binary Search Tree should show false if not value', () => {
      valuesArray.forEach((element) => {
        bst.insert(element.key, element.value);
      });
      const result = bst.contains('200');
      expect(result).toEqual(false);
    });
  });

  describe('#traverse', () => {
    it('Traverse Method in Binary Search Tree with true agrument should return array with value from smaller to larger', () => {
      valuesArray.forEach((element) => {
        bst.insert(element.key, element.value);
      });
      const traverseArray = bst.traverse(true);
      const result = ['15', '25', '27', '30', '50', '60', '100'];
      expect(traverseArray).toEqual(result);
    });

    it('Traverse Method in Binary Search Tree with false agrument should return array with value from larger to smaller', () => {
      valuesArray.forEach((element) => {
        bst.insert(element.key, element.value);
      });
      const traverseArray = bst.traverse(false);
      const result = ['100', '60', '50', '30', '27', '25', '15'];
      expect(traverseArray).toEqual(result);
    });
  });

  describe('#verify', () => {
    it('Verify Method in Binary Search Tree should return true when tree  built properly', () => {
      valuesArray.forEach((element) => {
        bst.insert(element.key, element.value);
      });
      const result = bst.verify();
      expect(result).toEqual(true);
    });

    it('Verify Method in Binary Search Tree should return false when tree with mistake', () => {
      valuesArray.forEach((element) => {
        bst.insert(element.key, element.value);
      });
      bst.root.right.right.key = 59;
      bst.root.right.right.value = '59';
      console.log(bst.root);
      const result = bst.verify();
      expect(result).toEqual(false);
    });
  });

  describe('#delete', () => {
    it('when this node has no children method should delete this node', () => {
      valuesArray.forEach((element) => {
        bst.insert(element.key, element.value);
      });
      bst.delete(27);
      expect(bst.search(27)).toEqual(undefined);
    });

    it('when this node has one children method should delete this node and replace with child node', () => {
      valuesArray.forEach((element) => {
        bst.insert(element.key, element.value);
      });
      bst.delete(27);
      bst.delete(25);
      const deletedNode = bst.root.left;
      const replacedNode = {
        key: 15,
        value: '15',
        left: null,
        right: null,
      };
      expect(deletedNode).toEqual(replacedNode);
    });

    it('when this node has two children example 1', () => {
      valuesArray.forEach((element) => {
        bst.insert(element.key, element.value);
      });
      bst.insert(45, '45');
      bst.insert(55, '55');
      bst.delete(60);
      const deletedNode = bst.root.right;
      const resultBst = new BinarySearchTree();
      const isValidTree = bst.verify();
      const resultTreeValue = [
        {
          key: 30,
          value: '30',
        },
        {
          key: 25,
          value: '25',
        },
        {
          key: 15,
          value: '15',
        },
        {
          key: 27,
          value: '27',
        },
        {
          key: 100,
          value: '100',
        },
        {
          key: 50,
          value: '50',
        },
        {
          key: 45,
          value: '45',
        },
        {
          key: 55,
          value: '55',
        },
      ];
      resultTreeValue.forEach((element) => {
        resultBst.insert(element.key, element.value);
      });
      expect(bst).toEqual(resultBst);
      expect(isValidTree).toEqual(true);
      expect(deletedNode.key).toEqual(100);
      expect(deletedNode.value).toEqual('100');
    });

    it('when this node has two children example 2', () => {
      valuesArray.forEach((element) => {
        bst.insert(element.key, element.value);
      });
      bst.delete(25);
      const deletedNode = bst.root.left;
      const resultBst = new BinarySearchTree();
      const isValidTree = bst.verify();
      const resultTreeValue = [
        {
          key: 30,
          value: '30',
        },
        {
          key: 60,
          value: '60',
        },
        {
          key: 50,
          value: '50',
        },
        {
          key: 100,
          value: '100',
        },
        {
          key: 27,
          value: '27',
        },
        {
          key: 15,
          value: '15',
        },
      ];
      resultTreeValue.forEach((element) => {
        resultBst.insert(element.key, element.value);
      });
      expect(bst).toEqual(resultBst);
      expect(isValidTree).toEqual(true);
      expect(deletedNode.key).toEqual(27);
      expect(deletedNode.value).toEqual('27');
    });
  });
});
