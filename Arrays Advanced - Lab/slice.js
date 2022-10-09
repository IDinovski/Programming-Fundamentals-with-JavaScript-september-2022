function solve(arr,startIndex,endIndex){
    let result = [];
    if(startIndex&& endIndex){
        for(let i = startIndex;i<endIndex;i++){
            result.push(arr[i])
        }
    }else if(!startIndex && !endIndex){
        for(let el of arr){
            result.push[el]
        }
    }else if(startIndex&&!endIndex){
        for(let i = startIndex;i<arr.length;i++){
            result.push[arr[i]]
        }
    }
    return result
}
console.log(solve([1,2,3,4,5,6,7,8,9],2,4));