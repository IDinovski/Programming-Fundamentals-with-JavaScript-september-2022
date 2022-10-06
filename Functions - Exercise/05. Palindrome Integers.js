function solve(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentNumber = String(arr[i]);
    let backward = "";
    for (let k = currentNumber.length - 1; k >= 0; k--) {
      backward += currentNumber[k];
    }
    if (backward == currentNumber) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}
solve([101101]);
