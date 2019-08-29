const pickBy = require("../pickBy.js");
const thisIsNumber = require("../helpers/thisIsNumber");
const object = {a: 1, b: "2", c: 3};

describe("Check LodashPickBy Method", () => {
  it("Check LodashPickBy Method Example 1", () => {
    expect(pickBy(object, thisIsNumber(value))).toEqual({a: 1, c: 3});
  });
});
