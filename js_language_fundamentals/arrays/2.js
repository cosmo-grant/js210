let myArray = [1, 2, 3, 4];
let myOtherArray1 = myArray.slice(); // creates shallow copy of myArray
let myOtherArray2 = [];
myOtherArray = myArray.forEach(item => myOtherArray2.push(item));

myArray.pop();
console.log(myArray);               // [1, 2, 3]
console.log(myOtherArray1);          // [1, 2, 3, 4]
console.log(myOtherArray2);