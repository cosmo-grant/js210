var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

// expected: This is global
// Calling `someFunction()` declares a new function-scoped variable `myVar`.
// It goes out of scope when the function returns.
// `myVar` declared on Line 1 is still in scope.