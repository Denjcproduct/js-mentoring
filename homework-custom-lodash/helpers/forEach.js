const forEach = function(arr, callback, args) {
  for (let i = 0; i < arr.length; i = i + 1) {
    callback.call(args, arr[i], i, arr);
  }
};

module.exports = forEach;
