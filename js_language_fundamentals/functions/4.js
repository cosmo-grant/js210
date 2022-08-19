var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

/* 
expected: This is global
If JavaScript can't find a variable named `myVar` declared in the inner scope, it checks enclosing scopes.
*/