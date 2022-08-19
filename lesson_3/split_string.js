/*
deal with special case where delimiter is empty string
initialize substr to ''
for each char in string
  if char is not delimiter, append char to substr
  if char is delimiter, log substr and re-assign substr to ''
  
 */

const splitString = function (str, delimiter) {
  if (delimiter === undefined) {
    console.log("ERROR: no delimiter");
  } else if (delimiter === '') {
    for (let i = 0; i < str.length; i++) {
      console.log(str[i]);
    }
  } else {
    let substr = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] === delimiter) {
        console.log(substr);
        substr = '';
      } else {
        substr += str[i];
      }
    }
    if (substr) { console.log(substr); }
  }
};

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello