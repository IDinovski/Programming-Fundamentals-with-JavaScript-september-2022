function convertToJSON(firstName, lastName, color) {
  let obj = {
    firstName,
    lastName,
    color,
  };
  let result = JSON.stringify(obj);
  console.log(result);
}
convertToJSON("George", "Jones", "Brown");
