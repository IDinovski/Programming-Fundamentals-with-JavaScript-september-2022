function toJSON(data) {
  let result = JSON.parse(data);
  for (let key of Object.keys(result)) {
    console.log(`${key}: ${result[key]}`);
  }
}
toJSON('{"name": "George", "age": 40, "town": "Sofia"}');
