// let data = [9, 100,45, 85, 78, 65, 34, 67, 81];
let data = [20, 12, 53, 3];
console.log(data);

for (let i = 0; i < data.length - 1; i++) {
  let minIndex = i;
  for (let j = i + 1; j < data.length; j++) {
    if (data[j] < data[minIndex]) {
      minIndex = j;
    }
  }
  if (minIndex !== i) {
    let temp = data[i];
    data[i] = data[minIndex];
    data[minIndex] = temp;
  }
}

console.log(data); // Output: [3, 12, 20, 53]
// descending  order program
for (let i = 0; i < data.length - 1; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] > data[maxIndex]) {
        maxIndex = j;
      }
    }
    if (maxIndex !== i) {
      let temp = data[i];
      data[i] = data[maxIndex];
      data[maxIndex] = temp;
    }
  }
  
  console.log("descending",data);
