function solve(str, char, completeString) {
  let result = "";
  let curentChar = "";
  for (let i = 0; i < str.length; i++) {
    curentChar = str[i];
    if (curentChar === "_") {
      curentChar = char;
    }
    result += curentChar;
  }
  if (result == completeString) {
    console.log(`Matched`);
  } else {
    console.log("Not Matched");
  }
}
solve("Str_ng", "i", "String");
