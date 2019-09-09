const shift = function(array) {
  const arr = [...array];
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr[i] = arr[i + 1];
  }
  resultArr.length--;
  return resultArr;
};
module.exports = shift;
