const dropWhile = require("../dropWhile");

const users = [
  {user: "barney", active: false},
  {user: "fred", active: false},
  {user: "pebbles", active: true}
];

describe("Check LodashDropWhile Method", () => {
  it("Check LodashDropWhile Method Example 1", () => {
    expect(
      dropWhile(users, function(o) {
        return !o.active;
      })
    ).toEqual([{user: "pebbles", active: true}]);
  });

  it("Check LodashDropWhile Method Example 2", () => {
    expect(dropWhile(users, {user: "barney", active: false})).toEqual([
      {user: "fred", active: false},
      {user: "pebbles", active: true}
    ]);
  });

  it("Check LodashDropWhile Method Example 3", () => {
    expect(dropWhile(users, ["active", false])).toEqual([
      {user: "pebbles", active: true}
    ]);
  });

  it("Check LodashDropWhile Method Example 4", () => {
    expect(dropWhile(users, "active")).toEqual([
      {user: "barney", active: false},
      {user: "fred", active: false},
      {user: "pebbles", active: true}
    ]);
  });
});
