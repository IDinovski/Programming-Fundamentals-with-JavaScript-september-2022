function solve(arr, conditions) {
  let numberOfElementsToTake = conditions[0];
  let numberOfElementsToDelete = conditions[1];
  let specialNumber = conditions[2];
  let newArr = arr
    .slice(0, numberOfElementsToTake)
    .slice(numberOfElementsToDelete, arr.length);
  let counter = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === specialNumber) {
      counter++;
    }
  }

  console.log(`Number ${specialNumber} occurs ${counter} times.`);
}
solve([5, 2, 3, 4, 1, 6], [5, 2, 3]);
