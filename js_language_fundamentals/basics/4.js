const name = 'Bob';
const saveName = name;
name.toUpperCase();
console.log(name, saveName); // => Bob Bob

// Strings are immutable. The method invocation returns a new string, but the string referenced by `name` is unchanged.