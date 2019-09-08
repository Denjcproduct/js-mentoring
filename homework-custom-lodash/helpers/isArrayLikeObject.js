const isObjectLike = require("./isObjectLike");
const isArrayLike = require("./isArrayLike");

const isArrayLikeObject = function(value) {
  return isObjectLike(value) && isArrayLike(value);
};

module.exports = isArrayLikeObject;
