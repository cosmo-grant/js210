function multiplesOf3And5() {
  for (let i = 3; i <= 100; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i}!`);
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(String(i));
    }
  }
}

multiplesOf3And5();