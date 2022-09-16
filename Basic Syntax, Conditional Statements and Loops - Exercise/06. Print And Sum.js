function solve(m,n){
    let answer = "";
    let sum = 0;
    for(let i = m;i<=n; i++){
sum+=Number(i);
answer+=i;
answer+=" ";
    }
    console.log(answer);
    console.log(`Sum: ${sum}`);
}
solve(50,60)