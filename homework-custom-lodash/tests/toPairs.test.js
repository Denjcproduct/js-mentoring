const toPairs = require('../toPairs');

function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;
Foo.prototype.d = 3;

describe('Check LodashToPairsMethod', () => {
  it('Check LodashToPairsMethod Method Example 1', () => {
    expect(toPairs(new Foo())).toEqual([['a', 1], ['b', 2]]);
  });
});
