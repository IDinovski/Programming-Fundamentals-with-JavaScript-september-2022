function solve(arr) {
  let sorted = arr.sort();
  for (let i = 1; i <= sorted.length; i++) {
    console.log(`${i}.${sorted[i-1]}`);
  }
}
solve(["Potatoes", "Tomatoes", "Onions", "Apples"]);
