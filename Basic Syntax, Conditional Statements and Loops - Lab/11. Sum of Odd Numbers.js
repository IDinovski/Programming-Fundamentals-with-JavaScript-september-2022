function solve(input){
    let num = Number(input);
    let curentNum = 1;
    sum = 0;
    for (let i = 1;i<=num;i++){
        console.log(curentNum);
        sum+=curentNum
        curentNum+=2
    }
    console.log(`Sum: ${sum}`);
}
solve([3])