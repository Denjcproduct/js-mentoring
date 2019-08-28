import {sliceMethod, pushMethod} from "./helpers/functions.js";

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
