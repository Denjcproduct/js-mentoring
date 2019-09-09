const pick = require('../pick');

const object = {
  a: 1,
  b: '2',
  c: 3
};

const object2 = {
  a: 'AAAA',
  b: 3333,
  c: true,
  d: 'DDDD',
  e: 'EEEE',
  f: 2222
};
describe('Check LodashPick Method', () => {
  it('Check LodashPick Method Example 1', () => {
    expect(pick(object, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  });

  it('Check LodashPick Method Example 2', () => {
    expect(pick(object2, ['b', 'c', 'e', 'f'])).toEqual({
      b: 3333,
      c: true,
      e: 'EEEE',
      f: 2222
    });
  });
});
