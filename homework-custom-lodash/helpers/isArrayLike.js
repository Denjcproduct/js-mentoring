const isLength = require('./isLength');

const isArrayLike = function isArrayLikeMethod(value) {
  return value != null && typeof value !== 'function' && isLength(value.length);
};

module.exports = isArrayLike;
