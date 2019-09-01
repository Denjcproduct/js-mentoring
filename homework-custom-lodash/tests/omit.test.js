const omit = require("../omit.js");

const object = {
  a: 1,
  b: "2",
  c: 3
};

const object2 = {
  a: "AAAA",
  b: 3333,
  c: true,
  d: "DDDD",
  e: "EEEE",
  f: 2222
};
describe("Check LodashOmit Method", () => {
  it("Check LodashOmit Method Example 1", () => {
    expect(omit(object, ["a", "c"])).toEqual({b: "2"});
  });

  it("Check LodashOmit Method Example 2", () => {
    expect(omit(object2, ["b", "c", "e", "f"])).toEqual({
      a: "AAAA",
      d: "DDDD"
    });
  });

  it("Check LodashOmit Method Example 3", () => {
    expect(omit(object, "b")).toEqual({
      a: 1,
      c: 3
    });
  });
});
