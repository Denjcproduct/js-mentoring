const isLength = require("./isLength");

const isArrayLike = function(value) {
  return value != null && typeof value != "function" && isLength(value.length);
};

module.exports = isArrayLike;
