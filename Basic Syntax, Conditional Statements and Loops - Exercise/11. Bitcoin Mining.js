function solve(input) {
  let bitcoin = 11949.16;
  let gramGold = 67.51;
  let totalAmount = 0;
  let index = 0;
  let dayCounter = 1;
  let firstBitcoin = 0;
  for (let i = 1; i <= input.length; i++) {
    let curentDay = Number(input[index]);
    index++;
    if (i % 3 == 0) {
      curentDay = 0.7 * curentDay;
    }
    totalAmount += curentDay;
    if (totalAmount * gramGold < bitcoin) {
        dayCounter++;
    } else if (totalAmount * gramGold >= bitcoin) {
      firstBitcoin = dayCounter;
    }
  }
  let boughtBitcoins = Math.floor((totalAmount * gramGold) / bitcoin);
  let diff = totalAmount * gramGold - boughtBitcoins * bitcoin;
  console.log(`Bought bitcoins: ${boughtBitcoins}`);
  if (boughtBitcoins != 0) {
    console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
  }
  console.log(`Left money: ${diff.toFixed(2)} lv.`);
}
solve([3124.15, 504.212, 2511.124]);
