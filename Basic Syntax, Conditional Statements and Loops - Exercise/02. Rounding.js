function solve (m, n){
let num = Number(m);
let precission = Number(n);
if(precission>15){
    precission=15
}
console.log(parseFloat(num.toFixed(precission)));
}
solve(["3.1111111111111123", "18"])