/* 
if start < 0
  set start += string.length

set length = min(length, string.length - start)

set new_string = ''
for each char in string from index start to start + length (exc.)
  new_string += char
return new_string
*/

function substr(string, start, length) {
  if (start < 0) { start += string.length; }
  length = Math.min(length, string.length - start);
  let new_string = '';
  for (let i = 0; i < length; i++) {
    new_string += string[start + i];
  }
  return new_string;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""