const nums = [4,7,9,1,3,2];

// for loops

for (let i of nums){
    console.log(i);  
};

console.log('for each function');


nums.forEach((n) => {
    console.log(n);
});

const newnums = nums.map((n) => {
    return n**2;
});

console.log(newnums);

const prices = [2300,4500,1200,900,3000];
console.log(prices);

const newprices = prices.map((p) => {
    return p + (p*18/100);
});
console.log(newprices);
