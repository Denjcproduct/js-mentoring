const shiftMethod = function(array) {
  if (array.length > 0) {
  }
};

const drop = function dropMethod(array, number = 1) {
  console.log(number);
  console.log(array);
  if (array.length <= number) {
    return [];
  }
};

console.log(drop([1, 2, 3, 4, 5], 3));
