function solve(number) {
  let isPrime = true;
  if (number < 2) {
    isPrime = false;
  }
  for (let i = 2; i * i <= number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
    isPrime = true;
  }
  console.log(isPrime);
}
solve(4);
