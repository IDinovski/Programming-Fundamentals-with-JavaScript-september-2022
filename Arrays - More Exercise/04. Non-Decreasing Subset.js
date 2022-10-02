function solve(arr) {
  let bigest = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= bigest) {
      bigest = arr[i];
      result.push(arr[i]);
    }
  }
  console.log(result.join(" "));
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
