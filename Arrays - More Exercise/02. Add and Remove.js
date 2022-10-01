function solve(arr) {
  let result = [];
  for (let i = 1; i <= arr.length; i++) {
    switch (arr[i - 1]) {
      case "add":
        result.push(i);
        break;

      case "remove":
        result.pop();
    }
  }
  if (result.length === 0) {
    console.log("Empty");
  } else {
    console.log(result.join(" "));
  }
}
solve(["remove", "remove"]);
solve(["remove", "add", "add", "add"]);
