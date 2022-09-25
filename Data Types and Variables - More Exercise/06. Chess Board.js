function solve(number) {
  console.log(`<div class="chessboard">`);
  console.log(`  <div>`);
  let color = "";
  let blackWhite = true;
  let counter = 1;
  for (let i = 1; i <= number * number; i++) {
    if (blackWhite) {
      color = "black";
    } else {
      color = "white";
    }
    console.log(`    <span class="${color}"></span>`)
    blackWhite = !blackWhite;

    if (i == number * number) {
      result += `  </div>`;
    } else if (i % number == 0) {
      counter++;
      console.log(`  </div>`);
      console.log(`  <div>`);
      if (counter % 2 == 0) {
        blackWhite = false;
      } else {
        blackWhite = true;
      }
    }
  }
  console.log(`  </div>`);
  console.log(`</div>`);
}
solve(6);
