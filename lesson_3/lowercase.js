function toLowerCase(string) {
  let lowerCaseString = '';
  for (let i = 0; i < string.length; i++) {
    let charCode = string.charCodeAt(i);
    if (65 <= charCode && charCode <= 90) {
      lowerCaseString += String.fromCharCode(charCode + 32);
    } else {
      lowerCaseString += string[i];
    }
  }
  console.log(lowerCaseString);
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"