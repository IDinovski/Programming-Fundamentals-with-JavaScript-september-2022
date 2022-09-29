function solve(arr) {
  let originalSum = 0;
  let newSum = 0;
  for (let i = 0; i < arr.length; i++) {
    originalSum += arr[i];
    if (arr[i] % 2 == 0) {
      arr[i] += i;
      newSum += arr[i];
    } else {
      arr[i] -= i;
      newSum += arr[i];
    }
  }
  console.log(arr);
  console.log(originalSum);
  console.log(newSum);
}
solve([5, 15, 23, 56, 35]);
