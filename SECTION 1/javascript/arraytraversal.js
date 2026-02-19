const nums = [4, 7, 9, 1, 3, 2];

//for loop

for (let i of nums) {
    console.log(i);
}

console.log('for Each function');


nums.forEach((n) => {
    console.log(n);

})

const newNums = nums.map((n) => {
    return n ** 2;
});

console.log(newNums);

const prices = [2300, 4500, 1200, 9000, 3000, 120];

// add 18% GST to each price

const gstPrices = prices.map((p) => {
    return p * 1.18;

})
console.log(gstPrices);

const budgetPrices = prices.filter((p) => {
    return (p < 3000 && p > 1000);
})
console.log(budgetPrices);

const phonelist = [
    {
        brand: 'Samsung',
        model: 's24',
        price: 124000,
        colors: ['black', 'white', 'blue']
    },

    {
        brand: 'Realme',
        model: '14X',
        price: 25000,
        colors: ['ivory', 'white']
    },

    {
        brand: 'OnePlus',
        model: '11R',
        price: 45000,
        colors: ['skyblue', 'black', 'gold']
    },

    {
        brand: 'Motorola',
        model: 'G85',
        price: 16000,
        colors: ['oceangreen', 'blue', 'crimson']
    },

    {
        brand: 'Apple',
        model: 'iphone 17 Pro',
        price: 120000,
        colors: ['orange', 'blue', 'black']
    },
]

const budgetPhones = phonelist.filter((phone) => {
    return phone.price < 50000;
})
console.log(budgetPhones);

// phones which are available in black color

const blackPhones = phonelist.filter((phone) => {
    return phone.colors.includes('black');
})
console.log(blackPhones);

// create an array of phone brands

const phonebrands = phonelist.map((phone) => {
    return phone.brand;
})

console.log(phonebrands);

const keyword = 'samsung';
const comparebrands = phonelist.filter((phone) => {
    // return phone.brand === keyword;
    return phone.brand.toLowerCase().includes(keyword.toLowerCase())

})
console.log(comparebrands);