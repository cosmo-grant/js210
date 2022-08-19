let isPrime = num => {
  if (num === 0 || num === 1) { return false; }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

function checkGoldbach(expectedSum) {
  if (expectedSum % 2 === 1 || expectedSum < 4) {
    console.log('null');
    return;
  }
  for (let i = 2; i <= expectedSum / 2; i += 1) {
    if (isPrime(i) && isPrime(expectedSum - i)) {
      console.log(i, expectedSum - i);
    }
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53