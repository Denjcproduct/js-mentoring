const map = require('./map');
const filter = require('./filter');
const isArrayLikeObject = require('./helpers/isArrayLikeObject');
const baseProperty = require('./helpers/baseProperty');

const zip = function zipMethod(...array) {
  if (!(array != null && array.length)) {
    return [];
  }
  let length = 0;
  array = filter(array, (group) => {
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
