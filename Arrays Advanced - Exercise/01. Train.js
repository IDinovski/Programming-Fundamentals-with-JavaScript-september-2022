function solve(input) {
  let wagons = input.shift().split(" ");
  let maxCapacity = input.shift();
  for (let el of input) {
    if (el.includes("Add")) {
      let currentPassenger = el.split(" ").pop();
      wagons.push(currentPassenger);
    } else {
      for (let i = 0; i < wagons.length; i++) {
        let currentPassenger = Number(wagons[i]);
        if (currentPassenger + Number(el) <= maxCapacity) {
          currentPassenger += Number(el);
          wagons.splice(i, 1, currentPassenger);
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}
solve(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
