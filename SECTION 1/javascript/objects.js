const user ={
    name:'ROHIT',
    email:'rohit@gmail.com',
    password:'12345678',
    age:26
}

console.log(user);

console.log(user.name);
console.log(user['email']);

user.age = 23;
console.log(user);

user.city='Lucknow';
console.log(user);

console.log( Object.keys(user));
console.log( Object.values(user));

const smartphone = {
    brand:'samsung',
    model:'s24',
    price:124000,
    colors:['black','white','blue']
}

console.log(smartphone);

// console.log(smartphone.colors[1]);

smartphone.colors[2] = 'pink';
console.log(smartphone.colors);

const phones =[ {
    brand:'samsung',
    model: 's24',
    price: 124000,
    colors: ['black', 'white', 'blue']
},
{
    brand:'Realme',
    model:'14X',
    price:25000,
    colors: ['ivory','white']
},
{
    brand:'OnePlus',
    model:'11R',
    price:45000,
    colors: ['sky blue', 'black', 'gold']
},
{
    brand: 'Motorola',
    model: 'G85',
    price: 16000,
    colors: ['Oceangreen', 'blue', 'crimson']
},
{
    brand: 'Apple',
    model: 'iPhone 17 Pro Max',
    price: 120000,
    colors: ['orange', 'blue', 'black']
},
];

console.log(phones);

console.log(phones[1].brand);
console.log(phones[1].price);
console.log(phones[1].colors[1]);

