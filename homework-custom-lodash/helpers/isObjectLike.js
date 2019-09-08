const isObjectLike = function(value) {
  return typeof value == "object" && value !== null;
};

module.exports = isObjectLike;
