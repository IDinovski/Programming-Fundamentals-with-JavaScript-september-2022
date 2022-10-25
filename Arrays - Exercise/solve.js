function solve(arr) {
  let flag = true;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] > arr[k]) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }
    if (flag) {
      result.push(arr[i]);
    }
    flag = false;
  }
  result.push(arr[arr.length-1])
  console.log(result.join(" "));
}
solve([1, 4, 5, 3, 2]);
