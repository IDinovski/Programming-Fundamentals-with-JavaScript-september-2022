function solve(arr) {
  let flag = true;
  let rightSum = 0;
  let leftSum = 0;
  let i = 0;
  for (; i < arr.length; ) {
    for (let right = i + 1; right < arr.length; right++) {
      rightSum += Number(arr[right]);
    }
    for (let left = i - 1; left >= 0; left--) {
      leftSum += arr[left];
    }
    if (leftSum === rightSum) {
      flag = true;
      break;
    } else {
      flag = false;
      rightSum = 0;
      leftSum = 0;
    }
    i++;
  }
  if (flag) {
    console.log(i);
  } else {
    console.log(`no`);
  }
}
solve([1, 2,3,55,1,2,3]);
