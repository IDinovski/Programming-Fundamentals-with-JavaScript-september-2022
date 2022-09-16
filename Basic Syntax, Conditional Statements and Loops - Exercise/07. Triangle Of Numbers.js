function solve(input){
    let answer = "";
    let curent = 1;
for (let i = 1;i<=input;i++){
    
    answer = i + " ";
    while(curent!=i){
        curent++
answer+=i+" "
    }
    console.log(answer);
    curent = 1
}

}
solve(4)