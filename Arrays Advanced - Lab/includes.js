function solve(arr, value) {
  for (let el of arr) {
    if (el === value) {
      return true;
    }
  }
  return false;
}
console.log(solve(["a", "b", "c", "d"], "c"));
