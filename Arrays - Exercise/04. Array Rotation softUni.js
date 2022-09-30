function solve(arr, num) {
  while (num > 0) {
    let elementToMove = arr.shift();
    arr.push(elementToMove);

    num--;
  }
  console.log(arr.join(" "));
}
solve([51, 47, 32, 61, 21], 5);
