function shift(arr) {
  let firstElem = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  if (arr.length > 0) { arr.length = arr.length - 1; }
  return firstElem;
}

function unshift(arr, ...vals) {
  vals.forEach(function (val) {
    for (let i = arr.length; i >= 1; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = val;
  })
  return arr.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]