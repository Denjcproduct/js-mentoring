const zip = require("../zip");

const arr1 = ["a", "b"];
const arr2 = [1, 2];
const arr3 = [true, false];

describe("Check LodashZip Method", () => {
  it("Check LodashZip Method Example 1", () => {
    expect(zip(arr1, arr2)).toEqual([["a", 1], ["b", 2]]);
  });

  it("Check LodashZip Method Example 2", () => {
    expect(zip(arr1, arr2, arr3)).toEqual([["a", 1, true], ["b", 2, false]]);
  });
});
