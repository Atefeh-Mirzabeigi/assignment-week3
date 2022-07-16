// Diagonal of a square
const findDiagonal = (a) => {
  return a * Math.sqrt(2);
};
const diagonal = findDiagonal(9);
console.log(diagonal);

//triangle Area
const triangleArea = (a, b, c) => {
  let s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
};
console.log(triangleArea(5, 6, 7));

// circumference and Surface area
const circumferenceAndSurface = (r) => {
  let circumference = Math.round(2 * Math.PI * r);
  let surface = Math.round(Math.PI * Math.pow(r, 2));
  return `the circumference is ${circumference} and the surface area is ${surface}`;
};
console.log(circumferenceAndSurface(4));
