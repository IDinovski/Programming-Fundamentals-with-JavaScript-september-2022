function solve(n) {
  for (let a = 0; a < n; a++) {
    let firstletter = String.fromCharCode(97 + a);
    for (let b = 0; b < n; b++) {
      let secondletter = firstletter+ String.fromCharCode(97 + b);

      for (let c = 0; c < n; c++) {
        let finalLetter = secondletter+String.fromCharCode(97 + c);
        console.log(finalLetter);
      }
    }
  }
}
solve(3);
