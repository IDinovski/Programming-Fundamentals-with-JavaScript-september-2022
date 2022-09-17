function solve(a, b, c) {
  let max = 0;
  if (a > b && a > c) {
    console.log(a);
    if (b > c) {
      console.log(b);
      console.log(c);
    } else {
      console.log(c);
      console.log(b);
    }
  } else if (b > a && b > c) {
    console.log(b);
    if (a > c) {
      console.log(a);
      console.log(c);
    } else {
      console.log(c);
      console.log(a);
    }
  } else if (c > a && c > b) {
    console.log(c);
    if (a > b) {
      console.log(a);
      console.log(b);
    } else {
      console.log(b);
      console.log(a);
    }
  }else if (a>=b && a>c){
    console.log(a);
    if (b > c) {
      console.log(b);
      console.log(c);
    } else {
      console.log(c);
      console.log(b);
    }
  }else if (a>b && a>=c){
    console.log(a);
    if (b > c) {
      console.log(b);
      console.log(c);
    } else {
      console.log(c);
      console.log(b);
    }
  }else if (b >= a && b > c) {
    console.log(b);
    if (a > c) {
      console.log(a);
      console.log(c);
    } else {
      console.log(c);
      console.log(a);
    }
  } else if (b > a && b >= c) {
    console.log(b);
    if (a > c) {
      console.log(a);
      console.log(c);
    } else {
      console.log(c);
      console.log(a);
    }
  } 
}
solve(12, 5, 5);
