const find = require("../find");

const users = [
  {user: "barney", age: 36, active: true},
  {user: "fred", age: 40, active: false},
  {user: "pebbles", age: 1, active: true}
];

describe("Check LodashFind Method", () => {
  it("Check LodashFind Method Example 1", () => {
    expect(
      find(users, function(o) {
        return o.age < 40;
      })
    ).toEqual({user: "barney", age: 36, active: true});
  });

  it("Check LodashFind Method Example 2", () => {
    expect(find(users, {age: 1, active: true})).toEqual({
      user: "pebbles",
      age: 1,
      active: true
    });
  });

  it("Check LodashFind Method Example 3", () => {
    expect(find(users, ["active", false])).toEqual({
      user: "fred",
      age: 40,
      active: false
    });
  });

  it("Check LodashFind Method Example 4", () => {
    expect(find(users, "active")).toEqual({
      user: "barney",
      age: 36,
      active: true
    });
  });
});
