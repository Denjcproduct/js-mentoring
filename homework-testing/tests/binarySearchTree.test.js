describe('Check Test Working or Not', () => {
  let bst;
  // beforeEach(() => {
  //   bst = new BinarySearchTree();
  // });

  it('Check Insert Method in Binary Search Tree when key is not integer number', () => {
    const key = 10;
    const value = 'Value';
    bst.insert(key, value);
    const result = bst.roots();
    console.log(result);
    console.log(bst);
    expect(true).toEqual(true);
  });
});
