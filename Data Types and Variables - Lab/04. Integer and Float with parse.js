function solve(num1, num2, num3) {
  let sum = num1 + num2 + num3;

  console.log(`${sum} - ${parseInt(sum) === sum ? "Integer" : "Float"}`);
}

solve(9, 105, 1);
