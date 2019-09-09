const shift = function shiftMethod(array) {
  const arr = [...array];
  const resultArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    resultArr[i] = arr[i + 1];
  }
  resultArr.length -= 1;
  return resultArr;
};
module.exports = shift;
