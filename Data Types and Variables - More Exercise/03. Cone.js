function solve(r,h){
    let volume = 1/3*(Math.pow(r,2)*Math.PI)*h;
    let i = Math.sqrt(Math.pow(r,2)+Math.pow(h,2))
    let letaralArea = Math.PI*r*i
    let baseArea = Math.PI*(Math.pow(r,2));
    let area = letaralArea+baseArea;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
solve(3,5)