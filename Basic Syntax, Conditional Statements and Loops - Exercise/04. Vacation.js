function solve(m,n,b) {
  let amount = Number(m);
  let type = n;
  let dayOfTheWeek = b;
  let price =0
  switch(type){
      case"Students":
      switch(dayOfTheWeek){
          case"Friday": price=8.45;break;
          case"Saturday": price=9.80;break;
          case"Sunday": price=10.46;break;
      }
      if(amount>=30){
price=0.85*price
      }
      break;
      
      case"Business":
      switch(dayOfTheWeek){
          case"Friday": price=10.90;break;
          case"Saturday": price=15.60;break;
          case"Sunday": price=16;break;
      }
      if(amount>=100){
          amount-=10;
      }
      break;
      
      case"Regular":
      switch(dayOfTheWeek){
          case"Friday": price=15;break;
          case"Saturday": price=20;break;
          case"Sunday": price=22.50;break;
      }
      if(amount>=10&&amount<=20){
          price=0.95*price
      }
      break;
  }
  let total = amount*price;
console.log(`Total price: ${total.toFixed(2)}`);
}
solve(30, "Students", "Sunday");
