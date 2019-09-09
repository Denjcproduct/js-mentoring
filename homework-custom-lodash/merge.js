const forEach = require('./helpers/forEach');
const combineObj = require('./helpers/combineObj');
const push = require('./helpers/push');

const merge = function mergeMethod(object, sources) {
  const resultObj = {};
  let resultKey;
  const resultArray = [];
  for (const key in object) {
    if (key in object && key in sources) {
      resultKey = key;
      forEach(object[key], (element, index) => {
        forEach(sources[key], (element2, index2) => {
          if (index === index2) {
            const combine = combineObj(element, element2);
            push(resultArray, combine);
          }
        });
      });
    }
  }
  resultObj[resultKey] = resultArray;
  return resultObj;
};

module.exports = merge;
