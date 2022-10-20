function solve(arr) {
  let list = [];
  let allList = [];
  let current = "";
  let alreadyFlag = false;
  for (let i = 0; i < arr.length; i++) {
    let notFlag = false;
    current = arr[i].split(" ");
    if (!arr[i].includes("not") && !list.includes(current[0])) {
      list.push(current[0]);
      allList.push(current[0]);
    } else if (list.includes(current[0])) {
      console.log(`${current[0]} is already in the list!`);
    }
    if (list.includes(current[0])) {
      for (let k = 0; k < arr.length; k++) {
        let proverka = arr[k].split(" ");
        if (proverka.includes(current[0]) && proverka.includes("not")) {
          list.pop();
          alreadyFlag = false;
          notFlag = true;
          break;
        } else if (!list.includes(current[0])) {
          alreadyFlag = true;
        }
      }
      if (alreadyFlag) {
        console.log(`${current[0]} is already in the list!`);
      }
    }
    if (arr[i].includes("not") && !allList.includes(current[0])) {
      if (!notFlag) {
        console.log(`${current[0]} is not in the list!`);
      }
    }
  }
  console.log(list.join("\n"));
}
solve([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
