function solve(arr) {
  let health = 100;
  let coins = 0;
  let newArr = arr.join(" ").split("|");
  let roomCounter = 0;
  let gameOver = false;

  for (let i = 0; i < newArr.length; i++) {
    let itemOrMonster = newArr[i].split(" ");
    itemOrMonster = itemOrMonster[0];
    let number = newArr[i].split(" ");
    number = Number(number[1]);
    switch (itemOrMonster) {
      case "potion":
        if (number + health <= 100) {
          health += number;
          roomCounter++;
          console.log(`You healed for ${number} hp.`);
          console.log(`Current health: ${health} hp.`);
        } else {
          console.log(`You healed for ${100 - health} hp.`);

          health += 100 - health;
          roomCounter++;

          console.log(`Current health: ${health} hp.`);
        }
        break;
      case "chest":
        coins += number;
        roomCounter++;
        console.log(`You found ${number} coins.`);
        break;
      default:
        if (health - number > 0) {
          roomCounter++;
          health -= number;
          console.log(`You slayed ${itemOrMonster}.`);
        } else {
          health -= number;
          roomCounter++;
          console.log(`You died! Killed by ${itemOrMonster}.`);
          console.log(`Best room: ${roomCounter}`);
          gameOver = true;
          break;
        }
    }
    if (gameOver) {
      break;
    }
  }
  if (!gameOver) {
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
