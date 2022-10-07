function solve(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < n; k++) {
      result += n + " ";
    }
    console.log(result);
    result=""
  }
}
solve(3)