function generatePattern(width) {
  let prefix = '';
  for (let i = 1; i <= width; i++) {
    prefix += i
    stars = '*'.repeat(width - i)
    console.log(prefix + stars);
  }
}

generatePattern(7);