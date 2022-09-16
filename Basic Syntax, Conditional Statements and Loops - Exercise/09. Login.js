function solve(input) {
  let username = input[0];
  let index = 1;
  let next = input[index];
  index++;
  let counter = 0;

  let splitString = input[0].split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  while (next != joinArray) {
    counter++;
    if (counter > 3) {
      console.log(`User ${username} blocked!`);
      break;
    }
    next = input[index];
    index++;
    console.log(`Incorrect password. Try again.`);
  }
  if (next == joinArray) {
    console.log(`User ${username} logged in.`);
  }
}
solve(["momo", "omom"]);
