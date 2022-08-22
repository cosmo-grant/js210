function pop(arr) {
  if (arr.length === 0) { return undefined; }
  val = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return val;
}

arr = [1, 2, 3]
console.log(pop(arr));
console.log(arr);