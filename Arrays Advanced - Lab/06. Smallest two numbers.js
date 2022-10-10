function solve(arr) {
  arr.sort((a, b) => a - b);
  let newArr = arr.slice(0, 2);
  console.log(newArr.join(" "));
}
solve([30, 15, 50, 5]);
