const filter = require("./filter");

const compact = function compactMethod(arr) {
  const result = filter(arr, element => element);
  return result;
};

module.exports = compact;
