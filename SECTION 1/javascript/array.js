const myarr = [34,'hello',true,null, undefined];

console.log(myarr);

console.log(myarr.length);

const movies = ['Toxic','ARM','Spiderman','Redone','RaONE','MeanGirls'];

// INDEXING
console.log(movies[4]);

console.log(movies.indexOf('MeanGirls'));

console.log(movies[-3]);

console.log(movies.at(-3));

movies[2] = 'Batman';
console.log(movies);

// adding and removing elements from an 

movies.push('Dangal'); // adds at the end of the array
movies.unshift('3 Idiots');// adds at starting of the array
console.log( movies);

movies.pop(); // removes the last element of the array
movies.shift(); // removes the first element of the array
console.log(movies);

// slicing

console.log(movies.slice(1,4));
console.log(movies.slice(1));
console.log(movies.slice(-2));

// splicing
console.log(movies);

movies.splice(3,2,'RRR','KGF'); // removes 2 elements from index 3 and adds RRR and KGF at index 3
console.log(movies);

movies.splice(2,0,'Dhoom'); // adds Dhoom at index 2 without removing any element
console.log(movies);



