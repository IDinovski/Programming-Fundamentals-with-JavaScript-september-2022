function solve(arr) {
  let result = 0;
  for (let char of arr) {
    switch (char) {
      case "soap":
        result += 10;
        break;
      case "water":
        result += 0.2*result;
        break;
      case "vacuum cleaner":
        result += 0.25*result;
        break;
      case "mud":
        result =0.90*result ;
        break;
    }
  }
  console.log(`The car is ${result.toFixed(2)}% clean.`);
}
solve(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
