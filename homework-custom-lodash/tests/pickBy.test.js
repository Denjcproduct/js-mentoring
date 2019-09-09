const pickBy = require('../pickBy');

const object = { a: 1, b: '2', c: 3 };
const object2 = { a: 1, b: '2', c: 3, d: '4', g: true };

describe('Check LodashPickByMethod', () => {
  it('Check LodashPickByMethod Method Example 1', () => {
    expect(
      pickBy(object, function(value) {
        return typeof value == 'number';
      })
    ).toEqual({ a: 1, c: 3 });
  });

  it('Check LodashPickByMethod Method Example 2', () => {
    expect(
      pickBy(object2, function(value) {
        return typeof value == 'string';
      })
    ).toEqual({ b: '2', d: '4' });
  });
});
