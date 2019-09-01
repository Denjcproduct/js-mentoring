const filter = function filterMethod(array, predicate) {
  let index = -1;
  let resIndex = 0;
  const length = array == null ? 0 : array.length;
  const emptyArray = [];
  if (typeof predicate === "function") {
    while (++index < length) {
      const value = array[index];
      if (predicate(value, index, array)) {
        emptyArray[resIndex++] = value;
      }
    }
  }
  if (typeof predicate === "object") {
    for (let i = 0; i < array.length; i++) {
      for (let arrKey in array[i]) {
        for (let objKey in predicate) {
          if (array[i][arrKey] === predicate[objKey]) {
            emptyArray[resIndex++] = array[i];
          }
        }
      }
    }
  }
  if (typeof predicate === "string") {
    for (let i = 0; i < array.length; i++) {
      for (let key in array[i]) {
        if (key === predicate && array[i][key]) {
          emptyArray[resIndex++] = array[i];
        }
      }
    }
  }
  const res = new Set(emptyArray);
  const result = [...res.values()];
  return result;
};

module.exports = filter;
