function solve(arr, num) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      sum = arr[i] + arr[k];
      if (sum === num) {
        let answer = [];
        answer.push(arr[i]);
        answer.push(arr[k]);
        console.log(answer.join(" "));
      }
    }
  }
}
solve([1, 7, 6, 2, 19, 23], 8);
