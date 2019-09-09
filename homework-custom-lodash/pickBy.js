const pickBy = function pickByMethod(object, predicate) {
  const resObj = {};
  for (let key in object) {
    if (predicate(object[key])) {
      resObj[key] = object[key];
    }
  }
  return resObj;
};

module.exports = pickBy;
