function rot13(plaintext) {
  let CODE_OF_UPPERCASE_A = 'A'.charCodeAt(0);
  let CODE_OF_LOWERCASE_A = 'a'.charCodeAt(0);
  let ciphertext = '';

  for (let i = 0; i < plaintext.length; i++) {
    let char = plaintext[i];
    let encoded_char;

    if (isUpperCase(char)) {
      encoded_char = rot13Helper(char, CODE_OF_UPPERCASE_A);
    } else if (isLowerCase(char)) {
      encoded_char = rot13Helper(char, CODE_OF_LOWERCASE_A);
    } else {
      encoded_char = char;
    }

    ciphertext += encoded_char;
  }

  return ciphertext;
}

function isUpperCase(char) {
  return 'A' <= char && char <= 'Z';
}

function isLowerCase(char) {
  return 'a' <= char && char <= 'z';
}

function rot13Helper(char, startCode) {
  let ALPHABET_LENGTH = 26;
  let plainCode = char.charCodeAt(0);
  let cipherCode = ((plainCode - startCode + 13) % ALPHABET_LENGTH) + startCode;
  return String.fromCharCode(cipherCode);
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));