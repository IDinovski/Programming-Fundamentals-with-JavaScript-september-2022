function solve(num) {
  let sum = 0;
  num = String(num);

  while (sum / num.length <= 5) {
    for (let i = 0; i < num.length; i++) {
      sum += Number(num[i]);
    }
    if (sum / num.length < 5) {
      num += 9;
      sum = 0;
    } else {
      break;
    }
  }
  console.log(num);
}
solve(5835);
