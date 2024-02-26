let data = [9, 45, 85, 78, 65, 34, 67, 81];
let position = 2;
let newElement = 30;
let newArray = [];
console.log(`Data : ${data}`);

// Method 1

// for (let i = data.length - 1; i >= 0; i--) {
//   //   console.log(`Array Element ${data[i]}`);
//   if (i >= position) {
//     data[i + 1] = data[i];
//     console.log(`Array position : ${data[i]}`);
//     if (i == position) {
//       data[i] = newElement;
//       console.log(`Array position Element : ${data[i]}`);
//     }
//   }
// }
// console.log(`Data : ${data}`);

// Method 2

// default function
// data.splice(position,0,20);   // splice second parametar for how many value you want to delete and third to add value on that postion
// console.log(`Data : ${data}`);

//  Method 3

// for (let i = 0; i < data.length; i++) {
//   //   console.log(`data ${data[i]}`);
//   if (i === position) {
//     // console.log( `Array Position Element ${data[i]}` );
//     newArray.push(newElement);
//     console.log(`data before push ${data[i]}`);
//   }
//   newArray.push(data[i]);
//   console.log(`data push ${data[i]}`);
// }
// data = newArray;
// console.log(`data ${data}`);
