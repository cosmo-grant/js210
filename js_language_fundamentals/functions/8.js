let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

/* 
expected: [1, 2, 10]
The variable `a` and `b` point to the same array.
That array is mutated on Line 4.
*/