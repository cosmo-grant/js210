function shift(arr) {
  if (arr.length === 0) { return undefined; }
  let val = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return val;
}

let arr = [1, 2, 3];
console.log(shift(arr));
console.log(arr);