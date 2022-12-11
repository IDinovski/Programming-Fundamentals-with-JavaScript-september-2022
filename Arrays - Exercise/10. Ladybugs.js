function solve(input) {
  let fieldLength = input.shift();
  let initialIndex = input.shift().split(" ");
  let firstBug = initialIndex[0];
  let secondBug = initialIndex[1];

  for (let i = 0; i < input.length; i++) {
    let comands = input[i].split(" ")
    let ladyBugIndex = comands[0]
    let direction = comands[1]
    let flyLength = comands[2]
    
    console.log(ladyBugIndex);
  }
}
solve([3, "0 1", "0 right 1", "2 right 1"]);
