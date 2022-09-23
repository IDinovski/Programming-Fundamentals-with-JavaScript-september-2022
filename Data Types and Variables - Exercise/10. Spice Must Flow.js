function solve(number) {
  let days = 0;
  let yieldDrops = number;
  let total = 0;
  while (yieldDrops >= 100) {
    days++;
    let current = yieldDrops;
    current -= 26;
    total += current;
    yieldDrops -= 10;
  }
  total -= 26;
  if(total<0){
    total = 0
  }
  console.log(days);
  console.log(total);
}
solve(90);
