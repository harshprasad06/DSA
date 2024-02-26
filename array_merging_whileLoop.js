let array1 = [9,45,85,78,65,34,67,81];
let array2 = [3,10,56,74,77,5,64,90];
let array3 = [];


let i = 0;
while (i < array1.length) {
  array3.push(array1[i]);
  i++;
}

i = 0;
while (i < array2.length) {
  array3.push(array2[i]);
  i++;
}

array3.sort((a, b) => a - b); // Sort the merged array

console.log(array3);

