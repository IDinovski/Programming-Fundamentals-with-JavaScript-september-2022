function solve(arr) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let num of arr) {
      if (num % 2 == 0) {
        sumEven += Number(num);
      }else{
        sumOdd+=Number(num)
      }
    }
    let diff = sumEven-sumOdd
    console.log(diff);
  }
  solve([1, 2, 3, 4, 5, 6,19]);
  