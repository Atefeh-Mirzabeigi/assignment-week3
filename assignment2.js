const comparison = (a, b) => {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "they are equal";
  }
};
console.log(comparison(8, 4));

// odd or intiger number

const checkNumber = (num) => {
  return num % 2 === 0 ? `${num} is even` : `${num} is odd`;
};
console.log(checkNumber(5));
