const filter = require('../filter');

const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'Egor', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'Denis', age: 40, active: false }
];

describe('Check LodashFilter Method', () => {
  it('Check LodashFilter Method Example 1', () => {
    expect(
      filter(users, function(o) {
        return !o.active;
      })
    ).toEqual([
      { user: 'fred', age: 40, active: false },
      { user: 'Denis', age: 40, active: false }
    ]);
  });

  it('Check LodashFilter Method Example 2', () => {
    expect(filter(users, { age: 36, active: true })).toEqual([
      {
        user: 'barney',
        age: 36,
        active: true
      },
      { user: 'Egor', age: 36, active: true }
    ]);
  });

  it('Check LodashFilter Method Example 3', () => {
    expect(filter(users, ['active', false])).toEqual([
      {
        user: 'fred',
        age: 40,
        active: false
      },
      { user: 'Denis', age: 40, active: false }
    ]);
  });

  it('Check LodashFilter Method Example 4', () => {
    expect(filter(users, 'active')).toEqual([
      {
        user: 'barney',
        age: 36,
        active: true
      },
      { user: 'Egor', age: 36, active: true }
    ]);
  });
});
