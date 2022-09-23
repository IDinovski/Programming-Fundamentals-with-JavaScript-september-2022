function solve(
  lostFightsCount,
  helmedPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let counter = 1;
  let expenses = 0;
  let armorCounter = 0;
  for (let i = counter; i <= lostFightsCount; i++) {
    if (i % 2 == 0 && i % 3 == 0 && i != 0) {
      expenses += shieldPrice;
      expenses += helmedPrice;
      expenses += swordPrice;

      armorCounter++;
      if (armorCounter == 2) {
        expenses += armorPrice;
        armorCounter = 0;
      }
    } else if (i % 2 == 0) {
      expenses += helmedPrice;
    } else if (i % 3 == 0) {
      expenses += swordPrice;
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
solve(23, 12.5, 21.5, 40, 200);
