const shift = function shiftMethod(array) {
  const arr = [...array];
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr[i] = arr[i + 1];
  }
  resultArr.length--;
  return resultArr;
};
module.exports = shift;
