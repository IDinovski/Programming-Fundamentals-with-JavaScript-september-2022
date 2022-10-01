function solve(arr) {
  let stringArr = String(arr);
  let newArr = [];
  let currentElement = "";
  let currentIndex = 0;

  for (let i = 0; i < stringArr.length; i++) {
    if (i == stringArr.length - 1) {
      for (let k = currentIndex; k <= i; k++) {
        currentElement += stringArr[k];
      }
      newArr.push(currentElement);
      currentElement = "";
      currentIndex = i + 1;
    } else if (stringArr[i] == ` ` || stringArr[i] === `|`) {
      for (let k = currentIndex; k < i; k++) {
        currentElement += stringArr[k];
      }
      newArr.push(currentElement);
      currentElement = "";
      currentIndex = i + 1;
    }
  }
  console.log(newArr);
}
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
