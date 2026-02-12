// for loop

for (let i = 0; i < 10; i++) {
    console.log(i);
}  

// while loop

let j = 0;

while (j < 10) {
    console.log(j);
    j++;
}

// do while loop

let k = 0;

do {
    console.log(k);
    k++;
} while (k > 10);

// JavaScript practice questions
//  1. WAP to check if a number is prime.

let num = 17;  
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(num + " is a Prime Number");
} else {
    console.log(num + " is not a Prime Number");
}


 
// 2. WAP to check if a person is eligible for DL.

let age = 20;  

if (age >= 18) {
    console.log("Eligible for Driving License");
} else {
    console.log("Not Eligible for Driving License");
}

// 3. WAP to find greatest of 3 numbers.
let a = 10;
let b = 25;
let c = 15;

let greatest = a;

if (b > greatest) {
    greatest = b;
}

if (c > greatest) {
    greatest = c;
}

console.log("Greatest number is: " + greatest);

// 4. WAP to check if a number is divisible by 7 and 11.
let number = 77;  

if (number % 7 === 0 && number % 11 === 0) {
    console.log(number + " is divisible by both 7 and 11");
} else {
    console.log(number + " is not divisible by both 7 and 11");
}

// 5. WAP to check if a number is palindrome.

let original = 121;  
let numCopy = original;
let reverse = 0;

while (numCopy > 0) {
    let digit = numCopy % 10;
    reverse = reverse * 10 + digit;
    numCopy = Math.floor(numCopy / 10);
}

if (original === reverse) {
    console.log(original + " is a Palindrome Number");
} else {
    console.log(original + " is not a Palindrome Number");
}


// Palindrome No.

// let a = 121;
// temp = a;
// reverse=0;
// while (temp) {
    
// }

// Table
a=6
for (let i = 1; i <= 10; i++){
    console.log(a + " x " + i + " = " + (a*i));
   
}

for (let i = 1; i <= 100; i++){
    console.log(i);
}

for (let i = 1; i <= 100; i++)
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }

for (let i = 1; i <= 60; i++)
    if (i % 5 === 0) {
        console.log( " divisible by 5",i);
    }

let i = 1;
while (i <= 1) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
   
}
