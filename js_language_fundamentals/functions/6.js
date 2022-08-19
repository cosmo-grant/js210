let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

/* 
expected: 7
Function parameters are function-scoped.
The reassignment of `b` on Line 4 has no effect on the value referenced by `a`.
*/