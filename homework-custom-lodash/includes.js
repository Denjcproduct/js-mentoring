const includes = function(collection, value, fromIndex) {
  let n = fromIndex || 0;
  function sameValueZero(x, y) {
    return (
      x === y ||
      (typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y))
    );
  }
  if (typeof collection === "object") {
    let array = Array.from(collection);
    let len = array.length;
    /*действия если collection массив */
    if (len > 0) {
      while (n < len) {
        if (sameValueZero(collection[n], value)) {
          return true;
        }
        n++;
      }
      return false;
    }
    /*действия если collection объект */
    if (len === 0) {
      for (let key in collection) {
        if (collection[key] === value) {
          return true;
        }
      }
      return false;
    }
  }
  /*действия если collection строка */
  if (typeof collection === "string") {
    if (!value) {
      return false;
    }
    const reg = new RegExp(value, "i");
    return reg.test(collection);
  }
};

module.exports = includes;
