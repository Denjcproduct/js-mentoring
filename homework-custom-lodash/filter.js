const forEach = require("./helpers/forEach");
const isPartialEqual = require("./helpers/isPartialEqual");
const push = require("./helpers/push");

const filter = function filterMethod(array, predicate) {
  const resultArray = [];
  if (typeof predicate === "function") {
    forEach(array, (element, index) => {
      if (predicate(element, index, array)) {
        push(resultArray, element);
      }
    });
  }
  if (typeof predicate === "object") {
    forEach(array, element => {
      if (isPartialEqual(predicate, element)) {
        push(resultArray, element);
      }
    });
  }
  if (typeof predicate === "string") {
    forEach(array, element => {
      for (let key in element) {
        if (key === predicate && element[key]) {
          push(resultArray, element);
        }
      }
    });
  }
  return resultArray;
};

module.exports = filter;
