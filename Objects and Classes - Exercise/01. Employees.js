function solve(input) {
  let listObject = {};
  for (let name of input) {
    listObject.name = name;
    listObject.number = name.length;
    console.log(
      `Name: ${listObject.name} -- Personal Number: ${listObject.number}`
    );
  }
}
solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
