function firstElementOf(arr) {
  return arr[0];
}

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

function nthElementOf(arr, index) {
  return arr[index];
}

function firstNOf(arr, count) {
  return arr.slice(0, count);
}

function lastNOf(arr, count) {
  return arr.slice(arr.length - count);
}

function lastNOfModified(arr, count) {
  let startIndex = arr.length - count < 0 ? 0 : arr.length - count;
  return arr.slice(startIndex);
}

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

function oddElementsOf(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function forwardAndBack(arr) {
  return arr.concat(arr.slice().reverse());
}

function sortDescending(arr) {
  return arr.slice().sort().reverse();
}

function matrixSums(arr) {
  let arrOfSums = [];
  for (let i = 0; i < arr.length; i++) {
    arrOfSums.push(arr[i].reduce((a, b) => a + b));
  }
  return arrOfSums;
}

function uniqueElements(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

function missing(arr) {
  let missingNums = [];
  for (let i = arr[0] + 1; i < arr[arr.length - 1]; i++) {
    if (!arr.includes(i)) {
      missingNums.push(i);
    }
  }
  return missingNums;
}

console.log(firstElementOf(['U', 'S', 'A']));
console.log(lastElementOf(['U', 'S', 'A']));

let digits1 = [4, 8, 15, 16, 23, 42];
console.log(nthElementOf(digits1, 3));   // returns 16
console.log(nthElementOf(digits1, 8));   // what does this return?
console.log(nthElementOf(digits1, -1));  // what does this return?

let digits2 = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits2, 3));    // returns [4, 8, 15]

let digits3 = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits3, 3));    // returns [16, 23, 42]
console.log(lastNOf(digits3, 8));
console.log(lastNOfModified(digits3, 3));    // returns [16, 23, 42]
console.log(lastNOfModified(digits3, 8));

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]

let digits4 = [4, 8, 15, 16, 23, 42];
console.log(oddElementsOf(digits4));

console.log(forwardAndBack(digits4));

console.log(sortDescending([4, 2, 6, 3, 4, 3, 2, 1]));

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));   // []