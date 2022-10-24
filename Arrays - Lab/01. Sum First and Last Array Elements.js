function solve(arr) {
  let firstNum = arr.shift();
  let lastNum = arr.pop();
  let sum = firstNum + lastNum;
  console.log(sum);
}
solve([20, 30, 40]);
