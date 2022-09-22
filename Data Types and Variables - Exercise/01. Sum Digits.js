function solve(number){
    let str = String(number)
    let sum = 0
for(let i = 0; i<str.length;i++){
    let num = Number(str[i])
    sum+=num
}
console.log(sum);
}
solve(543)