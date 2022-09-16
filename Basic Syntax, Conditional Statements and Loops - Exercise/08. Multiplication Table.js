function solve(input){
    for(let i = 1;i<=10;i++){
        let n = Number(input) * i;
        console.log(`${input} X ${i} = ${n}`);
    }
}
solve(5)