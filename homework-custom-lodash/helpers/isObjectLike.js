const isObjectLike = function isObjectLikeMethod(value) {
  return typeof value === 'object' && value !== null;
};

module.exports = isObjectLike;
