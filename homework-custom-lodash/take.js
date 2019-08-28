import {sliceMethod} from "./helpers/functions.js";

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
