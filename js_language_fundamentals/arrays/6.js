function reverse(inputForReversal) {
  let arr = Array.from(inputForReversal);
  let reversedArr = [];
  arr.forEach(item => reversedArr.unshift(item));
  if (Array.isArray(inputForReversal)) {
    return reversedArr;
  } else {
    return reversedArr.join('');
  }
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]