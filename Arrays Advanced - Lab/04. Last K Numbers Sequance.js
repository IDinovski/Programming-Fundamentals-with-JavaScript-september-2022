function solve(a, b) {
  let result = [1];
  let nextElement = 0;
  while (result.length < a) {
    let arr = result.slice(-b);

    for (let i = 0; i < arr.length; i++) {
      nextElement += arr[i];
    }
    result.push(nextElement);
    nextElement = 0;
  }
  console.log(result.join(" "));
}
solve(6, 3);
