function solve(arr) {
  let currentArray = [];
  let currentSum = 0;
  let flag = true;
  let sumArray = [];
  for (let i = 0; i < arr.length; i++) {
    currentArray = arr[i];
    for (let k = 0; k < currentArray.length; k++) {
      currentSum += currentArray[k];
    }
    sumArray.push(currentSum);
    currentSum = 0;
  }
  for (let e = 0; e < arr.length; e++) {
    for (let q = 0; q < arr.length; q++) {
      currentArray = arr[q];
      currentSum += currentArray[e];
    }
    sumArray.push(currentSum);
    currentSum = 0;
  }
  for (let j = 0; j < sumArray.length; j++) {
    if (sumArray[0] === sumArray[j]) {
      flag = true;
    } else {
      flag = false;
      break;
    }
  }
  console.log(flag);
}
solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
