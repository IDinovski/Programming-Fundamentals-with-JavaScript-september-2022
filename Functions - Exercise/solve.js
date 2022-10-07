// function solve(){

// let a = ["abc","123"];
// b = a[0]
// console.log(b);
// c = a[0].split("")
// console.log(c);
// d=a[0].split("").reverse()
// console.log(d);
// e = a[0].split("").reverse().join("")

// }
// solve()
function problem(pass) {
  for (let i = 0; i<pass.length;i++) {
    let curent = pass.charCodeAt(i);
    console.log(curent);
  }
}
problem("login");
