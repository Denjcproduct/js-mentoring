const take = require('../take');

describe('Check LodashTake Method', () => {
  it('Check LodashTake Method Example 1', () => {
    expect(take([1, 2, 3])).toEqual([1]);
  });

  it('Check LodashTake Method Example 2', () => {
    expect(take([1, 2, 3], 2)).toEqual([1, 2]);
  });

  it('Check LodashTake Method Example 3', () => {
    expect(take([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  it('Check LodashTake Method Example 4', () => {
    expect(take([1, 2, 3], 0)).toEqual([]);
  });
});
