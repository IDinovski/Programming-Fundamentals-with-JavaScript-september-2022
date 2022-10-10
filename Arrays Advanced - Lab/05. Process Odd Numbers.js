function solve(arr) {
  let result = arr.filter((x, i) => i % 2 != 0);
  let mapres = result.map((x) => 2 * x);
  mapres.reverse();
  console.log(mapres.join(" "));
}
solve([10, 15, 20, 25]);
