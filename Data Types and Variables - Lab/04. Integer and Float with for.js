function solve(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  let curent = String(sum);
  let flag = true;
  for (let i = 0; i < curent.length; i++) {
    let a = curent[i];
    if (a === ".") {
      flag = !flag;
    }
  }
  if (flag) {
    console.log(`${sum} - Integer`);
  } else {
    console.log(`${sum} - Float`);
  }
}
solve(9, 105, 1.1);
