let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

/* 
expected: 7
Function parameters are function-scoped.
The parameter `a` and the variable `a` declared on Line 1 are different variables.
*/