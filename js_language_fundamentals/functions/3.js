var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

/* 
expected: This is local
There is one variable: `myVar`.
It is initialized to 'This is global' on Line 1, then reassigned when `someFunction()` is invoked.
*/