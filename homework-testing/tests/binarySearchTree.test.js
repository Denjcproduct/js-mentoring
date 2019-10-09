const BinarySearchTree = require('../src/binary-search-tree');

describe('Check Test Working or Not', () => {
  let bst;
  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  it('Roots Method should return root of the tree', () => {
    const key = 10;
    const value = '10';
    bst.insert(key, value);
    const result = bst.roots();
    expect(result).toEqual(value);
  });

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
    valuesArray.forEach((element) => {
      bst.insert(element.key, element.value);
    });
    const sortedArray = bst.traverse(true);
    const firstValue = sortedArray[0];
    const lastValue = sortedArray[sortedArray.length - 1];
    expect(firstValue).toEqual('15');
    expect(lastValue).toEqual('100');
  });

  it('Search Method in Binary Search Tree with key is not integer number', () => {
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
    valuesArray.forEach((element) => {
      bst.insert(element.key, element.value);
    });
    const result = bst.search(27.7);
    expect(result).toEqual(false);
  });

  it('Search Method in Binary Search Tree with key = 27', () => {
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
    valuesArray.forEach((element) => {
      bst.insert(element.key, element.value);
    });
    const result = bst.search(27);
    const searchKeyRoot = bst.root.left.right;
    expect(result).toEqual(searchKeyRoot);
  });

  it('Contains Method in Binary Search Tree should show contains value true', () => {
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
    valuesArray.forEach((element) => {
      bst.insert(element.key, element.value);
    });
    const result = bst.contains('27');
    expect(result).toEqual(true);
  });

  it('Contains Method in Binary Search Tree should show false if not value', () => {
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
    valuesArray.forEach((element) => {
      bst.insert(element.key, element.value);
    });
    const result = bst.contains('200');
    expect(result).toEqual(false);
  });

  it('Traverse Method in Binary Search Tree with true agrument should return array with value from smaller to larger', () => {
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
    valuesArray.forEach((element) => {
      bst.insert(element.key, element.value);
    });
    const traverseArray = bst.traverse(true);
    const result = ['15', '25', '27', '30', '50', '60', '100'];
    expect(traverseArray).toEqual(result);
  });

  it('Traverse Method in Binary Search Tree with false agrument should return array with value from larger to smaller', () => {
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
    valuesArray.forEach((element) => {
      bst.insert(element.key, element.value);
    });
    const traverseArray = bst.traverse(false);
    const result = ['100', '60', '50', '30', '27', '25', '15'];
    expect(traverseArray).toEqual(result);
  });

  it('Verify Method in Binary Search Tree should return true when tree  built properly', () => {
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
    valuesArray.forEach((element) => {
      bst.insert(element.key, element.value);
    });
    const result = bst.verify();
    expect(result).toEqual(true);
  });
});
