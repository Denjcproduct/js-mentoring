const compact = require("../compact.js");

describe("Check LodashCompact Method", () => {
  it("Check LodashCompact Method Example 1", () => {
    expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
  });

  it("Check LodashCompact Method Example 2", () => {
    expect(
      compact(["a", "b", 1, 2, false, null, 0, "", undefined, NaN])
    ).toEqual(["a", "b", 1, 2]);
  });
});
