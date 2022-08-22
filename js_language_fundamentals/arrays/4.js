function concat(arr, ...args) {
  let concatArr = arr.slice();
  args.forEach(function (arg) {
    if (Array.isArray(arg)) {
      for (let i = 0; i < arg.length; i++) {
        concatArr.push(arg[i]);
      }
    } else {
      concatArr.push(arg);
    }
  })
  return concatArr;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]