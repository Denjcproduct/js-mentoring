const drop = require('./drop');
const forEach = require('./helpers/forEach');
const isArrayLike = require('./helpers/isArrayLike');
const isObjectLike = require('./helpers/isObjectLike');
const isPartialEqual = require('./helpers/isPartialEqual');

const dropWhile = function dropWhileMethod(array, predicate) {
  let dropNumber = {};
  let dropArray = [];
  if (typeof predicate === 'function') {
    forEach(array, (element, index) => {
      if (!predicate(element, index)) {
        dropNumber = index;
      }
      dropArray = drop(array, dropNumber);
    });
  }
  if (typeof predicate === 'object') {
    if (isArrayLike(predicate)) {
      forEach(array, (element, index) => {
        for (let key in element) {
          if (key === predicate[0] && element[key] !== predicate[1]) {
            dropNumber = index;
          }
        }
      });
      dropArray = drop(array, dropNumber);
    }
    if (isObjectLike(predicate) && !Array.isArray(predicate)) {
      forEach(array, (element, index) => {
        if (isPartialEqual(predicate, element)) {
          dropNumber = index === 0 ? 1 : index;
        }
        dropArray = drop(array, dropNumber);
      });
    }
  }
  if (typeof predicate === 'string') {
    forEach(array, (element, index) => {
      dropNumber = !(predicate in element) ? index : 0;
      dropArray = drop(array, dropNumber);
    });
  }
  return dropArray;
};

module.exports = dropWhile;
