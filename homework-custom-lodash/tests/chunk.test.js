const chunk = require("../chunk.js");

describe("Check LodashChunk Method", () => {
  it("Check LodashChunk Method Example 1", () => {
    expect(chunk(["a", "b", "c", "d"], 2)).toEqual([["a", "b"], ["c", "d"]]);
  });

  it("Check LodashChunk Method Example 2", () => {
    expect(chunk(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]]);
  });
});
