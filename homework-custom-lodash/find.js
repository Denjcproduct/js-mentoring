const isPartialEqual = require('./helpers/isPartialEqual');

const find = function findMethod(collection, predicate, fromIndex) {
  let i = fromIndex || 0;
  const collLength = collection == null ? 0 : collection.length;
  if (typeof predicate === 'function') {
    while (i < collLength) {
      const value = collection[i];
      if (predicate(value, i, collection)) {
        return value;
      }
      i += 1;
    }
  }
  if (typeof predicate === 'object') {
    while (i < collLength) {
      if (isPartialEqual(predicate, collection[i])) {
        return collection[i];
      }
      i += 1;
    }
  }
  if (typeof predicate === 'string') {
    while (i < collLength) {
      for (const collKey in collection[i]) {
        if (collKey === predicate && collection[i][collKey]) {
          return collection[i];
        }
      }
      i += 1;
    }
  }
  return undefined;
};

module.exports = find;
