function solve(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    let currentNumber = arr[i];

    for (let k = i + 1; k < arr.length; k++) {
      if (currentNumber <= arr[k]) {
        flag = false;
      }
    }

    if (flag) {
      newArr.push(currentNumber);
    }
  }
  console.log(newArr.join(" "));
}
solve([41, 41, 34, 20]);
