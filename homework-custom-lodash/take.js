const spliceMethod = function(array, startIndex, removeCount) {
  let resultArray = [];
  if (startIndex > 0) {
    for (let i = 0; i <= array.length; i++) {
      resultArray[i] = array[i + startIndex];
    }
    resultArray.length = removeCount;
    return resultArray;
  }
  if (startIndex === 0) {
    array.length = removeCount;
    return array;
  }
};

const take = function takeMethod(array, number = 1) {
  if (number === 0) {
    return [];
  }
  if (array.length <= number) {
    return array;
  }
  if (array.length > 0) {
    return spliceMethod(array, 0, number);
  }
};

console.log(take([1, 2, 3, 4, 5, 6], 2));
