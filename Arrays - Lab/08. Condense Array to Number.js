function solve(nums) {
  let condensed = [];
  let curent = 0;
  let second = 0;
  let sum = 0;
  let flag = true;
  while (nums.length > 1) {
    for (let i = 0; i < nums.length; i++) {
      if (i + 1 < nums.length) {
        curent = nums[i];
        second = nums[i + 1];
        sum += curent + second;
        condensed.push(curent + second);
      }
    }
    if (condensed.length == 1) {
      break;
    }
    nums = condensed;
    condensed = [];
    flag = false;
  }
  if (flag) {
    console.log(nums[0]);
  } else {
    console.log(condensed[0]);
  }
}
solve([1]);
