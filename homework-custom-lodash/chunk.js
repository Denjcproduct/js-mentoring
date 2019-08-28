const pushMethod = function(array, value) {
  const nextElement = array.length;
  array[nextElement] = value;
};

const sliceMethod = function(array, start, end) {
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

const chunk = function chunkMethod(arr, size = 1) {
  const cache = [];
  let arrayValues = [...arr];
  if (arr.length <= 0 || size <= 0) {
    return cache;
  }
  for (let i = 0; i < arrayValues.length; i += size) {
    let arrayValue = sliceMethod(arrayValues, i, i + size);
    pushMethod(cache, arrayValue);
  }
  return cache;
};

console.log(chunk(["a", "e", "b", "c", "n", "y", "o", "p"], 2));
