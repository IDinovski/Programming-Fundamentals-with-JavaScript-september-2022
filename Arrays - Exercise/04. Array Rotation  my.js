function solve(arr, num) {
  let newArr = [];
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (num >= arr.length) {
      num = num % arr.length;
    } else if (num < 0) {
      num = 0;
    }
    let special = i + num;

    if (special >= arr.length) {
      newArr.push(arr[index]);
      index++;
    } else {
      newArr.push(arr[special]);
    }
  }
  console.log(newArr.join(" "));
}
solve([1, 2, 3, 4, 5], 10);
solve([1, 2, 3, 4, 5], 11);
solve([1, 2, 3, 4, 5], 12);
solve([1, 2, 3, 4, 5], 13);
solve([1, 2, 3, 4, 5], 14);
solve([1, 2, 3, 4, 5], 15);
solve([1, 2, 3, 4, 5], 16);
solve([1, 2, 3, 4, 5], 17);
solve([1, 2, 3, 4, 5], 18);
solve([1, 2, 3, 4, 5], 19);
solve([1, 2, 3, 4, 5], 20);
