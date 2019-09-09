const pickBy = function pickByMethod(object, predicate) {
  const resObj = {};
  for (const key in object) {
    if (predicate(object[key])) {
      resObj[key] = object[key];
    }
  }
  return resObj;
};

module.exports = pickBy;
