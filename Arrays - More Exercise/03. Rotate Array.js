
function solve(arr) {
  let rotation = arr[arr.length - 1];
  arr.pop();
  for (let i = 1; i <= rotation; i++) {
    let temp = arr.pop();
    arr.unshift(temp);
  }
  console.log(arr.join(" "));
}
solve(["Banana", "Orange", "Coconut", "Apple", "12"]);
solve(["Banana", "Orange", "Coconut", "Apple", "13"]);
solve(["Banana", "Orange", "Coconut", "Apple", "14"]);
solve(["Banana", "Orange", "Coconut", "Apple", "15"]);
