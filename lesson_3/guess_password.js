let password = 'password';

function askForPassword() {
  for (let i = 0; i < 3; i++) {
    let input = prompt("What is the password?");
    if (input === password) {
      return 'You have successfully logged in.';
    }
  }
  return 'You have been denied access.'
}

console.log(askForPassword());