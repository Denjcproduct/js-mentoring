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

const take = function takeMethod(array, number = 1) {
  if (number === 0) {
    return [];
  }
  if (array.length <= number) {
    return array;
  }
  if (array.length > 0) {
    return sliceMethod(array, 0, number);
  }
};

console.log(take([1, 2, 3, 4, 5, 6], 3));
