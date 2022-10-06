function solve(a, b) {
  a = Number(a.charCodeAt());
  b = Number(b.charCodeAt());
  let result = "";
  if (a < b) {
    for (let i = a + 1; i < b; i++) {
      result += String.fromCharCode(i) + " ";
    }
  } else {
    for (let i = b + 1; i < a; i++) {
      result += String.fromCharCode(i) + " ";
    }
  }
  console.log(result);
}
solve("C", "#");
