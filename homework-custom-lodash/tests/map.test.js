const map = require("../map.js");

function square(n) {
  return n * n;
}
let users = [{user: "barney"}, {user: "fred"}];

describe("Check LodashMap Method", () => {
  it("Check LodashMap Method Example 1", () => {
    expect(map([4, 8], square)).toEqual([16, 64]);
  });

  it("Check LodashMap Method Example 2", () => {
    expect(map({a: 4, b: 8}, square)).toEqual([16, 64]);
  });

  it("Check LodashMap Method Example 3", () => {
    expect(map(users, "user")).toEqual(["barney", "fred"]);
  });
});
