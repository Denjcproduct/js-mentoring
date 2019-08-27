const shiftMethod = function(array) {
  const arr = [...array];
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr[i] = arr[i + 1];
  }
  resultArr.length--;
  return resultArr;
};

const drop = function dropMethod(array, number = 1) {
  let result = [];
  if (array.length <= number) {
    return [];
  }
  if (number === 0) {
    return array;
  }
  if (array.length > number) {
    for (let j = 0; j < number; j++) {
      if (result.length > 0) {
        result = shiftMethod(result);
      }
      if (result.length === 0) {
        result = shiftMethod(array);
      }
    }
  }
  return result;
};

console.log(drop([1, 2, 3, 4, 5], 6));
