const sameValueZero = require('./helpers/sameValueZero');
const isArrayLike = require('./helpers/isArrayLike');
const isObjectLike = require('./helpers/isObjectLike');

const includes = function includesMethod(collection, value, fromIndex) {
  let n = fromIndex || 0;
  if (typeof collection === 'object') {
    if (isArrayLike(collection)) {
      const len = collection.length;
      while (n < len) {
        if (sameValueZero(collection[n], value)) {
          return true;
        }
        n += 1;
      }
      return false;
    }
    if (isObjectLike(collection)) {
      for (const key in collection) {
        if (collection[key] === value) {
          return true;
        }
      }
      return false;
    }
  }
  if (typeof collection === 'string') {
    if (!value) {
      return false;
    }
    const reg = new RegExp(value, 'i');
    return reg.test(collection);
  }
  return undefined;
};

module.exports = includes;
