function solve(arr) {
  let stringArr = String(arr);
  let newArr = [];
  let currentElement = "";
  let currentIndex = 0;

  for (let i = 0; i < stringArr.length; i++) {
    if (i == stringArr.length - 1) {
      for (let k = currentIndex; k <= i; k++) {
        currentElement += stringArr[k];
      }
      newArr.push(currentElement);
      currentElement = "";
      currentIndex = i + 1;
    } else if (stringArr[i] == ` ` || stringArr[i] === `|`) {
      for (let k = currentIndex; k < i; k++) {
        currentElement += stringArr[k];
      }
      newArr.push(currentElement);
      currentElement = "";
      currentIndex = i + 1;
    }
  }
  let health = 100;
  let coins = 0;
  let itemOrMonster = "";
  let number = 0;
  let roomCounter = 0;
  let index = 0;
  let flag = false;
  let secondFlag = true;
  while (index < newArr.length) {
    roomCounter++;
    itemOrMonster = newArr[index];
    index++;
    number = Number(newArr[index]);
    index++;
    switch (itemOrMonster) {
      case "potion":
        if (health + number > 100) {
          let diff = 100 - health;
          console.log(`You healed for ${diff} hp.`);

          health = 100;
        } else {
          console.log(`You healed for ${number} hp.`);

          health += number;
        }
        console.log(`Current health: ${health} hp.`);
        break;
      case "chest":
        coins += number;
        console.log(`You found ${number} coins.`);
        break;
      default:
        if (health - number > 0) {
          console.log(`You slayed ${itemOrMonster}.`);
          health -= number;
        } else {
          console.log(`You died! Killed by ${itemOrMonster}.`);
          console.log(`Best room: ${roomCounter}`);
          flag = true;
          secondFlag = false;
          break;
        }
    }
    if (flag) {
      break;
    }
  }
  if (secondFlag) {
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
