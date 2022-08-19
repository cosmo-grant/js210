function indexOf(str1, str2) {
  let greatestStartIndex = str1.length - str2.length;
  for (let startIndex = 0; startIndex <= greatestStartIndex; startIndex++) {
    if (str2 === extractSubstring(str1, startIndex, str2.length)) {
      return startIndex;
    }
  }
  return -1;
}

function lastIndexOf(str1, str2) {
  let greatestStartIndex = str1.length - str2.length;
  for (let startIndex = greatestStartIndex; startIndex >= 0; startIndex--) {
    if (str2 === extractSubstring(str1, startIndex, str2.length)) {
      return startIndex;
    }
  }
  return -1;
}

function extractSubstring(str, startIndex, substrLength) {
  substring = ''
  for (let i = 0; i < substrLength; i++) {
    substring += str[startIndex + i]
  }
  return substring;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                   // -1
console.log(indexOf('Blue Whale', 'leB'));                     // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1