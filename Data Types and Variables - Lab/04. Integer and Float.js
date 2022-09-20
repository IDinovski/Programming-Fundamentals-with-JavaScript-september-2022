function solve(num1,num2,num3){
let sum = num1+num2+num3;
if(sum%1==0){
    console.log(`${sum} - Integer`);
}else{
    console.log(`${sum} - Float`);
}
}
solve(9,105,1)
