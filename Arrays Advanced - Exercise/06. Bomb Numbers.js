function bombNumbers(sequence, bomb) {
  let specialNumber = bomb[0];
  let bombPower = bomb[1];

  while (sequence.includes(specialNumber)) {
    let index = sequence.indexOf(specialNumber);
    let elementsToRemove = bombPower * 2 + 1;
    let startIndex = index - bombPower;

   
