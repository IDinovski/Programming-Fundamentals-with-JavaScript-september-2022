function solve(a,b,c){
    if(a>b&&a>c){
        console.log(a);
    }else if(b>a&&b>c){
        console.log(b);
    }else if(c>b&&c>a){
        console.log(c);
    }else if (a==b &&b==c){
        console.log(a);
    }
}