function solve(a,b) {
  let base = Number(a);
  let increment = Number(b);
  let stone = 0;
  let gold = 0;
  let lice = 0;
  let counter = 0;
  let marble = 0;
  let lapis = 0;

  for (let total = base; total > 0; total -= 2) {
    counter++;
    if (total == 1 || total == 2) {
      gold = total * total;
      break;
    }
    lice = total * total;
    let curentStone = (total - 2) * (total - 2);
    stone += (total - 2) * (total - 2);
    if (counter % 5 != 0) {
      marble += lice - curentStone;
    }else if(counter%5==0){
lapis +=lice-curentStone
    }
  }
  counter=Math.floor(counter*increment)
  console.log(`Stone required: ${Math.ceil(stone * increment)}`);
  console.log(`Marble required: ${Math.ceil(marble * increment)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapis * increment)}`);
  console.log(`Gold required: ${Math.ceil(gold * increment)}`);
  console.log(`Final pyramid height: ${counter}`)
 
}
solve(11, 0.75);
