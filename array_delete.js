let data = [9, 45, 85, 78, 65, 34, 67, 81];
let position = 2;
console.log(`data ${data}`);

//  method 1

// for (let i =position ; i < data.length - 1; i++) {
//     console.log(`data ${data[i]}`);
//     data[i]=data[i+1]
// }
// data.length=data.length-1;
// console.log(`data ${data}`);

// method 2

// Check if position is valid
// if (position >= 0 && position < data.length) {
//     // Use splice() method to remove the element at the specified position
//     data.splice(position, 1); // splice second parametar for how many value you want to delete

//     console.log(data); // Output: [9, 45, 78, 65, 34, 67, 81]
// } else {
//     console.log("Invalid position");
// }