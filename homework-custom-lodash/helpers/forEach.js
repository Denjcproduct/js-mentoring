const forEach = function forEachmethod(arr, callback, args) {
  for (let i = 0; i < arr.length; i++) {
    callback.call(args, arr[i], i, arr);
  }
};

module.exports = forEach;
