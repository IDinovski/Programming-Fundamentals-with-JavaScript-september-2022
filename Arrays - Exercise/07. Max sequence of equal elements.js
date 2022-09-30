function solve(arr) {
  let longestSequence = [];
  let currentArray = [];

  for (let i = 0; i < arr.length; i++) {
    for (let k = i ; k < arr.length; k++) {
      if (arr[i] === arr[k]) {
        currentArray.push(arr[k]);
        if (currentArray.length > longestSequence.length) {
          longestSequence = currentArray;
        }
      } else if (arr[k] != arr[i]) {
        currentArray = [];
        break;
      }
    }
  }
  console.log(longestSequence.join(" "));
}
solve([1,1,1,1,2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
