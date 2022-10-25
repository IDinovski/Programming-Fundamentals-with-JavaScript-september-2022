function solve(arr) {
  let leftSum = 0;
  let rightSum = 0;
  let flag = true;
  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];
    for (let l = i - 1; l >= 0; l--) {
      leftSum += arr[l];
    }
    for (let r = i + 1; r < arr.length; r++) {
      rightSum += arr[r];
    }
    if (leftSum == rightSum) {
      console.log(i);
      flag = false;
    }
    leftSum = 0;
    rightSum = 0;
  }
  if (flag) {
    console.log("no");
  }
}
solve([1]);
