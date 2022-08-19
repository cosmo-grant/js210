function substring(string, start, end) {
  if (end === undefined) { end = string.length; }
  [start, end] = [+start, +end];
  if (start < 0 || Number.isNaN(start)) { start = 0; }
  if (end < 0 || Number.isNaN(start)) { end = 0; }
  start = Math.min(start, string.length);
  end = Math.min(end, string.length);
  if (start > end) {
    [start, end] = [end, start];
  }

  new_str = ''
  for (let i = start; i < end; i++) {
    new_str += string[i];
  }
  return new_str;
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"