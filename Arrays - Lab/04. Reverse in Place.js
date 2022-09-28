function solve(arr){
    let index = 0;
    let result = ""
    for(let i = arr.length -1; i >=0;i--){
        result+=arr[i]+" "
    }
    console.log(result);
}
solve(['a', 'b', 'c', 'd', 'e'])