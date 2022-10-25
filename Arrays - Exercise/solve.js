function solve(arr) {
  let originalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    originalSum += arr[i];
  }

  let modifiedSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];
    if (currentNumber % 2 == 0) {
      arr[i] += i;
    } else {
      arr[i] -= i;
    }
    modifiedSum += arr[i];
  }
  console.log(arr);
  console.log(originalSum);
  console.log(modifiedSum);
}
solve([5, 15, 23, 56, 35]);
