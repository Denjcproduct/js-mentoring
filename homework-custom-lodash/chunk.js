const pushMethod = function(array, value) {
  const nextElement = array.length;
  array[nextElement] = value;
};

//:TODO Написать свой метод splice
const chunk = function chunkMethod(arr, size) {
  const cache = [];
  const arrayValues = [...arr];
  if (arr.length <= 0 || size <= 0) {
    return cache;
  }
  while (arrayValues.length) {
    const pieceOfArray = arrayValues.splice(0, size);
    pushMethod(cache, pieceOfArray);
  }
  return cache;
};
console.log(chunk(["a", "e", "b", "c", "n", "y", "o", "p"], 7));
