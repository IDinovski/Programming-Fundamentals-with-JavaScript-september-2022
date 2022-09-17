function solve(a){
    let splitString = a.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    console.log(joinArray);
}
solve("1234")