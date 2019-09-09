const omitBy = require('../omitBy');

const object = { a: 1, b: '2', c: 3 };
const object2 = { a: 1, b: '2', c: 3, d: '4', g: true };

describe('Check LodashOmitByMethod', () => {
  it('Check LodashOmitByMethod Method Example 1', () => {
    expect(
      omitBy(object, function(value) {
        return typeof value == 'number';
      })
    ).toEqual({ b: '2' });
  });

  it('Check LodashOmitByMethod Method Example 2', () => {
    expect(
      omitBy(object2, function(value) {
        return typeof value == 'string';
      })
    ).toEqual({ a: 1, c: 3, g: true });
  });
});
