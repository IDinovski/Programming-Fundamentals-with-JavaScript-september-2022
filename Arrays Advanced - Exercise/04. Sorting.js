function solve(arr) {
  arr.sort((a, b) => a - b);
  let length = arr.length;
  let newArr = [];
  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      newArr.push(arr.pop());
    } else if (i % 2 !== 0) {
      newArr.push(arr.shift());
    }
  }
  console.log(newArr.join(" "));
}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
