function pop(arr) {
  if (arr.length > 0) {
    let lastElement = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return lastElement;
  }
}

function push(arr, ...vals) {
  vals.forEach(function (val) {
    arr[arr.length] = val;
  })
  return arr.length;
}

let arr = [0, 1, 2, 3];
console.log(pop(arr));
console.log(arr);
console.log(pop([]));

const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));   