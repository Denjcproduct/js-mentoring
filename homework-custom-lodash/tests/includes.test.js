const includes = require("../includes.js");

const arr1 = [1, 2, 3];
const object1 = {a: 1, b: 2};
const string = "abcd";

describe("Check LodashIncludes Method", () => {
  it("Check LodashIncludes Method Example 1", () => {
    expect(includes(arr1, 1)).toEqual(true);
  });

  it("Check LodashIncludes Method Example 2", () => {
    expect(includes(arr1, 1, 2)).toEqual(false);
  });

  it("Check LodashIncludes Method Example 3", () => {
    expect(includes(object1, 1)).toEqual(true);
  });

  it("Check LodashIncludes Method Example 4", () => {
    expect(includes(string, "bc")).toEqual(true);
  });
});
