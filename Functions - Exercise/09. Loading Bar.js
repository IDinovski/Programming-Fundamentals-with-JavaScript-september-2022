function solve(num) {
  let result = `${num}% [`;
  for (let i = 10; i <= 100; i += 10) {
    if (i <= num) {
      result += "%";
    } else {
      result += ".";
    }
  }
  result += "]";
  if (num == 100) {
    console.log("100% Complete!");
  } else {
    console.log(result);
    console.log("Still loading...");
  }
}
solve(40);
