function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

/* 
expected: This is global
In non-strict mode, undeclared variables becomes properties of the global object.
These properties are accessible anywhere, e.g. Line 6.
*/