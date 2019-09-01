const map = require("./map.js");
const filter = require("./filter.js");

const baseProperty = function(key) {
  return object => (object == null ? undefined : object[key]);
};

const isLength = function(value) {
  const MAX_SAFE_INTEGER = 9007199254740991;
  return (
    typeof value == "number" &&
    value > -1 &&
    value % 1 == 0 &&
    value <= MAX_SAFE_INTEGER
  );
};

const isObjectLike = function(value) {
  return typeof value == "object" && value !== null;
};

const isArrayLike = function(value) {
  return value != null && typeof value != "function" && isLength(value.length);
};

const isArrayLikeObject = function(value) {
  return isObjectLike(value) && isArrayLike(value);
};

const zip = function zipMethod(...array) {
  if (!(array != null && array.length)) {
    return [];
  }
  let length = 0;
  array = filter(array, group => {
    if (isArrayLikeObject(group)) {
      length = Math.max(group.length, length);
      return true;
    }
  });
  let index = -1;
  const result = new Array(length);
  while (++index < length) {
    result[index] = map(array, baseProperty(index));
  }
  return result;
};

module.exports = zip;
