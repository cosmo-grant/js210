let total = 0;

for (let i = 0; i < 3; i++) {
  let score = prompt(`Enter score ${i + 1}:`);
  total += Number(score);
}

let avg = total / 3;
let grade;

if (avg >= 90) {
  grade = 'A';
} else if (avg >= 70) {
  grade = 'B';
} else if (avg >= 50) {
  grade = 'C';
} else {
  grade = 'F';
}

console.log(`Based on the average of your 3 scores your letter grade is "${grade}".`)