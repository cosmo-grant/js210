function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}

let count = [0, 1, 2];
console.log(push(count, 3));
console.log(count);