function solve(drink,amount){
    let total = 0;
    let price = 0;
    switch(drink){
        case"coffee": price = 1.5;break
        case"water": price = 1;break
        case"coke": price = 1.4;break
        case"snacks": price = 2;break
    }
    total = amount*price;
    console.log(total.toFixed(2));
}