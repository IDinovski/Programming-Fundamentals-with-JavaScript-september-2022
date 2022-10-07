function solve(a, b) {
  let result = a;
  for (let i = a - 1; i > 0; i--) {
    result *= i;
  }
  if (a == 0) {
    result = 1;
  }
  result /= b;
  console.log(result.toFixed(2));
}
solve(0, 2);
