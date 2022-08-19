const trim = str => {
  let leftIndex = 0;
  while (str[leftIndex] === ' ') {
    leftIndex += 1;
  }

  let rightIndex = str.length - 1;
  while (str[rightIndex] === ' ') {
    rightIndex -= 1;
  }

  return getSubstring(str, leftIndex, rightIndex);
};

function getSubstring(str, leftIndex, rightIndex) {
  substr = ''
  for (let i = leftIndex; i <= rightIndex; i++) {
    substr += str[i];
  }
  return substr;
}

console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim('  abc  '));  // "abc"
console.log(trim(''));         // ""