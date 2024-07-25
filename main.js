function sum(a,b){
    const sum=a+b;
    return sum;
}
function operation(a,b,arthematicanswer){

    const answer=arthematicanswer(a,b);
    return answer;

}
const value=(operation(3,4,sum));
console.log(value);