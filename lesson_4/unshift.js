function unshift(arr, val) {
  for (let i = arr.length; i >= 1; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = val;
  return arr.length;
}

let arr = [0, 1, 2];
console.log(unshift(arr, -1));
console.log(arr);