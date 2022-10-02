function solve(arr) {
  let account = arr[0];
  account = account.split(" ");
  let current = [];
  let expan = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].includes("Install")) {
      current = arr[i].split(" ");
      if (!account.includes(current[1])) {
        account.push(current[1]);
      }
    } else if (arr[i].includes("Uninstall")) {
      current = arr[i].split(" ");
      for (let k = 0; k < account.length; k++) {
        if (account[k] === current[1]) {
          account.splice(k, 1);
          break;
        }
      }
    } else if (arr[i].includes("Update")) {
      current = arr[i].split(" ");
      if (account.includes(current[1])) {
        for (let k = 0; k < account.length; k++) {
          if (account[k] === current[1]) {
            account.splice(k, 1);
            account.push(current[1]);
            break;
          }
        }
      }
    } else if (arr[i].includes("Expansion")) {
      current = arr[i].split(" ");
      current = current[1].split("-");
      if (account.includes(current[0])) {
        for (let k = 0; k < account.length; k++) {
          if (account[k] === current[0]) {
            account.splice(k + 1, 0, `${current[0]}:${current[1]}`);
            break;
          }
        }
      }
    } else if (arr[i].includes("Play!")) {
      break;
    }
  }
  console.log(account.join(" "));
}
solve([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);
