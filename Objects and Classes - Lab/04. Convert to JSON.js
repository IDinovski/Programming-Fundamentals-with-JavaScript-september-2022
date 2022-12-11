function convertToJSON(name, lastName, hairColor) {
  let obj = {
    name,
    lastName,
    hairColor,
  };
  let result = JSON.stringify(obj);
  console.log(result);
}
convertToJSON("George", "Jones", "Brown");
