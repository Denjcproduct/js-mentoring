import {pushMethod} from "./helpers/functions.js";

const compact = function compactMethod(arr) {
  const resultArray = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i]) {
      pushMethod(resultArray, arr[i]);
    }
  }
  return resultArray;
};
console.log(compact([0, 1, false, 3, "", "asda", null, undefined, NaN]));
