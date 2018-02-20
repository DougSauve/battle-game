function getRand(min, max) {

  //Random between 0 and max - min; then add min.

  let difference = max - min + 1;
  let x = Math.floor(Math.random() * difference);
  return x += min;
  }
