function solve(num){
let str = String(num)
let sum = 0
for(let i = 0;i<str.length;i++){
let curent = str[i];
sum+=Number(curent)

}
let flag = false
let sumStr = String(sum)
for(let k = 0;k<sumStr.length;k++){
    let curentK = sumStr[k]
    if(curentK==9){
        flag= !flag
    }
}
console.log(`${num} Amazing? ${flag?"True" : "False"}`);
}
solve(99)