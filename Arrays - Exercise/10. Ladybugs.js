function solve(input) {
  let initialIndex = input[1];
  let initialIndexArray = [];
  for (let q = 0; q < initialIndex.length; q++) {
    if (initialIndex[q] != ` `) {
      initialIndexArray.push(initialIndex[q]);
    }
  }
  console.log(initialIndexArray);
}
solve([3, "0 1", "0 right 1", "2 right 1"]);
