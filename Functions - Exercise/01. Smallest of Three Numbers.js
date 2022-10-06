function solve(a, b, c) {
  let smallest;
  if (a < b && a < c) {
    smallest = a;
  } else if (b < a && b < c) {
    smallest = b;
  } else if (c < a && c < b) {
    smallest = c;
  }else if (a==b && a<c){
    smallest = a;
  }else if (a==b&b==c){
    smallest=a
  }
  console.log(smallest);
}
solve(2, 5, 3);
