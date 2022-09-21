function solve(number) {
  let curentSum = 0;
  for (let k = 1; k <= number; k++) {
    let strNumber = String(k);

    for (let i = 0; i < strNumber.length; i++) {
      curentSum += Number(strNumber[i]);
    }
    console.log(
      `${k} -> ${
        curentSum == 5 || curentSum == 7 || curentSum == 11 ? "True" : "False"
      }`
    );

    curentSum = 0;
  }
}
solve(15);
