function solve() {
  let account = ["CS", "WoW", "Diablo", "LoL"];

  current = ["CS", "GO"];
  if (account.includes(current[0])) {
    for (let k = 0; k < account.length; k++) {
      if (account[k] === current[0]) {
        account.splice(k+1, 0, current[1]);
      }
    }
  }
}
solve();
