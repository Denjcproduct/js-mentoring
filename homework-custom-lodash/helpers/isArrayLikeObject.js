const isObjectLike = require('./isObjectLike');
const isArrayLike = require('./isArrayLike');

const isArrayLikeObject = function isArrayLikeObjectMethod(value) {
  return isObjectLike(value) && isArrayLike(value);
};

module.exports = isArrayLikeObject;
