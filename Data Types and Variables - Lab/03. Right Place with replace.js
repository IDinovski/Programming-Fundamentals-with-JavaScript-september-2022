function solve(str, char, completeString){
let result = str.replace("_", char)
let output = result===completeString? "Matched":"Not Matched"
console.log(output);
}
