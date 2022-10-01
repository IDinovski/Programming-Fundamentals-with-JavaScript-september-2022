function solve(arr) {
  let n = Number(arr[arr.length - 1]);
  let result = []
  for (let i = 0; i < arr.length - 1; i += n) {
    result.push(arr[i]);
  }
  console.log(result.join(" "));
}
solve(["5", "20", "31", "4", "20", "2"]);
