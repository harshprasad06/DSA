let array1 = [9,45,85,78,65,34,67,81];
let array2 = [3,10,56,74,77,5,64,90];
let array3 = [];
// method 1

// array3=[...array1,...array2];

// console.log(`Array 1 is ${array1}`);
// console.log(`Array 2 is ${array2}`);
// console.log(`Array 3 is ${array3}`);

// method 2 

// for (let i = 0; i < array2.length; i++) {
//     array3.push(array2[i]);  
//     // array3[i]=array2[i];
// }

// for (let i = 0; i < array1.length; i++) {
//     array3.push(array1[i]);  
//     // array3[i]=array1[i];
// }
// console.log(`Array 3 is ${array3}`);

// method 3
// array3 = Array.from(array1);
// array2.forEach(element => array3.push(element));
