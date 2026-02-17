function greet() {
    console.log("Welcome");

}
greet();

//Parameter function
function add(a, b) {
    console.log(a + b);

}
add(5, 6)
//
function sub(a, b) {
    console.log(a - b);

}
sub(5, 6)
//
function addNums(a, b) {
    var c = a + b;
    console.log(c);

}
addNums(5, 10);
//console.log(c);

const avg = function (m1, m2, m3) {
    const average = (m1 + m2 + m3) / 3;
    // console.log(average);   
    return average;
}
const res = avg(34, 56, 49);
console.log(res);

//  eS6 arrow function
const factorial = (n) => {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
const res2 = factorial(5);
console.log(res2);