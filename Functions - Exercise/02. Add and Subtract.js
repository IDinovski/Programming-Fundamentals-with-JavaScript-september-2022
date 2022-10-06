function main(a, b, c) {
  function sum(a, b) {
    return a + b;
  }
  function subtract(sumAB, c) {
    return sumAB - c;
  }
  let sumAB = sum(a, b);
  let finalsum = subtract(sumAB, c);
  console.log(finalsum);
}
main(5, 10, 50);
