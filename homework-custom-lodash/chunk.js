const pushMethod = function(array, value) {
  const nextElement = array.length;
  array[nextElement] = value;
};

const spliceMethod = function(array, start, end) {
  let length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  start = start == null ? 0 : start;
  end = end === undefined ? length : end;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : (end - start) >>> 0;
  start >>>= 0;

  let index = -1;
  const result = new Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
};

const shiftMethod = function(array) {
  const arr = [...array];
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr[i] = arr[i + 1];
  }
  resultArr.length--;
  return resultArr;
};
//:TODO Написать свой метод splice
const chunk = function chunkMethod(arr, size) {
  const cache = [];
  let arrayValues = [...arr];
  if (arr.length <= 0 || size <= 0) {
    return cache;
  }
  while (arrayValues.length) {
    // const pieceOfArray = arrayValues.splice(0, size);
    let pieceOfArray = spliceMethod(arrayValues, size);
    console.log(pieceOfArray);
    pushMethod(cache, pieceOfArray);
    for (let j = 0; j < size; j++) {
      arrayValues = shiftMethod(arrayValues);
    }
  }
  return cache;
};
console.log(chunk(["a", "e", "b", "c", "n", "y", "o", "p"], 3));
