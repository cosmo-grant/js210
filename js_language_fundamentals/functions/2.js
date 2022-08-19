var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

/* 
expected: This is local
`myVar` declared on Line 4 has function scope.
It shadows the variable `myVar` declared on Line 1.
Same name, but different variables.
*/