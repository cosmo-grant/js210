function slice(arr, startIndex, endIndex) {
  newArr = []
  for (let i = startIndex; i < endIndex; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]