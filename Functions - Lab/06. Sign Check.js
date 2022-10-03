function solve(num1, num2, num3) {
  let isPositive = true;
  if (num1 >= 0 && num2 >= 0 && num3 < 0) {
    isPositive = false;
  } else if (num1 >= 0 && num2 < 0 && num3 >= 0) {
    isPositive = false;
  } else if (num1 < 0 && num2 >= 0 && num3 >= 0) {
    isPositive = false;
  } else if (num1 < 0 && num2 < 0 && num3 < 0) {
    isPositive = false;
  }

  if (isPositive) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}
solve(-1,-1,1)