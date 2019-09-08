const drop = require("../drop");

describe("Check LodashDrop Method", () => {
  it("Check LodashDrop Method Example 1", () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });

  it("Check LodashDrop Method Example 2", () => {
    expect(drop([1, 2, 3], 2)).toEqual([3]);
  });

  it("Check LodashDrop Method Example 3", () => {
    expect(drop([1, 2, 3], 5)).toEqual([]);
  });

  it("Check LodashDrop Method Example 4", () => {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });
});
