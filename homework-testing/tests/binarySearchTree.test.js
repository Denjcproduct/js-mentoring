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

  it('Check Insert Method in Binary Search Tree when key is not integer number', () => {
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

  it('Check Search Method in Binary Search Tree with key is not integer number', () => {
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

  it('Check Search Method in Binary Search Tree with key = 27', () => {
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
    expect(result).toEqual({
      key: 27,
      left: null,
      right: null,
      value: '27',
    });
  });
});
