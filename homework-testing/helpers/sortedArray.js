const sortedArray = function sorted(array, order) {
  const cloneArray = array.slice();
  const sortedArr = cloneArray
    .sort((a, b) => {
      if (order) {
        return a.key - b.key;
      }
      if (!order) {
        return b.key - a.key;
      }
      return false;
    })
    .map((element) => element.value);
  return sortedArr;
};

module.exports = sortedArray;
