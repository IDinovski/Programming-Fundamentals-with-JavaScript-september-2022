function solve(num) {
  let helix = "ATCGTTAGGG";
  let index = 0;
  let counter = 1;
  let log = "";
  for (let i = 1; i <= num; i++) {
    if (counter == 1) {
      log += `**${helix[index]}`;
      index++;
      log += `${helix[index]}**`;
      index++;
      console.log(log);
    } else if (counter == 2) {
      log += `*${helix[index]}`;
      index++;
      log += `--${helix[index]}*`;
      index++;
      console.log(log);
    } else if (counter == 3) {
      log += `${helix[index]}----`;
      index++;
      log += helix[index];
      index++;
      console.log(log);
    } else if (counter == 4) {
      log += `*${helix[index]}`;
      index++;
      log += `--${helix[index]}*`;
      index++;
      console.log(log);
    }
    log = "";
    if (counter == 4) {
      counter = 1;
    } else {
      counter++;
    }
    if (index == helix.length) {
      index = 0;
    }
  }
}
solve(10);
