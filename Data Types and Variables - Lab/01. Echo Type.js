function solve(a) {
  if (typeof a === "string" ||typeof a === "number") {
    console.log(typeof a);
    console.log(a);
  } else {
    console.log(typeof a);
    console.log("Parameter is not suitable for printing");
  }
}
solve("abs");
