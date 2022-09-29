function solve(arr1,arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let temp = arr1[i]
    for(let k = 0;k<arr2.length;k++){
        if(arr2[k]===temp){
            console.log(arr2[k]);
        }
    }
  }
}
solve(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
)
